
import * as pa from "pareto-core-async"
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as fs from "api-pareto-filesystem"
import * as test from "lib-pareto-test"

import * as tsg from "../data/typescriptGrammar"
import * as collation from "api-pareto-collation"


import * as pub from "../../../pub"
import { genInf } from "./genInf"
import { genImp } from "./genImp"

export type Dependencies = {
    createWriteStream: fs.CreateWriteStream
    isYinBeforeYang: collation.IsYinBeforeYang
}

export function createGetTestSet($d: Dependencies): test.GetTestSet {
    const cws = $d.createWriteStream
    const yinBeforeYang = $d.isYinBeforeYang
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
                createWriteStream: cws,
                isYinBeforeYang: yinBeforeYang
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
                isYinBeforeYang: yinBeforeYang,
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