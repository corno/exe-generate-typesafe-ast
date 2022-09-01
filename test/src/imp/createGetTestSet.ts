
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as fs from "api-pareto-filesystem"
import * as main from "api-pareto-main"
import * as test from "lib-pareto-test"

import * as tsg from "../data/typescriptGrammar"

import * as pub from "../../../pub"
import { genInf } from "./genInf"
import { genImp } from "./genImp"

export function createGetTestSet($d: {
    createWriteStream: fs.CreateWriteStream
}): test.GetTestSet {
    const cws = $d.createWriteStream
    return ($, $d) => {

        genInf(
            {
                path: [$.testDirectory, "out", "src", "interface"],
                grammar: tsg._typescriptGrammar,
            },
            {
                onError: ($) => {
                    pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
                }
            },
            {
                startAsync: $d.startAsync,
                createWriteStream: cws
            }
        )
        genImp(
            {
                path: [$.testDirectory, "out", "src", "imp"],
                grammar: tsg._typescriptGrammar,
                interfaceReference: "../interface",
            },
            {
                onError: ($) => {
                    pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
                }
            },
            {
                startAsync: $d.startAsync,
                createWriteStream: cws,
            }
        )

        const builder = pm.createDictionaryBuilder<test.TTestElement>(
            ["ignore", {}],
            () => {
                pl.panic("duplicate key")
            }
        )
        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        return pa.value({
            elements: builder.getDictionary()
        })
    }
}