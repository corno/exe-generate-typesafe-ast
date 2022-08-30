import * as pl from "pareto-core-lib"

import { GenerateImplementationFile } from "../GenerateFile"

export const generateImplementationIndex: GenerateImplementationFile = ($, $i) => {
    pl.cc($i.block, ($w) => {

        $w.line({}, ($w) => {
            $w.snippet(`export * from "./parser"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export * from "./visit"`)
        })
        $w.line({}, ($w) => {
            $w.snippet(`export * from "./default_visitor"`)
        })
    })
}
