import * as pl from "pareto-core-lib"

import * as fp from "lib-fountain-pen"
import * as main from "api-pareto-main"
import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"

import * as api from "../interface"

import { generateParse } from "./internal/generateParser"
import { generateVisit } from "./internal/generateVisit"
import { generateCreateDefaultVisitor } from "./internal/generateCreateDefaultVisitor"
import { generateImplementationIndex } from "./internal/generateImplementationIndex"
import { GenerateImplementationFile } from "./GenerateFile"

export type ImplementationDependencies = {
    isYinBeforeYang: collation.IsYinBeforeYang
    createWriteStream: fs.CreateWriteStream
    startAsync: main.StartAsync
}

export function generateImplementation(
    $: {
        grammar: api.TGrammar,
        rootPath: api.Path,
        pathToInterface: string,
    },
    $d: ImplementationDependencies
): void {
    const conf = $
    const deps = $d


    const generateImplementationX: api.GenerateImplementation = ($, $d) => {
        const grammar = $.generation.grammar

        function generateFile(
            filePath: api.Path,
            func: GenerateImplementationFile,
        ) {

            $d.createWriteStream(
                {
                    path: filePath
                },
                ($c) => {
                    fp.createContext(
                        $.fpSettings,
                        ($c) => {
                            func(
                                $.generation,
                                {
                                    block: $c,
                                },
                                {
                                    isYinBeforeYang: $d.isYinBeforeYang,
                                }
                            )

                        },
                        {
                            consumer: $c
                        }

                    )
                }
            )
        }
        generateFile(
            'parse.ts',
            generateParse,
        )
        generateFile(
            'visit.ts',
            generateVisit,
        )
        generateFile(
            'createDefaultVisitor.ts',
            generateCreateDefaultVisitor,
        )
        generateFile(
            'index.ts',
            generateImplementationIndex,
        )
    }
    generateImplementationX(
        {
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: conf.grammar,
                pathToInterface: conf.pathToInterface,
            }
        },
        {
            isYinBeforeYang: deps.isYinBeforeYang,
            createWriteStream: (
                $,
                $c,
            ) => {
                $d.startAsync(
                    deps.createWriteStream(
                        {
                            path: [conf.rootPath, $.path],
                            createContainingDirectories: true,
                        },
                        {
                            onError: () => {
                                pl.implementMe("ERROR HANDLER")
                            }
                        },
                        ($c2) => {
                            $c($c2)
                        }
                    )
                )
            }
        }
    )
    // const argStack = pm.createStack($.arguments)

    // argStack.pop(
    //     (first) => {

    //         argStack.pop(
    //             (second) => {
    //                 const rootPath = first

    //             },
    //             () => {
    //                 pl.panic("args")
    //             }
    //         )
    //     },
    //     () => {
    //         pl.panic("args")
    //     }
    // )
}
