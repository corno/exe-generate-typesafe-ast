
import * as tast from "../interface"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as uast from "api-untyped-ast"

export function parse<Annotation>(
    $: uast.TUntypedNode<Annotation>,
    $i: {
        callback: ($: tast.TRoot<Annotation>) => void,
        reportUnexpectedRoot: ($: { root: uast.TUntypedNode<Annotation>, }) => void,
        reportUnexpectedChild: ($: { path: string, child: uast.TUntypedNode<Annotation>, expected: null | string }) => void,
        reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string, }) => void,
    },
): void {
    const $x = $i
    function GvariableDeclarationList(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGvariableDeclarationList<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "VariableDeclarationList") {
                    $x.reportUnexpectedChild({
                        path: "GvariableDeclarationList",
                        child: currentChild,
                        expected: "VariableDeclarationList",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGvariableDeclarationList$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements = pm.createArrayBuilder<tast.TVTGvariableDeclarationList$<Annotation>>()
                    const processElement = () => {
                        GvariableDeclaration(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        children.pop(
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case "VariableDeclaration":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            },
                            () => {
                                break arrayLoop
                            },
                        )
                    }
                    pl.cc(elements.getArray(), ($) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "GvariableDeclarationList$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GvariableDeclarationList",
                    kindNameOptions: "VariableDeclarationList",
                })
            },
        )
    }
    function GvariableDeclaration(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGvariableDeclaration<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "VariableDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "GvariableDeclaration",
                        child: currentChild,
                        expected: "VariableDeclaration",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGvariableDeclaration$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGvariableDeclaration$<Annotation>) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        let optional: null | tast.TVTGvariableDeclaration$_type<Annotation> = null
                        const setOptional = () => {
                            Gtype(node, children, ($) => {
                                optional = $
                            })
                        }
                        children.pop(
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                    case "null":
                                        setOptional()
                                        break
                                }
                            },
                            () => {},
                        )
                        pl.cc(optional, ($) => {
                            const _type = $
                            let optional: null | tast.TVTGvariableDeclaration$_expression<Annotation> = null
                            const setOptional = () => {
                                Gexpression(node, children, ($) => {
                                    optional = $
                                })
                            }
                            children.pop(
                                (nextChild) => {
                                    switch (nextChild.kindName) {
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                    }
                                },
                                () => {},
                            )
                            pl.cc(optional, ($) => {
                                const _expression = $
                                sequenceEnd({
                                    "name": _name,
                                    "type": _type,
                                    "expression": _expression,
                                })
                            })
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "GvariableDeclaration$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GvariableDeclaration",
                    kindNameOptions: "VariableDeclaration",
                })
            },
        )
    }
    function GtypeSignature(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGtypeSignature<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_GtypeSignature = ($: tast.TVTGtypeSignature<Annotation>) => {
            callback($)
        }
        children.pop(
            (nextChild) => {
                const choose_property = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "PropertySignature") {
                                $x.reportUnexpectedChild({
                                    path: "GtypeSignature_property",
                                    child: currentChild,
                                    expected: "PropertySignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtypeSignature_property$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtypeSignature_property$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGtypeSignature_property$_modifiers<Annotation>>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "DeclareKeyword":
                                                    processElement()
                                                    break
                                                case "ExportKeyword":
                                                    processElement()
                                                    break
                                                case "ReadonlyKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    GidentifierOrStringLiteral(node, children, ($) => {
                                        const _name = $
                                        let optional: null | tast.TVTGtypeSignature_property$_quesionToken<Annotation> = null
                                        const setOptional = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if (currentChild.kindName !== "QuestionToken") {
                                                        $x.reportUnexpectedChild({
                                                            path: "GtypeSignature_property$_quesionToken",
                                                            child: currentChild,
                                                            expected: "QuestionToken",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: tast.TNGtypeSignature_property$_quesionToken$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.implementationDetails)
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedChild({
                                                                    path: "GtypeSignature_property$_quesionToken$",
                                                                    child: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            optional = $
                                                        }
                                                    )
                                                },
                                                () => {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.implementationDetails,
                                                        path: "GtypeSignature_property$_quesionToken",
                                                        kindNameOptions: "QuestionToken",
                                                    })
                                                },
                                            )
                                        }
                                        children.pop(
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "null":
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _quesionToken = $
                                            let optional: null | tast.TVTGtypeSignature_property$_type<Annotation> = null
                                            const setOptional = () => {
                                                Gtype(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            children.pop(
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                        case "null":
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _type = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "quesionToken": _quesionToken,
                                                    "type": _type,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "GtypeSignature_property$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["property", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "GtypeSignature_property",
                                kindNameOptions: "PropertySignature",
                            })
                        },
                    )
                }
                const choose_method = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "MethodSignature") {
                                $x.reportUnexpectedChild({
                                    path: "GtypeSignature_method",
                                    child: currentChild,
                                    expected: "MethodSignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtypeSignature_method$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtypeSignature_method$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gidentifier(node, children, ($) => {
                                    const _name = $
                                    GfunctionDefinition(node, children, ($) => {
                                        const _definition = $
                                        sequenceEnd({
                                            "name": _name,
                                            "definition": _definition,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "GtypeSignature_method$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["method", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "GtypeSignature_method",
                                kindNameOptions: "MethodSignature",
                            })
                        },
                    )
                }
                const choose_index = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "IndexSignature") {
                                $x.reportUnexpectedChild({
                                    path: "GtypeSignature_index",
                                    child: currentChild,
                                    expected: "IndexSignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtypeSignature_index$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtypeSignature_index$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGtypeSignature_index$_modifiers<Annotation>>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "DeclareKeyword":
                                                    processElement()
                                                    break
                                                case "ExportKeyword":
                                                    processElement()
                                                    break
                                                case "ReadonlyKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gparameter(node, children, ($) => {
                                        const _parameter = $
                                        let optional: null | tast.TVTGtypeSignature_index$_type<Annotation> = null
                                        const setOptional = () => {
                                            Gtype(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        children.pop(
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _type = $
                                            sequenceEnd({
                                                "modifiers": _modifiers,
                                                "parameter": _parameter,
                                                "type": _type,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "GtypeSignature_index$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["index", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "GtypeSignature_index",
                                kindNameOptions: "IndexSignature",
                            })
                        },
                    )
                }
                const choose_construct = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ConstructSignature") {
                                $x.reportUnexpectedChild({
                                    path: "GtypeSignature_construct",
                                    child: currentChild,
                                    expected: "ConstructSignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtypeSignature_construct$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtypeSignature_construct$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGtypeSignature_construct$_parameters<Annotation>>()
                                const processElement = () => {
                                    Gparameter(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "Parameter":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _parameters = $
                                    Gtype(node, children, ($) => {
                                        const _returnType = $
                                        sequenceEnd({
                                            "parameters": _parameters,
                                            "returnType": _returnType,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "GtypeSignature_construct$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["construct", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "GtypeSignature_construct",
                                kindNameOptions: "ConstructSignature",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "ConstructSignature": {
                        choose_construct()
                        break
                    }
                    case "IndexSignature": {
                        choose_index()
                        break
                    }
                    case "MethodSignature": {
                        choose_method()
                        break
                    }
                    case "PropertySignature": {
                        choose_property()
                        break
                    }
                    default: {
                        $x.reportUnexpectedChild({
                            path: "GtypeSignature",
                            child: nextChild,
                            expected: "ConstructSignature, IndexSignature, MethodSignature, PropertySignature",
                        })
                    }
                }
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GtypeSignature",
                    kindNameOptions: "ConstructSignature, IndexSignature, MethodSignature, PropertySignature",
                })
                return
            },
        )
    }
    function GtypeParameter(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGtypeParameter<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "TypeParameter") {
                    $x.reportUnexpectedChild({
                        path: "GtypeParameter",
                        child: currentChild,
                        expected: "TypeParameter",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtypeParameter$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gidentifier(node, children, ($) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "GtypeParameter$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GtypeParameter",
                    kindNameOptions: "TypeParameter",
                })
            },
        )
    }
    function Gtype(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGtype<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.TVTGtype<Annotation>) => {
            callback($)
        }
        children.pop(
            (nextChild) => {
                const choose_void = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "VoidKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_void",
                                    child: currentChild,
                                    expected: "VoidKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_void$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_void$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["void", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_void",
                                kindNameOptions: "VoidKeyword",
                            })
                        },
                    )
                }
                const choose_union = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "UnionType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_union",
                                    child: currentChild,
                                    expected: "UnionType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_union$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const elements = pm.createArrayBuilder<tast.TVTGtype_union$<Annotation>>()
                                const processElement = () => {
                                    Gtype(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "AnyKeyword":
                                                    processElement()
                                                    break
                                                case "ArrayType":
                                                    processElement()
                                                    break
                                                case "BooleanKeyword":
                                                    processElement()
                                                    break
                                                case "FunctionType":
                                                    processElement()
                                                    break
                                                case "LiteralType":
                                                    processElement()
                                                    break
                                                case "ParenthesizedType":
                                                    processElement()
                                                    break
                                                case "NeverKeyword":
                                                    processElement()
                                                    break
                                                case "NumberKeyword":
                                                    processElement()
                                                    break
                                                case "OptionalType":
                                                    processElement()
                                                    break
                                                case "TupleType":
                                                    processElement()
                                                    break
                                                case "TypeLiteral":
                                                    processElement()
                                                    break
                                                case "StringKeyword":
                                                    processElement()
                                                    break
                                                case "TypeReference":
                                                    processElement()
                                                    break
                                                case "UndefinedKeyword":
                                                    processElement()
                                                    break
                                                case "UnionType":
                                                    processElement()
                                                    break
                                                case "VoidKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_union$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["union", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_union",
                                kindNameOptions: "UnionType",
                            })
                        },
                    )
                }
                const choose_undefined = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "UndefinedKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_undefined",
                                    child: currentChild,
                                    expected: "UndefinedKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_undefined$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_undefined$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["undefined", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_undefined",
                                kindNameOptions: "UndefinedKeyword",
                            })
                        },
                    )
                }
                const choose_typeReference = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TypeReference") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_typeReference",
                                    child: currentChild,
                                    expected: "TypeReference",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_typeReference$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtype_typeReference$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const choiceEnd_Gtype_typeReference$_x = ($: tast.TVTGtype_typeReference$_x<Annotation>) => {
                                    const _x = $
                                    const elements = pm.createArrayBuilder<tast.TVTGtype_typeReference$_parameters<Annotation>>()
                                    const processElement = () => {
                                        Gtype(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    arrayLoop: while (true) {
                                        children.pop(
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "AnyKeyword":
                                                        processElement()
                                                        break
                                                    case "ArrayType":
                                                        processElement()
                                                        break
                                                    case "BooleanKeyword":
                                                        processElement()
                                                        break
                                                    case "FunctionType":
                                                        processElement()
                                                        break
                                                    case "LiteralType":
                                                        processElement()
                                                        break
                                                    case "ParenthesizedType":
                                                        processElement()
                                                        break
                                                    case "NeverKeyword":
                                                        processElement()
                                                        break
                                                    case "NumberKeyword":
                                                        processElement()
                                                        break
                                                    case "OptionalType":
                                                        processElement()
                                                        break
                                                    case "TupleType":
                                                        processElement()
                                                        break
                                                    case "TypeLiteral":
                                                        processElement()
                                                        break
                                                    case "StringKeyword":
                                                        processElement()
                                                        break
                                                    case "TypeReference":
                                                        processElement()
                                                        break
                                                    case "UndefinedKeyword":
                                                        processElement()
                                                        break
                                                    case "UnionType":
                                                        processElement()
                                                        break
                                                    case "VoidKeyword":
                                                        processElement()
                                                        break
                                                    default: break arrayLoop
                                                }
                                            },
                                            () => {
                                                break arrayLoop
                                            },
                                        )
                                    }
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        sequenceEnd({
                                            "x": _x,
                                            "parameters": _parameters,
                                        })
                                    })
                                }
                                children.pop(
                                    (nextChild) => {
                                        const choose_qualifiedName = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if (currentChild.kindName !== "QualifiedName") {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gtype_typeReference$_x_qualifiedName",
                                                            child: currentChild,
                                                            expected: "QualifiedName",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: tast.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                        const sequenceEnd = ($: tast.TVTGtype_typeReference$_x_qualifiedName$<Annotation>) => {
                                                            callback({
                                                                annotation: node.implementationDetails,
                                                                content: $,
                                                            })
                                                        }
                                                        Gidentifier(node, children, ($) => {
                                                            const _context = $
                                                            Gidentifier(node, children, ($) => {
                                                                const _type = $
                                                                sequenceEnd({
                                                                    "context": _context,
                                                                    "type": _type,
                                                                })
                                                            })
                                                        })
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gtype_typeReference$_x_qualifiedName$",
                                                                    child: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            choiceEnd_Gtype_typeReference$_x(["qualifiedName", $])
                                                        }
                                                    )
                                                },
                                                () => {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.implementationDetails,
                                                        path: "Gtype_typeReference$_x_qualifiedName",
                                                        kindNameOptions: "QualifiedName",
                                                    })
                                                },
                                            )
                                        }
                                        const choose_identifier = () => {
                                            Gidentifier(node, children, ($) => {
                                                choiceEnd_Gtype_typeReference$_x(["identifier", $])
                                            })
                                        }
                                        switch (nextChild.kindName) {
                                            case "Identifier": {
                                                choose_identifier()
                                                break
                                            }
                                            case "QualifiedName": {
                                                choose_qualifiedName()
                                                break
                                            }
                                            default: {
                                                $x.reportUnexpectedChild({
                                                    path: "Gtype_typeReference$_x",
                                                    child: nextChild,
                                                    expected: "Identifier, QualifiedName",
                                                })
                                            }
                                        }
                                    },
                                    () => {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.implementationDetails,
                                            path: "Gtype_typeReference$_x",
                                            kindNameOptions: "Identifier, QualifiedName",
                                        })
                                        return
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_typeReference$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["typeReference", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_typeReference",
                                kindNameOptions: "TypeReference",
                            })
                        },
                    )
                }
                const choose_string = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "StringKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_string",
                                    child: currentChild,
                                    expected: "StringKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_string$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_string$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["string", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_string",
                                kindNameOptions: "StringKeyword",
                            })
                        },
                    )
                }
                const choose_typeLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TypeLiteral") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_typeLiteral",
                                    child: currentChild,
                                    expected: "TypeLiteral",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_typeLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const elements = pm.createArrayBuilder<tast.TVTGtype_typeLiteral$<Annotation>>()
                                const processElement = () => {
                                    GtypeSignature(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "ConstructSignature":
                                                    processElement()
                                                    break
                                                case "IndexSignature":
                                                    processElement()
                                                    break
                                                case "MethodSignature":
                                                    processElement()
                                                    break
                                                case "PropertySignature":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_typeLiteral$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["typeLiteral", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_typeLiteral",
                                kindNameOptions: "TypeLiteral",
                            })
                        },
                    )
                }
                const choose_tuple = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TupleType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_tuple",
                                    child: currentChild,
                                    expected: "TupleType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_tuple$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const elements = pm.createArrayBuilder<tast.TVTGtype_tuple$<Annotation>>()
                                const processElement = () => {
                                    Gtype(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "AnyKeyword":
                                                    processElement()
                                                    break
                                                case "ArrayType":
                                                    processElement()
                                                    break
                                                case "BooleanKeyword":
                                                    processElement()
                                                    break
                                                case "FunctionType":
                                                    processElement()
                                                    break
                                                case "LiteralType":
                                                    processElement()
                                                    break
                                                case "ParenthesizedType":
                                                    processElement()
                                                    break
                                                case "NeverKeyword":
                                                    processElement()
                                                    break
                                                case "NumberKeyword":
                                                    processElement()
                                                    break
                                                case "OptionalType":
                                                    processElement()
                                                    break
                                                case "TupleType":
                                                    processElement()
                                                    break
                                                case "TypeLiteral":
                                                    processElement()
                                                    break
                                                case "StringKeyword":
                                                    processElement()
                                                    break
                                                case "TypeReference":
                                                    processElement()
                                                    break
                                                case "UndefinedKeyword":
                                                    processElement()
                                                    break
                                                case "UnionType":
                                                    processElement()
                                                    break
                                                case "VoidKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_tuple$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["tuple", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_tuple",
                                kindNameOptions: "TupleType",
                            })
                        },
                    )
                }
                const choose_optional = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "OptionalType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_optional",
                                    child: currentChild,
                                    expected: "OptionalType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_optional$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gtype(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_optional$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["optional", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_optional",
                                kindNameOptions: "OptionalType",
                            })
                        },
                    )
                }
                const choose_number = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NumberKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_number",
                                    child: currentChild,
                                    expected: "NumberKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_number$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_number$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["number", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_number",
                                kindNameOptions: "NumberKeyword",
                            })
                        },
                    )
                }
                const choose_never = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NeverKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_never",
                                    child: currentChild,
                                    expected: "NeverKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_never$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_never$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["never", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_never",
                                kindNameOptions: "NeverKeyword",
                            })
                        },
                    )
                }
                const choose_parenthesized = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ParenthesizedType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_parenthesized",
                                    child: currentChild,
                                    expected: "ParenthesizedType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_parenthesized$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gtype(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_parenthesized$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["parenthesized", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_parenthesized",
                                kindNameOptions: "ParenthesizedType",
                            })
                        },
                    )
                }
                const choose_literal = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "LiteralType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_literal",
                                    child: currentChild,
                                    expected: "LiteralType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_literal$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const choiceEnd_Gtype_literal$ = ($: tast.TVTGtype_literal$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (nextChild) => {
                                        const choose_string = () => {
                                            GstringLiteral(node, children, ($) => {
                                                choiceEnd_Gtype_literal$(["string", $])
                                            })
                                        }
                                        const choose_null = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if (currentChild.kindName !== "NullKeyword") {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gtype_literal$_null",
                                                            child: currentChild,
                                                            expected: "NullKeyword",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: tast.TNGtype_literal$_null$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.implementationDetails)
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gtype_literal$_null$",
                                                                    child: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            choiceEnd_Gtype_literal$(["null", $])
                                                        }
                                                    )
                                                },
                                                () => {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.implementationDetails,
                                                        path: "Gtype_literal$_null",
                                                        kindNameOptions: "NullKeyword",
                                                    })
                                                },
                                            )
                                        }
                                        switch (nextChild.kindName) {
                                            case "NullKeyword": {
                                                choose_null()
                                                break
                                            }
                                            case "StringLiteral": {
                                                choose_string()
                                                break
                                            }
                                            default: {
                                                $x.reportUnexpectedChild({
                                                    path: "Gtype_literal$",
                                                    child: nextChild,
                                                    expected: "NullKeyword, StringLiteral",
                                                })
                                            }
                                        }
                                    },
                                    () => {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.implementationDetails,
                                            path: "Gtype_literal$",
                                            kindNameOptions: "NullKeyword, StringLiteral",
                                        })
                                        return
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_literal$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["literal", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_literal",
                                kindNameOptions: "LiteralType",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "FunctionType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_function",
                                    child: currentChild,
                                    expected: "FunctionType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_function$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtype_function$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGtype_function$_parameters<Annotation>>()
                                const processElement = () => {
                                    Gparameter(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "Parameter":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _parameters = $
                                    let optional: null | tast.TVTGtype_function$_returnType<Annotation> = null
                                    const setOptional = () => {
                                        Gtype(node, children, ($) => {
                                            optional = $
                                        })
                                    }
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                            }
                                        },
                                        () => {},
                                    )
                                    pl.cc(optional, ($) => {
                                        const _returnType = $
                                        sequenceEnd({
                                            "parameters": _parameters,
                                            "returnType": _returnType,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_function$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["function", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_function",
                                kindNameOptions: "FunctionType",
                            })
                        },
                    )
                }
                const choose_boolean = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "BooleanKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_boolean",
                                    child: currentChild,
                                    expected: "BooleanKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_boolean$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_boolean$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["boolean", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_boolean",
                                kindNameOptions: "BooleanKeyword",
                            })
                        },
                    )
                }
                const choose_array = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ArrayType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_array",
                                    child: currentChild,
                                    expected: "ArrayType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_array$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gtype(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_array$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["array", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_array",
                                kindNameOptions: "ArrayType",
                            })
                        },
                    )
                }
                const choose_any = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "AnyKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_any",
                                    child: currentChild,
                                    expected: "AnyKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_any$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_any$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["any", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_any",
                                kindNameOptions: "AnyKeyword",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "AnyKeyword": {
                        choose_any()
                        break
                    }
                    case "ArrayType": {
                        choose_array()
                        break
                    }
                    case "BooleanKeyword": {
                        choose_boolean()
                        break
                    }
                    case "FunctionType": {
                        choose_function()
                        break
                    }
                    case "LiteralType": {
                        choose_literal()
                        break
                    }
                    case "ParenthesizedType": {
                        choose_parenthesized()
                        break
                    }
                    case "NeverKeyword": {
                        choose_never()
                        break
                    }
                    case "NumberKeyword": {
                        choose_number()
                        break
                    }
                    case "OptionalType": {
                        choose_optional()
                        break
                    }
                    case "TupleType": {
                        choose_tuple()
                        break
                    }
                    case "TypeLiteral": {
                        choose_typeLiteral()
                        break
                    }
                    case "StringKeyword": {
                        choose_string()
                        break
                    }
                    case "TypeReference": {
                        choose_typeReference()
                        break
                    }
                    case "UndefinedKeyword": {
                        choose_undefined()
                        break
                    }
                    case "UnionType": {
                        choose_union()
                        break
                    }
                    case "VoidKeyword": {
                        choose_void()
                        break
                    }
                    default: {
                        $x.reportUnexpectedChild({
                            path: "Gtype",
                            child: nextChild,
                            expected: "AnyKeyword, ArrayType, BooleanKeyword, FunctionType, LiteralType, ParenthesizedType, NeverKeyword, NumberKeyword, OptionalType, TupleType, TypeLiteral, StringKeyword, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                        })
                    }
                }
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gtype",
                    kindNameOptions: "AnyKeyword, ArrayType, BooleanKeyword, FunctionType, LiteralType, ParenthesizedType, NeverKeyword, NumberKeyword, OptionalType, TupleType, TypeLiteral, StringKeyword, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                })
                return
            },
        )
    }
    function GstringLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGstringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "StringLiteral") {
                    $x.reportUnexpectedChild({
                        path: "GstringLiteral",
                        child: currentChild,
                        expected: "StringLiteral",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGstringLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        annotation: $.implementationDetails,
                        value: $.value
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "GstringLiteral$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GstringLiteral",
                    kindNameOptions: "StringLiteral",
                })
            },
        )
    }
    function Gstatement(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGstatement<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gstatement = ($: tast.TVTGstatement<Annotation>) => {
            callback($)
        }
        children.pop(
            (nextChild) => {
                const choose_while = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "WhileStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_while",
                                    child: currentChild,
                                    expected: "WhileStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_while$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_while$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _condition = $
                                    Gblock(node, children, ($) => {
                                        const _block = $
                                        sequenceEnd({
                                            "condition": _condition,
                                            "block": _block,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_while$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["while", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_while",
                                kindNameOptions: "WhileStatement",
                            })
                        },
                    )
                }
                const choose_variable = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "VariableStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_variable",
                                    child: currentChild,
                                    expected: "VariableStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_variable$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_variable$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGstatement_variable$_modifiers<Annotation>>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "DeclareKeyword":
                                                    processElement()
                                                    break
                                                case "ExportKeyword":
                                                    processElement()
                                                    break
                                                case "ReadonlyKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    GvariableDeclarationList(node, children, ($) => {
                                        const _variableDeclarationList = $
                                        sequenceEnd({
                                            "modifiers": _modifiers,
                                            "variableDeclarationList": _variableDeclarationList,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_variable$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["variable", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_variable",
                                kindNameOptions: "VariableStatement",
                            })
                        },
                    )
                }
                const choose_typeAlias = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TypeAliasDeclaration") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_typeAlias",
                                    child: currentChild,
                                    expected: "TypeAliasDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_typeAlias$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_typeAlias$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGstatement_typeAlias$_modifiers<Annotation>>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "DeclareKeyword":
                                                    processElement()
                                                    break
                                                case "ExportKeyword":
                                                    processElement()
                                                    break
                                                case "ReadonlyKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        const elements = pm.createArrayBuilder<tast.TVTGstatement_typeAlias$_typeParameters<Annotation>>()
                                        const processElement = () => {
                                            GtypeParameter(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        arrayLoop: while (true) {
                                            children.pop(
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "TypeParameter":
                                                            processElement()
                                                            break
                                                        default: break arrayLoop
                                                    }
                                                },
                                                () => {
                                                    break arrayLoop
                                                },
                                            )
                                        }
                                        pl.cc(elements.getArray(), ($) => {
                                            const _typeParameters = $
                                            Gtype(node, children, ($) => {
                                                const _type = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "typeParameters": _typeParameters,
                                                    "type": _type,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_typeAlias$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["typeAlias", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_typeAlias",
                                kindNameOptions: "TypeAliasDeclaration",
                            })
                        },
                    )
                }
                const choose_try = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TryStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_try",
                                    child: currentChild,
                                    expected: "TryStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_try$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_try$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gblock(node, children, ($) => {
                                    const _block = $
                                    children.pop(
                                        (currentChild) => {
                                            if (currentChild.kindName !== "CatchClause") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gstatement_try$_catchClause",
                                                    child: currentChild,
                                                    expected: "CatchClause",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGstatement_try$_catchClause$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const sequenceEnd = ($: tast.TVTGstatement_try$_catchClause$<Annotation>) => {
                                                    callback({
                                                        annotation: node.implementationDetails,
                                                        content: $,
                                                    })
                                                }
                                                GvariableDeclaration(node, children, ($) => {
                                                    const _variable = $
                                                    Gblock(node, children, ($) => {
                                                        const _block = $
                                                        sequenceEnd({
                                                            "variable": _variable,
                                                            "block": _block,
                                                        })
                                                    })
                                                })
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gstatement_try$_catchClause$",
                                                            child: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    const _catchClause = $
                                                    sequenceEnd({
                                                        "block": _block,
                                                        "catchClause": _catchClause,
                                                    })
                                                }
                                            )
                                        },
                                        () => {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.implementationDetails,
                                                path: "Gstatement_try$_catchClause",
                                                kindNameOptions: "CatchClause",
                                            })
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_try$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["try", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_try",
                                kindNameOptions: "TryStatement",
                            })
                        },
                    )
                }
                const choose_throw = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ThrowStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_throw",
                                    child: currentChild,
                                    expected: "ThrowStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_throw$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_throw$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["throw", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_throw",
                                kindNameOptions: "ThrowStatement",
                            })
                        },
                    )
                }
                const choose_switch = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "SwitchStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_switch",
                                    child: currentChild,
                                    expected: "SwitchStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_switch$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_switch$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    children.pop(
                                        (currentChild) => {
                                            if (currentChild.kindName !== "CaseBlock") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gstatement_switch$_caseBlock",
                                                    child: currentChild,
                                                    expected: "CaseBlock",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGstatement_switch$_caseBlock$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const elements = pm.createArrayBuilder<tast.TVTGstatement_switch$_caseBlock$<Annotation>>()
                                                const processElement = () => {
                                                    const choiceEnd_Gstatement_switch$_caseBlock$ = ($: tast.TVTGstatement_switch$_caseBlock$<Annotation>) => {
                                                        elements.push($)
                                                    }
                                                    children.pop(
                                                        (nextChild) => {
                                                            const choose_default = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if (currentChild.kindName !== "DefaultClause") {
                                                                            $x.reportUnexpectedChild({
                                                                                path: "Gstatement_switch$_caseBlock$_default",
                                                                                child: currentChild,
                                                                                expected: "DefaultClause",
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.TUntypedNode<Annotation>,
                                                                            callback: ($: tast.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = pm.createStack($.children)
                                                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                            const elements = pm.createArrayBuilder<tast.TVTGstatement_switch$_caseBlock$_default$<Annotation>>()
                                                                            const processElement = () => {
                                                                                Gstatement(node, children, ($) => {
                                                                                    elements.push($)
                                                                                })
                                                                            }
                                                                            arrayLoop: while (true) {
                                                                                children.pop(
                                                                                    (nextChild) => {
                                                                                        switch (nextChild.kindName) {
                                                                                            case "Block":
                                                                                                processElement()
                                                                                                break
                                                                                            case "BreakStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "ExportDeclaration":
                                                                                                processElement()
                                                                                                break
                                                                                            case "ExpressionStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "ForStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "FunctionDeclaration":
                                                                                                processElement()
                                                                                                break
                                                                                            case "IfStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "ImportDeclaration":
                                                                                                processElement()
                                                                                                break
                                                                                            case "InterfaceDeclaration":
                                                                                                processElement()
                                                                                                break
                                                                                            case "LabeledStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "ReturnStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "SwitchStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "ThrowStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "TryStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "TypeAliasDeclaration":
                                                                                                processElement()
                                                                                                break
                                                                                            case "VariableStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            case "WhileStatement":
                                                                                                processElement()
                                                                                                break
                                                                                            default: break arrayLoop
                                                                                        }
                                                                                    },
                                                                                    () => {
                                                                                        break arrayLoop
                                                                                    },
                                                                                )
                                                                            }
                                                                            pl.cc(elements.getArray(), ($) => {
                                                                                callback({
                                                                                    annotation: node.implementationDetails,
                                                                                    content: $,
                                                                                })
                                                                            })
                                                                            children.pop(
                                                                                (nextChild) => {
                                                                                    $x.reportUnexpectedChild({
                                                                                        path: "Gstatement_switch$_caseBlock$_default$",
                                                                                        child: nextChild,
                                                                                        expected: null,
                                                                                    })
                                                                                },
                                                                                () => {},
                                                                            )
                                                                        })(
                                                                            currentChild,
                                                                            ($) => {
                                                                                choiceEnd_Gstatement_switch$_caseBlock$(["default", $])
                                                                            }
                                                                        )
                                                                    },
                                                                    () => {
                                                                        $x.reportMissingToken({
                                                                            parentAnnotation: node.implementationDetails,
                                                                            path: "Gstatement_switch$_caseBlock$_default",
                                                                            kindNameOptions: "DefaultClause",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            const choose_case = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if (currentChild.kindName !== "CaseClause") {
                                                                            $x.reportUnexpectedChild({
                                                                                path: "Gstatement_switch$_caseBlock$_case",
                                                                                child: currentChild,
                                                                                expected: "CaseClause",
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.TUntypedNode<Annotation>,
                                                                            callback: ($: tast.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = pm.createStack($.children)
                                                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                            const sequenceEnd = ($: tast.TVTGstatement_switch$_caseBlock$_case$<Annotation>) => {
                                                                                callback({
                                                                                    annotation: node.implementationDetails,
                                                                                    content: $,
                                                                                })
                                                                            }
                                                                            Gexpression(node, children, ($) => {
                                                                                const _case = $
                                                                                const elements = pm.createArrayBuilder<tast.TVTGstatement_switch$_caseBlock$_case$_statements<Annotation>>()
                                                                                const processElement = () => {
                                                                                    Gstatement(node, children, ($) => {
                                                                                        elements.push($)
                                                                                    })
                                                                                }
                                                                                arrayLoop: while (true) {
                                                                                    children.pop(
                                                                                        (nextChild) => {
                                                                                            switch (nextChild.kindName) {
                                                                                                case "Block":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "BreakStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "ExportDeclaration":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "ExpressionStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "ForStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "FunctionDeclaration":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "IfStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "ImportDeclaration":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "InterfaceDeclaration":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "LabeledStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "ReturnStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "SwitchStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "ThrowStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "TryStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "TypeAliasDeclaration":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "VariableStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                case "WhileStatement":
                                                                                                    processElement()
                                                                                                    break
                                                                                                default: break arrayLoop
                                                                                            }
                                                                                        },
                                                                                        () => {
                                                                                            break arrayLoop
                                                                                        },
                                                                                    )
                                                                                }
                                                                                pl.cc(elements.getArray(), ($) => {
                                                                                    const _statements = $
                                                                                    sequenceEnd({
                                                                                        "case": _case,
                                                                                        "statements": _statements,
                                                                                    })
                                                                                })
                                                                            })
                                                                            children.pop(
                                                                                (nextChild) => {
                                                                                    $x.reportUnexpectedChild({
                                                                                        path: "Gstatement_switch$_caseBlock$_case$",
                                                                                        child: nextChild,
                                                                                        expected: null,
                                                                                    })
                                                                                },
                                                                                () => {},
                                                                            )
                                                                        })(
                                                                            currentChild,
                                                                            ($) => {
                                                                                choiceEnd_Gstatement_switch$_caseBlock$(["case", $])
                                                                            }
                                                                        )
                                                                    },
                                                                    () => {
                                                                        $x.reportMissingToken({
                                                                            parentAnnotation: node.implementationDetails,
                                                                            path: "Gstatement_switch$_caseBlock$_case",
                                                                            kindNameOptions: "CaseClause",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            switch (nextChild.kindName) {
                                                                case "CaseClause": {
                                                                    choose_case()
                                                                    break
                                                                }
                                                                case "DefaultClause": {
                                                                    choose_default()
                                                                    break
                                                                }
                                                                default: {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gstatement_switch$_caseBlock$",
                                                                        child: nextChild,
                                                                        expected: "CaseClause, DefaultClause",
                                                                    })
                                                                }
                                                            }
                                                        },
                                                        () => {
                                                            $x.reportMissingToken({
                                                                parentAnnotation: node.implementationDetails,
                                                                path: "Gstatement_switch$_caseBlock$",
                                                                kindNameOptions: "CaseClause, DefaultClause",
                                                            })
                                                            return
                                                        },
                                                    )
                                                }
                                                arrayLoop: while (true) {
                                                    children.pop(
                                                        (nextChild) => {
                                                            switch (nextChild.kindName) {
                                                                case "CaseClause":
                                                                    processElement()
                                                                    break
                                                                case "DefaultClause":
                                                                    processElement()
                                                                    break
                                                                default: break arrayLoop
                                                            }
                                                        },
                                                        () => {
                                                            break arrayLoop
                                                        },
                                                    )
                                                }
                                                pl.cc(elements.getArray(), ($) => {
                                                    callback({
                                                        annotation: node.implementationDetails,
                                                        content: $,
                                                    })
                                                })
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gstatement_switch$_caseBlock$",
                                                            child: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    const _caseBlock = $
                                                    sequenceEnd({
                                                        "expression": _expression,
                                                        "caseBlock": _caseBlock,
                                                    })
                                                }
                                            )
                                        },
                                        () => {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.implementationDetails,
                                                path: "Gstatement_switch$_caseBlock",
                                                kindNameOptions: "CaseBlock",
                                            })
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_switch$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["switch", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_switch",
                                kindNameOptions: "SwitchStatement",
                            })
                        },
                    )
                }
                const choose_return = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ReturnStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_return",
                                    child: currentChild,
                                    expected: "ReturnStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_return$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                let optional: null | tast.TVTGstatement_return$<Annotation> = null
                                const setOptional = () => {
                                    Gexpression(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                children.pop(
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                            case "null":
                                                setOptional()
                                                break
                                        }
                                    },
                                    () => {},
                                )
                                pl.cc(optional, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_return$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["return", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_return",
                                kindNameOptions: "ReturnStatement",
                            })
                        },
                    )
                }
                const choose_labeled = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "LabeledStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_labeled",
                                    child: currentChild,
                                    expected: "LabeledStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_labeled$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_labeled$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gidentifier(node, children, ($) => {
                                    const _label = $
                                    Gstatement(node, children, ($) => {
                                        const _statement = $
                                        sequenceEnd({
                                            "label": _label,
                                            "statement": _statement,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_labeled$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["labeled", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_labeled",
                                kindNameOptions: "LabeledStatement",
                            })
                        },
                    )
                }
                const choose_interface = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "InterfaceDeclaration") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_interface",
                                    child: currentChild,
                                    expected: "InterfaceDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_interface$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_interface$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGstatement_interface$_modifiers<Annotation>>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "DeclareKeyword":
                                                    processElement()
                                                    break
                                                case "ExportKeyword":
                                                    processElement()
                                                    break
                                                case "ReadonlyKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        const elements = pm.createArrayBuilder<tast.TVTGstatement_interface$_typeParameters<Annotation>>()
                                        const processElement = () => {
                                            GtypeParameter(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        arrayLoop: while (true) {
                                            children.pop(
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "TypeParameter":
                                                            processElement()
                                                            break
                                                        default: break arrayLoop
                                                    }
                                                },
                                                () => {
                                                    break arrayLoop
                                                },
                                            )
                                        }
                                        pl.cc(elements.getArray(), ($) => {
                                            const _typeParameters = $
                                            const elements = pm.createArrayBuilder<tast.TVTGstatement_interface$_signature<Annotation>>()
                                            const processElement = () => {
                                                GtypeSignature(node, children, ($) => {
                                                    elements.push($)
                                                })
                                            }
                                            arrayLoop: while (true) {
                                                children.pop(
                                                    (nextChild) => {
                                                        switch (nextChild.kindName) {
                                                            case "ConstructSignature":
                                                                processElement()
                                                                break
                                                            case "IndexSignature":
                                                                processElement()
                                                                break
                                                            case "MethodSignature":
                                                                processElement()
                                                                break
                                                            case "PropertySignature":
                                                                processElement()
                                                                break
                                                            default: break arrayLoop
                                                        }
                                                    },
                                                    () => {
                                                        break arrayLoop
                                                    },
                                                )
                                            }
                                            pl.cc(elements.getArray(), ($) => {
                                                const _signature = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "typeParameters": _typeParameters,
                                                    "signature": _signature,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_interface$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["interface", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_interface",
                                kindNameOptions: "InterfaceDeclaration",
                            })
                        },
                    )
                }
                const choose_import = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ImportDeclaration") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_import",
                                    child: currentChild,
                                    expected: "ImportDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_import$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_import$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (currentChild) => {
                                        if (currentChild.kindName !== "ImportClause") {
                                            $x.reportUnexpectedChild({
                                                path: "Gstatement_import$_clause",
                                                child: currentChild,
                                                expected: "ImportClause",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNGstatement_import$_clause$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const choiceEnd_Gstatement_import$_clause$ = ($: tast.TVTGstatement_import$_clause$<Annotation>) => {
                                                callback({
                                                    annotation: node.implementationDetails,
                                                    content: $,
                                                })
                                            }
                                            children.pop(
                                                (nextChild) => {
                                                    const choose_named = () => {
                                                        children.pop(
                                                            (currentChild) => {
                                                                if (currentChild.kindName !== "NamedImports") {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gstatement_import$_clause$_named",
                                                                        child: currentChild,
                                                                        expected: "NamedImports",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: tast.TNGstatement_import$_clause$_named$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                    const elements = pm.createArrayBuilder<tast.TVTGstatement_import$_clause$_named$<Annotation>>()
                                                                    const processElement = () => {
                                                                        children.pop(
                                                                            (currentChild) => {
                                                                                if (currentChild.kindName !== "ImportSpecifier") {
                                                                                    $x.reportUnexpectedChild({
                                                                                        path: "Gstatement_import$_clause$_named$",
                                                                                        child: currentChild,
                                                                                        expected: "ImportSpecifier",
                                                                                    })
                                                                                    return
                                                                                }
                                                                                ((
                                                                                    $: uast.TUntypedNode<Annotation>,
                                                                                    callback: ($: tast.TNGstatement_import$_clause$_named$$<Annotation>) => void,
                                                                                ): void => {
                                                                                    const node = $
                                                                                    const children = pm.createStack($.children)
                                                                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                                    const sequenceEnd = ($: tast.TVTGstatement_import$_clause$_named$$<Annotation>) => {
                                                                                        callback({
                                                                                            annotation: node.implementationDetails,
                                                                                            content: $,
                                                                                        })
                                                                                    }
                                                                                    Gidentifier(node, children, ($) => {
                                                                                        const _name = $
                                                                                        let optional: null | tast.TVTGstatement_import$_clause$_named$$_as<Annotation> = null
                                                                                        const setOptional = () => {
                                                                                            Gidentifier(node, children, ($) => {
                                                                                                optional = $
                                                                                            })
                                                                                        }
                                                                                        children.pop(
                                                                                            (nextChild) => {
                                                                                                switch (nextChild.kindName) {
                                                                                                    case "null":
                                                                                                        setOptional()
                                                                                                        break
                                                                                                }
                                                                                            },
                                                                                            () => {},
                                                                                        )
                                                                                        pl.cc(optional, ($) => {
                                                                                            const _as = $
                                                                                            sequenceEnd({
                                                                                                "name": _name,
                                                                                                "as": _as,
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                    children.pop(
                                                                                        (nextChild) => {
                                                                                            $x.reportUnexpectedChild({
                                                                                                path: "Gstatement_import$_clause$_named$$",
                                                                                                child: nextChild,
                                                                                                expected: null,
                                                                                            })
                                                                                        },
                                                                                        () => {},
                                                                                    )
                                                                                })(
                                                                                    currentChild,
                                                                                    ($) => {
                                                                                        elements.push($)
                                                                                    }
                                                                                )
                                                                            },
                                                                            () => {
                                                                                $x.reportMissingToken({
                                                                                    parentAnnotation: node.implementationDetails,
                                                                                    path: "Gstatement_import$_clause$_named$",
                                                                                    kindNameOptions: "ImportSpecifier",
                                                                                })
                                                                            },
                                                                        )
                                                                    }
                                                                    arrayLoop: while (true) {
                                                                        children.pop(
                                                                            (nextChild) => {
                                                                                switch (nextChild.kindName) {
                                                                                    case "ImportSpecifier":
                                                                                        processElement()
                                                                                        break
                                                                                    default: break arrayLoop
                                                                                }
                                                                            },
                                                                            () => {
                                                                                break arrayLoop
                                                                            },
                                                                        )
                                                                    }
                                                                    pl.cc(elements.getArray(), ($) => {
                                                                        callback({
                                                                            annotation: node.implementationDetails,
                                                                            content: $,
                                                                        })
                                                                    })
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedChild({
                                                                                path: "Gstatement_import$_clause$_named$",
                                                                                child: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gstatement_import$_clause$(["named", $])
                                                                    }
                                                                )
                                                            },
                                                            () => {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.implementationDetails,
                                                                    path: "Gstatement_import$_clause$_named",
                                                                    kindNameOptions: "NamedImports",
                                                                })
                                                            },
                                                        )
                                                    }
                                                    const choose_namespace = () => {
                                                        children.pop(
                                                            (currentChild) => {
                                                                if (currentChild.kindName !== "NamespaceImport") {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gstatement_import$_clause$_namespace",
                                                                        child: currentChild,
                                                                        expected: "NamespaceImport",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: tast.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                    Gidentifier(node, children, ($) => {
                                                                        callback({
                                                                            annotation: node.implementationDetails,
                                                                            content: $,
                                                                        })
                                                                    })
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedChild({
                                                                                path: "Gstatement_import$_clause$_namespace$",
                                                                                child: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gstatement_import$_clause$(["namespace", $])
                                                                    }
                                                                )
                                                            },
                                                            () => {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.implementationDetails,
                                                                    path: "Gstatement_import$_clause$_namespace",
                                                                    kindNameOptions: "NamespaceImport",
                                                                })
                                                            },
                                                        )
                                                    }
                                                    switch (nextChild.kindName) {
                                                        case "NamespaceImport": {
                                                            choose_namespace()
                                                            break
                                                        }
                                                        case "NamedImports": {
                                                            choose_named()
                                                            break
                                                        }
                                                        default: {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gstatement_import$_clause$",
                                                                child: nextChild,
                                                                expected: "NamespaceImport, NamedImports",
                                                            })
                                                        }
                                                    }
                                                },
                                                () => {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.implementationDetails,
                                                        path: "Gstatement_import$_clause$",
                                                        kindNameOptions: "NamespaceImport, NamedImports",
                                                    })
                                                    return
                                                },
                                            )
                                            children.pop(
                                                (nextChild) => {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gstatement_import$_clause$",
                                                        child: nextChild,
                                                        expected: null,
                                                    })
                                                },
                                                () => {},
                                            )
                                        })(
                                            currentChild,
                                            ($) => {
                                                const _clause = $
                                                GstringLiteral(node, children, ($) => {
                                                    const _file = $
                                                    sequenceEnd({
                                                        "clause": _clause,
                                                        "file": _file,
                                                    })
                                                })
                                            }
                                        )
                                    },
                                    () => {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.implementationDetails,
                                            path: "Gstatement_import$_clause",
                                            kindNameOptions: "ImportClause",
                                        })
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_import$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["import", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_import",
                                kindNameOptions: "ImportDeclaration",
                            })
                        },
                    )
                }
                const choose_if = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "IfStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_if",
                                    child: currentChild,
                                    expected: "IfStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_if$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_if$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    Gstatement(node, children, ($) => {
                                        const _thenStatement = $
                                        let optional: null | tast.TVTGstatement_if$_elseStatement<Annotation> = null
                                        const setOptional = () => {
                                            Gstatement(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        children.pop(
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                    case "null":
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _elseStatement = $
                                            sequenceEnd({
                                                "expression": _expression,
                                                "thenStatement": _thenStatement,
                                                "elseStatement": _elseStatement,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_if$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["if", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_if",
                                kindNameOptions: "IfStatement",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "FunctionDeclaration") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_function",
                                    child: currentChild,
                                    expected: "FunctionDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_function$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_function$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGstatement_function$_modifiers<Annotation>>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "DeclareKeyword":
                                                    processElement()
                                                    break
                                                case "ExportKeyword":
                                                    processElement()
                                                    break
                                                case "ReadonlyKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        GfunctionDefinition(node, children, ($) => {
                                            const _definition = $
                                            let optional: null | tast.TVTGstatement_function$_block<Annotation> = null
                                            const setOptional = () => {
                                                Gblock(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            children.pop(
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "null":
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _block = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "definition": _definition,
                                                    "block": _block,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_function$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["function", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_function",
                                kindNameOptions: "FunctionDeclaration",
                            })
                        },
                    )
                }
                const choose_for = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ForStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_for",
                                    child: currentChild,
                                    expected: "ForStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_for$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGstatement_for$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                GvariableDeclarationList(node, children, ($) => {
                                    const _initializer = $
                                    Gexpression(node, children, ($) => {
                                        const _condition = $
                                        Gexpression(node, children, ($) => {
                                            const _incrementer = $
                                            Gblock(node, children, ($) => {
                                                const _block = $
                                                sequenceEnd({
                                                    "initializer": _initializer,
                                                    "condition": _condition,
                                                    "incrementer": _incrementer,
                                                    "block": _block,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_for$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["for", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_for",
                                kindNameOptions: "ForStatement",
                            })
                        },
                    )
                }
                const choose_expression = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ExpressionStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_expression",
                                    child: currentChild,
                                    expected: "ExpressionStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_expression$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_expression$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["expression", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_expression",
                                kindNameOptions: "ExpressionStatement",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ExportDeclaration") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_export",
                                    child: currentChild,
                                    expected: "ExportDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_export$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                GstringLiteral(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_export$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["export", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_export",
                                kindNameOptions: "ExportDeclaration",
                            })
                        },
                    )
                }
                const choose_break = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "BreakStatement") {
                                $x.reportUnexpectedChild({
                                    path: "Gstatement_break",
                                    child: currentChild,
                                    expected: "BreakStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGstatement_break$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                let optional: null | tast.TVTGstatement_break$<Annotation> = null
                                const setOptional = () => {
                                    Gidentifier(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                children.pop(
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "null":
                                                setOptional()
                                                break
                                        }
                                    },
                                    () => {},
                                )
                                pl.cc(optional, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gstatement_break$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["break", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_break",
                                kindNameOptions: "BreakStatement",
                            })
                        },
                    )
                }
                const choose_block = () => {
                    Gblock(node, children, ($) => {
                        choiceEnd_Gstatement(["block", $])
                    })
                }
                switch (nextChild.kindName) {
                    case "Block": {
                        choose_block()
                        break
                    }
                    case "BreakStatement": {
                        choose_break()
                        break
                    }
                    case "ExportDeclaration": {
                        choose_export()
                        break
                    }
                    case "ExpressionStatement": {
                        choose_expression()
                        break
                    }
                    case "ForStatement": {
                        choose_for()
                        break
                    }
                    case "FunctionDeclaration": {
                        choose_function()
                        break
                    }
                    case "IfStatement": {
                        choose_if()
                        break
                    }
                    case "ImportDeclaration": {
                        choose_import()
                        break
                    }
                    case "InterfaceDeclaration": {
                        choose_interface()
                        break
                    }
                    case "LabeledStatement": {
                        choose_labeled()
                        break
                    }
                    case "ReturnStatement": {
                        choose_return()
                        break
                    }
                    case "SwitchStatement": {
                        choose_switch()
                        break
                    }
                    case "ThrowStatement": {
                        choose_throw()
                        break
                    }
                    case "TryStatement": {
                        choose_try()
                        break
                    }
                    case "TypeAliasDeclaration": {
                        choose_typeAlias()
                        break
                    }
                    case "VariableStatement": {
                        choose_variable()
                        break
                    }
                    case "WhileStatement": {
                        choose_while()
                        break
                    }
                    default: {
                        $x.reportUnexpectedChild({
                            path: "Gstatement",
                            child: nextChild,
                            expected: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, ForStatement, FunctionDeclaration, IfStatement, ImportDeclaration, InterfaceDeclaration, LabeledStatement, ReturnStatement, SwitchStatement, ThrowStatement, TryStatement, TypeAliasDeclaration, VariableStatement, WhileStatement",
                        })
                    }
                }
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gstatement",
                    kindNameOptions: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, ForStatement, FunctionDeclaration, IfStatement, ImportDeclaration, InterfaceDeclaration, LabeledStatement, ReturnStatement, SwitchStatement, ThrowStatement, TryStatement, TypeAliasDeclaration, VariableStatement, WhileStatement",
                })
                return
            },
        )
    }
    function Gparameter(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGparameter<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "Parameter") {
                    $x.reportUnexpectedChild({
                        path: "Gparameter",
                        child: currentChild,
                        expected: "Parameter",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGparameter$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGparameter$<Annotation>) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        let optional: null | tast.TVTGparameter$_questionToken<Annotation> = null
                        const setOptional = () => {
                            children.pop(
                                (currentChild) => {
                                    if (currentChild.kindName !== "QuestionToken") {
                                        $x.reportUnexpectedChild({
                                            path: "Gparameter$_questionToken",
                                            child: currentChild,
                                            expected: "QuestionToken",
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: tast.TNGparameter$_questionToken$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children = pm.createStack($.children)
                                        callback($.implementationDetails)
                                        children.pop(
                                            (nextChild) => {
                                                $x.reportUnexpectedChild({
                                                    path: "Gparameter$_questionToken$",
                                                    child: nextChild,
                                                    expected: null,
                                                })
                                            },
                                            () => {},
                                        )
                                    })(
                                        currentChild,
                                        ($) => {
                                            optional = $
                                        }
                                    )
                                },
                                () => {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.implementationDetails,
                                        path: "Gparameter$_questionToken",
                                        kindNameOptions: "QuestionToken",
                                    })
                                },
                            )
                        }
                        children.pop(
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case "null":
                                        setOptional()
                                        break
                                }
                            },
                            () => {},
                        )
                        pl.cc(optional, ($) => {
                            const _questionToken = $
                            let optional: null | tast.TVTGparameter$_type<Annotation> = null
                            const setOptional = () => {
                                Gtype(node, children, ($) => {
                                    optional = $
                                })
                            }
                            children.pop(
                                (nextChild) => {
                                    switch (nextChild.kindName) {
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                        case "null":
                                            setOptional()
                                            break
                                    }
                                },
                                () => {},
                            )
                            pl.cc(optional, ($) => {
                                const _type = $
                                sequenceEnd({
                                    "name": _name,
                                    "questionToken": _questionToken,
                                    "type": _type,
                                })
                            })
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "Gparameter$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gparameter",
                    kindNameOptions: "Parameter",
                })
            },
        )
    }
    function GnumericLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGnumericLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "NumericLiteral") {
                    $x.reportUnexpectedChild({
                        path: "GnumericLiteral",
                        child: currentChild,
                        expected: "NumericLiteral",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGnumericLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        annotation: $.implementationDetails,
                        value: $.value
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "GnumericLiteral$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GnumericLiteral",
                    kindNameOptions: "NumericLiteral",
                })
            },
        )
    }
    function Gmodifier(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGmodifier<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gmodifier = ($: tast.TVTGmodifier<Annotation>) => {
            callback($)
        }
        children.pop(
            (nextChild) => {
                const choose_readonly = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ReadonlyKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gmodifier_readonly",
                                    child: currentChild,
                                    expected: "ReadonlyKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGmodifier_readonly$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gmodifier_readonly$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gmodifier(["readonly", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gmodifier_readonly",
                                kindNameOptions: "ReadonlyKeyword",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ExportKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gmodifier_export",
                                    child: currentChild,
                                    expected: "ExportKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGmodifier_export$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gmodifier_export$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gmodifier(["export", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gmodifier_export",
                                kindNameOptions: "ExportKeyword",
                            })
                        },
                    )
                }
                const choose_declare = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "DeclareKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gmodifier_declare",
                                    child: currentChild,
                                    expected: "DeclareKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGmodifier_declare$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gmodifier_declare$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gmodifier(["declare", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gmodifier_declare",
                                kindNameOptions: "DeclareKeyword",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "DeclareKeyword": {
                        choose_declare()
                        break
                    }
                    case "ExportKeyword": {
                        choose_export()
                        break
                    }
                    case "ReadonlyKeyword": {
                        choose_readonly()
                        break
                    }
                    default: {
                        $x.reportUnexpectedChild({
                            path: "Gmodifier",
                            child: nextChild,
                            expected: "DeclareKeyword, ExportKeyword, ReadonlyKeyword",
                        })
                    }
                }
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gmodifier",
                    kindNameOptions: "DeclareKeyword, ExportKeyword, ReadonlyKeyword",
                })
                return
            },
        )
    }
    function GidentifierOrStringLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGidentifierOrStringLiteral<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_GidentifierOrStringLiteral = ($: tast.TVTGidentifierOrStringLiteral<Annotation>) => {
            callback($)
        }
        children.pop(
            (nextChild) => {
                const choose_stringLiteral = () => {
                    GstringLiteral(node, children, ($) => {
                        choiceEnd_GidentifierOrStringLiteral(["stringLiteral", $])
                    })
                }
                const choose_identifier = () => {
                    Gidentifier(node, children, ($) => {
                        choiceEnd_GidentifierOrStringLiteral(["identifier", $])
                    })
                }
                switch (nextChild.kindName) {
                    case "Identifier": {
                        choose_identifier()
                        break
                    }
                    case "StringLiteral": {
                        choose_stringLiteral()
                        break
                    }
                    default: {
                        $x.reportUnexpectedChild({
                            path: "GidentifierOrStringLiteral",
                            child: nextChild,
                            expected: "Identifier, StringLiteral",
                        })
                    }
                }
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GidentifierOrStringLiteral",
                    kindNameOptions: "Identifier, StringLiteral",
                })
                return
            },
        )
    }
    function Gidentifier(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGidentifier<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "Identifier") {
                    $x.reportUnexpectedChild({
                        path: "Gidentifier",
                        child: currentChild,
                        expected: "Identifier",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGidentifier$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        annotation: $.implementationDetails,
                        value: $.value
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "Gidentifier$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gidentifier",
                    kindNameOptions: "Identifier",
                })
            },
        )
    }
    function GfunctionDefinition(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGfunctionDefinition<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const sequenceEnd = ($: tast.TVTGfunctionDefinition<Annotation>) => {
            callback($)
        }
        const elements = pm.createArrayBuilder<tast.TVTGfunctionDefinition_typeParameters<Annotation>>()
        const processElement = () => {
            GtypeParameter(node, children, ($) => {
                elements.push($)
            })
        }
        arrayLoop: while (true) {
            children.pop(
                (nextChild) => {
                    switch (nextChild.kindName) {
                        case "TypeParameter":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                },
                () => {
                    break arrayLoop
                },
            )
        }
        pl.cc(elements.getArray(), ($) => {
            const _typeParameters = $
            const elements = pm.createArrayBuilder<tast.TVTGfunctionDefinition_parameters<Annotation>>()
            const processElement = () => {
                Gparameter(node, children, ($) => {
                    elements.push($)
                })
            }
            arrayLoop: while (true) {
                children.pop(
                    (nextChild) => {
                        switch (nextChild.kindName) {
                            case "Parameter":
                                processElement()
                                break
                            default: break arrayLoop
                        }
                    },
                    () => {
                        break arrayLoop
                    },
                )
            }
            pl.cc(elements.getArray(), ($) => {
                const _parameters = $
                let optional: null | tast.TVTGfunctionDefinition_returnType<Annotation> = null
                const setOptional = () => {
                    Gtype(node, children, ($) => {
                        optional = $
                    })
                }
                children.pop(
                    (nextChild) => {
                        switch (nextChild.kindName) {
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                            case "null":
                                setOptional()
                                break
                        }
                    },
                    () => {},
                )
                pl.cc(optional, ($) => {
                    const _returnType = $
                    sequenceEnd({
                        "typeParameters": _typeParameters,
                        "parameters": _parameters,
                        "returnType": _returnType,
                    })
                })
            })
        })
    }
    function Gexpression(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGexpression<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gexpression = ($: tast.TVTGexpression<Annotation>) => {
            callback($)
        }
        children.pop(
            (nextChild) => {
                const choose_true = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TrueKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_true",
                                    child: currentChild,
                                    expected: "TrueKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_true$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_true$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["true", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_true",
                                kindNameOptions: "TrueKeyword",
                            })
                        },
                    )
                }
                const choose_template = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TemplateExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_template",
                                    child: currentChild,
                                    expected: "TemplateExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_template$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_template$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (currentChild) => {
                                        if (currentChild.kindName !== "TemplateHead") {
                                            $x.reportUnexpectedChild({
                                                path: "Gexpression_template$_head",
                                                child: currentChild,
                                                expected: "TemplateHead",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNGexpression_template$_head$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            callback({
                                                annotation: $.implementationDetails,
                                                value: $.value
                                            })
                                            children.pop(
                                                (nextChild) => {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gexpression_template$_head$",
                                                        child: nextChild,
                                                        expected: null,
                                                    })
                                                },
                                                () => {},
                                            )
                                        })(
                                            currentChild,
                                            ($) => {
                                                const _head = $
                                                const elements = pm.createArrayBuilder<tast.TVTGexpression_template$_spans<Annotation>>()
                                                const processElement = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if (currentChild.kindName !== "TemplateSpan") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gexpression_template$_spans",
                                                                    child: currentChild,
                                                                    expected: "TemplateSpan",
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNGexpression_template$_spans$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children = pm.createStack($.children)
                                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                const sequenceEnd = ($: tast.TVTGexpression_template$_spans$<Annotation>) => {
                                                                    callback({
                                                                        annotation: node.implementationDetails,
                                                                        content: $,
                                                                    })
                                                                }
                                                                Gexpression(node, children, ($) => {
                                                                    const _expression = $
                                                                    const choiceEnd_Gexpression_template$_spans$_x = ($: tast.TVTGexpression_template$_spans$_x<Annotation>) => {
                                                                        const _x = $
                                                                        sequenceEnd({
                                                                            "expression": _expression,
                                                                            "x": _x,
                                                                        })
                                                                    }
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            const choose_tail = () => {
                                                                                children.pop(
                                                                                    (currentChild) => {
                                                                                        if (currentChild.kindName !== "TemplateTail") {
                                                                                            $x.reportUnexpectedChild({
                                                                                                path: "Gexpression_template$_spans$_x_tail",
                                                                                                child: currentChild,
                                                                                                expected: "TemplateTail",
                                                                                            })
                                                                                            return
                                                                                        }
                                                                                        ((
                                                                                            $: uast.TUntypedNode<Annotation>,
                                                                                            callback: ($: tast.TNGexpression_template$_spans$_x_tail$<Annotation>) => void,
                                                                                        ): void => {
                                                                                            const node = $
                                                                                            const children = pm.createStack($.children)
                                                                                            callback({
                                                                                                annotation: $.implementationDetails,
                                                                                                value: $.value
                                                                                            })
                                                                                            children.pop(
                                                                                                (nextChild) => {
                                                                                                    $x.reportUnexpectedChild({
                                                                                                        path: "Gexpression_template$_spans$_x_tail$",
                                                                                                        child: nextChild,
                                                                                                        expected: null,
                                                                                                    })
                                                                                                },
                                                                                                () => {},
                                                                                            )
                                                                                        })(
                                                                                            currentChild,
                                                                                            ($) => {
                                                                                                choiceEnd_Gexpression_template$_spans$_x(["tail", $])
                                                                                            }
                                                                                        )
                                                                                    },
                                                                                    () => {
                                                                                        $x.reportMissingToken({
                                                                                            parentAnnotation: node.implementationDetails,
                                                                                            path: "Gexpression_template$_spans$_x_tail",
                                                                                            kindNameOptions: "TemplateTail",
                                                                                        })
                                                                                    },
                                                                                )
                                                                            }
                                                                            const choose_middle = () => {
                                                                                children.pop(
                                                                                    (currentChild) => {
                                                                                        if (currentChild.kindName !== "TemplateMiddle") {
                                                                                            $x.reportUnexpectedChild({
                                                                                                path: "Gexpression_template$_spans$_x_middle",
                                                                                                child: currentChild,
                                                                                                expected: "TemplateMiddle",
                                                                                            })
                                                                                            return
                                                                                        }
                                                                                        ((
                                                                                            $: uast.TUntypedNode<Annotation>,
                                                                                            callback: ($: tast.TNGexpression_template$_spans$_x_middle$<Annotation>) => void,
                                                                                        ): void => {
                                                                                            const node = $
                                                                                            const children = pm.createStack($.children)
                                                                                            callback({
                                                                                                annotation: $.implementationDetails,
                                                                                                value: $.value
                                                                                            })
                                                                                            children.pop(
                                                                                                (nextChild) => {
                                                                                                    $x.reportUnexpectedChild({
                                                                                                        path: "Gexpression_template$_spans$_x_middle$",
                                                                                                        child: nextChild,
                                                                                                        expected: null,
                                                                                                    })
                                                                                                },
                                                                                                () => {},
                                                                                            )
                                                                                        })(
                                                                                            currentChild,
                                                                                            ($) => {
                                                                                                choiceEnd_Gexpression_template$_spans$_x(["middle", $])
                                                                                            }
                                                                                        )
                                                                                    },
                                                                                    () => {
                                                                                        $x.reportMissingToken({
                                                                                            parentAnnotation: node.implementationDetails,
                                                                                            path: "Gexpression_template$_spans$_x_middle",
                                                                                            kindNameOptions: "TemplateMiddle",
                                                                                        })
                                                                                    },
                                                                                )
                                                                            }
                                                                            switch (nextChild.kindName) {
                                                                                case "TemplateMiddle": {
                                                                                    choose_middle()
                                                                                    break
                                                                                }
                                                                                case "TemplateTail": {
                                                                                    choose_tail()
                                                                                    break
                                                                                }
                                                                                default: {
                                                                                    $x.reportUnexpectedChild({
                                                                                        path: "Gexpression_template$_spans$_x",
                                                                                        child: nextChild,
                                                                                        expected: "TemplateMiddle, TemplateTail",
                                                                                    })
                                                                                }
                                                                            }
                                                                        },
                                                                        () => {
                                                                            $x.reportMissingToken({
                                                                                parentAnnotation: node.implementationDetails,
                                                                                path: "Gexpression_template$_spans$_x",
                                                                                kindNameOptions: "TemplateMiddle, TemplateTail",
                                                                            })
                                                                            return
                                                                        },
                                                                    )
                                                                })
                                                                children.pop(
                                                                    (nextChild) => {
                                                                        $x.reportUnexpectedChild({
                                                                            path: "Gexpression_template$_spans$",
                                                                            child: nextChild,
                                                                            expected: null,
                                                                        })
                                                                    },
                                                                    () => {},
                                                                )
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    elements.push($)
                                                                }
                                                            )
                                                        },
                                                        () => {
                                                            $x.reportMissingToken({
                                                                parentAnnotation: node.implementationDetails,
                                                                path: "Gexpression_template$_spans",
                                                                kindNameOptions: "TemplateSpan",
                                                            })
                                                        },
                                                    )
                                                }
                                                arrayLoop: while (true) {
                                                    children.pop(
                                                        (nextChild) => {
                                                            switch (nextChild.kindName) {
                                                                case "TemplateSpan":
                                                                    processElement()
                                                                    break
                                                                default: break arrayLoop
                                                            }
                                                        },
                                                        () => {
                                                            break arrayLoop
                                                        },
                                                    )
                                                }
                                                pl.cc(elements.getArray(), ($) => {
                                                    const _spans = $
                                                    sequenceEnd({
                                                        "head": _head,
                                                        "spans": _spans,
                                                    })
                                                })
                                            }
                                        )
                                    },
                                    () => {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.implementationDetails,
                                            path: "Gexpression_template$_head",
                                            kindNameOptions: "TemplateHead",
                                        })
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_template$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["template", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_template",
                                kindNameOptions: "TemplateExpression",
                            })
                        },
                    )
                }
                const choose_stringLiteral = () => {
                    GstringLiteral(node, children, ($) => {
                        choiceEnd_Gexpression(["stringLiteral", $])
                    })
                }
                const choose_propertyAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "PropertyAccessExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_propertyAccess",
                                    child: currentChild,
                                    expected: "PropertyAccessExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_propertyAccess$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_propertyAccess$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _object = $
                                    Gexpression(node, children, ($) => {
                                        const _property = $
                                        sequenceEnd({
                                            "object": _object,
                                            "property": _property,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_propertyAccess$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["propertyAccess", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_propertyAccess",
                                kindNameOptions: "PropertyAccessExpression",
                            })
                        },
                    )
                }
                const choose_prefixUnary = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "PrefixUnaryExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_prefixUnary",
                                    child: currentChild,
                                    expected: "PrefixUnaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_prefixUnary$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_prefixUnary$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["prefixUnary", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_prefixUnary",
                                kindNameOptions: "PrefixUnaryExpression",
                            })
                        },
                    )
                }
                const choose_postfixUnary = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "PostfixUnaryExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_postfixUnary",
                                    child: currentChild,
                                    expected: "PostfixUnaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_postfixUnary$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_postfixUnary$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["postfixUnary", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_postfixUnary",
                                kindNameOptions: "PostfixUnaryExpression",
                            })
                        },
                    )
                }
                const choose_parenthesizedExpression = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ParenthesizedExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_parenthesizedExpression",
                                    child: currentChild,
                                    expected: "ParenthesizedExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_parenthesizedExpression$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_parenthesizedExpression$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["parenthesizedExpression", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_parenthesizedExpression",
                                kindNameOptions: "ParenthesizedExpression",
                            })
                        },
                    )
                }
                const choose_objectLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ObjectLiteralExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_objectLiteral",
                                    child: currentChild,
                                    expected: "ObjectLiteralExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_objectLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const elements = pm.createArrayBuilder<tast.TVTGexpression_objectLiteral$<Annotation>>()
                                const processElement = () => {
                                    children.pop(
                                        (currentChild) => {
                                            if (currentChild.kindName !== "PropertyAssignment") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gexpression_objectLiteral$",
                                                    child: currentChild,
                                                    expected: "PropertyAssignment",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGexpression_objectLiteral$$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const sequenceEnd = ($: tast.TVTGexpression_objectLiteral$$<Annotation>) => {
                                                    callback({
                                                        annotation: node.implementationDetails,
                                                        content: $,
                                                    })
                                                }
                                                const choiceEnd_Gexpression_objectLiteral$$_name = ($: tast.TVTGexpression_objectLiteral$$_name<Annotation>) => {
                                                    const _name = $
                                                    Gexpression(node, children, ($) => {
                                                        const _expression = $
                                                        sequenceEnd({
                                                            "name": _name,
                                                            "expression": _expression,
                                                        })
                                                    })
                                                }
                                                children.pop(
                                                    (nextChild) => {
                                                        const choose_stringLiteral = () => {
                                                            GstringLiteral(node, children, ($) => {
                                                                choiceEnd_Gexpression_objectLiteral$$_name(["stringLiteral", $])
                                                            })
                                                        }
                                                        const choose_numericLiteral = () => {
                                                            GnumericLiteral(node, children, ($) => {
                                                                choiceEnd_Gexpression_objectLiteral$$_name(["numericLiteral", $])
                                                            })
                                                        }
                                                        const choose_identifier = () => {
                                                            Gidentifier(node, children, ($) => {
                                                                choiceEnd_Gexpression_objectLiteral$$_name(["identifier", $])
                                                            })
                                                        }
                                                        switch (nextChild.kindName) {
                                                            case "Identifier": {
                                                                choose_identifier()
                                                                break
                                                            }
                                                            case "NumericLiteral": {
                                                                choose_numericLiteral()
                                                                break
                                                            }
                                                            case "StringLiteral": {
                                                                choose_stringLiteral()
                                                                break
                                                            }
                                                            default: {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gexpression_objectLiteral$$_name",
                                                                    child: nextChild,
                                                                    expected: "Identifier, NumericLiteral, StringLiteral",
                                                                })
                                                            }
                                                        }
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_objectLiteral$$_name",
                                                            kindNameOptions: "Identifier, NumericLiteral, StringLiteral",
                                                        })
                                                        return
                                                    },
                                                )
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gexpression_objectLiteral$$",
                                                            child: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    elements.push($)
                                                }
                                            )
                                        },
                                        () => {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.implementationDetails,
                                                path: "Gexpression_objectLiteral$",
                                                kindNameOptions: "PropertyAssignment",
                                            })
                                        },
                                    )
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "PropertyAssignment":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_objectLiteral$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["objectLiteral", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_objectLiteral",
                                kindNameOptions: "ObjectLiteralExpression",
                            })
                        },
                    )
                }
                const choose_nullKeyword = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NullKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_nullKeyword",
                                    child: currentChild,
                                    expected: "NullKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_nullKeyword$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_nullKeyword$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["nullKeyword", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_nullKeyword",
                                kindNameOptions: "NullKeyword",
                            })
                        },
                    )
                }
                const choose_numericLiteral = () => {
                    GnumericLiteral(node, children, ($) => {
                        choiceEnd_Gexpression(["numericLiteral", $])
                    })
                }
                const choose_noSubstitutionTemplateLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_noSubstitutionTemplateLiteral",
                                    child: currentChild,
                                    expected: "NoSubstitutionTemplateLiteral",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_noSubstitutionTemplateLiteral$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["noSubstitutionTemplateLiteral", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_noSubstitutionTemplateLiteral",
                                kindNameOptions: "NoSubstitutionTemplateLiteral",
                            })
                        },
                    )
                }
                const choose_new = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NewExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_new",
                                    child: currentChild,
                                    expected: "NewExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_new$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_new$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gidentifier(node, children, ($) => {
                                    const _class = $
                                    const elements = pm.createArrayBuilder<tast.TVTGexpression_new$_parameters<Annotation>>()
                                    const processElement = () => {
                                        Gexpression(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    arrayLoop: while (true) {
                                        children.pop(
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "ArrayLiteralExpression":
                                                        processElement()
                                                        break
                                                    case "ArrowFunction":
                                                        processElement()
                                                        break
                                                    case "BinaryExpression":
                                                        processElement()
                                                        break
                                                    case "CallExpression":
                                                        processElement()
                                                        break
                                                    case "ConditionalExpression":
                                                        processElement()
                                                        break
                                                    case "ElementAccessExpression":
                                                        processElement()
                                                        break
                                                    case "FalseKeyword":
                                                        processElement()
                                                        break
                                                    case "Identifier":
                                                        processElement()
                                                        break
                                                    case "NewExpression":
                                                        processElement()
                                                        break
                                                    case "NoSubstitutionTemplateLiteral":
                                                        processElement()
                                                        break
                                                    case "NumericLiteral":
                                                        processElement()
                                                        break
                                                    case "NullKeyword":
                                                        processElement()
                                                        break
                                                    case "ObjectLiteralExpression":
                                                        processElement()
                                                        break
                                                    case "ParenthesizedExpression":
                                                        processElement()
                                                        break
                                                    case "PostfixUnaryExpression":
                                                        processElement()
                                                        break
                                                    case "PrefixUnaryExpression":
                                                        processElement()
                                                        break
                                                    case "PropertyAccessExpression":
                                                        processElement()
                                                        break
                                                    case "StringLiteral":
                                                        processElement()
                                                        break
                                                    case "TemplateExpression":
                                                        processElement()
                                                        break
                                                    case "TrueKeyword":
                                                        processElement()
                                                        break
                                                    default: break arrayLoop
                                                }
                                            },
                                            () => {
                                                break arrayLoop
                                            },
                                        )
                                    }
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        sequenceEnd({
                                            "class": _class,
                                            "parameters": _parameters,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_new$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["new", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_new",
                                kindNameOptions: "NewExpression",
                            })
                        },
                    )
                }
                const choose_identifier = () => {
                    Gidentifier(node, children, ($) => {
                        choiceEnd_Gexpression(["identifier", $])
                    })
                }
                const choose_false = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "FalseKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_false",
                                    child: currentChild,
                                    expected: "FalseKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_false$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_false$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["false", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_false",
                                kindNameOptions: "FalseKeyword",
                            })
                        },
                    )
                }
                const choose_elementAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ElementAccessExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_elementAccess",
                                    child: currentChild,
                                    expected: "ElementAccessExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_elementAccess$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_elementAccess$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _array = $
                                    Gexpression(node, children, ($) => {
                                        const _element = $
                                        sequenceEnd({
                                            "array": _array,
                                            "element": _element,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_elementAccess$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["elementAccess", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_elementAccess",
                                kindNameOptions: "ElementAccessExpression",
                            })
                        },
                    )
                }
                const choose_conditional = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ConditionalExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_conditional",
                                    child: currentChild,
                                    expected: "ConditionalExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_conditional$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_conditional$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _test = $
                                    children.pop(
                                        (currentChild) => {
                                            if (currentChild.kindName !== "QuestionToken") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gexpression_conditional$_questionToken",
                                                    child: currentChild,
                                                    expected: "QuestionToken",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGexpression_conditional$_questionToken$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                callback($.implementationDetails)
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedChild({
                                                            path: "Gexpression_conditional$_questionToken$",
                                                            child: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    const _questionToken = $
                                                    Gexpression(node, children, ($) => {
                                                        const _ifExpression = $
                                                        children.pop(
                                                            (currentChild) => {
                                                                if (currentChild.kindName !== "ColonToken") {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_conditional$_colonToken",
                                                                        child: currentChild,
                                                                        expected: "ColonToken",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: tast.TNGexpression_conditional$_colonToken$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    callback($.implementationDetails)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedChild({
                                                                                path: "Gexpression_conditional$_colonToken$",
                                                                                child: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        const _colonToken = $
                                                                        Gexpression(node, children, ($) => {
                                                                            const _elseExpression = $
                                                                            sequenceEnd({
                                                                                "test": _test,
                                                                                "questionToken": _questionToken,
                                                                                "ifExpression": _ifExpression,
                                                                                "colonToken": _colonToken,
                                                                                "elseExpression": _elseExpression,
                                                                            })
                                                                        })
                                                                    }
                                                                )
                                                            },
                                                            () => {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.implementationDetails,
                                                                    path: "Gexpression_conditional$_colonToken",
                                                                    kindNameOptions: "ColonToken",
                                                                })
                                                            },
                                                        )
                                                    })
                                                }
                                            )
                                        },
                                        () => {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.implementationDetails,
                                                path: "Gexpression_conditional$_questionToken",
                                                kindNameOptions: "QuestionToken",
                                            })
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_conditional$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["conditional", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_conditional",
                                kindNameOptions: "ConditionalExpression",
                            })
                        },
                    )
                }
                const choose_call = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "CallExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_call",
                                    child: currentChild,
                                    expected: "CallExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_call$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_call$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _function = $
                                    const elements = pm.createArrayBuilder<tast.TVTGexpression_call$_typeParameters<Annotation>>()
                                    const processElement = () => {
                                        Gtype(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    arrayLoop: while (true) {
                                        children.pop(
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "AnyKeyword":
                                                        processElement()
                                                        break
                                                    case "ArrayType":
                                                        processElement()
                                                        break
                                                    case "BooleanKeyword":
                                                        processElement()
                                                        break
                                                    case "FunctionType":
                                                        processElement()
                                                        break
                                                    case "LiteralType":
                                                        processElement()
                                                        break
                                                    case "ParenthesizedType":
                                                        processElement()
                                                        break
                                                    case "NeverKeyword":
                                                        processElement()
                                                        break
                                                    case "NumberKeyword":
                                                        processElement()
                                                        break
                                                    case "OptionalType":
                                                        processElement()
                                                        break
                                                    case "TupleType":
                                                        processElement()
                                                        break
                                                    case "TypeLiteral":
                                                        processElement()
                                                        break
                                                    case "StringKeyword":
                                                        processElement()
                                                        break
                                                    case "TypeReference":
                                                        processElement()
                                                        break
                                                    case "UndefinedKeyword":
                                                        processElement()
                                                        break
                                                    case "UnionType":
                                                        processElement()
                                                        break
                                                    case "VoidKeyword":
                                                        processElement()
                                                        break
                                                    default: break arrayLoop
                                                }
                                            },
                                            () => {
                                                break arrayLoop
                                            },
                                        )
                                    }
                                    pl.cc(elements.getArray(), ($) => {
                                        const _typeParameters = $
                                        const elements = pm.createArrayBuilder<tast.TVTGexpression_call$_parameters<Annotation>>()
                                        const processElement = () => {
                                            Gexpression(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        arrayLoop: while (true) {
                                            children.pop(
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "ArrayLiteralExpression":
                                                            processElement()
                                                            break
                                                        case "ArrowFunction":
                                                            processElement()
                                                            break
                                                        case "BinaryExpression":
                                                            processElement()
                                                            break
                                                        case "CallExpression":
                                                            processElement()
                                                            break
                                                        case "ConditionalExpression":
                                                            processElement()
                                                            break
                                                        case "ElementAccessExpression":
                                                            processElement()
                                                            break
                                                        case "FalseKeyword":
                                                            processElement()
                                                            break
                                                        case "Identifier":
                                                            processElement()
                                                            break
                                                        case "NewExpression":
                                                            processElement()
                                                            break
                                                        case "NoSubstitutionTemplateLiteral":
                                                            processElement()
                                                            break
                                                        case "NumericLiteral":
                                                            processElement()
                                                            break
                                                        case "NullKeyword":
                                                            processElement()
                                                            break
                                                        case "ObjectLiteralExpression":
                                                            processElement()
                                                            break
                                                        case "ParenthesizedExpression":
                                                            processElement()
                                                            break
                                                        case "PostfixUnaryExpression":
                                                            processElement()
                                                            break
                                                        case "PrefixUnaryExpression":
                                                            processElement()
                                                            break
                                                        case "PropertyAccessExpression":
                                                            processElement()
                                                            break
                                                        case "StringLiteral":
                                                            processElement()
                                                            break
                                                        case "TemplateExpression":
                                                            processElement()
                                                            break
                                                        case "TrueKeyword":
                                                            processElement()
                                                            break
                                                        default: break arrayLoop
                                                    }
                                                },
                                                () => {
                                                    break arrayLoop
                                                },
                                            )
                                        }
                                        pl.cc(elements.getArray(), ($) => {
                                            const _parameters = $
                                            sequenceEnd({
                                                "function": _function,
                                                "typeParameters": _typeParameters,
                                                "parameters": _parameters,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_call$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["call", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_call",
                                kindNameOptions: "CallExpression",
                            })
                        },
                    )
                }
                const choose_binary = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "BinaryExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_binary",
                                    child: currentChild,
                                    expected: "BinaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_binary$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_binary$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _leftHandSide = $
                                    const choiceEnd_Gexpression_binary$_operator = ($: tast.TVTGexpression_binary$_operator<Annotation>) => {
                                        const _operator = $
                                        Gexpression(node, children, ($) => {
                                            const _rightHandSide = $
                                            sequenceEnd({
                                                "leftHandSide": _leftHandSide,
                                                "operator": _operator,
                                                "rightHandSide": _rightHandSide,
                                            })
                                        })
                                    }
                                    children.pop(
                                        (nextChild) => {
                                            const choose_plusEquals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "PlusEqualsToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_plusEquals",
                                                                child: currentChild,
                                                                expected: "PlusEqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_plusEquals$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_plusEquals$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["plusEquals", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_plusEquals",
                                                            kindNameOptions: "PlusEqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_plus = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "PlusToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_plus",
                                                                child: currentChild,
                                                                expected: "PlusToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_plus$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_plus$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["plus", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_plus",
                                                            kindNameOptions: "PlusToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_minusEquals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "MinusEqualsToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_minusEquals",
                                                                child: currentChild,
                                                                expected: "MinusEqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_minusEquals$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_minusEquals$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["minusEquals", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_minusEquals",
                                                            kindNameOptions: "MinusEqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_minus = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "MinusToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_minus",
                                                                child: currentChild,
                                                                expected: "MinusToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_minus$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_minus$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["minus", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_minus",
                                                            kindNameOptions: "MinusToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_lessThan = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "LessThanToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_lessThan",
                                                                child: currentChild,
                                                                expected: "LessThanToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_lessThan$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_lessThan$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["lessThan", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_lessThan",
                                                            kindNameOptions: "LessThanToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_greaterThan = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "GreaterThanToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_greaterThan",
                                                                child: currentChild,
                                                                expected: "GreaterThanToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_greaterThan$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_greaterThan$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["greaterThan", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_greaterThan",
                                                            kindNameOptions: "GreaterThanToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_exclamationEqualsEquals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "ExclamationEqualsEqualsToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                                                child: currentChild,
                                                                expected: "ExclamationEqualsEqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_exclamationEqualsEquals$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["exclamationEqualsEquals", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_exclamationEqualsEquals",
                                                            kindNameOptions: "ExclamationEqualsEqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_equalsEqualsEquals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "EqualsEqualsEqualsToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                                                child: currentChild,
                                                                expected: "EqualsEqualsEqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_equalsEqualsEquals$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["equalsEqualsEquals", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                                            kindNameOptions: "EqualsEqualsEqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_equals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "EqualsToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_equals",
                                                                child: currentChild,
                                                                expected: "EqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_equals$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_equals$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["equals", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_equals",
                                                            kindNameOptions: "EqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_barBar = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "BarBarToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_barBar",
                                                                child: currentChild,
                                                                expected: "BarBarToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_barBar$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_barBar$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["barBar", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_barBar",
                                                            kindNameOptions: "BarBarToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_ampersandAmpersand = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "AmpersandAmpersandToken") {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_binary$_operator_ampersandAmpersand",
                                                                child: currentChild,
                                                                expected: "AmpersandAmpersandToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gexpression_binary$_operator_ampersandAmpersand$",
                                                                        child: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["ampersandAmpersand", $])
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_ampersandAmpersand",
                                                            kindNameOptions: "AmpersandAmpersandToken",
                                                        })
                                                    },
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case "AmpersandAmpersandToken": {
                                                    choose_ampersandAmpersand()
                                                    break
                                                }
                                                case "BarBarToken": {
                                                    choose_barBar()
                                                    break
                                                }
                                                case "EqualsToken": {
                                                    choose_equals()
                                                    break
                                                }
                                                case "EqualsEqualsEqualsToken": {
                                                    choose_equalsEqualsEquals()
                                                    break
                                                }
                                                case "ExclamationEqualsEqualsToken": {
                                                    choose_exclamationEqualsEquals()
                                                    break
                                                }
                                                case "GreaterThanToken": {
                                                    choose_greaterThan()
                                                    break
                                                }
                                                case "LessThanToken": {
                                                    choose_lessThan()
                                                    break
                                                }
                                                case "MinusToken": {
                                                    choose_minus()
                                                    break
                                                }
                                                case "MinusEqualsToken": {
                                                    choose_minusEquals()
                                                    break
                                                }
                                                case "PlusToken": {
                                                    choose_plus()
                                                    break
                                                }
                                                case "PlusEqualsToken": {
                                                    choose_plusEquals()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gexpression_binary$_operator",
                                                        child: nextChild,
                                                        expected: "AmpersandAmpersandToken, BarBarToken, EqualsToken, EqualsEqualsEqualsToken, ExclamationEqualsEqualsToken, GreaterThanToken, LessThanToken, MinusToken, MinusEqualsToken, PlusToken, PlusEqualsToken",
                                                    })
                                                }
                                            }
                                        },
                                        () => {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.implementationDetails,
                                                path: "Gexpression_binary$_operator",
                                                kindNameOptions: "AmpersandAmpersandToken, BarBarToken, EqualsToken, EqualsEqualsEqualsToken, ExclamationEqualsEqualsToken, GreaterThanToken, LessThanToken, MinusToken, MinusEqualsToken, PlusToken, PlusEqualsToken",
                                            })
                                            return
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_binary$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["binary", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_binary",
                                kindNameOptions: "BinaryExpression",
                            })
                        },
                    )
                }
                const choose_arrowFunction = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ArrowFunction") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_arrowFunction",
                                    child: currentChild,
                                    expected: "ArrowFunction",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_arrowFunction$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGexpression_arrowFunction$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<tast.TVTGexpression_arrowFunction$_parameters<Annotation>>()
                                const processElement = () => {
                                    Gparameter(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "Parameter":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    const _parameters = $
                                    let optional: null | tast.TVTGexpression_arrowFunction$_returnType<Annotation> = null
                                    const setOptional = () => {
                                        Gtype(node, children, ($) => {
                                            optional = $
                                        })
                                    }
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                                case "null":
                                                    setOptional()
                                                    break
                                            }
                                        },
                                        () => {},
                                    )
                                    pl.cc(optional, ($) => {
                                        const _returnType = $
                                        children.pop(
                                            (currentChild) => {
                                                if (currentChild.kindName !== "EqualsGreaterThanToken") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                        child: currentChild,
                                                        expected: "EqualsGreaterThanToken",
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children = pm.createStack($.children)
                                                    callback($.implementationDetails)
                                                    children.pop(
                                                        (nextChild) => {
                                                            $x.reportUnexpectedChild({
                                                                path: "Gexpression_arrowFunction$_equalsGreaterThan$",
                                                                child: nextChild,
                                                                expected: null,
                                                            })
                                                        },
                                                        () => {},
                                                    )
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        const _equalsGreaterThan = $
                                                        const choiceEnd_Gexpression_arrowFunction$_implementation = ($: tast.TVTGexpression_arrowFunction$_implementation<Annotation>) => {
                                                            const _implementation = $
                                                            sequenceEnd({
                                                                "parameters": _parameters,
                                                                "returnType": _returnType,
                                                                "equalsGreaterThan": _equalsGreaterThan,
                                                                "implementation": _implementation,
                                                            })
                                                        }
                                                        children.pop(
                                                            (nextChild) => {
                                                                const choose_expression = () => {
                                                                    Gexpression(node, children, ($) => {
                                                                        choiceEnd_Gexpression_arrowFunction$_implementation(["expression", $])
                                                                    })
                                                                }
                                                                const choose_block = () => {
                                                                    Gblock(node, children, ($) => {
                                                                        choiceEnd_Gexpression_arrowFunction$_implementation(["block", $])
                                                                    })
                                                                }
                                                                switch (nextChild.kindName) {
                                                                    case "Block": {
                                                                        choose_block()
                                                                        break
                                                                    }
                                                                    case "ArrayLiteralExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "ArrowFunction": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "BinaryExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "CallExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "ConditionalExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "ElementAccessExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "FalseKeyword": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "Identifier": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "NewExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "NoSubstitutionTemplateLiteral": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "NumericLiteral": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "NullKeyword": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "ObjectLiteralExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "ParenthesizedExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "PostfixUnaryExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "PrefixUnaryExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "PropertyAccessExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "StringLiteral": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "TemplateExpression": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    case "TrueKeyword": {
                                                                        choose_expression()
                                                                        break
                                                                    }
                                                                    default: {
                                                                        $x.reportUnexpectedChild({
                                                                            path: "Gexpression_arrowFunction$_implementation",
                                                                            child: nextChild,
                                                                            expected: "Block, ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                                                                        })
                                                                    }
                                                                }
                                                            },
                                                            () => {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.implementationDetails,
                                                                    path: "Gexpression_arrowFunction$_implementation",
                                                                    kindNameOptions: "Block, ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                                                                })
                                                                return
                                                            },
                                                        )
                                                    }
                                                )
                                            },
                                            () => {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.implementationDetails,
                                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                    kindNameOptions: "EqualsGreaterThanToken",
                                                })
                                            },
                                        )
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_arrowFunction$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["arrowFunction", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_arrowFunction",
                                kindNameOptions: "ArrowFunction",
                            })
                        },
                    )
                }
                const choose_arrayLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ArrayLiteralExpression") {
                                $x.reportUnexpectedChild({
                                    path: "Gexpression_arrayLiteral",
                                    child: currentChild,
                                    expected: "ArrayLiteralExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGexpression_arrayLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const elements = pm.createArrayBuilder<tast.TVTGexpression_arrayLiteral$<Annotation>>()
                                const processElement = () => {
                                    Gexpression(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                arrayLoop: while (true) {
                                    children.pop(
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "ArrayLiteralExpression":
                                                    processElement()
                                                    break
                                                case "ArrowFunction":
                                                    processElement()
                                                    break
                                                case "BinaryExpression":
                                                    processElement()
                                                    break
                                                case "CallExpression":
                                                    processElement()
                                                    break
                                                case "ConditionalExpression":
                                                    processElement()
                                                    break
                                                case "ElementAccessExpression":
                                                    processElement()
                                                    break
                                                case "FalseKeyword":
                                                    processElement()
                                                    break
                                                case "Identifier":
                                                    processElement()
                                                    break
                                                case "NewExpression":
                                                    processElement()
                                                    break
                                                case "NoSubstitutionTemplateLiteral":
                                                    processElement()
                                                    break
                                                case "NumericLiteral":
                                                    processElement()
                                                    break
                                                case "NullKeyword":
                                                    processElement()
                                                    break
                                                case "ObjectLiteralExpression":
                                                    processElement()
                                                    break
                                                case "ParenthesizedExpression":
                                                    processElement()
                                                    break
                                                case "PostfixUnaryExpression":
                                                    processElement()
                                                    break
                                                case "PrefixUnaryExpression":
                                                    processElement()
                                                    break
                                                case "PropertyAccessExpression":
                                                    processElement()
                                                    break
                                                case "StringLiteral":
                                                    processElement()
                                                    break
                                                case "TemplateExpression":
                                                    processElement()
                                                    break
                                                case "TrueKeyword":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        },
                                        () => {
                                            break arrayLoop
                                        },
                                    )
                                }
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedChild({
                                            path: "Gexpression_arrayLiteral$",
                                            child: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["arrayLiteral", $])
                                }
                            )
                        },
                        () => {
                            $x.reportMissingToken({
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_arrayLiteral",
                                kindNameOptions: "ArrayLiteralExpression",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "ArrayLiteralExpression": {
                        choose_arrayLiteral()
                        break
                    }
                    case "ArrowFunction": {
                        choose_arrowFunction()
                        break
                    }
                    case "BinaryExpression": {
                        choose_binary()
                        break
                    }
                    case "CallExpression": {
                        choose_call()
                        break
                    }
                    case "ConditionalExpression": {
                        choose_conditional()
                        break
                    }
                    case "ElementAccessExpression": {
                        choose_elementAccess()
                        break
                    }
                    case "FalseKeyword": {
                        choose_false()
                        break
                    }
                    case "Identifier": {
                        choose_identifier()
                        break
                    }
                    case "NewExpression": {
                        choose_new()
                        break
                    }
                    case "NoSubstitutionTemplateLiteral": {
                        choose_noSubstitutionTemplateLiteral()
                        break
                    }
                    case "NumericLiteral": {
                        choose_numericLiteral()
                        break
                    }
                    case "NullKeyword": {
                        choose_nullKeyword()
                        break
                    }
                    case "ObjectLiteralExpression": {
                        choose_objectLiteral()
                        break
                    }
                    case "ParenthesizedExpression": {
                        choose_parenthesizedExpression()
                        break
                    }
                    case "PostfixUnaryExpression": {
                        choose_postfixUnary()
                        break
                    }
                    case "PrefixUnaryExpression": {
                        choose_prefixUnary()
                        break
                    }
                    case "PropertyAccessExpression": {
                        choose_propertyAccess()
                        break
                    }
                    case "StringLiteral": {
                        choose_stringLiteral()
                        break
                    }
                    case "TemplateExpression": {
                        choose_template()
                        break
                    }
                    case "TrueKeyword": {
                        choose_true()
                        break
                    }
                    default: {
                        $x.reportUnexpectedChild({
                            path: "Gexpression",
                            child: nextChild,
                            expected: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                        })
                    }
                }
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gexpression",
                    kindNameOptions: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NewExpression, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                })
                return
            },
        )
    }
    function Gblock(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: tast.TGblock<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "Block") {
                    $x.reportUnexpectedChild({
                        path: "Gblock",
                        child: currentChild,
                        expected: "Block",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGblock$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements = pm.createArrayBuilder<tast.TVTGblock$<Annotation>>()
                    const processElement = () => {
                        Gstatement(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    arrayLoop: while (true) {
                        children.pop(
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case "Block":
                                        processElement()
                                        break
                                    case "BreakStatement":
                                        processElement()
                                        break
                                    case "ExportDeclaration":
                                        processElement()
                                        break
                                    case "ExpressionStatement":
                                        processElement()
                                        break
                                    case "ForStatement":
                                        processElement()
                                        break
                                    case "FunctionDeclaration":
                                        processElement()
                                        break
                                    case "IfStatement":
                                        processElement()
                                        break
                                    case "ImportDeclaration":
                                        processElement()
                                        break
                                    case "InterfaceDeclaration":
                                        processElement()
                                        break
                                    case "LabeledStatement":
                                        processElement()
                                        break
                                    case "ReturnStatement":
                                        processElement()
                                        break
                                    case "SwitchStatement":
                                        processElement()
                                        break
                                    case "ThrowStatement":
                                        processElement()
                                        break
                                    case "TryStatement":
                                        processElement()
                                        break
                                    case "TypeAliasDeclaration":
                                        processElement()
                                        break
                                    case "VariableStatement":
                                        processElement()
                                        break
                                    case "WhileStatement":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            },
                            () => {
                                break arrayLoop
                            },
                        )
                    }
                    pl.cc(elements.getArray(), ($) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedChild({
                                path: "Gblock$",
                                child: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => {
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gblock",
                    kindNameOptions: "Block",
                })
            },
        )
    }
    if ($.kindName !== "SourceFile") {
        $x.reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNroot<Annotation>) => void,
        ): void => {
            const node = $
            const children = pm.createStack($.children)
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTroot<Annotation>) => {
                callback({
                    annotation: node.implementationDetails,
                    content: $,
                })
            }
            const elements = pm.createArrayBuilder<tast.TVTroot_statements<Annotation>>()
            const processElement = () => {
                Gstatement(node, children, ($) => {
                    elements.push($)
                })
            }
            arrayLoop: while (true) {
                children.pop(
                    (nextChild) => {
                        switch (nextChild.kindName) {
                            case "Block":
                                processElement()
                                break
                            case "BreakStatement":
                                processElement()
                                break
                            case "ExportDeclaration":
                                processElement()
                                break
                            case "ExpressionStatement":
                                processElement()
                                break
                            case "ForStatement":
                                processElement()
                                break
                            case "FunctionDeclaration":
                                processElement()
                                break
                            case "IfStatement":
                                processElement()
                                break
                            case "ImportDeclaration":
                                processElement()
                                break
                            case "InterfaceDeclaration":
                                processElement()
                                break
                            case "LabeledStatement":
                                processElement()
                                break
                            case "ReturnStatement":
                                processElement()
                                break
                            case "SwitchStatement":
                                processElement()
                                break
                            case "ThrowStatement":
                                processElement()
                                break
                            case "TryStatement":
                                processElement()
                                break
                            case "TypeAliasDeclaration":
                                processElement()
                                break
                            case "VariableStatement":
                                processElement()
                                break
                            case "WhileStatement":
                                processElement()
                                break
                            default: break arrayLoop
                        }
                    },
                    () => {
                        break arrayLoop
                    },
                )
            }
            pl.cc(elements.getArray(), ($) => {
                const _statements = $
                children.pop(
                    (currentChild) => {
                        if (currentChild.kindName !== "EndOfFileToken") {
                            $x.reportUnexpectedChild({
                                path: "root_endOfFile",
                                child: currentChild,
                                expected: "EndOfFileToken",
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNroot_endOfFile$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children = pm.createStack($.children)
                            callback($.implementationDetails)
                            children.pop(
                                (nextChild) => {
                                    $x.reportUnexpectedChild({
                                        path: "root_endOfFile$",
                                        child: nextChild,
                                        expected: null,
                                    })
                                },
                                () => {},
                            )
                        })(
                            currentChild,
                            ($) => {
                                const _endOfFile = $
                                sequenceEnd({
                                    "statements": _statements,
                                    "endOfFile": _endOfFile,
                                })
                            }
                        )
                    },
                    () => {
                        $x.reportMissingToken({
                            parentAnnotation: node.implementationDetails,
                            path: "root_endOfFile",
                            kindNameOptions: "EndOfFileToken",
                        })
                    },
                )
            })
            children.pop(
                (nextChild) => {
                    $x.reportUnexpectedChild({
                        path: "root",
                        child: nextChild,
                        expected: null,
                    })
                },
                () => {},
            )
        })(
            $,
            ($) => {
                $x.callback($)
            },
        )
    }
}