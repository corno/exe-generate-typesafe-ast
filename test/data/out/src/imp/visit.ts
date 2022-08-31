import * as pl from "pareto-core-lib"
import * as api from "../interface"


export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    $i: {
        visitor: api.IVisitor<Annotation>,
    }
): void {
    function X_block(
        $: api.TGblock<Annotation>,
    ) {
        ((
            $: api.TNGblock$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$block/*Block"])) { $i.visitor["$block/*Block"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if (pl.isNotUndefined($i.visitor["$block/*Block"])) { $i.visitor["$block/*Block"].end($) }
        })($)
    }
    function X_expression(
        $: api.TGexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "true": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_true$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?true/*TrueKeyword"])) { $i.visitor["$expression/?true/*TrueKeyword"]($) }
                    })($)
                })
                break
            }
            case "template": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_template$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression"])) { $i.visitor["$expression/?template/*TemplateExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["head"], ($) => {
                                ((
                                    $: api.TNGexpression_template$_head$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.head/*TemplateHead"])) { $i.visitor["$expression/?template/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pl.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGexpression_template$_spans$<Annotation>,
                                    ) => {
                                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["expression"], ($) => {
                                                X_expression($)
                                            })
                                            pl.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "tail": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "middle": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"])) { $i.visitor["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?template/*TemplateExpression"])) { $i.visitor["$expression/?template/*TemplateExpression"].end($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            case "propertyAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_propertyAccess$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"])) { $i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"])) { $i.visitor["$expression/?propertyAccess/*PropertyAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_prefixUnary$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"])) { $i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"])) { $i.visitor["$expression/?prefixUnary/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_postfixUnary$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"])) { $i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"])) { $i.visitor["$expression/?postfixUnary/*PostfixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_parenthesizedExpression$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"])) { $i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"])) { $i.visitor["$expression/?parenthesizedExpression/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGexpression_objectLiteral$$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["name"], ($) => {
                                            switch ($[0]) {
                                                case "stringLiteral": {
                                                    pl.cc($[1], ($) => {
                                                        X_stringLiteral($)
                                                    })
                                                    break
                                                }
                                                case "numericLiteral": {
                                                    pl.cc($[1], ($) => {
                                                        X_numericLiteral($)
                                                    })
                                                    break
                                                }
                                                case "identifier": {
                                                    pl.cc($[1], ($) => {
                                                        X_identifier($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                        pl.cc($["expression"], ($) => {
                                            X_expression($)
                                        })
                                    })
                                    if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].end($) }
                                })($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"])) { $i.visitor["$expression/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "nullKeyword": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_nullKeyword$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?nullKeyword/*NullKeyword"])) { $i.visitor["$expression/?nullKeyword/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pl.cc($[1], ($) => {
                    X_numericLiteral($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"])) { $i.visitor["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"]($) }
                    })($)
                })
                break
            }
            case "new": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_new$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?new/*NewExpression"])) { $i.visitor["$expression/?new/*NewExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["class"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?new/*NewExpression"])) { $i.visitor["$expression/?new/*NewExpression"].end($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "false": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_false$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?false/*FalseKeyword"])) { $i.visitor["$expression/?false/*FalseKeyword"]($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_elementAccess$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?elementAccess/*ElementAccessExpression"])) { $i.visitor["$expression/?elementAccess/*ElementAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?elementAccess/*ElementAccessExpression"])) { $i.visitor["$expression/?elementAccess/*ElementAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_conditional$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression"])) { $i.visitor["$expression/?conditional/*ConditionalExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"])) { $i.visitor["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pl.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_colonToken$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"])) { $i.visitor["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"]($) }
                                })($)
                            })
                            pl.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?conditional/*ConditionalExpression"])) { $i.visitor["$expression/?conditional/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_call$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?call/*CallExpression"])) { $i.visitor["$expression/?call/*CallExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["function"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_expression($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?call/*CallExpression"])) { $i.visitor["$expression/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_binary$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression"])) { $i.visitor["$expression/?binary/*BinaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["leftHandSide"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "plusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plusEquals$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "ampersandAmpersand": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"])) { $i.visitor["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["rightHandSide"], ($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?binary/*BinaryExpression"])) { $i.visitor["$expression/?binary/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrowFunction$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?arrowFunction/*ArrowFunction"])) { $i.visitor["$expression/?arrowFunction/*ArrowFunction"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                            pl.cc($["equalsGreaterThan"], ($) => {
                                ((
                                    $: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"])) { $i.visitor["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
                                })($)
                            })
                            pl.cc($["implementation"], ($) => {
                                switch ($[0]) {
                                    case "expression": {
                                        pl.cc($[1], ($) => {
                                            X_expression($)
                                        })
                                        break
                                    }
                                    case "block": {
                                        pl.cc($[1], ($) => {
                                            X_block($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?arrowFunction/*ArrowFunction"])) { $i.visitor["$expression/?arrowFunction/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "arrayLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrayLiteral$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"])) { $i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"])) { $i.visitor["$expression/?arrayLiteral/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_functionDefinition(
        $: api.TGfunctionDefinition<Annotation>,
    ) {
        pl.cc($["typeParameters"], ($) => {
            $.forEach(($) => {
                X_typeParameter($)
            })
        })
        pl.cc($["parameters"], ($) => {
            $.forEach(($) => {
                X_parameter($)
            })
        })
        pl.cc($["returnType"], ($) => {
            if (pl.isNotNull($)) {
                X_type($)
            } else {
                //FIXME??
            }
        })
    }
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$identifier/*Identifier"])) { $i.visitor["$identifier/*Identifier"]($) }
        })($)
    }
    function X_identifierOrStringLiteral(
        $: api.TGidentifierOrStringLiteral<Annotation>,
    ) {
        switch ($[0]) {
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
                })
                break
            }
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_modifier(
        $: api.TGmodifier<Annotation>,
    ) {
        switch ($[0]) {
            case "readonly": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_readonly$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$modifier/?readonly/*ReadonlyKeyword"])) { $i.visitor["$modifier/?readonly/*ReadonlyKeyword"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_export$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$modifier/?export/*ExportKeyword"])) { $i.visitor["$modifier/?export/*ExportKeyword"]($) }
                    })($)
                })
                break
            }
            case "declare": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_declare$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$modifier/?declare/*DeclareKeyword"])) { $i.visitor["$modifier/?declare/*DeclareKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_numericLiteral(
        $: api.TGnumericLiteral<Annotation>,
    ) {
        ((
            $: api.TNGnumericLiteral$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$numericLiteral/*NumericLiteral"])) { $i.visitor["$numericLiteral/*NumericLiteral"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter<Annotation>,
    ) {
        ((
            $: api.TNGparameter$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$parameter/*Parameter"])) { $i.visitor["$parameter/*Parameter"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["questionToken"], ($) => {
                    if (pl.isNotNull($)) {
                        ((
                            $: api.TNGparameter$_questionToken$<Annotation>,
                        ) => {
                            if (pl.isNotUndefined($i.visitor["$parameter/*Parameter/.questionToken/*QuestionToken"])) { $i.visitor["$parameter/*Parameter/.questionToken/*QuestionToken"]($) }
                        })($)
                    } else {
                        //FIXME??
                    }
                })
                pl.cc($["type"], ($) => {
                    if (pl.isNotNull($)) {
                        X_type($)
                    } else {
                        //FIXME??
                    }
                })
            })
            if (pl.isNotUndefined($i.visitor["$parameter/*Parameter"])) { $i.visitor["$parameter/*Parameter"].end($) }
        })($)
    }
    function X_statement(
        $: api.TGstatement<Annotation>,
    ) {
        switch ($[0]) {
            case "while": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_while$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?while/*WhileStatement"])) { $i.visitor["$statement/?while/*WhileStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?while/*WhileStatement"])) { $i.visitor["$statement/?while/*WhileStatement"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_variable$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?variable/*VariableStatement"])) { $i.visitor["$statement/?variable/*VariableStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["variableDeclarationList"], ($) => {
                                X_variableDeclarationList($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?variable/*VariableStatement"])) { $i.visitor["$statement/?variable/*VariableStatement"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_typeAlias$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"])) { $i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pl.cc($["type"], ($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"])) { $i.visitor["$statement/?typeAlias/*TypeAliasDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_try$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement"])) { $i.visitor["$statement/?try/*TryStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                            pl.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNGstatement_try$_catchClause$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"])) { $i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pl.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"])) { $i.visitor["$statement/?try/*TryStatement/.catchClause/*CatchClause"].end($) }
                                })($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?try/*TryStatement"])) { $i.visitor["$statement/?try/*TryStatement"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_throw$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?throw/*ThrowStatement"])) { $i.visitor["$statement/?throw/*ThrowStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?throw/*ThrowStatement"])) { $i.visitor["$statement/?throw/*ThrowStatement"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_switch$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement"])) { $i.visitor["$statement/?switch/*SwitchStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].begin($) }
                                    pl.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "default": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_default$<Annotation>,
                                                        ) => {
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "case": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_case$<Annotation>,
                                                        ) => {
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["case"], ($) => {
                                                                    X_expression($)
                                                                })
                                                                pl.cc($["statements"], ($) => {
                                                                    $.forEach(($) => {
                                                                        X_statement($)
                                                                    })
                                                                })
                                                            })
                                                            if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"])) { $i.visitor["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].end($) }
                                })($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?switch/*SwitchStatement"])) { $i.visitor["$statement/?switch/*SwitchStatement"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_return$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?return/*ReturnStatement"])) { $i.visitor["$statement/?return/*ReturnStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if (pl.isNotNull($)) {
                                X_expression($)
                            } else {
                                //FIXME??
                            }
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?return/*ReturnStatement"])) { $i.visitor["$statement/?return/*ReturnStatement"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_labeled$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?labeled/*LabeledStatement"])) { $i.visitor["$statement/?labeled/*LabeledStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?labeled/*LabeledStatement"])) { $i.visitor["$statement/?labeled/*LabeledStatement"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_interface$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?interface/*InterfaceDeclaration"])) { $i.visitor["$statement/?interface/*InterfaceDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    X_typeParameter($)
                                })
                            })
                            pl.cc($["signature"], ($) => {
                                $.forEach(($) => {
                                    X_typeSignature($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?interface/*InterfaceDeclaration"])) { $i.visitor["$statement/?interface/*InterfaceDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_import$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration"])) { $i.visitor["$statement/?import/*ImportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["clause"], ($) => {
                                ((
                                    $: api.TNGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "named": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNGstatement_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pl.cc($.content, ($) => {
                                                                        pl.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pl.cc($["as"], ($) => {
                                                                            if (pl.isNotNull($)) {
                                                                                X_identifier($)
                                                                            } else {
                                                                                //FIXME??
                                                                            }
                                                                        })
                                                                    })
                                                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "namespace": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pl.au($[0])
                                        }
                                    })
                                    if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"])) { $i.visitor["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pl.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?import/*ImportDeclaration"])) { $i.visitor["$statement/?import/*ImportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_if$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?if/*IfStatement"])) { $i.visitor["$statement/?if/*IfStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["thenStatement"], ($) => {
                                X_statement($)
                            })
                            pl.cc($["elseStatement"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_statement($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?if/*IfStatement"])) { $i.visitor["$statement/?if/*IfStatement"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_function$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?function/*FunctionDeclaration"])) { $i.visitor["$statement/?function/*FunctionDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                            pl.cc($["block"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_block($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?function/*FunctionDeclaration"])) { $i.visitor["$statement/?function/*FunctionDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_for$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?for/*ForStatement"])) { $i.visitor["$statement/?for/*ForStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["initializer"], ($) => {
                                X_variableDeclarationList($)
                            })
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["incrementer"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?for/*ForStatement"])) { $i.visitor["$statement/?for/*ForStatement"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_expression$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?expression/*ExpressionStatement"])) { $i.visitor["$statement/?expression/*ExpressionStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?expression/*ExpressionStatement"])) { $i.visitor["$statement/?expression/*ExpressionStatement"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_export$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?export/*ExportDeclaration"])) { $i.visitor["$statement/?export/*ExportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?export/*ExportDeclaration"])) { $i.visitor["$statement/?export/*ExportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "break": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_break$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$statement/?break/*BreakStatement"])) { $i.visitor["$statement/?break/*BreakStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if (pl.isNotNull($)) {
                                X_identifier($)
                            } else {
                                //FIXME??
                            }
                        })
                        if (pl.isNotUndefined($i.visitor["$statement/?break/*BreakStatement"])) { $i.visitor["$statement/?break/*BreakStatement"].end($) }
                    })($)
                })
                break
            }
            case "block": {
                pl.cc($[1], ($) => {
                    X_block($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_stringLiteral(
        $: api.TGstringLiteral<Annotation>,
    ) {
        ((
            $: api.TNGstringLiteral$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$stringLiteral/*StringLiteral"])) { $i.visitor["$stringLiteral/*StringLiteral"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "void": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_void$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?void/*VoidKeyword"])) { $i.visitor["$type/?void/*VoidKeyword"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?union/*UnionType"])) { $i.visitor["$type/?union/*UnionType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?union/*UnionType"])) { $i.visitor["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_undefined$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?undefined/*UndefinedKeyword"])) { $i.visitor["$type/?undefined/*UndefinedKeyword"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference"])) { $i.visitor["$type/?typeReference/*TypeReference"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["x"], ($) => {
                                switch ($[0]) {
                                    case "qualifiedName": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>,
                                            ) => {
                                                if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"])) { $i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pl.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"])) { $i.visitor["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "identifier": {
                                        pl.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?typeReference/*TypeReference"])) { $i.visitor["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?string/*StringKeyword"])) { $i.visitor["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?typeLiteral/*TypeLiteral"])) { $i.visitor["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?typeLiteral/*TypeLiteral"])) { $i.visitor["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_tuple$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?tuple/*TupleType"])) { $i.visitor["$type/?tuple/*TupleType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?tuple/*TupleType"])) { $i.visitor["$type/?tuple/*TupleType"].end($) }
                    })($)
                })
                break
            }
            case "optional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_optional$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?optional/*OptionalType"])) { $i.visitor["$type/?optional/*OptionalType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?optional/*OptionalType"])) { $i.visitor["$type/?optional/*OptionalType"].end($) }
                    })($)
                })
                break
            }
            case "number": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?number/*NumberKeyword"])) { $i.visitor["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "never": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_never$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?never/*NeverKeyword"])) { $i.visitor["$type/?never/*NeverKeyword"]($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_parenthesized$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?parenthesized/*ParenthesizedType"])) { $i.visitor["$type/?parenthesized/*ParenthesizedType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?parenthesized/*ParenthesizedType"])) { $i.visitor["$type/?parenthesized/*ParenthesizedType"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literal$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?literal/*LiteralType"])) { $i.visitor["$type/?literal/*LiteralType"].begin($) }
                        pl.cc($.content, ($) => {
                            switch ($[0]) {
                                case "string": {
                                    pl.cc($[1], ($) => {
                                        X_stringLiteral($)
                                    })
                                    break
                                }
                                case "null": {
                                    pl.cc($[1], ($) => {
                                        ((
                                            $: api.TNGtype_literal$_null$<Annotation>,
                                        ) => {
                                            if (pl.isNotUndefined($i.visitor["$type/?literal/*LiteralType/?null/*NullKeyword"])) { $i.visitor["$type/?literal/*LiteralType/?null/*NullKeyword"]($) }
                                        })($)
                                    })
                                    break
                                }
                                default: pl.au($[0])
                            }
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?literal/*LiteralType"])) { $i.visitor["$type/?literal/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_function$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?function/*FunctionType"])) { $i.visitor["$type/?function/*FunctionType"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?function/*FunctionType"])) { $i.visitor["$type/?function/*FunctionType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?boolean/*BooleanKeyword"])) { $i.visitor["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?array/*ArrayType"])) { $i.visitor["$type/?array/*ArrayType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (pl.isNotUndefined($i.visitor["$type/?array/*ArrayType"])) { $i.visitor["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "any": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_any$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$type/?any/*AnyKeyword"])) { $i.visitor["$type/?any/*AnyKeyword"]($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_typeParameter(
        $: api.TGtypeParameter<Annotation>,
    ) {
        ((
            $: api.TNGtypeParameter$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$typeParameter/*TypeParameter"])) { $i.visitor["$typeParameter/*TypeParameter"].begin($) }
            pl.cc($.content, ($) => {
                X_identifier($)
            })
            if (pl.isNotUndefined($i.visitor["$typeParameter/*TypeParameter"])) { $i.visitor["$typeParameter/*TypeParameter"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.TGtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "property": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_property$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?property/*PropertySignature"])) { $i.visitor["$typeSignature/?property/*PropertySignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["name"], ($) => {
                                X_identifierOrStringLiteral($)
                            })
                            pl.cc($["quesionToken"], ($) => {
                                if (pl.isNotNull($)) {
                                    ((
                                        $: api.TNGtypeSignature_property$_quesionToken$<Annotation>,
                                    ) => {
                                        if (pl.isNotUndefined($i.visitor["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"])) { $i.visitor["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"]($) }
                                    })($)
                                } else {
                                    //FIXME??
                                }
                            })
                            pl.cc($["type"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?property/*PropertySignature"])) { $i.visitor["$typeSignature/?property/*PropertySignature"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_method$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?method/*MethodSignature"])) { $i.visitor["$typeSignature/?method/*MethodSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?method/*MethodSignature"])) { $i.visitor["$typeSignature/?method/*MethodSignature"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_index$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?index/*IndexSignature"])) { $i.visitor["$typeSignature/?index/*IndexSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["modifiers"], ($) => {
                                $.forEach(($) => {
                                    X_modifier($)
                                })
                            })
                            pl.cc($["parameter"], ($) => {
                                X_parameter($)
                            })
                            pl.cc($["type"], ($) => {
                                if (pl.isNotNull($)) {
                                    X_type($)
                                } else {
                                    //FIXME??
                                }
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?index/*IndexSignature"])) { $i.visitor["$typeSignature/?index/*IndexSignature"].end($) }
                    })($)
                })
                break
            }
            case "construct": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_construct$<Annotation>,
                    ) => {
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?construct/*ConstructSignature"])) { $i.visitor["$typeSignature/?construct/*ConstructSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                X_type($)
                            })
                        })
                        if (pl.isNotUndefined($i.visitor["$typeSignature/?construct/*ConstructSignature"])) { $i.visitor["$typeSignature/?construct/*ConstructSignature"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_variableDeclaration(
        $: api.TGvariableDeclaration<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclaration$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$variableDeclaration/*VariableDeclaration"])) { $i.visitor["$variableDeclaration/*VariableDeclaration"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["type"], ($) => {
                    if (pl.isNotNull($)) {
                        X_type($)
                    } else {
                        //FIXME??
                    }
                })
                pl.cc($["expression"], ($) => {
                    if (pl.isNotNull($)) {
                        X_expression($)
                    } else {
                        //FIXME??
                    }
                })
            })
            if (pl.isNotUndefined($i.visitor["$variableDeclaration/*VariableDeclaration"])) { $i.visitor["$variableDeclaration/*VariableDeclaration"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclarationList$<Annotation>,
        ) => {
            if (pl.isNotUndefined($i.visitor["$variableDeclarationList/*VariableDeclarationList"])) { $i.visitor["$variableDeclarationList/*VariableDeclarationList"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if (pl.isNotUndefined($i.visitor["$variableDeclarationList/*VariableDeclarationList"])) { $i.visitor["$variableDeclarationList/*VariableDeclarationList"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (pl.isNotUndefined($i.visitor[""])) { $i.visitor[""].begin($) }
        pl.cc($.content, ($) => {
            pl.cc($["statements"], ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            pl.cc($["endOfFile"], ($) => {
                ((
                    $: api.TNroot_endOfFile$<Annotation>,
                ) => {
                    if (pl.isNotUndefined($i.visitor["/.endOfFile/*EndOfFileToken"])) { $i.visitor["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if (pl.isNotUndefined($i.visitor[""])) { $i.visitor[""].end($) }
    })($)
}