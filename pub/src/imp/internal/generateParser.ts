
import * as pl from "pareto-core-lib"
import * as p2 from "pareto-core-tostring"
import * as pm from "pareto-core-state"
import * as pr from "pareto-core-raw"

import * as g from "../../interface"
import * as wapi from "lib-fountain-pen"
import { GenerateImplementationFile } from "../GenerateFile"

export const generateParser: GenerateImplementationFile = ($, $i) => {
    const grammar = $.grammar
    function findNextPossibleTokensInSymbolType(
        $: g.TValueType,
        onToken: (token: string) => void,
        onEnd: () => void,
    ) {
        switch ($[0]) {
            case "choice":
                pl.cc($[1], ($) => {
                    pr.wrapRawDictionary($.options).forEach((a, b) => false, ($, key) => {
                        findNextPossibleTokensInSymbolType(
                            $.type,
                            onToken,
                            onEnd
                        )
                    })
                })
                break
            case "reference":
                pl.cc($[1], ($) => {
                    const x = grammar.globalValueTypes[$.name]
                    if (x === undefined) {
                        pl.panic(`no such value type: '${$.name}'`)
                    }
                    findNextPossibleTokensInSymbolType(
                        x,
                        onToken,
                        onEnd,
                    )
                })
                break
            case "sequence":
                pl.cc($[1], ($) => {
                    const elementsStack = pm.createStack(pr.wrapRawArray($.elements))
                    function doNextElement() {
                        elementsStack.pop(
                            ($) => {

                                findNextPossibleTokensInSymbolType(
                                    $.value.type,
                                    onToken,
                                    () => {
                                        doNextElement()
                                    },
                                )
                            },
                            () => {
                                onEnd()

                            }
                        )
                    }
                    doNextElement()
                })
                break
            case "node":
                pl.cc($[1], ($) => {
                    onToken($.name)
                })
                break
            default:
                pl.au($[0])
        }
    }
    pl.cc($i.block, ($w) => {

        $w.line({}, ($w) => {
            //$w.snippet(`import * as pr from "pareto-runtime"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as tast from "${$.pathToInterface}"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as pl from "pareto-core-lib"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as pm from "pareto-core-state"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`import * as uast from "api-untyped-ast"`)
        })

        $w.line({}, ($w) => { })

        $w.line({}, ($w) => {
            $w.snippet(`export function parse<Annotation>(`)
            $w.indent({}, ($w) => {
                $w.line({}, ($w) => {
                    $w.snippet(`$: uast.TUntypedNode<Annotation>,`)
                })

                $w.line({}, ($w) => {
                    $w.snippet(`$i: {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`callback: ($: tast.TRoot<Annotation>) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`reportUnexpectedRoot: ($: { root: uast.TUntypedNode<Annotation>, }) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`reportUnexpectedChild: ($: { path: string, child: uast.TUntypedNode<Annotation>, expected: null | string }) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string, }) => void,`)
                        })
                    })
                    $w.snippet(`},`)
                })
                $w.line({}, ($w) => {
                    $w.snippet(`$d: {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,`)
                        })
                    })
                    $w.snippet(`},`)
                })
            })
            $w.snippet(`): void {`)
            $w.indent({}, ($w) => {

                $w.line({}, ($w) => {
                    $w.snippet(`const $x = $i`)
                })
                function generateNode(
                    $: g.TNode2,
                    path: string,
                    $w: wapi.IBlock,
                    call: ($w: wapi.ILine) => void
                ) {

                    $w.line({}, ($w) => {

                        $w.snippet(`((`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`$: uast.TUntypedNode<Annotation>,`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`callback: ($: tast.TN${path}<Annotation>) => void,`)
                            })
                        })
                        $w.snippet(`): void => {`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`const node = $`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`const children = pm.createStack($.children)`)
                            })
                            switch ($.type[0]) {
                                case "composite":
                                    pl.cc($.type[1], ($) => {
                                        // $w.line({}, ($w) => {
                                        //     $w.snippet(`let currentChild: uast.TUntypedNode<Annotation> | undefined`)
                                        // })
                                        // $w.line({}, ($w) => {
                                        //     $w.snippet(`let nextChild: uast.TUntypedNode<Annotation> | undefined`)
                                        // })
                                        generateValue(
                                            $,
                                            path,
                                            $w,
                                            ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`callback({`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`annotation: node.implementationDetails,`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`content: $,`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            }
                                        )
                                    })
                                    break
                                case "leaf":
                                    pl.cc($.type[1], ($) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`callback(`)
                                            if ($.hasTextContent) {
                                                $w.snippet(`{`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`annotation: $.implementationDetails,`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`value: $.value`)
                                                    })
                                                })
                                                $w.snippet(`}`)
                                            } else {
                                                $w.snippet(`$.implementationDetails`)
                                            }
                                            $w.snippet(`)`)
                                        })
                                    })
                                    break
                                default:
                                    pl.au($.type[0])
                            }

                            $w.line({}, ($w) => {
                                $w.snippet(`children.pop(`)
                                $w.indent({}, ($w) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`(nextChild) => {`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`$x.reportUnexpectedChild({`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`path: "${path}",`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`child: nextChild,`)
                                                    })
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`expected: null,`)
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        })
                                        $w.snippet(`},`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`() => {`)
                                        $w.indent({}, ($w) => {
                                        })
                                        $w.snippet(`},`)
                                    })
                                })
                                $w.snippet(`)`)
                            })
                        })
                        $w.snippet(`})`)
                        call($w)
                    })

                }
                function generateValue(
                    $: g.TValue,
                    path: string,
                    $w: wapi.IBlock,
                    endCallback: (
                        $w: wapi.IBlock,
                    ) => void,
                ) {
                    const symbol = $
                    if ($.cardinality === undefined) {
                        generateValueType(
                            symbol.type,
                            path,
                            $w,
                            endCallback,
                        )
                    } else {
                        switch ($.cardinality[0]) {
                            case "array":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`const elements = pm.createArrayBuilder<tast.TVT${path}<Annotation>>()`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`const processElement = () => {`)
                                        $w.indent({}, ($w) => {
                                            generateValueType(
                                                symbol.type,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`elements.push($)`)
                                                    })
                                                },
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`$d.doUntil(`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`children,`)
                                            })
                                            $w.line({}, ($w) => {
                                                $w.snippet(`(nextChild) => {`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`switch (nextChild.kindName) {`)
                                                        $w.indent({}, ($w) => {

                                                            const possibleTokens = pm.createDictionaryBuilder<null>(
                                                                ["ignore", {}],
                                                                () => {

                                                                }
                                                            )
                                                            findNextPossibleTokensInSymbolType(
                                                                symbol.type,
                                                                ($) => {
                                                                    // if (possibleTokens[$] !== undefined) {
                                                                    //     pl.panic("UNEXPECTED")

                                                                    // }
                                                                    possibleTokens.add($, null)
                                                                },
                                                                () => {
                                                                    pl.panic("IMPLEMENT ME 4")
                                                                }
                                                            )
                                                            possibleTokens.getDictionary().forEach((a, b) => false, ($, key) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`case "${key}": //z`)
                                                                    $w.indent({}, ($w) => {
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`processElement()`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`return true`)
                                                                        })
                                                                    })
                                                                })
                                                            })

                                                            $w.line({}, ($w) => {
                                                                $w.snippet(`default: return false`)
                                                            })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`},`)
                                            })
                                        })
                                        $w.snippet(`)`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`pl.cc(elements.getArray(), ($) => {`)
                                        $w.indent({}, ($w) => {
                                            endCallback($w)
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            case "one":
                                pl.cc($.cardinality[1], ($) => {
                                    generateValueType(
                                        symbol.type,
                                        path,
                                        $w,
                                        endCallback,
                                    )
                                })
                                break
                            case "optional":
                                pl.cc($.cardinality[1], ($) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`let optional: null | tast.TVT${path}<Annotation> = null`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`const setOptional = () => {`)
                                        $w.indent({}, ($w) => {
                                            generateValueType(
                                                symbol.type,
                                                path,
                                                $w,
                                                ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`optional = $`)
                                                    })
                                                },
                                            )
                                        })
                                        $w.snippet(`}`)
                                    })

                                    $w.line({}, ($w) => {
                                        $w.snippet(`$d.lookAhead(children, `)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`(nextChild) => {`)
                                                $w.indent({}, ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`switch (nextChild.kindName) {`)
                                                        $w.indent({}, ($w) => {

                                                            const possibleTokens = pm.createDictionaryBuilder<null>(
                                                                ["ignore", {}],
                                                                () => {

                                                                }
                                                            )
                                                            findNextPossibleTokensInSymbolType(
                                                                symbol.type,
                                                                ($) => {
                                                                    // if (possibleTokens[$] !== undefined) {
                                                                    //     pl.panic("UNEXPECTED")

                                                                    // }
                                                                    possibleTokens.add($, null)
                                                                },
                                                                () => {
                                                                    pl.panic("IMPLEMENT ME 5")
                                                                }
                                                            )
                                                            possibleTokens.getDictionary().forEach((a, b) => false, ($, key) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`case "${key}": //XXX`)
                                                                    $w.indent({}, ($w) => {
                                                                        // $w.line({}, ($w) => {
                                                                        //     $w.snippet(`children.pop(() => {}, () => {})`)
                                                                        // })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`setOptional()`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`break`)
                                                                        })
                                                                    })
                                                                })
                                                            })

                                                            // $w.line({}, ($w) => {
                                                            //     $w.snippet(`default: processNotSet()`)
                                                            // })
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.snippet(`},`)
                                            })
                                            $w.line({}, ($w) => {
                                                $w.snippet(`() => {`)
                                                $w.indent({}, ($w) => {
                                                })
                                                $w.snippet(`},`)
                                            })
                                        })
                                        $w.snippet(`)`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`pl.cc(optional, ($) => {`)
                                        $w.indent({}, ($w) => {
                                            endCallback($w)
                                        })
                                        $w.snippet(`})`)
                                    })
                                })
                                break
                            default:
                                pl.au($.cardinality[0])
                        }

                    }
                }
                function generateValueType(
                    $: g.TValueType,
                    path: string,
                    $w: wapi.IBlock,
                    endCallback: (
                        $w: wapi.IBlock,
                    ) => void,
                ) {
                    switch ($[0]) {
                        case "choice":
                            pl.cc($[1], ($) => {
                                const possibleTokens = pm.createDictionaryBuilder<string>(
                                    ["ignore", {}],
                                    () => {
                                        pl.panic("tokens are not unique")
                                    }
                                )
                                pr.wrapRawDictionary($.options).forEach((a, b) => false, ($, key) => {
                                    const option = $
                                    findNextPossibleTokensInSymbolType(
                                        option.type,
                                        ($) => {
                                            possibleTokens.add($, key)
                                        },
                                        () => {
                                            pl.panic("IMPLEMENT ME 1")
                                        }
                                    )
                                })
                                $w.line({}, ($w) => {
                                    $w.snippet(`const choiceEnd_${path} = ($: tast.TVT${path}<Annotation>) => {`)
                                    $w.indent({}, ($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`}`)
                                })

                                $w.line({}, ($w) => {
                                    $w.snippet(`$d.lookAhead(children, `)
                                    $w.indent({}, ($w) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`(nextChild) => {`)
                                            $w.indent({}, ($w) => {
                                                pr.wrapRawDictionary($.options).forEach((a, b) => false, ($, key) => {
                                                    const option = $
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`const choose_${key} = () => {`)
                                                        $w.indent({}, ($w) => {

                                                            generateValue(
                                                                option,
                                                                `${path}_${key}`,
                                                                $w,
                                                                ($w) => {
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`choiceEnd_${path}(["${key}", $])`)
                                                                    })
                                                                }
                                                            )
                                                        })
                                                        $w.snippet(`}`)
                                                    })
                                                })
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`switch (nextChild.kindName) {`)
                                                    $w.indent({}, ($w) => {
                                                        const possibleTokens = pm.createDictionaryBuilder<string>(
                                                            ["ignore", {}],
                                                            () => {
                                                                pl.panic("unexpected: duplicate key")
                                                            }
                                                        )
                                                        pr.wrapRawDictionary($.options).forEach((a, b) => false, ($, key) => {
                                                            const option = $
                                                            findNextPossibleTokensInSymbolType(
                                                                option.type,
                                                                ($) => {
                                                                    possibleTokens.add($, key)
                                                                },
                                                                () => {
                                                                    pl.panic("IMPLEMENT ME 2")
                                                                }
                                                            )
                                                        })
                                                        possibleTokens.getDictionary().forEach((a, b) => false, (optionKey, key) => {
                                                            $w.line({}, ($w) => {
                                                                $w.snippet(`case "${key}": /*Y*/ {`)
                                                                $w.indent({}, ($w) => {

                                                                    // $w.line({}, ($w) => {
                                                                    //     $w.snippet(`children.pop(() => {}, () => {})`)
                                                                    // })
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`choose_${optionKey}()`)
                                                                    })
                                                                    $w.line({}, ($w) => {
                                                                        $w.snippet(`break`)
                                                                    })
                                                                })
                                                                $w.snippet(`}`)
                                                            })
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`default: {`)
                                                            $w.indent({}, ($w) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`$x.reportUnexpectedChild({`)
                                                                    $w.indent({}, ($w) => {
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`path: "${path}",`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`child: nextChild,`)
                                                                        })
                                                                        $w.line({}, ($w) => {
                                                                            $w.snippet(`expected: "${p2.getKeysAsString(possibleTokens.getDictionary())}",`)
                                                                        })
                                                                    })
                                                                    $w.snippet(`})`)
                                                                })
                                                            })
                                                            $w.snippet(`}`)

                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`() => { //no child`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`$x.reportMissingToken({`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`parentAnnotation: node.implementationDetails,`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`path: "${path}",`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`kindNameOptions: "${p2.getKeysAsString(possibleTokens.getDictionary())}",`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                    })
                                    $w.snippet(`)`)
                                })
                            })
                            break
                        case "reference":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`G${$.name}(node, children, ($) => {`)
                                    $w.indent({}, ($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`})`)
                                })
                            })
                            break
                        case "sequence":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`const sequenceEnd = ($: tast.TVT${path}<Annotation>) => {`)
                                    $w.indent({}, ($w) => {
                                        endCallback(
                                            $w,
                                        )
                                    })
                                    $w.snippet(`}`)
                                })
                                function generateElements(
                                    elements: pm.Stack<g.TSequenceElement>,
                                    $w: wapi.IBlock,
                                ) {
                                    elements.pop(
                                        ($) => {
                                            const element = $
                                            generateValue(
                                                element.value,
                                                `${path}_${element.name}`,
                                                $w,
                                                ($w) => {
                                                    $w.line({}, ($w) => {
                                                        $w.snippet(`const _${element.name} = $`)
                                                    })
                                                    generateElements(
                                                        elements,
                                                        $w,
                                                    )
                                                }
                                            )
                                        },
                                        () => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`sequenceEnd({`)
                                                $w.indent({}, ($w) => {
                                                    pr.wrapRawArray($.elements).forEach(($) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`"${$.name}": _${$.name},`)
                                                        })
                                                    })
                                                })
                                                $w.snippet(`})`)
                                            })
                                        }
                                    )
                                }
                                generateElements(
                                    pm.createStack(pr.wrapRawArray($.elements)),
                                    $w,
                                )
                            })
                            break
                        case "node":
                            pl.cc($[1], ($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`children.pop(`)
                                    $w.indent({}, ($w) => {
                                        $w.line({}, ($w) => {
                                            $w.snippet(`(currentChild) => {`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`if (currentChild.kindName !== "${$.name}") {`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`$x.reportUnexpectedChild({`)
                                                            $w.indent({}, ($w) => {
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`path: "${path}",`)
                                                                })
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`child: currentChild,`)
                                                                })
                                                                $w.line({}, ($w) => {
                                                                    $w.snippet(`expected: "${$.name}",`)
                                                                })
                                                            })
                                                            $w.snippet(`})`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`return`)
                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                                generateNode(
                                                    $,
                                                    `${path}$`,
                                                    $w,
                                                    ($w) => {
                                                        $w.snippet(`(`)
                                                        $w.indent({}, ($w) => {
                                                            $w.line({}, ($w) => {
                                                                $w.snippet(`currentChild,`)
                                                            })
                                                            $w.line({}, ($w) => {
                                                                $w.snippet(`($) => {`)
                                                                $w.indent({}, ($w) => {
                                                                    endCallback($w)
                                                                })
                                                                $w.snippet(`}`)
                                                            })
                                                        })
                                                        $w.snippet(`)`)
                                                    }
                                                )
                                            })
                                            $w.snippet(`},`)
                                        })
                                        $w.line({}, ($w) => {
                                            $w.snippet(`() => { // no child`)
                                            $w.indent({}, ($w) => {
                                                $w.line({}, ($w) => {
                                                    $w.snippet(`$x.reportMissingToken({`)
                                                    $w.indent({}, ($w) => {
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`parentAnnotation: node.implementationDetails,`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`path: "${path}",`)
                                                        })
                                                        $w.line({}, ($w) => {
                                                            $w.snippet(`kindNameOptions: "${$.name}",`)
                                                        })
                                                    })
                                                    $w.snippet(`})`)
                                                })
                                            })
                                            $w.snippet(`},`)
                                        })
                                    })
                                    $w.snippet(`)`)
                                })
                            })
                            break
                        default:
                            pl.au($[0])
                    }
                }
                pr.wrapRawDictionary(grammar.globalValueTypes).forEach(() => false, ($, key) => {

                    $w.line({}, ($w) => {

                        $w.snippet(`function G${key}(`)
                        $w.indent({}, ($w) => {
                            $w.line({}, ($w) => {
                                $w.snippet(`node: uast.TUntypedNode<Annotation>,`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`children: pm.Stack<uast.TUntypedNode<Annotation>>,`)
                            })
                            $w.line({}, ($w) => {
                                $w.snippet(`callback: ($: tast.TG${key}<Annotation>) => void,`)
                            })
                        })
                        $w.snippet(`): void {`)
                        $w.indent({}, ($w) => {
                            // $w.line({}, ($w) => {
                            //     $w.snippet(`let currentChild: uast.TUntypedNode<Annotation> | undefined`)
                            // })
                            // $w.line({}, ($w) => {
                            //     $w.snippet(`let nextChild: uast.TUntypedNode<Annotation> | undefined`)
                            // })
                            generateValueType(
                                $,
                                `G${key}`,
                                $w,
                                ($w) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`callback($)`)
                                    })
                                }
                            )
                        })
                        $w.snippet(`}`)
                    })
                })

                $w.line({}, ($w) => {
                    $w.snippet(`if ($.kindName !== "${grammar.root.name}") {`)
                    $w.indent({}, ($w) => {
                        $w.line({}, ($w) => {
                            $w.snippet(`$x.reportUnexpectedRoot({`)
                            $w.indent({}, ($w) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`root: $,`)
                                })
                            })
                            $w.snippet(`})`)
                        })
                        $w.line({}, ($w) => {
                            $w.snippet(`return`)
                        })
                    })
                    $w.snippet(`} else {`)
                    $w.indent({}, ($w) => {
                        generateNode(
                            grammar.root,
                            "root",
                            $w,
                            ($w) => {

                                $w.snippet(`(`)
                                $w.indent({}, ($w) => {
                                    $w.line({}, ($w) => {
                                        $w.snippet(`$,`)
                                    })
                                    $w.line({}, ($w) => {
                                        $w.snippet(`($) => {`)
                                        $w.indent({}, ($w) => {
                                            $w.line({}, ($w) => {
                                                $w.snippet(`$x.callback($)`)
                                            })
                                        })
                                        $w.snippet(`},`)
                                    })
                                })
                                $w.snippet(`)`)
                            },
                        )
                    })
                    $w.snippet(`}`)
                })
            })
            $w.snippet(`}`)
        })

    })
}
