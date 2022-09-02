#!/usr/bin/env node

import * as pt from "pareto-core-types"


import * as fs from "api-pareto-filesystem"
import * as collation from "api-pareto-collation"

import * as gta from "../../../pub/dist"


export function genImp(
    $: {
        path: gta.Path,
        interfaceReference: string,
        grammar: gta.TGrammar,
    },
    $i: {
        onError: fs.OnFSError<fs.TWriteFileError>
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
        createWriteStream: fs.CreateWriteStream
        isYinBeforeYang: collation.IsYinBeforeYang
    }
) {
    const rootPath = $.path

    gta.generateImplementation(
        {
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: $.grammar,
                pathToInterface: $.interfaceReference,
            }
        },
        {
            isYinBeforeYang: $d.isYinBeforeYang,
            createWriteStream: (
                $,
                $c,
            ) => {
                $d.startAsync(
                    $d.createWriteStream(
                        {
                            path: [rootPath, $.path],
                            createContainingDirectories: true,
                        },
                        {
                            onError: $i.onError
                        },
                        ($c2) => {
                            $c($c2)
                        }
                    )
                )
            }
        }
    )
}

