import * as api from "../interface"
import * as fp from "lib-fountain-pen"


export type GenerateInterfaceFile = (
    $: {
        grammar: api.TGrammar
    },
    $i: {
        block: fp.IBlock,
    },
    $d: {
        orderStrings: (a: string, b: string) => boolean
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
        orderStrings: (a: string, b: string) => boolean
    },
)  => void