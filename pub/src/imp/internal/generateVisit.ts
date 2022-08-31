import * as pl from "pareto-core-lib"

import * as pr from "pareto-core-raw"

import * as g from "../../interface/types/types"
import * as wapi from "lib-fountain-pen"
import { GenerateImplementationFile } from "../GenerateFile"

export const generateVisit: GenerateImplementationFile = ($, $i) => {
    const grammar = $.grammar

    pl.cc($i.block, ($w) => {

        $w.line({}, ($w) => {
            $w.snippet(`import * as pl from "pareto-core-lib"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as api from "${$.pathToInterface}"`)
        })

        $w.line({}, ($w) => { })
        $w.line({}, ($w) => { 
            $w.snippet(`function isNotUndefined<T>(x: undefined | T): x is T { return x !== undefined }`)
        })
    
        $w.line({}, ($w) => { })
        $w.line({}, ($w) => {
            $w.snippet(`export function visit<Annotation>(`)
            $w.indent({}, ($w) => {
                $w.line({}, ($w) => {
                    $w.snippet(`$: api.TNroot<Annotation>,`)
                })
                $w.line({}, ($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`visitor: api.IVisitor<Annotation>,`)
                        })
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent({}, ($w) => {
    
                function generateNode(
                    $: g.TNode2,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    $w.line({}, ($w) => {
    
                        $w.snippet(`((`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`$: api.TN${pathForCode}<Annotation>,`)
                            })
                        })
                        $w.snippet(`) => {`)
                        $w.indent({}, ($w) => {
                            switch ($.type[0]) {
                                case "composite":
                                    pl.cc($.type[1], ($) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`if (isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"].begin($) }`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`pl.cc($.content, ($) => {`)
                                            $w.indent({}, ($w) => {
                                                generateValue(
                                                    $,
                                                    $w,
                                                    pathForCode,
                                                    pathForReporting,
                                                )
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`if (isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"].end($) }`)
                                        })
                                    })
                                    break
                                case "leaf":
                                    pl.cc($.type[1], ($) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`if (isNotUndefined($i.visitor["${pathForReporting}"])) { $i.visitor["${pathForReporting}"]($) }`)
                                        })
                                    })
                                    break
                                default:
                                    pl.au($.type[0])
                            }
                        })
                        $w.snippet(`})($)`)
                    })
                }
                function generateValueType(
                    $: g.TValueType,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
    
                                    $w.snippet(`switch ($[0]) {`)
                                    $w.indent({}, ($w) => {
                                        pr.wrapRawDictionary($.options).forEach(() => false, (option, key) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`case "${key}": {`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`pl.cc($[1], ($) => {`)
                                                        $w.indent({}, ($w) => {
                                                            generateValue(
                                                                option,
                                                                $w,
                                                                `${pathForCode}_${key}`,
                                                                `${pathForReporting}/?${key}`,
                                                            )
                                                        })
                                                        $w.snippet(`})`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`break`)
                                                    })
                                                })
                                                $w.snippet(`}`)
                                            })
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`default: pl.au($[0])`)
                                        })
                                    })
                                    $w.snippet(`}`)
                                })
                            })
                            break
                        case "reference":
                            pl.cc($[1], ($) => {
    
                                $w.line({}, ($w) => {
                                    $w.snippet(`X_${$.name}($)`)
                                })
                            })
                            break
                        case "sequence":
                            pl.cc($[1], ($) => {
                                pr.wrapRawArray($.elements).forEach(($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`pl.cc($["${$.name}"], ($) => {`)
                                        $w.indent({}, ($w) => {
                                            generateValue(
                                                $.value,
                                                $w,
                                                `${pathForCode}_${$.name}`,
                                                `${pathForReporting}/.${$.name}`,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                            })
                            break
                        case "node":
                            pl.cc($[1], ($) => {
                                generateNode(
                                    $,
                                    $w,
                                    `${pathForCode}$`,
                                    `${pathForReporting}/*${$.name}`,
                                )
                            })
                            break
                        default:
                            pl.au($[0])
                    }
    
                }
                function generateValue(
                    $: g.TValue,
                    $w: wapi.IBlock,
                    pathForCode: string,
                    pathForReporting: string,
                ) {
                    const symbol = $
                    if ($.cardinality === undefined) {
                        generateValueType(
                            symbol.type,
                            $w,
                            `${pathForCode}`,
                            `${pathForReporting}`,
                        )
                    } else {
                        switch ($.cardinality[0]) {
                            case "array":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`$.forEach(($) => {`)
                                        $w.indent({}, ($w) => {
                                            generateValueType(
                                                symbol.type,
                                                $w,
                                                `${pathForCode}`,
                                                `${pathForReporting}`,
                                            )
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case "one":
                                pl.cc($.cardinality[1], ($) => {
                                    generateValueType(
                                        symbol.type,
                                        $w,
                                        `${pathForCode}`,
                                        `${pathForReporting}`,
                                    )
        
                                })
                                break
                            case "optional":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`if (isNull($)) {`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`//FIXME??`)
                                            })
                                        })
                                        $w.snippet(`} else {`)
                                        $w.indent({}, ($w) => {
                                            generateValueType(
                                                symbol.type,
                                                $w,
                                                `${pathForCode}`,
                                                `${pathForReporting}`,
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                })
                                break
                            default:
                                pl.au($.cardinality[0])
                        }

                    }
                }
                pr.wrapRawDictionary(grammar.globalValueTypes).forEach((a, b) => a > b, ($, key) => {
                    $w.line({}, ($w) => {
    
                        $w.snippet(`function X_${key}(`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`$: api.TG${key}<Annotation>,`)
                            })
                        })
                        $w.snippet(`) {`)
                        $w.indent({}, ($w) => {
                            generateValueType(
                                $,
                                $w,
                                `G${key}`,
                                `$${key}`,
                            )
                        })
                        $w.snippet(`}`)
    
                    })
                })
    
                generateNode(
                    grammar.root,
                    $w,
                    "root",
                    "",
                )
    
            })
            $w.snippet(`}`)
        })
    })
}
