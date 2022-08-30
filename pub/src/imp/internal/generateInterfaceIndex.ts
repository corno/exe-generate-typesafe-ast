import * as pl from "pareto-core-lib"

import { GenerateInterfaceFile } from "../GenerateFile"

export const generateInterfaceIndex: GenerateInterfaceFile = ($, $i) => {
    pl.cc($i.block, ($w) => {

        $w.line({}, ($w) => {
            $w.snippet(`export * from "./types/ts_api"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export * from "./interfaces/visitor"`)
        })
    })
}
