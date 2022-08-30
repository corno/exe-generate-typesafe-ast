import * as api from "../interface"
import * as fp from "lib-fountain-pen"


export type GenerateInterfaceFile = (
    $: {
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    }
)  => void


export type GenerateImplementationFile = (
    $: {
        pathToInterface: string
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    }
)  => void