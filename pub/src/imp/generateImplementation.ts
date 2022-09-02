
import * as api from "../interface"

import { generateParse } from "./internal/generateParser"
import { generateVisit } from "./internal/generateVisit"
import { generateCreateDefaultVisitor } from "./internal/generateCreateDefaultVisitor"
import { generateImplementationIndex } from "./internal/generateImplementationIndex"
import { GenerateImplementationFile } from "./GenerateFile"
import * as fp from "lib-fountain-pen"



export const generateImplementation: api.GenerateImplementation = ($, $d) => {
    const grammar = $.generation.grammar

    function generateFile(
        filePath: api.Path,
        func: GenerateImplementationFile,
    ) {

        $d.createWriteStream(
            {
                path: filePath
            },
            ($c) => {
                fp.createContext(
                    $.fpSettings,
                    ($c) => {
                        func(
                            $.generation,
                            {
                                block: $c,
                            },
                            {
                                isYinBeforeYang: $d.isYinBeforeYang,
                            }
                        )

                    },
                    {
                        consumer: $c
                    }

                )
            }
        )
    }
    generateFile(
        'parse.ts',
        generateParse,
    )
    generateFile(
        'visit.ts',
        generateVisit,
    )
    generateFile(
        'createDefaultVisitor.ts',
        generateCreateDefaultVisitor,
    )
    generateFile(
        'index.ts',
        generateImplementationIndex,
    )
}
