import * as pl from "pareto-core-lib"
import * as pr from "pareto-core-raw"


import * as g from "../../interface/types/types"
import * as wapi from "lib-fountain-pen"
import { GenerateInterfaceFile } from "../GenerateFile"

export const generateTypes: GenerateInterfaceFile = ($, $i) => {
    const grammar = $.grammar
    function generateTypesForNode(
        $: g.TNode2,
        $w: wapi.IBlock,
        path: string
    ) {
        switch ($.type[0]) {
            case "composite":
                pl.cc($.type[1], ($) => {
                    generateTypesForValue(
                        $,
                        $w,
                        path,
                    )
                })
                break
            case "leaf":
                pl.cc($.type[1], ($) => {

                })
                break
            default:
                pl.au($.type[0])
        }
        $w.line({}, ($w) => {
            $w.snippet(``)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export type TN${path}<Annotation> = `)
            switch ($.type[0]) {
                case "composite":
                    pl.cc($.type[1], ($) => {
                        $w.snippet(`TAnnotatedType<Annotation, TV${path}<Annotation>>`)
                    })
                    break
                case "leaf":
                    pl.cc($.type[1], ($) => {
                        if ($.hasTextContent) {
                            $w.snippet(`TAnnotatedString<Annotation>`)
                        } else {
                            $w.snippet(`Annotation`)

                        }
                    })
                    break
                default:
                    pl.au($.type[0])
            }
        })

    }
    function generateTypesForValueType(
        $: g.TValueType,
        $w: wapi.IBlock,
        path: string,
    ) {
        switch ($[0]) {
            case "choice":
                pl.cc($[1], ($) => {
                    pr.wrapRawDictionary($.options).forEach(() => false, (option, key) => {
                        generateTypesForValue(
                            option,
                            $w,
                            path + "_" + key
                        )
                    })
                })
                break
            case "reference":
                pl.cc($[1], ($) => {
                    //
                })
                break
            case "sequence":
                pl.cc($[1], ($) => {
                    pr.wrapRawArray($.elements).forEach(($) => {
                        generateTypesForValue(
                            $.value,
                            $w,
                            path + "_" + $.name,
                        )
                    })
                })
                break
            case "node":
                pl.cc($[1], ($) => {
                    generateTypesForNode(
                        $,
                        $w,
                        `${path}$`,
                    )
                })
                break
            default:
                pl.au($[0])
        }
        $w.line({}, ($w) => {
            $w.snippet(`export type TVT${path}<Annotation> = `)

            switch ($[0]) {
                case "choice":
                    pl.cc($[1], ($) => {

                        $w.indent({}, ($w) => {
                            pr.wrapRawDictionary($.options).forEach(() => false, (option, key) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`| [ "${key}", TV${path}_${key}<Annotation>]`)
                                })
                            })
                        })
                    })
                    break
                case "reference":
                    pl.cc($[1], ($) => {
                        $w.snippet(`TG${$.name}<Annotation>`)
                    })
                    break
                case "sequence":
                    pl.cc($[1], ($) => {
                        $w.snippet(`{`)
                        $w.indent({}, ($w) => {
                            pr.wrapRawArray($.elements).forEach(($) => {
                                $w.line({}, ($w) => {
                                    $w.snippet(`readonly "${$.name}":  TV${path}_${$.name}<Annotation>`)
                                })
                            })
                        })
                        $w.snippet(`}`)
                    })
                    break
                case "node":
                    pl.cc($[1], ($) => {
                        $w.snippet(`TN${path}$<Annotation>`)
                    })
                    break
                default:
                    pl.au($[0])
            }
        })
    }
    function generateTypesForValue(
        $: g.TValue,
        $w: wapi.IBlock,
        path: string,
    ) {
        generateTypesForValueType(
            $.type,
            $w,
            path,
        )
        $w.line({}, ($w) => {
            $w.snippet(`export type TV${path}<Annotation> = `)
            if ($.cardinality === undefined) {
                $w.snippet(`TVT${path}<Annotation>`)
            } else {
                switch ($.cardinality[0]) {
                    case "array":
                        pl.cc($.cardinality[1], ($) => {
                            $w.snippet(`pt.Array<TVT${path}<Annotation>>`)
                        })
                        break
                    case "one":
                        pl.cc($.cardinality[1], ($) => {
                            $w.snippet(`TVT${path}<Annotation>`)
                        })
                        break
                    case "optional":
                        pl.cc($.cardinality[1], ($) => {
                            $w.snippet(`null | TVT${path}<Annotation>`)
                        })
                        break
                    default:
                        pl.au($.cardinality[0])
                }

            }
        })
    }
    pl.cc($i.block, ($w) => {

        $w.line({}, ($w) => {
            $w.snippet(`import * as pt from "pareto-core-types"`)
        })
        $w.line({}, ($w) => {
        })

        $w.line({}, ($w) => {
            $w.snippet(`export type TAnnotatedString<Annotation> = { readonly "annotation": Annotation; readonly "value": string }`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export type TAnnotatedType<Annotation, Type> = { readonly "annotation": Annotation; readonly "content": Type }`)
        })

        pr.wrapRawDictionary(grammar.globalValueTypes).forEach(() => false, ($, key) => {
            generateTypesForValueType(
                $,
                $w,
                `G${key}`,
            )
            $w.line({}, ($w) => {
                $w.snippet(`export type TG${key}<Annotation> =  TVTG${key}<Annotation>`)
            })
        })
        generateTypesForNode(
            grammar.root,
            $w,
            "root",
        )

        $w.line({}, ($w) => {
            $w.snippet(`export type TRoot<Annotation> = TNroot<Annotation>`)
        })

    })

}