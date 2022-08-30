import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as ts from "res-dynamic-typescript-parser"
import * as p from "./imp/parser"


function doUntil<T>(
    stack: pm.Stack<T>,
    callback: ($: T) => boolean
) {
    while (true) {
        let stop = false
        stack.pop(
            ($) => {
                stack.push($)

                const goOn = callback($)
                if (!goOn) {
                    stop = true
                }
            },
            () => {
                stop = true
            }
        )
        if (stop) {
            return
        }
    }
}

function lookAhead<T>(
    stack: pm.Stack<T>,
    exists: ($: T) => void,
    notExists: () => void,
) {
    stack.pop(
        ($) => {
            stack.push($)
            exists($)
        },
        () => {
            notExists()
        }
    )
}

ts.parse({
    tsconfigPath: [ "test", "data", "out", "tsconfig.json"]
}).files.forEach((a, b) => false, ($, key) => {
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
            reportUnexpectedChild: ($) => {
                const location = ts.getLocation($.child.implementationDetails)
                pl.logDebugMessage(`${filename}:${location.line}:${location.column} unexpected child: ${$.child.kindName}, expected: ${$.expected}`)

            },
            reportUnexpectedRoot: ($) => {
                pl.logDebugMessage("unexpected root")

            }
        },
        {
            doUntil: doUntil,
            lookAhead: lookAhead,
        }
    )
})