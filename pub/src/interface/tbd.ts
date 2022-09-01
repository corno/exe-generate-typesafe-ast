
import * as pt from "pareto-core-types"

import * as fp from "lib-fountain-pen"

import { TGrammar } from "./types/types"

export type Path = pt.Nested<string>


export type GenerateImplementationFile_Data = {
    grammar: TGrammar
    pathToInterface: string
}

export type GenerateImplementation = (
    $: {
        fpSettings: fp.TConfiguration,
        generation: GenerateImplementationFile_Data
    },
    $d: {
        createWriteStream: (
            $: {
                path: Path,
            },
            callback: ($: fp.IStreamConsumer) => void
        ) => void
        orderStrings: (a: string, b: string) => boolean
    }
) => void


export type GenerateInterfaceFile_Data = {
    grammar: TGrammar
}


export type GenerateInterface = (
    $: {
        fpSettings: fp.TConfiguration,
        generation: GenerateInterfaceFile_Data
    },
    $d: {
        createWriteStream: (
            $: {
                path: Path,
            },
            callback: ($: fp.IStreamConsumer) => void
        ) => void
        orderStrings: (a: string, b: string) => boolean
    }
) => void