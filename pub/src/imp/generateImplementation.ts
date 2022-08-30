
import * as api from "../interface"

import { generateParser } from "./internal/generateParser"
import { generateVisitor } from "./internal/generateVisitor"
import { generateDefaultVisitor } from "./internal/generateDefaultVisitor"
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
        'parser.ts',
        generateParser,
    )
    generateFile(
        'visit.ts',
        generateVisitor,
    )
    generateFile(
        'default_visitor.ts',
        generateDefaultVisitor,
    )
    generateFile(
        'index.ts',
        generateImplementationIndex,
    )
}
