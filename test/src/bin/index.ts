#!/usr/bin/env node

import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pe from "pareto-core-exe"


import * as fs from "api-pareto-filesystem"
import * as pf from "res-pareto-filesystem"

import * as tsg from "../data/typescriptGrammar"
import * as gta from "../../../pub/dist"

import * as exeLib from "lib-pareto-exe"


function genImp(
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

            createWriteStream: (
                $,
                $c,
            ) => {
                $d.startAsync(
                    pf.createWriteStream(
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


function genInf(
    $: {
        path: gta.Path,
        grammar: gta.TGrammar,
    },
    $i: {
        onError: fs.OnFSError<fs.TWriteFileError>
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
    },
) {
    const rootPath = $.path

    gta.generateInterface(
        {
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: $.grammar,
            }
        },
        {

            createWriteStream: (
                $,
                $c,
            ) => {
                $d.startAsync(
                    pf.createWriteStream(
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

pe.runProgram(($, $i, $d) => {

    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {
                pl.panic("arguments issue")
            },
            callback: ($) => {
                const dataPath = $
                pl.logDebugMessage(`>>> ${$}`)
                genInf(
                    {
                        path: [dataPath, "out", "src", "interface"],
                        grammar: tsg._typescriptGrammar,
                    },
                    {
                        onError: ($) => {
                            pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
                        }
                    },
                    {
                        startAsync: $d.startAsync
                    }
                )
                genImp(
                    {
                        path: [dataPath, "out", "src", "imp"],
                        grammar: tsg._typescriptGrammar,
                        interfaceReference: "../interface",
                    },
                    {
                        onError: ($) => {
                            pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
                        }
                    },
                    {
                        startAsync: $d.startAsync
                    }
                )

            }
        }
    )
})


