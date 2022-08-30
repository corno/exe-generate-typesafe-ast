import * as pt from "pareto-core-types"

export type TUntypedNode<Annotation> = {
    readonly "kindName": string
    readonly "value": string
    readonly "annotation": Annotation
    readonly "children": pt.Array<TUntypedNode<Annotation>>
}