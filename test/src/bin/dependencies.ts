import * as collation from "res-pareto-collation/dist"
import * as fs from "res-pareto-filesystem"
import { Dependencies } from "../imp/createGetTestSet"

export const dependencies: Dependencies = {
    createWriteStream: fs.createWriteStream,
    isYinBeforeYang: collation.localeIsYinBeforeYang,
}