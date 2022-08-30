
import * as api from "../interface"
import * as fp from "lib-fountain-pen"

import { generateTypes } from "./internal/generateTypes"
import { generateVisitorInterface } from "./internal/generateVisitorInterface"
import { generateInterfaceIndex } from "./internal/generateInterfaceIndex"
import { GenerateInterfaceFile } from "./GenerateFile"


export const generateInterface: api.GenerateInterface = ($, $d) => {

    function generateFile(
        filePath: api.Path,
        func: GenerateInterfaceFile,
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
        'types/ts_api.ts',
        generateTypes,
    )
    generateFile(
        'interfaces/visitor.ts',
        generateVisitorInterface,
    )
    generateFile(
        'index.ts',
        generateInterfaceIndex,
    )
}
