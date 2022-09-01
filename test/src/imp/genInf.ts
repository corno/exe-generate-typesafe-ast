#!/usr/bin/env node

import * as pt from "pareto-core-types"

import * as fs from "api-pareto-filesystem"


import * as gta from "../../../pub/dist"



export function genInf(
    $: {
        path: gta.Path,
        grammar: gta.TGrammar,
    },
    $i: {
        onError: fs.OnFSError<fs.TWriteFileError>
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
        createWriteStream: fs.CreateWriteStream
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
            orderStrings: (a, b) => a > b,
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

// pe.runProgram(($, $i, $d) => {

//     exeLib.getSingleArgument(
//         $.arguments,
//         {
//             error: () => {
//                 pl.panic("arguments issue")
//             },
//             callback: ($) => {
//                 const dataPath = $
//                 pl.logDebugMessage(`>>> ${$}`)
//                 genInf(
//                     {
//                         path: [dataPath, "out", "src", "interface"],
//                         grammar: tsg._typescriptGrammar,
//                     },
//                     {
//                         onError: ($) => {
//                             pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
//                         }
//                     },
//                     {
//                         startAsync: $d.startAsync
//                     }
//                 )
//                 genImp(
//                     {
//                         path: [dataPath, "out", "src", "imp"],
//                         grammar: tsg._typescriptGrammar,
//                         interfaceReference: "../interface",
//                     },
//                     {
//                         onError: ($) => {
//                             pl.panic(`write file stream error: ${$.error[0]}, ${$.error[1]}, ${$.path}`)
//                         }
//                     },
//                     {
//                         startAsync: $d.startAsync
//                     }
//                 )

//             }
//         }
//     )
// })


