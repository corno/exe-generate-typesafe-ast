import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as main from "api-pareto-main"
import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"
import * as fp from "lib-fountain-pen"

import * as api from "../interface"

import { generateTypes } from "./internal/generateTypes"
import { generateVisitorInterface } from "./internal/generateVisitorInterface"
import { generateInterfaceIndex } from "./internal/generateInterfaceIndex"
import { GenerateInterfaceFile } from "./GenerateFile"

export type InterfaceDependencies = {
    isYinBeforeYang: collation.IsYinBeforeYang
    createWriteStream: fs.CreateWriteStream
    startAsync: main.StartAsync
}

export function generateInterface(
    $: {
        grammar: api.TGrammar,
        rootPath: api.Path,
    },
    $d: InterfaceDependencies
): void {
    const conf = $
    const deps = $d

    const generateInterfaceX: api.GenerateInterface = ($, $d) => {

        function generateFile(
            filePath: api.Path,
            func: GenerateInterfaceFile,
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
            'types/ts_api.ts',
            generateTypes,
        )
        generateFile(
            'interfaces/visitor.ts',
            generateVisitorInterface,
        )
        generateFile(
            'index.ts',
            generateInterfaceIndex,
        )
    }
    
    generateInterfaceX(
        {
            fpSettings: {
                newline: "\n",
                indentation: "    ",
            },
            generation: {
                grammar: conf.grammar,
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
                            onError: ($) => {
                                pl.implementMe("ERROR MSG")
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
    //         const rootPath = first

    //     },
    //     () => {
    //         pl.panic("args")
    //     }
    // )

}
