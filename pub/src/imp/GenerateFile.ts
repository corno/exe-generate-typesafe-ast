import * as api from "../interface"

import * as collation from "api-pareto-collation"

import * as fp from "lib-fountain-pen"



export type GenerateInterfaceFile = (
    $: {
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    },
    $d: {
        isYinBeforeYang: collation.IsYinBeforeYang
    },
)  => void


export type GenerateImplementationFile = (
    $: {
        pathToInterface: string
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    },
    $d: {
        isYinBeforeYang: collation.IsYinBeforeYang
    },
)  => void