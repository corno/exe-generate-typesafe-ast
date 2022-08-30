import * as pl from "pareto-core-lib"
import * as api from "../../interface/types/ts_api"
import * as foox from "../../interface/interfaces/visitor"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.IVisitor<Annotation>,
): void {
    function X_block(
        $: api.TGblock<Annotation>,
    ) {
        ((
            $: api.TNGblock$<Annotation>,
        ) => {
            if (foo["$block/*Block"] !== undefined) { foo["$block/*Block"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_statement($)
                })
            })
            if (foo["$block/*Block"] !== undefined) { foo["$block/*Block"].end($) }
        })($)
    }
    function X_expression(
        $: api.TGexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrayLiteral$<Annotation>,
                    ) => {
                        if (foo["$expression/?arrayLiteral/*ArrayLiteralExpression"] !== undefined) { foo["$expression/?arrayLiteral/*ArrayLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?arrayLiteral/*ArrayLiteralExpression"] !== undefined) { foo["$expression/?arrayLiteral/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "arrowFunction": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_arrowFunction$<Annotation>,
                    ) => {
                        if (foo["$expression/?arrowFunction/*ArrowFunction"] !== undefined) { foo["$expression/?arrowFunction/*ArrowFunction"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                            pl.cc($["equalsGreaterThan"], ($) => {
                                ((
                                    $: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if (foo["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"] !== undefined) { foo["$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
                                })($)
                            })
                            pl.cc($["implementation"], ($) => {
                                switch ($[0]) {
                                    case "block": {
                                        pl.cc($[1], ($) => {
                                            X_block($)
                                        })
                                        break
                                    }
                                    case "expression": {
                                        pl.cc($[1], ($) => {
                                            X_expression($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                        })
                        if (foo["$expression/?arrowFunction/*ArrowFunction"] !== undefined) { foo["$expression/?arrowFunction/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "binary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_binary$<Annotation>,
                    ) => {
                        if (foo["$expression/?binary/*BinaryExpression"] !== undefined) { foo["$expression/?binary/*BinaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["leftHandSide"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "ampersandAmpersand": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_ampersandAmpersand$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?ampersandAmpersand/*AmpersandAmpersandToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "barBar": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_barBar$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?barBar/*BarBarToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "equalsEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_equalsEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "exclamationEqualsEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_exclamationEqualsEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "greaterThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_greaterThan$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?greaterThan/*GreaterThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "lessThan": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_lessThan$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?lessThan/*LessThanToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minus$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?minus/*MinusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "minusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_minusEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?minusEquals/*MinusEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plus": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plus$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?plus/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "plusEquals": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGexpression_binary$_operator_plusEquals$<Annotation>,
                                            ) => {
                                                if (foo["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"] !== undefined) { foo["$expression/?binary/*BinaryExpression/.operator/?plusEquals/*PlusEqualsToken"]($) }
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
                        if (foo["$expression/?binary/*BinaryExpression"] !== undefined) { foo["$expression/?binary/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "call": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_call$<Annotation>,
                    ) => {
                        if (foo["$expression/?call/*CallExpression"] !== undefined) { foo["$expression/?call/*CallExpression"].begin($) }
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
                        if (foo["$expression/?call/*CallExpression"] !== undefined) { foo["$expression/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_conditional$<Annotation>,
                    ) => {
                        if (foo["$expression/?conditional/*ConditionalExpression"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["test"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pl.cc($["ifExpression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["colonToken"], ($) => {
                                ((
                                    $: api.TNGexpression_conditional$_colonToken$<Annotation>,
                                ) => {
                                    if (foo["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"]($) }
                                })($)
                            })
                            pl.cc($["elseExpression"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?conditional/*ConditionalExpression"] !== undefined) { foo["$expression/?conditional/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "elementAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_elementAccess$<Annotation>,
                    ) => {
                        if (foo["$expression/?elementAccess/*ElementAccessExpression"] !== undefined) { foo["$expression/?elementAccess/*ElementAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["array"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["element"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?elementAccess/*ElementAccessExpression"] !== undefined) { foo["$expression/?elementAccess/*ElementAccessExpression"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_false$<Annotation>,
                    ) => {
                        if (foo["$expression/?false/*FalseKeyword"] !== undefined) { foo["$expression/?false/*FalseKeyword"]($) }
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
            case "new": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_new$<Annotation>,
                    ) => {
                        if (foo["$expression/?new/*NewExpression"] !== undefined) { foo["$expression/?new/*NewExpression"].begin($) }
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
                        if (foo["$expression/?new/*NewExpression"] !== undefined) { foo["$expression/?new/*NewExpression"].end($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (foo["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"] !== undefined) { foo["$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"]($) }
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
            case "nullKeyword": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_nullKeyword$<Annotation>,
                    ) => {
                        if (foo["$expression/?nullKeyword/*NullKeyword"] !== undefined) { foo["$expression/?nullKeyword/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["$expression/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGexpression_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["name"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pl.cc($[1], ($) => {
                                                        X_identifier($)
                                                    })
                                                    break
                                                }
                                                case "numericLiteral": {
                                                    pl.cc($[1], ($) => {
                                                        X_numericLiteral($)
                                                    })
                                                    break
                                                }
                                                case "stringLiteral": {
                                                    pl.cc($[1], ($) => {
                                                        X_stringLiteral($)
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
                                    if (foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].end($) }
                                })($)
                            })
                        })
                        if (foo["$expression/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$expression/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "parenthesizedExpression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_parenthesizedExpression$<Annotation>,
                    ) => {
                        if (foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"] !== undefined) { foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"] !== undefined) { foo["$expression/?parenthesizedExpression/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            case "postfixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_postfixUnary$<Annotation>,
                    ) => {
                        if (foo["$expression/?postfixUnary/*PostfixUnaryExpression"] !== undefined) { foo["$expression/?postfixUnary/*PostfixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$expression/?postfixUnary/*PostfixUnaryExpression"] !== undefined) { foo["$expression/?postfixUnary/*PostfixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnary": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_prefixUnary$<Annotation>,
                    ) => {
                        if (foo["$expression/?prefixUnary/*PrefixUnaryExpression"] !== undefined) { foo["$expression/?prefixUnary/*PrefixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$expression/?prefixUnary/*PrefixUnaryExpression"] !== undefined) { foo["$expression/?prefixUnary/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "propertyAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_propertyAccess$<Annotation>,
                    ) => {
                        if (foo["$expression/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$expression/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["object"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["property"], ($) => {
                                X_expression($)
                            })
                        })
                        if (foo["$expression/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$expression/?propertyAccess/*PropertyAccessExpression"].end($) }
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
            case "template": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_template$<Annotation>,
                    ) => {
                        if (foo["$expression/?template/*TemplateExpression"] !== undefined) { foo["$expression/?template/*TemplateExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["head"], ($) => {
                                ((
                                    $: api.TNGexpression_template$_head$<Annotation>,
                                ) => {
                                    if (foo["$expression/?template/*TemplateExpression/.head/*TemplateHead"] !== undefined) { foo["$expression/?template/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pl.cc($["spans"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGexpression_template$_spans$<Annotation>,
                                    ) => {
                                        if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["expression"], ($) => {
                                                X_expression($)
                                            })
                                            pl.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGexpression_template$_spans$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"] !== undefined) { foo["$expression/?template/*TemplateExpression/.spans/*TemplateSpan"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (foo["$expression/?template/*TemplateExpression"] !== undefined) { foo["$expression/?template/*TemplateExpression"].end($) }
                    })($)
                })
                break
            }
            case "true": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGexpression_true$<Annotation>,
                    ) => {
                        if (foo["$expression/?true/*TrueKeyword"] !== undefined) { foo["$expression/?true/*TrueKeyword"]($) }
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
            if ($ === null) {
                //FIXME??
            } else {
                X_type($)
            }
        })
    }
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (foo["$identifier/*Identifier"] !== undefined) { foo["$identifier/*Identifier"]($) }
        })($)
    }
    function X_identifierOrStringLiteral(
        $: api.TGidentifierOrStringLiteral<Annotation>,
    ) {
        switch ($[0]) {
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    X_stringLiteral($)
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
            case "declare": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_declare$<Annotation>,
                    ) => {
                        if (foo["$modifier/?declare/*DeclareKeyword"] !== undefined) { foo["$modifier/?declare/*DeclareKeyword"]($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_export$<Annotation>,
                    ) => {
                        if (foo["$modifier/?export/*ExportKeyword"] !== undefined) { foo["$modifier/?export/*ExportKeyword"]($) }
                    })($)
                })
                break
            }
            case "readonly": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGmodifier_readonly$<Annotation>,
                    ) => {
                        if (foo["$modifier/?readonly/*ReadonlyKeyword"] !== undefined) { foo["$modifier/?readonly/*ReadonlyKeyword"]($) }
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
            if (foo["$numericLiteral/*NumericLiteral"] !== undefined) { foo["$numericLiteral/*NumericLiteral"]($) }
        })($)
    }
    function X_parameter(
        $: api.TGparameter<Annotation>,
    ) {
        ((
            $: api.TNGparameter$<Annotation>,
        ) => {
            if (foo["$parameter/*Parameter"] !== undefined) { foo["$parameter/*Parameter"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["questionToken"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        ((
                            $: api.TNGparameter$_questionToken$<Annotation>,
                        ) => {
                            if (foo["$parameter/*Parameter/.questionToken/*QuestionToken"] !== undefined) { foo["$parameter/*Parameter/.questionToken/*QuestionToken"]($) }
                        })($)
                    }
                })
                pl.cc($["type"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        X_type($)
                    }
                })
            })
            if (foo["$parameter/*Parameter"] !== undefined) { foo["$parameter/*Parameter"].end($) }
        })($)
    }
    function X_statement(
        $: api.TGstatement<Annotation>,
    ) {
        switch ($[0]) {
            case "block": {
                pl.cc($[1], ($) => {
                    X_block($)
                })
                break
            }
            case "break": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_break$<Annotation>,
                    ) => {
                        if (foo["$statement/?break/*BreakStatement"] !== undefined) { foo["$statement/?break/*BreakStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_identifier($)
                            }
                        })
                        if (foo["$statement/?break/*BreakStatement"] !== undefined) { foo["$statement/?break/*BreakStatement"].end($) }
                    })($)
                })
                break
            }
            case "export": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_export$<Annotation>,
                    ) => {
                        if (foo["$statement/?export/*ExportDeclaration"] !== undefined) { foo["$statement/?export/*ExportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            X_stringLiteral($)
                        })
                        if (foo["$statement/?export/*ExportDeclaration"] !== undefined) { foo["$statement/?export/*ExportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "expression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_expression$<Annotation>,
                    ) => {
                        if (foo["$statement/?expression/*ExpressionStatement"] !== undefined) { foo["$statement/?expression/*ExpressionStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$statement/?expression/*ExpressionStatement"] !== undefined) { foo["$statement/?expression/*ExpressionStatement"].end($) }
                    })($)
                })
                break
            }
            case "for": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_for$<Annotation>,
                    ) => {
                        if (foo["$statement/?for/*ForStatement"] !== undefined) { foo["$statement/?for/*ForStatement"].begin($) }
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
                        if (foo["$statement/?for/*ForStatement"] !== undefined) { foo["$statement/?for/*ForStatement"].end($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_function$<Annotation>,
                    ) => {
                        if (foo["$statement/?function/*FunctionDeclaration"] !== undefined) { foo["$statement/?function/*FunctionDeclaration"].begin($) }
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
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_block($)
                                }
                            })
                        })
                        if (foo["$statement/?function/*FunctionDeclaration"] !== undefined) { foo["$statement/?function/*FunctionDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "if": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_if$<Annotation>,
                    ) => {
                        if (foo["$statement/?if/*IfStatement"] !== undefined) { foo["$statement/?if/*IfStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["thenStatement"], ($) => {
                                X_statement($)
                            })
                            pl.cc($["elseStatement"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_statement($)
                                }
                            })
                        })
                        if (foo["$statement/?if/*IfStatement"] !== undefined) { foo["$statement/?if/*IfStatement"].end($) }
                    })($)
                })
                break
            }
            case "import": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_import$<Annotation>,
                    ) => {
                        if (foo["$statement/?import/*ImportDeclaration"] !== undefined) { foo["$statement/?import/*ImportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["clause"], ($) => {
                                ((
                                    $: api.TNGstatement_import$_clause$<Annotation>,
                                ) => {
                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNGstatement_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNGstatement_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pl.cc($.content, ($) => {
                                                                        pl.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pl.cc($["as"], ($) => {
                                                                            if ($ === null) {
                                                                                //FIXME??
                                                                            } else {
                                                                                X_identifier($)
                                                                            }
                                                                        })
                                                                    })
                                                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pl.au($[0])
                                        }
                                    })
                                    if (foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["$statement/?import/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pl.cc($["file"], ($) => {
                                X_stringLiteral($)
                            })
                        })
                        if (foo["$statement/?import/*ImportDeclaration"] !== undefined) { foo["$statement/?import/*ImportDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "interface": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_interface$<Annotation>,
                    ) => {
                        if (foo["$statement/?interface/*InterfaceDeclaration"] !== undefined) { foo["$statement/?interface/*InterfaceDeclaration"].begin($) }
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
                        if (foo["$statement/?interface/*InterfaceDeclaration"] !== undefined) { foo["$statement/?interface/*InterfaceDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "labeled": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_labeled$<Annotation>,
                    ) => {
                        if (foo["$statement/?labeled/*LabeledStatement"] !== undefined) { foo["$statement/?labeled/*LabeledStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["label"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["statement"], ($) => {
                                X_statement($)
                            })
                        })
                        if (foo["$statement/?labeled/*LabeledStatement"] !== undefined) { foo["$statement/?labeled/*LabeledStatement"].end($) }
                    })($)
                })
                break
            }
            case "return": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_return$<Annotation>,
                    ) => {
                        if (foo["$statement/?return/*ReturnStatement"] !== undefined) { foo["$statement/?return/*ReturnStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                X_expression($)
                            }
                        })
                        if (foo["$statement/?return/*ReturnStatement"] !== undefined) { foo["$statement/?return/*ReturnStatement"].end($) }
                    })($)
                })
                break
            }
            case "switch": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_switch$<Annotation>,
                    ) => {
                        if (foo["$statement/?switch/*SwitchStatement"] !== undefined) { foo["$statement/?switch/*SwitchStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["expression"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["caseBlock"], ($) => {
                                ((
                                    $: api.TNGstatement_switch$_caseBlock$<Annotation>,
                                ) => {
                                    if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].begin($) }
                                    pl.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "case": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_case$<Annotation>,
                                                        ) => {
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].begin($) }
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
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "default": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGstatement_switch$_caseBlock$_default$<Annotation>,
                                                        ) => {
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                $.forEach(($) => {
                                                                    X_statement($)
                                                                })
                                                            })
                                                            if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    if (foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"] !== undefined) { foo["$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"].end($) }
                                })($)
                            })
                        })
                        if (foo["$statement/?switch/*SwitchStatement"] !== undefined) { foo["$statement/?switch/*SwitchStatement"].end($) }
                    })($)
                })
                break
            }
            case "throw": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_throw$<Annotation>,
                    ) => {
                        if (foo["$statement/?throw/*ThrowStatement"] !== undefined) { foo["$statement/?throw/*ThrowStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            X_expression($)
                        })
                        if (foo["$statement/?throw/*ThrowStatement"] !== undefined) { foo["$statement/?throw/*ThrowStatement"].end($) }
                    })($)
                })
                break
            }
            case "try": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_try$<Annotation>,
                    ) => {
                        if (foo["$statement/?try/*TryStatement"] !== undefined) { foo["$statement/?try/*TryStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                            pl.cc($["catchClause"], ($) => {
                                ((
                                    $: api.TNGstatement_try$_catchClause$<Annotation>,
                                ) => {
                                    if (foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"] !== undefined) { foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["variable"], ($) => {
                                            X_variableDeclaration($)
                                        })
                                        pl.cc($["block"], ($) => {
                                            X_block($)
                                        })
                                    })
                                    if (foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"] !== undefined) { foo["$statement/?try/*TryStatement/.catchClause/*CatchClause"].end($) }
                                })($)
                            })
                        })
                        if (foo["$statement/?try/*TryStatement"] !== undefined) { foo["$statement/?try/*TryStatement"].end($) }
                    })($)
                })
                break
            }
            case "typeAlias": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_typeAlias$<Annotation>,
                    ) => {
                        if (foo["$statement/?typeAlias/*TypeAliasDeclaration"] !== undefined) { foo["$statement/?typeAlias/*TypeAliasDeclaration"].begin($) }
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
                        if (foo["$statement/?typeAlias/*TypeAliasDeclaration"] !== undefined) { foo["$statement/?typeAlias/*TypeAliasDeclaration"].end($) }
                    })($)
                })
                break
            }
            case "variable": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_variable$<Annotation>,
                    ) => {
                        if (foo["$statement/?variable/*VariableStatement"] !== undefined) { foo["$statement/?variable/*VariableStatement"].begin($) }
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
                        if (foo["$statement/?variable/*VariableStatement"] !== undefined) { foo["$statement/?variable/*VariableStatement"].end($) }
                    })($)
                })
                break
            }
            case "while": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGstatement_while$<Annotation>,
                    ) => {
                        if (foo["$statement/?while/*WhileStatement"] !== undefined) { foo["$statement/?while/*WhileStatement"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["condition"], ($) => {
                                X_expression($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["$statement/?while/*WhileStatement"] !== undefined) { foo["$statement/?while/*WhileStatement"].end($) }
                    })($)
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
            if (foo["$stringLiteral/*StringLiteral"] !== undefined) { foo["$stringLiteral/*StringLiteral"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "any": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_any$<Annotation>,
                    ) => {
                        if (foo["$type/?any/*AnyKeyword"] !== undefined) { foo["$type/?any/*AnyKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["$type/?boolean/*BooleanKeyword"] !== undefined) { foo["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "function": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_function$<Annotation>,
                    ) => {
                        if (foo["$type/?function/*FunctionType"] !== undefined) { foo["$type/?function/*FunctionType"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_parameter($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if (foo["$type/?function/*FunctionType"] !== undefined) { foo["$type/?function/*FunctionType"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literal$<Annotation>,
                    ) => {
                        if (foo["$type/?literal/*LiteralType"] !== undefined) { foo["$type/?literal/*LiteralType"].begin($) }
                        pl.cc($.content, ($) => {
                            switch ($[0]) {
                                case "null": {
                                    pl.cc($[1], ($) => {
                                        ((
                                            $: api.TNGtype_literal$_null$<Annotation>,
                                        ) => {
                                            if (foo["$type/?literal/*LiteralType/?null/*NullKeyword"] !== undefined) { foo["$type/?literal/*LiteralType/?null/*NullKeyword"]($) }
                                        })($)
                                    })
                                    break
                                }
                                case "string": {
                                    pl.cc($[1], ($) => {
                                        X_stringLiteral($)
                                    })
                                    break
                                }
                                default: pl.au($[0])
                            }
                        })
                        if (foo["$type/?literal/*LiteralType"] !== undefined) { foo["$type/?literal/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "parenthesized": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_parenthesized$<Annotation>,
                    ) => {
                        if (foo["$type/?parenthesized/*ParenthesizedType"] !== undefined) { foo["$type/?parenthesized/*ParenthesizedType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?parenthesized/*ParenthesizedType"] !== undefined) { foo["$type/?parenthesized/*ParenthesizedType"].end($) }
                    })($)
                })
                break
            }
            case "never": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_never$<Annotation>,
                    ) => {
                        if (foo["$type/?never/*NeverKeyword"] !== undefined) { foo["$type/?never/*NeverKeyword"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["$type/?number/*NumberKeyword"] !== undefined) { foo["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "optional": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_optional$<Annotation>,
                    ) => {
                        if (foo["$type/?optional/*OptionalType"] !== undefined) { foo["$type/?optional/*OptionalType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?optional/*OptionalType"] !== undefined) { foo["$type/?optional/*OptionalType"].end($) }
                    })($)
                })
                break
            }
            case "tuple": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_tuple$<Annotation>,
                    ) => {
                        if (foo["$type/?tuple/*TupleType"] !== undefined) { foo["$type/?tuple/*TupleType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["$type/?tuple/*TupleType"] !== undefined) { foo["$type/?tuple/*TupleType"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_typeSignature($)
                            })
                        })
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "string": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["$type/?string/*StringKeyword"] !== undefined) { foo["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["x"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        pl.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    case "qualifiedName": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pl.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
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
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "undefined": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_undefined$<Annotation>,
                    ) => {
                        if (foo["$type/?undefined/*UndefinedKeyword"] !== undefined) { foo["$type/?undefined/*UndefinedKeyword"]($) }
                    })($)
                })
                break
            }
            case "union": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_type($)
                            })
                        })
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            case "void": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_void$<Annotation>,
                    ) => {
                        if (foo["$type/?void/*VoidKeyword"] !== undefined) { foo["$type/?void/*VoidKeyword"]($) }
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
            if (foo["$typeParameter/*TypeParameter"] !== undefined) { foo["$typeParameter/*TypeParameter"].begin($) }
            pl.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["$typeParameter/*TypeParameter"] !== undefined) { foo["$typeParameter/*TypeParameter"].end($) }
        })($)
    }
    function X_typeSignature(
        $: api.TGtypeSignature<Annotation>,
    ) {
        switch ($[0]) {
            case "construct": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_construct$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?construct/*ConstructSignature"] !== undefined) { foo["$typeSignature/?construct/*ConstructSignature"].begin($) }
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
                        if (foo["$typeSignature/?construct/*ConstructSignature"] !== undefined) { foo["$typeSignature/?construct/*ConstructSignature"].end($) }
                    })($)
                })
                break
            }
            case "index": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_index$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?index/*IndexSignature"] !== undefined) { foo["$typeSignature/?index/*IndexSignature"].begin($) }
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
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if (foo["$typeSignature/?index/*IndexSignature"] !== undefined) { foo["$typeSignature/?index/*IndexSignature"].end($) }
                    })($)
                })
                break
            }
            case "method": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_method$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?method/*MethodSignature"] !== undefined) { foo["$typeSignature/?method/*MethodSignature"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["definition"], ($) => {
                                X_functionDefinition($)
                            })
                        })
                        if (foo["$typeSignature/?method/*MethodSignature"] !== undefined) { foo["$typeSignature/?method/*MethodSignature"].end($) }
                    })($)
                })
                break
            }
            case "property": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtypeSignature_property$<Annotation>,
                    ) => {
                        if (foo["$typeSignature/?property/*PropertySignature"] !== undefined) { foo["$typeSignature/?property/*PropertySignature"].begin($) }
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
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    ((
                                        $: api.TNGtypeSignature_property$_quesionToken$<Annotation>,
                                    ) => {
                                        if (foo["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"] !== undefined) { foo["$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"]($) }
                                    })($)
                                }
                            })
                            pl.cc($["type"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_type($)
                                }
                            })
                        })
                        if (foo["$typeSignature/?property/*PropertySignature"] !== undefined) { foo["$typeSignature/?property/*PropertySignature"].end($) }
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
            if (foo["$variableDeclaration/*VariableDeclaration"] !== undefined) { foo["$variableDeclaration/*VariableDeclaration"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["type"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        X_type($)
                    }
                })
                pl.cc($["expression"], ($) => {
                    if ($ === null) {
                        //FIXME??
                    } else {
                        X_expression($)
                    }
                })
            })
            if (foo["$variableDeclaration/*VariableDeclaration"] !== undefined) { foo["$variableDeclaration/*VariableDeclaration"].end($) }
        })($)
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList<Annotation>,
    ) {
        ((
            $: api.TNGvariableDeclarationList$<Annotation>,
        ) => {
            if (foo["$variableDeclarationList/*VariableDeclarationList"] !== undefined) { foo["$variableDeclarationList/*VariableDeclarationList"].begin($) }
            pl.cc($.content, ($) => {
                $.forEach(($) => {
                    X_variableDeclaration($)
                })
            })
            if (foo["$variableDeclarationList/*VariableDeclarationList"] !== undefined) { foo["$variableDeclarationList/*VariableDeclarationList"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (foo[""] !== undefined) { foo[""].begin($) }
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
                    if (foo["/.endOfFile/*EndOfFileToken"] !== undefined) { foo["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if (foo[""] !== undefined) { foo[""].end($) }
    })($)
}