import * as pl from "pareto-core-lib"

import * as uglyStuff from "res-pareto-ugly-stuff"

import * as ts from "res-dynamic-typescript-parser"
import * as p from "./imp/parse"

ts.parse(
    {
        tsconfigPath: ["test", "data", "out", "tsconfig.json"]
    },
    {
        callback: ($) => {
            $.files.forEach((a, b) => false, ($, key) => {
                const filename = key
                p.parse(
                    $.root,
                    {
                        callback: ($) => {
                            $.content.statements.forEach(($) => {
                                // switch ($[0]) {
                                //     case "block": 
                                //         pl.cc($[1], ($) => {

                                //         })
                                //         break
                                //     default: pl.au($[0])
                                // }
                                pl.logDebugMessage(`${$[0]}`)
                            })
                        },
                        reportMissingToken: () => {
                            pl.logDebugMessage("missing token")
                        },
                        reportUnexpectedToken: ($) => {
                            const location = ts.getLocation($.token.implementationDetails)
                            pl.logDebugMessage(`${filename}:${location.line}:${location.column} unexpected token: ${$.token.kindName}, expected: ${$.expected}`)

                        },
                    },
                    {
                        doUntil: uglyStuff.doUntil,
                        lookAhead: uglyStuff.lookAhead,
                        // contains: (dict, keyToBeFound) => {
                        //     let found = false
                        //     dict.forEach(() => false, ($, key) => {
                        //         if (key === keyToBeFound) {
                        //             found = true
                        //         }
                        //     })
                        //     return found
                        // }
                    }
                )
            })
        }
    }
).execute(() => { })