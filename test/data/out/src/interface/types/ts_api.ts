import * as pt from "pareto-core-types"

export type TAnnotatedString = { readonly "annotation": Details; readonly "value": string }
export type TAnnotatedType<Details, Type> = { readonly "annotation": Details; readonly "content": Type }
export type TVTGvariableDeclarationList$ = TGvariableDeclaration
export type TVGvariableDeclarationList$ = pt.Array<TVTGvariableDeclarationList$>

export type TNGvariableDeclarationList$ = TAnnotatedType<Details, TVGvariableDeclarationList$>
export type TVTGvariableDeclarationList = TNGvariableDeclarationList$
export type TGvariableDeclarationList =  TVTGvariableDeclarationList
export type TVTGvariableDeclaration$_name = TGidentifier
export type TVGvariableDeclaration$_name = TVTGvariableDeclaration$_name
export type TVTGvariableDeclaration$_type = TGtype
export type TVGvariableDeclaration$_type = null | TVTGvariableDeclaration$_type
export type TVTGvariableDeclaration$_expression = TGexpression
export type TVGvariableDeclaration$_expression = null | TVTGvariableDeclaration$_expression
export type TVTGvariableDeclaration$ = {
    readonly "name":  TVGvariableDeclaration$_name
    readonly "type":  TVGvariableDeclaration$_type
    readonly "expression":  TVGvariableDeclaration$_expression
}
export type TVGvariableDeclaration$ = TVTGvariableDeclaration$

export type TNGvariableDeclaration$ = TAnnotatedType<Details, TVGvariableDeclaration$>
export type TVTGvariableDeclaration = TNGvariableDeclaration$
export type TGvariableDeclaration =  TVTGvariableDeclaration
export type TVTGtypeSignature_property$_modifiers = TGmodifier
export type TVGtypeSignature_property$_modifiers = pt.Array<TVTGtypeSignature_property$_modifiers>
export type TVTGtypeSignature_property$_name = TGidentifierOrStringLiteral
export type TVGtypeSignature_property$_name = TVTGtypeSignature_property$_name

export type TNGtypeSignature_property$_quesionToken$ = Details
export type TVTGtypeSignature_property$_quesionToken = TNGtypeSignature_property$_quesionToken$
export type TVGtypeSignature_property$_quesionToken = null | TVTGtypeSignature_property$_quesionToken
export type TVTGtypeSignature_property$_type = TGtype
export type TVGtypeSignature_property$_type = null | TVTGtypeSignature_property$_type
export type TVTGtypeSignature_property$ = {
    readonly "modifiers":  TVGtypeSignature_property$_modifiers
    readonly "name":  TVGtypeSignature_property$_name
    readonly "quesionToken":  TVGtypeSignature_property$_quesionToken
    readonly "type":  TVGtypeSignature_property$_type
}
export type TVGtypeSignature_property$ = TVTGtypeSignature_property$

export type TNGtypeSignature_property$ = TAnnotatedType<Details, TVGtypeSignature_property$>
export type TVTGtypeSignature_property = TNGtypeSignature_property$
export type TVGtypeSignature_property = TVTGtypeSignature_property
export type TVTGtypeSignature_method$_name = TGidentifier
export type TVGtypeSignature_method$_name = TVTGtypeSignature_method$_name
export type TVTGtypeSignature_method$_definition = TGfunctionDefinition
export type TVGtypeSignature_method$_definition = TVTGtypeSignature_method$_definition
export type TVTGtypeSignature_method$ = {
    readonly "name":  TVGtypeSignature_method$_name
    readonly "definition":  TVGtypeSignature_method$_definition
}
export type TVGtypeSignature_method$ = TVTGtypeSignature_method$

export type TNGtypeSignature_method$ = TAnnotatedType<Details, TVGtypeSignature_method$>
export type TVTGtypeSignature_method = TNGtypeSignature_method$
export type TVGtypeSignature_method = TVTGtypeSignature_method
export type TVTGtypeSignature_index$_modifiers = TGmodifier
export type TVGtypeSignature_index$_modifiers = pt.Array<TVTGtypeSignature_index$_modifiers>
export type TVTGtypeSignature_index$_parameter = TGparameter
export type TVGtypeSignature_index$_parameter = TVTGtypeSignature_index$_parameter
export type TVTGtypeSignature_index$_type = TGtype
export type TVGtypeSignature_index$_type = null | TVTGtypeSignature_index$_type
export type TVTGtypeSignature_index$ = {
    readonly "modifiers":  TVGtypeSignature_index$_modifiers
    readonly "parameter":  TVGtypeSignature_index$_parameter
    readonly "type":  TVGtypeSignature_index$_type
}
export type TVGtypeSignature_index$ = TVTGtypeSignature_index$

export type TNGtypeSignature_index$ = TAnnotatedType<Details, TVGtypeSignature_index$>
export type TVTGtypeSignature_index = TNGtypeSignature_index$
export type TVGtypeSignature_index = TVTGtypeSignature_index
export type TVTGtypeSignature_construct$_parameters = TGparameter
export type TVGtypeSignature_construct$_parameters = pt.Array<TVTGtypeSignature_construct$_parameters>
export type TVTGtypeSignature_construct$_returnType = TGtype
export type TVGtypeSignature_construct$_returnType = TVTGtypeSignature_construct$_returnType
export type TVTGtypeSignature_construct$ = {
    readonly "parameters":  TVGtypeSignature_construct$_parameters
    readonly "returnType":  TVGtypeSignature_construct$_returnType
}
export type TVGtypeSignature_construct$ = TVTGtypeSignature_construct$

export type TNGtypeSignature_construct$ = TAnnotatedType<Details, TVGtypeSignature_construct$>
export type TVTGtypeSignature_construct = TNGtypeSignature_construct$
export type TVGtypeSignature_construct = TVTGtypeSignature_construct
export type TVTGtypeSignature = 
    | [ "property", TVGtypeSignature_property]
    | [ "method", TVGtypeSignature_method]
    | [ "index", TVGtypeSignature_index]
    | [ "construct", TVGtypeSignature_construct]
export type TGtypeSignature =  TVTGtypeSignature
export type TVTGtypeParameter$ = TGidentifier
export type TVGtypeParameter$ = TVTGtypeParameter$

export type TNGtypeParameter$ = TAnnotatedType<Details, TVGtypeParameter$>
export type TVTGtypeParameter = TNGtypeParameter$
export type TGtypeParameter =  TVTGtypeParameter

export type TNGtype_void$ = Details
export type TVTGtype_void = TNGtype_void$
export type TVGtype_void = TVTGtype_void
export type TVTGtype_union$ = TGtype
export type TVGtype_union$ = pt.Array<TVTGtype_union$>

export type TNGtype_union$ = TAnnotatedType<Details, TVGtype_union$>
export type TVTGtype_union = TNGtype_union$
export type TVGtype_union = TVTGtype_union

export type TNGtype_undefined$ = Details
export type TVTGtype_undefined = TNGtype_undefined$
export type TVGtype_undefined = TVTGtype_undefined
export type TVTGtype_typeReference$_x_qualifiedName$_context = TGidentifier
export type TVGtype_typeReference$_x_qualifiedName$_context = TVTGtype_typeReference$_x_qualifiedName$_context
export type TVTGtype_typeReference$_x_qualifiedName$_type = TGidentifier
export type TVGtype_typeReference$_x_qualifiedName$_type = TVTGtype_typeReference$_x_qualifiedName$_type
export type TVTGtype_typeReference$_x_qualifiedName$ = {
    readonly "context":  TVGtype_typeReference$_x_qualifiedName$_context
    readonly "type":  TVGtype_typeReference$_x_qualifiedName$_type
}
export type TVGtype_typeReference$_x_qualifiedName$ = TVTGtype_typeReference$_x_qualifiedName$

export type TNGtype_typeReference$_x_qualifiedName$ = TAnnotatedType<Details, TVGtype_typeReference$_x_qualifiedName$>
export type TVTGtype_typeReference$_x_qualifiedName = TNGtype_typeReference$_x_qualifiedName$
export type TVGtype_typeReference$_x_qualifiedName = TVTGtype_typeReference$_x_qualifiedName
export type TVTGtype_typeReference$_x_identifier = TGidentifier
export type TVGtype_typeReference$_x_identifier = TVTGtype_typeReference$_x_identifier
export type TVTGtype_typeReference$_x = 
    | [ "qualifiedName", TVGtype_typeReference$_x_qualifiedName]
    | [ "identifier", TVGtype_typeReference$_x_identifier]
export type TVGtype_typeReference$_x = TVTGtype_typeReference$_x
export type TVTGtype_typeReference$_parameters = TGtype
export type TVGtype_typeReference$_parameters = pt.Array<TVTGtype_typeReference$_parameters>
export type TVTGtype_typeReference$ = {
    readonly "x":  TVGtype_typeReference$_x
    readonly "parameters":  TVGtype_typeReference$_parameters
}
export type TVGtype_typeReference$ = TVTGtype_typeReference$

export type TNGtype_typeReference$ = TAnnotatedType<Details, TVGtype_typeReference$>
export type TVTGtype_typeReference = TNGtype_typeReference$
export type TVGtype_typeReference = TVTGtype_typeReference

export type TNGtype_string$ = Details
export type TVTGtype_string = TNGtype_string$
export type TVGtype_string = TVTGtype_string
export type TVTGtype_typeLiteral$ = TGtypeSignature
export type TVGtype_typeLiteral$ = pt.Array<TVTGtype_typeLiteral$>

export type TNGtype_typeLiteral$ = TAnnotatedType<Details, TVGtype_typeLiteral$>
export type TVTGtype_typeLiteral = TNGtype_typeLiteral$
export type TVGtype_typeLiteral = TVTGtype_typeLiteral
export type TVTGtype_tuple$ = TGtype
export type TVGtype_tuple$ = pt.Array<TVTGtype_tuple$>

export type TNGtype_tuple$ = TAnnotatedType<Details, TVGtype_tuple$>
export type TVTGtype_tuple = TNGtype_tuple$
export type TVGtype_tuple = TVTGtype_tuple
export type TVTGtype_optional$ = TGtype
export type TVGtype_optional$ = TVTGtype_optional$

export type TNGtype_optional$ = TAnnotatedType<Details, TVGtype_optional$>
export type TVTGtype_optional = TNGtype_optional$
export type TVGtype_optional = TVTGtype_optional

export type TNGtype_number$ = Details
export type TVTGtype_number = TNGtype_number$
export type TVGtype_number = TVTGtype_number

export type TNGtype_never$ = Details
export type TVTGtype_never = TNGtype_never$
export type TVGtype_never = TVTGtype_never
export type TVTGtype_parenthesized$ = TGtype
export type TVGtype_parenthesized$ = TVTGtype_parenthesized$

export type TNGtype_parenthesized$ = TAnnotatedType<Details, TVGtype_parenthesized$>
export type TVTGtype_parenthesized = TNGtype_parenthesized$
export type TVGtype_parenthesized = TVTGtype_parenthesized
export type TVTGtype_literal$_string = TGstringLiteral
export type TVGtype_literal$_string = TVTGtype_literal$_string

export type TNGtype_literal$_null$ = Details
export type TVTGtype_literal$_null = TNGtype_literal$_null$
export type TVGtype_literal$_null = TVTGtype_literal$_null
export type TVTGtype_literal$ = 
    | [ "string", TVGtype_literal$_string]
    | [ "null", TVGtype_literal$_null]
export type TVGtype_literal$ = TVTGtype_literal$

export type TNGtype_literal$ = TAnnotatedType<Details, TVGtype_literal$>
export type TVTGtype_literal = TNGtype_literal$
export type TVGtype_literal = TVTGtype_literal
export type TVTGtype_function$_parameters = TGparameter
export type TVGtype_function$_parameters = pt.Array<TVTGtype_function$_parameters>
export type TVTGtype_function$_returnType = TGtype
export type TVGtype_function$_returnType = null | TVTGtype_function$_returnType
export type TVTGtype_function$ = {
    readonly "parameters":  TVGtype_function$_parameters
    readonly "returnType":  TVGtype_function$_returnType
}
export type TVGtype_function$ = TVTGtype_function$

export type TNGtype_function$ = TAnnotatedType<Details, TVGtype_function$>
export type TVTGtype_function = TNGtype_function$
export type TVGtype_function = TVTGtype_function

export type TNGtype_boolean$ = Details
export type TVTGtype_boolean = TNGtype_boolean$
export type TVGtype_boolean = TVTGtype_boolean
export type TVTGtype_array$ = TGtype
export type TVGtype_array$ = TVTGtype_array$

export type TNGtype_array$ = TAnnotatedType<Details, TVGtype_array$>
export type TVTGtype_array = TNGtype_array$
export type TVGtype_array = TVTGtype_array

export type TNGtype_any$ = Details
export type TVTGtype_any = TNGtype_any$
export type TVGtype_any = TVTGtype_any
export type TVTGtype = 
    | [ "void", TVGtype_void]
    | [ "union", TVGtype_union]
    | [ "undefined", TVGtype_undefined]
    | [ "typeReference", TVGtype_typeReference]
    | [ "string", TVGtype_string]
    | [ "typeLiteral", TVGtype_typeLiteral]
    | [ "tuple", TVGtype_tuple]
    | [ "optional", TVGtype_optional]
    | [ "number", TVGtype_number]
    | [ "never", TVGtype_never]
    | [ "parenthesized", TVGtype_parenthesized]
    | [ "literal", TVGtype_literal]
    | [ "function", TVGtype_function]
    | [ "boolean", TVGtype_boolean]
    | [ "array", TVGtype_array]
    | [ "any", TVGtype_any]
export type TGtype =  TVTGtype

export type TNGstringLiteral$ = TAnnotatedString
export type TVTGstringLiteral = TNGstringLiteral$
export type TGstringLiteral =  TVTGstringLiteral
export type TVTGstatement_while$_condition = TGexpression
export type TVGstatement_while$_condition = TVTGstatement_while$_condition
export type TVTGstatement_while$_block = TGblock
export type TVGstatement_while$_block = TVTGstatement_while$_block
export type TVTGstatement_while$ = {
    readonly "condition":  TVGstatement_while$_condition
    readonly "block":  TVGstatement_while$_block
}
export type TVGstatement_while$ = TVTGstatement_while$

export type TNGstatement_while$ = TAnnotatedType<Details, TVGstatement_while$>
export type TVTGstatement_while = TNGstatement_while$
export type TVGstatement_while = TVTGstatement_while
export type TVTGstatement_variable$_modifiers = TGmodifier
export type TVGstatement_variable$_modifiers = pt.Array<TVTGstatement_variable$_modifiers>
export type TVTGstatement_variable$_variableDeclarationList = TGvariableDeclarationList
export type TVGstatement_variable$_variableDeclarationList = TVTGstatement_variable$_variableDeclarationList
export type TVTGstatement_variable$ = {
    readonly "modifiers":  TVGstatement_variable$_modifiers
    readonly "variableDeclarationList":  TVGstatement_variable$_variableDeclarationList
}
export type TVGstatement_variable$ = TVTGstatement_variable$

export type TNGstatement_variable$ = TAnnotatedType<Details, TVGstatement_variable$>
export type TVTGstatement_variable = TNGstatement_variable$
export type TVGstatement_variable = TVTGstatement_variable
export type TVTGstatement_typeAlias$_modifiers = TGmodifier
export type TVGstatement_typeAlias$_modifiers = pt.Array<TVTGstatement_typeAlias$_modifiers>
export type TVTGstatement_typeAlias$_name = TGidentifier
export type TVGstatement_typeAlias$_name = TVTGstatement_typeAlias$_name
export type TVTGstatement_typeAlias$_typeParameters = TGtypeParameter
export type TVGstatement_typeAlias$_typeParameters = pt.Array<TVTGstatement_typeAlias$_typeParameters>
export type TVTGstatement_typeAlias$_type = TGtype
export type TVGstatement_typeAlias$_type = TVTGstatement_typeAlias$_type
export type TVTGstatement_typeAlias$ = {
    readonly "modifiers":  TVGstatement_typeAlias$_modifiers
    readonly "name":  TVGstatement_typeAlias$_name
    readonly "typeParameters":  TVGstatement_typeAlias$_typeParameters
    readonly "type":  TVGstatement_typeAlias$_type
}
export type TVGstatement_typeAlias$ = TVTGstatement_typeAlias$

export type TNGstatement_typeAlias$ = TAnnotatedType<Details, TVGstatement_typeAlias$>
export type TVTGstatement_typeAlias = TNGstatement_typeAlias$
export type TVGstatement_typeAlias = TVTGstatement_typeAlias
export type TVTGstatement_try$_block = TGblock
export type TVGstatement_try$_block = TVTGstatement_try$_block
export type TVTGstatement_try$_catchClause$_variable = TGvariableDeclaration
export type TVGstatement_try$_catchClause$_variable = TVTGstatement_try$_catchClause$_variable
export type TVTGstatement_try$_catchClause$_block = TGblock
export type TVGstatement_try$_catchClause$_block = TVTGstatement_try$_catchClause$_block
export type TVTGstatement_try$_catchClause$ = {
    readonly "variable":  TVGstatement_try$_catchClause$_variable
    readonly "block":  TVGstatement_try$_catchClause$_block
}
export type TVGstatement_try$_catchClause$ = TVTGstatement_try$_catchClause$

export type TNGstatement_try$_catchClause$ = TAnnotatedType<Details, TVGstatement_try$_catchClause$>
export type TVTGstatement_try$_catchClause = TNGstatement_try$_catchClause$
export type TVGstatement_try$_catchClause = TVTGstatement_try$_catchClause
export type TVTGstatement_try$ = {
    readonly "block":  TVGstatement_try$_block
    readonly "catchClause":  TVGstatement_try$_catchClause
}
export type TVGstatement_try$ = TVTGstatement_try$

export type TNGstatement_try$ = TAnnotatedType<Details, TVGstatement_try$>
export type TVTGstatement_try = TNGstatement_try$
export type TVGstatement_try = TVTGstatement_try
export type TVTGstatement_throw$ = TGexpression
export type TVGstatement_throw$ = TVTGstatement_throw$

export type TNGstatement_throw$ = TAnnotatedType<Details, TVGstatement_throw$>
export type TVTGstatement_throw = TNGstatement_throw$
export type TVGstatement_throw = TVTGstatement_throw
export type TVTGstatement_switch$_expression = TGexpression
export type TVGstatement_switch$_expression = TVTGstatement_switch$_expression
export type TVTGstatement_switch$_caseBlock$_default$ = TGstatement
export type TVGstatement_switch$_caseBlock$_default$ = pt.Array<TVTGstatement_switch$_caseBlock$_default$>

export type TNGstatement_switch$_caseBlock$_default$ = TAnnotatedType<Details, TVGstatement_switch$_caseBlock$_default$>
export type TVTGstatement_switch$_caseBlock$_default = TNGstatement_switch$_caseBlock$_default$
export type TVGstatement_switch$_caseBlock$_default = TVTGstatement_switch$_caseBlock$_default
export type TVTGstatement_switch$_caseBlock$_case$_case = TGexpression
export type TVGstatement_switch$_caseBlock$_case$_case = TVTGstatement_switch$_caseBlock$_case$_case
export type TVTGstatement_switch$_caseBlock$_case$_statements = TGstatement
export type TVGstatement_switch$_caseBlock$_case$_statements = pt.Array<TVTGstatement_switch$_caseBlock$_case$_statements>
export type TVTGstatement_switch$_caseBlock$_case$ = {
    readonly "case":  TVGstatement_switch$_caseBlock$_case$_case
    readonly "statements":  TVGstatement_switch$_caseBlock$_case$_statements
}
export type TVGstatement_switch$_caseBlock$_case$ = TVTGstatement_switch$_caseBlock$_case$

export type TNGstatement_switch$_caseBlock$_case$ = TAnnotatedType<Details, TVGstatement_switch$_caseBlock$_case$>
export type TVTGstatement_switch$_caseBlock$_case = TNGstatement_switch$_caseBlock$_case$
export type TVGstatement_switch$_caseBlock$_case = TVTGstatement_switch$_caseBlock$_case
export type TVTGstatement_switch$_caseBlock$ = 
    | [ "default", TVGstatement_switch$_caseBlock$_default]
    | [ "case", TVGstatement_switch$_caseBlock$_case]
export type TVGstatement_switch$_caseBlock$ = pt.Array<TVTGstatement_switch$_caseBlock$>

export type TNGstatement_switch$_caseBlock$ = TAnnotatedType<Details, TVGstatement_switch$_caseBlock$>
export type TVTGstatement_switch$_caseBlock = TNGstatement_switch$_caseBlock$
export type TVGstatement_switch$_caseBlock = TVTGstatement_switch$_caseBlock
export type TVTGstatement_switch$ = {
    readonly "expression":  TVGstatement_switch$_expression
    readonly "caseBlock":  TVGstatement_switch$_caseBlock
}
export type TVGstatement_switch$ = TVTGstatement_switch$

export type TNGstatement_switch$ = TAnnotatedType<Details, TVGstatement_switch$>
export type TVTGstatement_switch = TNGstatement_switch$
export type TVGstatement_switch = TVTGstatement_switch
export type TVTGstatement_return$ = TGexpression
export type TVGstatement_return$ = null | TVTGstatement_return$

export type TNGstatement_return$ = TAnnotatedType<Details, TVGstatement_return$>
export type TVTGstatement_return = TNGstatement_return$
export type TVGstatement_return = TVTGstatement_return
export type TVTGstatement_labeled$_label = TGidentifier
export type TVGstatement_labeled$_label = TVTGstatement_labeled$_label
export type TVTGstatement_labeled$_statement = TGstatement
export type TVGstatement_labeled$_statement = TVTGstatement_labeled$_statement
export type TVTGstatement_labeled$ = {
    readonly "label":  TVGstatement_labeled$_label
    readonly "statement":  TVGstatement_labeled$_statement
}
export type TVGstatement_labeled$ = TVTGstatement_labeled$

export type TNGstatement_labeled$ = TAnnotatedType<Details, TVGstatement_labeled$>
export type TVTGstatement_labeled = TNGstatement_labeled$
export type TVGstatement_labeled = TVTGstatement_labeled
export type TVTGstatement_interface$_modifiers = TGmodifier
export type TVGstatement_interface$_modifiers = pt.Array<TVTGstatement_interface$_modifiers>
export type TVTGstatement_interface$_name = TGidentifier
export type TVGstatement_interface$_name = TVTGstatement_interface$_name
export type TVTGstatement_interface$_typeParameters = TGtypeParameter
export type TVGstatement_interface$_typeParameters = pt.Array<TVTGstatement_interface$_typeParameters>
export type TVTGstatement_interface$_signature = TGtypeSignature
export type TVGstatement_interface$_signature = pt.Array<TVTGstatement_interface$_signature>
export type TVTGstatement_interface$ = {
    readonly "modifiers":  TVGstatement_interface$_modifiers
    readonly "name":  TVGstatement_interface$_name
    readonly "typeParameters":  TVGstatement_interface$_typeParameters
    readonly "signature":  TVGstatement_interface$_signature
}
export type TVGstatement_interface$ = TVTGstatement_interface$

export type TNGstatement_interface$ = TAnnotatedType<Details, TVGstatement_interface$>
export type TVTGstatement_interface = TNGstatement_interface$
export type TVGstatement_interface = TVTGstatement_interface
export type TVTGstatement_import$_clause$_named$$_name = TGidentifier
export type TVGstatement_import$_clause$_named$$_name = TVTGstatement_import$_clause$_named$$_name
export type TVTGstatement_import$_clause$_named$$_as = TGidentifier
export type TVGstatement_import$_clause$_named$$_as = null | TVTGstatement_import$_clause$_named$$_as
export type TVTGstatement_import$_clause$_named$$ = {
    readonly "name":  TVGstatement_import$_clause$_named$$_name
    readonly "as":  TVGstatement_import$_clause$_named$$_as
}
export type TVGstatement_import$_clause$_named$$ = TVTGstatement_import$_clause$_named$$

export type TNGstatement_import$_clause$_named$$ = TAnnotatedType<Details, TVGstatement_import$_clause$_named$$>
export type TVTGstatement_import$_clause$_named$ = TNGstatement_import$_clause$_named$$
export type TVGstatement_import$_clause$_named$ = pt.Array<TVTGstatement_import$_clause$_named$>

export type TNGstatement_import$_clause$_named$ = TAnnotatedType<Details, TVGstatement_import$_clause$_named$>
export type TVTGstatement_import$_clause$_named = TNGstatement_import$_clause$_named$
export type TVGstatement_import$_clause$_named = TVTGstatement_import$_clause$_named
export type TVTGstatement_import$_clause$_namespace$ = TGidentifier
export type TVGstatement_import$_clause$_namespace$ = TVTGstatement_import$_clause$_namespace$

export type TNGstatement_import$_clause$_namespace$ = TAnnotatedType<Details, TVGstatement_import$_clause$_namespace$>
export type TVTGstatement_import$_clause$_namespace = TNGstatement_import$_clause$_namespace$
export type TVGstatement_import$_clause$_namespace = TVTGstatement_import$_clause$_namespace
export type TVTGstatement_import$_clause$ = 
    | [ "named", TVGstatement_import$_clause$_named]
    | [ "namespace", TVGstatement_import$_clause$_namespace]
export type TVGstatement_import$_clause$ = TVTGstatement_import$_clause$

export type TNGstatement_import$_clause$ = TAnnotatedType<Details, TVGstatement_import$_clause$>
export type TVTGstatement_import$_clause = TNGstatement_import$_clause$
export type TVGstatement_import$_clause = TVTGstatement_import$_clause
export type TVTGstatement_import$_file = TGstringLiteral
export type TVGstatement_import$_file = TVTGstatement_import$_file
export type TVTGstatement_import$ = {
    readonly "clause":  TVGstatement_import$_clause
    readonly "file":  TVGstatement_import$_file
}
export type TVGstatement_import$ = TVTGstatement_import$

export type TNGstatement_import$ = TAnnotatedType<Details, TVGstatement_import$>
export type TVTGstatement_import = TNGstatement_import$
export type TVGstatement_import = TVTGstatement_import
export type TVTGstatement_if$_expression = TGexpression
export type TVGstatement_if$_expression = TVTGstatement_if$_expression
export type TVTGstatement_if$_thenStatement = TGstatement
export type TVGstatement_if$_thenStatement = TVTGstatement_if$_thenStatement
export type TVTGstatement_if$_elseStatement = TGstatement
export type TVGstatement_if$_elseStatement = null | TVTGstatement_if$_elseStatement
export type TVTGstatement_if$ = {
    readonly "expression":  TVGstatement_if$_expression
    readonly "thenStatement":  TVGstatement_if$_thenStatement
    readonly "elseStatement":  TVGstatement_if$_elseStatement
}
export type TVGstatement_if$ = TVTGstatement_if$

export type TNGstatement_if$ = TAnnotatedType<Details, TVGstatement_if$>
export type TVTGstatement_if = TNGstatement_if$
export type TVGstatement_if = TVTGstatement_if
export type TVTGstatement_function$_modifiers = TGmodifier
export type TVGstatement_function$_modifiers = pt.Array<TVTGstatement_function$_modifiers>
export type TVTGstatement_function$_name = TGidentifier
export type TVGstatement_function$_name = TVTGstatement_function$_name
export type TVTGstatement_function$_definition = TGfunctionDefinition
export type TVGstatement_function$_definition = TVTGstatement_function$_definition
export type TVTGstatement_function$_block = TGblock
export type TVGstatement_function$_block = null | TVTGstatement_function$_block
export type TVTGstatement_function$ = {
    readonly "modifiers":  TVGstatement_function$_modifiers
    readonly "name":  TVGstatement_function$_name
    readonly "definition":  TVGstatement_function$_definition
    readonly "block":  TVGstatement_function$_block
}
export type TVGstatement_function$ = TVTGstatement_function$

export type TNGstatement_function$ = TAnnotatedType<Details, TVGstatement_function$>
export type TVTGstatement_function = TNGstatement_function$
export type TVGstatement_function = TVTGstatement_function
export type TVTGstatement_for$_initializer = TGvariableDeclarationList
export type TVGstatement_for$_initializer = TVTGstatement_for$_initializer
export type TVTGstatement_for$_condition = TGexpression
export type TVGstatement_for$_condition = TVTGstatement_for$_condition
export type TVTGstatement_for$_incrementer = TGexpression
export type TVGstatement_for$_incrementer = TVTGstatement_for$_incrementer
export type TVTGstatement_for$_block = TGblock
export type TVGstatement_for$_block = TVTGstatement_for$_block
export type TVTGstatement_for$ = {
    readonly "initializer":  TVGstatement_for$_initializer
    readonly "condition":  TVGstatement_for$_condition
    readonly "incrementer":  TVGstatement_for$_incrementer
    readonly "block":  TVGstatement_for$_block
}
export type TVGstatement_for$ = TVTGstatement_for$

export type TNGstatement_for$ = TAnnotatedType<Details, TVGstatement_for$>
export type TVTGstatement_for = TNGstatement_for$
export type TVGstatement_for = TVTGstatement_for
export type TVTGstatement_expression$ = TGexpression
export type TVGstatement_expression$ = TVTGstatement_expression$

export type TNGstatement_expression$ = TAnnotatedType<Details, TVGstatement_expression$>
export type TVTGstatement_expression = TNGstatement_expression$
export type TVGstatement_expression = TVTGstatement_expression
export type TVTGstatement_export$ = TGstringLiteral
export type TVGstatement_export$ = TVTGstatement_export$

export type TNGstatement_export$ = TAnnotatedType<Details, TVGstatement_export$>
export type TVTGstatement_export = TNGstatement_export$
export type TVGstatement_export = TVTGstatement_export
export type TVTGstatement_break$ = TGidentifier
export type TVGstatement_break$ = null | TVTGstatement_break$

export type TNGstatement_break$ = TAnnotatedType<Details, TVGstatement_break$>
export type TVTGstatement_break = TNGstatement_break$
export type TVGstatement_break = TVTGstatement_break
export type TVTGstatement_block = TGblock
export type TVGstatement_block = TVTGstatement_block
export type TVTGstatement = 
    | [ "while", TVGstatement_while]
    | [ "variable", TVGstatement_variable]
    | [ "typeAlias", TVGstatement_typeAlias]
    | [ "try", TVGstatement_try]
    | [ "throw", TVGstatement_throw]
    | [ "switch", TVGstatement_switch]
    | [ "return", TVGstatement_return]
    | [ "labeled", TVGstatement_labeled]
    | [ "interface", TVGstatement_interface]
    | [ "import", TVGstatement_import]
    | [ "if", TVGstatement_if]
    | [ "function", TVGstatement_function]
    | [ "for", TVGstatement_for]
    | [ "expression", TVGstatement_expression]
    | [ "export", TVGstatement_export]
    | [ "break", TVGstatement_break]
    | [ "block", TVGstatement_block]
export type TGstatement =  TVTGstatement
export type TVTGparameter$_name = TGidentifier
export type TVGparameter$_name = TVTGparameter$_name

export type TNGparameter$_questionToken$ = Details
export type TVTGparameter$_questionToken = TNGparameter$_questionToken$
export type TVGparameter$_questionToken = null | TVTGparameter$_questionToken
export type TVTGparameter$_type = TGtype
export type TVGparameter$_type = null | TVTGparameter$_type
export type TVTGparameter$ = {
    readonly "name":  TVGparameter$_name
    readonly "questionToken":  TVGparameter$_questionToken
    readonly "type":  TVGparameter$_type
}
export type TVGparameter$ = TVTGparameter$

export type TNGparameter$ = TAnnotatedType<Details, TVGparameter$>
export type TVTGparameter = TNGparameter$
export type TGparameter =  TVTGparameter

export type TNGnumericLiteral$ = TAnnotatedString
export type TVTGnumericLiteral = TNGnumericLiteral$
export type TGnumericLiteral =  TVTGnumericLiteral

export type TNGmodifier_readonly$ = Details
export type TVTGmodifier_readonly = TNGmodifier_readonly$
export type TVGmodifier_readonly = TVTGmodifier_readonly

export type TNGmodifier_export$ = Details
export type TVTGmodifier_export = TNGmodifier_export$
export type TVGmodifier_export = TVTGmodifier_export

export type TNGmodifier_declare$ = Details
export type TVTGmodifier_declare = TNGmodifier_declare$
export type TVGmodifier_declare = TVTGmodifier_declare
export type TVTGmodifier = 
    | [ "readonly", TVGmodifier_readonly]
    | [ "export", TVGmodifier_export]
    | [ "declare", TVGmodifier_declare]
export type TGmodifier =  TVTGmodifier
export type TVTGidentifierOrStringLiteral_stringLiteral = TGstringLiteral
export type TVGidentifierOrStringLiteral_stringLiteral = TVTGidentifierOrStringLiteral_stringLiteral
export type TVTGidentifierOrStringLiteral_identifier = TGidentifier
export type TVGidentifierOrStringLiteral_identifier = TVTGidentifierOrStringLiteral_identifier
export type TVTGidentifierOrStringLiteral = 
    | [ "stringLiteral", TVGidentifierOrStringLiteral_stringLiteral]
    | [ "identifier", TVGidentifierOrStringLiteral_identifier]
export type TGidentifierOrStringLiteral =  TVTGidentifierOrStringLiteral

export type TNGidentifier$ = TAnnotatedString
export type TVTGidentifier = TNGidentifier$
export type TGidentifier =  TVTGidentifier
export type TVTGfunctionDefinition_typeParameters = TGtypeParameter
export type TVGfunctionDefinition_typeParameters = pt.Array<TVTGfunctionDefinition_typeParameters>
export type TVTGfunctionDefinition_parameters = TGparameter
export type TVGfunctionDefinition_parameters = pt.Array<TVTGfunctionDefinition_parameters>
export type TVTGfunctionDefinition_returnType = TGtype
export type TVGfunctionDefinition_returnType = null | TVTGfunctionDefinition_returnType
export type TVTGfunctionDefinition = {
    readonly "typeParameters":  TVGfunctionDefinition_typeParameters
    readonly "parameters":  TVGfunctionDefinition_parameters
    readonly "returnType":  TVGfunctionDefinition_returnType
}
export type TGfunctionDefinition =  TVTGfunctionDefinition

export type TNGexpression_true$ = Details
export type TVTGexpression_true = TNGexpression_true$
export type TVGexpression_true = TVTGexpression_true

export type TNGexpression_template$_head$ = TAnnotatedString
export type TVTGexpression_template$_head = TNGexpression_template$_head$
export type TVGexpression_template$_head = TVTGexpression_template$_head
export type TVTGexpression_template$_spans$_expression = TGexpression
export type TVGexpression_template$_spans$_expression = TVTGexpression_template$_spans$_expression

export type TNGexpression_template$_spans$_x_tail$ = TAnnotatedString
export type TVTGexpression_template$_spans$_x_tail = TNGexpression_template$_spans$_x_tail$
export type TVGexpression_template$_spans$_x_tail = TVTGexpression_template$_spans$_x_tail

export type TNGexpression_template$_spans$_x_middle$ = TAnnotatedString
export type TVTGexpression_template$_spans$_x_middle = TNGexpression_template$_spans$_x_middle$
export type TVGexpression_template$_spans$_x_middle = TVTGexpression_template$_spans$_x_middle
export type TVTGexpression_template$_spans$_x = 
    | [ "tail", TVGexpression_template$_spans$_x_tail]
    | [ "middle", TVGexpression_template$_spans$_x_middle]
export type TVGexpression_template$_spans$_x = TVTGexpression_template$_spans$_x
export type TVTGexpression_template$_spans$ = {
    readonly "expression":  TVGexpression_template$_spans$_expression
    readonly "x":  TVGexpression_template$_spans$_x
}
export type TVGexpression_template$_spans$ = TVTGexpression_template$_spans$

export type TNGexpression_template$_spans$ = TAnnotatedType<Details, TVGexpression_template$_spans$>
export type TVTGexpression_template$_spans = TNGexpression_template$_spans$
export type TVGexpression_template$_spans = pt.Array<TVTGexpression_template$_spans>
export type TVTGexpression_template$ = {
    readonly "head":  TVGexpression_template$_head
    readonly "spans":  TVGexpression_template$_spans
}
export type TVGexpression_template$ = TVTGexpression_template$

export type TNGexpression_template$ = TAnnotatedType<Details, TVGexpression_template$>
export type TVTGexpression_template = TNGexpression_template$
export type TVGexpression_template = TVTGexpression_template
export type TVTGexpression_stringLiteral = TGstringLiteral
export type TVGexpression_stringLiteral = TVTGexpression_stringLiteral
export type TVTGexpression_propertyAccess$_object = TGexpression
export type TVGexpression_propertyAccess$_object = TVTGexpression_propertyAccess$_object
export type TVTGexpression_propertyAccess$_property = TGexpression
export type TVGexpression_propertyAccess$_property = TVTGexpression_propertyAccess$_property
export type TVTGexpression_propertyAccess$ = {
    readonly "object":  TVGexpression_propertyAccess$_object
    readonly "property":  TVGexpression_propertyAccess$_property
}
export type TVGexpression_propertyAccess$ = TVTGexpression_propertyAccess$

export type TNGexpression_propertyAccess$ = TAnnotatedType<Details, TVGexpression_propertyAccess$>
export type TVTGexpression_propertyAccess = TNGexpression_propertyAccess$
export type TVGexpression_propertyAccess = TVTGexpression_propertyAccess
export type TVTGexpression_prefixUnary$ = TGexpression
export type TVGexpression_prefixUnary$ = TVTGexpression_prefixUnary$

export type TNGexpression_prefixUnary$ = TAnnotatedType<Details, TVGexpression_prefixUnary$>
export type TVTGexpression_prefixUnary = TNGexpression_prefixUnary$
export type TVGexpression_prefixUnary = TVTGexpression_prefixUnary
export type TVTGexpression_postfixUnary$ = TGexpression
export type TVGexpression_postfixUnary$ = TVTGexpression_postfixUnary$

export type TNGexpression_postfixUnary$ = TAnnotatedType<Details, TVGexpression_postfixUnary$>
export type TVTGexpression_postfixUnary = TNGexpression_postfixUnary$
export type TVGexpression_postfixUnary = TVTGexpression_postfixUnary
export type TVTGexpression_parenthesizedExpression$ = TGexpression
export type TVGexpression_parenthesizedExpression$ = TVTGexpression_parenthesizedExpression$

export type TNGexpression_parenthesizedExpression$ = TAnnotatedType<Details, TVGexpression_parenthesizedExpression$>
export type TVTGexpression_parenthesizedExpression = TNGexpression_parenthesizedExpression$
export type TVGexpression_parenthesizedExpression = TVTGexpression_parenthesizedExpression
export type TVTGexpression_objectLiteral$$_name_stringLiteral = TGstringLiteral
export type TVGexpression_objectLiteral$$_name_stringLiteral = TVTGexpression_objectLiteral$$_name_stringLiteral
export type TVTGexpression_objectLiteral$$_name_numericLiteral = TGnumericLiteral
export type TVGexpression_objectLiteral$$_name_numericLiteral = TVTGexpression_objectLiteral$$_name_numericLiteral
export type TVTGexpression_objectLiteral$$_name_identifier = TGidentifier
export type TVGexpression_objectLiteral$$_name_identifier = TVTGexpression_objectLiteral$$_name_identifier
export type TVTGexpression_objectLiteral$$_name = 
    | [ "stringLiteral", TVGexpression_objectLiteral$$_name_stringLiteral]
    | [ "numericLiteral", TVGexpression_objectLiteral$$_name_numericLiteral]
    | [ "identifier", TVGexpression_objectLiteral$$_name_identifier]
export type TVGexpression_objectLiteral$$_name = TVTGexpression_objectLiteral$$_name
export type TVTGexpression_objectLiteral$$_expression = TGexpression
export type TVGexpression_objectLiteral$$_expression = TVTGexpression_objectLiteral$$_expression
export type TVTGexpression_objectLiteral$$ = {
    readonly "name":  TVGexpression_objectLiteral$$_name
    readonly "expression":  TVGexpression_objectLiteral$$_expression
}
export type TVGexpression_objectLiteral$$ = TVTGexpression_objectLiteral$$

export type TNGexpression_objectLiteral$$ = TAnnotatedType<Details, TVGexpression_objectLiteral$$>
export type TVTGexpression_objectLiteral$ = TNGexpression_objectLiteral$$
export type TVGexpression_objectLiteral$ = pt.Array<TVTGexpression_objectLiteral$>

export type TNGexpression_objectLiteral$ = TAnnotatedType<Details, TVGexpression_objectLiteral$>
export type TVTGexpression_objectLiteral = TNGexpression_objectLiteral$
export type TVGexpression_objectLiteral = TVTGexpression_objectLiteral

export type TNGexpression_nullKeyword$ = Details
export type TVTGexpression_nullKeyword = TNGexpression_nullKeyword$
export type TVGexpression_nullKeyword = TVTGexpression_nullKeyword
export type TVTGexpression_numericLiteral = TGnumericLiteral
export type TVGexpression_numericLiteral = TVTGexpression_numericLiteral

export type TNGexpression_noSubstitutionTemplateLiteral$ = Details
export type TVTGexpression_noSubstitutionTemplateLiteral = TNGexpression_noSubstitutionTemplateLiteral$
export type TVGexpression_noSubstitutionTemplateLiteral = TVTGexpression_noSubstitutionTemplateLiteral
export type TVTGexpression_new$_class = TGidentifier
export type TVGexpression_new$_class = TVTGexpression_new$_class
export type TVTGexpression_new$_parameters = TGexpression
export type TVGexpression_new$_parameters = pt.Array<TVTGexpression_new$_parameters>
export type TVTGexpression_new$ = {
    readonly "class":  TVGexpression_new$_class
    readonly "parameters":  TVGexpression_new$_parameters
}
export type TVGexpression_new$ = TVTGexpression_new$

export type TNGexpression_new$ = TAnnotatedType<Details, TVGexpression_new$>
export type TVTGexpression_new = TNGexpression_new$
export type TVGexpression_new = TVTGexpression_new
export type TVTGexpression_identifier = TGidentifier
export type TVGexpression_identifier = TVTGexpression_identifier

export type TNGexpression_false$ = Details
export type TVTGexpression_false = TNGexpression_false$
export type TVGexpression_false = TVTGexpression_false
export type TVTGexpression_elementAccess$_array = TGexpression
export type TVGexpression_elementAccess$_array = TVTGexpression_elementAccess$_array
export type TVTGexpression_elementAccess$_element = TGexpression
export type TVGexpression_elementAccess$_element = TVTGexpression_elementAccess$_element
export type TVTGexpression_elementAccess$ = {
    readonly "array":  TVGexpression_elementAccess$_array
    readonly "element":  TVGexpression_elementAccess$_element
}
export type TVGexpression_elementAccess$ = TVTGexpression_elementAccess$

export type TNGexpression_elementAccess$ = TAnnotatedType<Details, TVGexpression_elementAccess$>
export type TVTGexpression_elementAccess = TNGexpression_elementAccess$
export type TVGexpression_elementAccess = TVTGexpression_elementAccess
export type TVTGexpression_conditional$_test = TGexpression
export type TVGexpression_conditional$_test = TVTGexpression_conditional$_test

export type TNGexpression_conditional$_questionToken$ = Details
export type TVTGexpression_conditional$_questionToken = TNGexpression_conditional$_questionToken$
export type TVGexpression_conditional$_questionToken = TVTGexpression_conditional$_questionToken
export type TVTGexpression_conditional$_ifExpression = TGexpression
export type TVGexpression_conditional$_ifExpression = TVTGexpression_conditional$_ifExpression

export type TNGexpression_conditional$_colonToken$ = Details
export type TVTGexpression_conditional$_colonToken = TNGexpression_conditional$_colonToken$
export type TVGexpression_conditional$_colonToken = TVTGexpression_conditional$_colonToken
export type TVTGexpression_conditional$_elseExpression = TGexpression
export type TVGexpression_conditional$_elseExpression = TVTGexpression_conditional$_elseExpression
export type TVTGexpression_conditional$ = {
    readonly "test":  TVGexpression_conditional$_test
    readonly "questionToken":  TVGexpression_conditional$_questionToken
    readonly "ifExpression":  TVGexpression_conditional$_ifExpression
    readonly "colonToken":  TVGexpression_conditional$_colonToken
    readonly "elseExpression":  TVGexpression_conditional$_elseExpression
}
export type TVGexpression_conditional$ = TVTGexpression_conditional$

export type TNGexpression_conditional$ = TAnnotatedType<Details, TVGexpression_conditional$>
export type TVTGexpression_conditional = TNGexpression_conditional$
export type TVGexpression_conditional = TVTGexpression_conditional
export type TVTGexpression_call$_function = TGexpression
export type TVGexpression_call$_function = TVTGexpression_call$_function
export type TVTGexpression_call$_typeParameters = TGtype
export type TVGexpression_call$_typeParameters = pt.Array<TVTGexpression_call$_typeParameters>
export type TVTGexpression_call$_parameters = TGexpression
export type TVGexpression_call$_parameters = pt.Array<TVTGexpression_call$_parameters>
export type TVTGexpression_call$ = {
    readonly "function":  TVGexpression_call$_function
    readonly "typeParameters":  TVGexpression_call$_typeParameters
    readonly "parameters":  TVGexpression_call$_parameters
}
export type TVGexpression_call$ = TVTGexpression_call$

export type TNGexpression_call$ = TAnnotatedType<Details, TVGexpression_call$>
export type TVTGexpression_call = TNGexpression_call$
export type TVGexpression_call = TVTGexpression_call
export type TVTGexpression_binary$_leftHandSide = TGexpression
export type TVGexpression_binary$_leftHandSide = TVTGexpression_binary$_leftHandSide

export type TNGexpression_binary$_operator_plusEquals$ = Details
export type TVTGexpression_binary$_operator_plusEquals = TNGexpression_binary$_operator_plusEquals$
export type TVGexpression_binary$_operator_plusEquals = TVTGexpression_binary$_operator_plusEquals

export type TNGexpression_binary$_operator_plus$ = Details
export type TVTGexpression_binary$_operator_plus = TNGexpression_binary$_operator_plus$
export type TVGexpression_binary$_operator_plus = TVTGexpression_binary$_operator_plus

export type TNGexpression_binary$_operator_minusEquals$ = Details
export type TVTGexpression_binary$_operator_minusEquals = TNGexpression_binary$_operator_minusEquals$
export type TVGexpression_binary$_operator_minusEquals = TVTGexpression_binary$_operator_minusEquals

export type TNGexpression_binary$_operator_minus$ = Details
export type TVTGexpression_binary$_operator_minus = TNGexpression_binary$_operator_minus$
export type TVGexpression_binary$_operator_minus = TVTGexpression_binary$_operator_minus

export type TNGexpression_binary$_operator_lessThan$ = Details
export type TVTGexpression_binary$_operator_lessThan = TNGexpression_binary$_operator_lessThan$
export type TVGexpression_binary$_operator_lessThan = TVTGexpression_binary$_operator_lessThan

export type TNGexpression_binary$_operator_greaterThan$ = Details
export type TVTGexpression_binary$_operator_greaterThan = TNGexpression_binary$_operator_greaterThan$
export type TVGexpression_binary$_operator_greaterThan = TVTGexpression_binary$_operator_greaterThan

export type TNGexpression_binary$_operator_exclamationEqualsEquals$ = Details
export type TVTGexpression_binary$_operator_exclamationEqualsEquals = TNGexpression_binary$_operator_exclamationEqualsEquals$
export type TVGexpression_binary$_operator_exclamationEqualsEquals = TVTGexpression_binary$_operator_exclamationEqualsEquals

export type TNGexpression_binary$_operator_equalsEqualsEquals$ = Details
export type TVTGexpression_binary$_operator_equalsEqualsEquals = TNGexpression_binary$_operator_equalsEqualsEquals$
export type TVGexpression_binary$_operator_equalsEqualsEquals = TVTGexpression_binary$_operator_equalsEqualsEquals

export type TNGexpression_binary$_operator_equals$ = Details
export type TVTGexpression_binary$_operator_equals = TNGexpression_binary$_operator_equals$
export type TVGexpression_binary$_operator_equals = TVTGexpression_binary$_operator_equals

export type TNGexpression_binary$_operator_barBar$ = Details
export type TVTGexpression_binary$_operator_barBar = TNGexpression_binary$_operator_barBar$
export type TVGexpression_binary$_operator_barBar = TVTGexpression_binary$_operator_barBar

export type TNGexpression_binary$_operator_ampersandAmpersand$ = Details
export type TVTGexpression_binary$_operator_ampersandAmpersand = TNGexpression_binary$_operator_ampersandAmpersand$
export type TVGexpression_binary$_operator_ampersandAmpersand = TVTGexpression_binary$_operator_ampersandAmpersand
export type TVTGexpression_binary$_operator = 
    | [ "plusEquals", TVGexpression_binary$_operator_plusEquals]
    | [ "plus", TVGexpression_binary$_operator_plus]
    | [ "minusEquals", TVGexpression_binary$_operator_minusEquals]
    | [ "minus", TVGexpression_binary$_operator_minus]
    | [ "lessThan", TVGexpression_binary$_operator_lessThan]
    | [ "greaterThan", TVGexpression_binary$_operator_greaterThan]
    | [ "exclamationEqualsEquals", TVGexpression_binary$_operator_exclamationEqualsEquals]
    | [ "equalsEqualsEquals", TVGexpression_binary$_operator_equalsEqualsEquals]
    | [ "equals", TVGexpression_binary$_operator_equals]
    | [ "barBar", TVGexpression_binary$_operator_barBar]
    | [ "ampersandAmpersand", TVGexpression_binary$_operator_ampersandAmpersand]
export type TVGexpression_binary$_operator = TVTGexpression_binary$_operator
export type TVTGexpression_binary$_rightHandSide = TGexpression
export type TVGexpression_binary$_rightHandSide = TVTGexpression_binary$_rightHandSide
export type TVTGexpression_binary$ = {
    readonly "leftHandSide":  TVGexpression_binary$_leftHandSide
    readonly "operator":  TVGexpression_binary$_operator
    readonly "rightHandSide":  TVGexpression_binary$_rightHandSide
}
export type TVGexpression_binary$ = TVTGexpression_binary$

export type TNGexpression_binary$ = TAnnotatedType<Details, TVGexpression_binary$>
export type TVTGexpression_binary = TNGexpression_binary$
export type TVGexpression_binary = TVTGexpression_binary
export type TVTGexpression_arrowFunction$_parameters = TGparameter
export type TVGexpression_arrowFunction$_parameters = pt.Array<TVTGexpression_arrowFunction$_parameters>
export type TVTGexpression_arrowFunction$_returnType = TGtype
export type TVGexpression_arrowFunction$_returnType = null | TVTGexpression_arrowFunction$_returnType

export type TNGexpression_arrowFunction$_equalsGreaterThan$ = Details
export type TVTGexpression_arrowFunction$_equalsGreaterThan = TNGexpression_arrowFunction$_equalsGreaterThan$
export type TVGexpression_arrowFunction$_equalsGreaterThan = TVTGexpression_arrowFunction$_equalsGreaterThan
export type TVTGexpression_arrowFunction$_implementation_expression = TGexpression
export type TVGexpression_arrowFunction$_implementation_expression = TVTGexpression_arrowFunction$_implementation_expression
export type TVTGexpression_arrowFunction$_implementation_block = TGblock
export type TVGexpression_arrowFunction$_implementation_block = TVTGexpression_arrowFunction$_implementation_block
export type TVTGexpression_arrowFunction$_implementation = 
    | [ "expression", TVGexpression_arrowFunction$_implementation_expression]
    | [ "block", TVGexpression_arrowFunction$_implementation_block]
export type TVGexpression_arrowFunction$_implementation = TVTGexpression_arrowFunction$_implementation
export type TVTGexpression_arrowFunction$ = {
    readonly "parameters":  TVGexpression_arrowFunction$_parameters
    readonly "returnType":  TVGexpression_arrowFunction$_returnType
    readonly "equalsGreaterThan":  TVGexpression_arrowFunction$_equalsGreaterThan
    readonly "implementation":  TVGexpression_arrowFunction$_implementation
}
export type TVGexpression_arrowFunction$ = TVTGexpression_arrowFunction$

export type TNGexpression_arrowFunction$ = TAnnotatedType<Details, TVGexpression_arrowFunction$>
export type TVTGexpression_arrowFunction = TNGexpression_arrowFunction$
export type TVGexpression_arrowFunction = TVTGexpression_arrowFunction
export type TVTGexpression_arrayLiteral$ = TGexpression
export type TVGexpression_arrayLiteral$ = pt.Array<TVTGexpression_arrayLiteral$>

export type TNGexpression_arrayLiteral$ = TAnnotatedType<Details, TVGexpression_arrayLiteral$>
export type TVTGexpression_arrayLiteral = TNGexpression_arrayLiteral$
export type TVGexpression_arrayLiteral = TVTGexpression_arrayLiteral
export type TVTGexpression = 
    | [ "true", TVGexpression_true]
    | [ "template", TVGexpression_template]
    | [ "stringLiteral", TVGexpression_stringLiteral]
    | [ "propertyAccess", TVGexpression_propertyAccess]
    | [ "prefixUnary", TVGexpression_prefixUnary]
    | [ "postfixUnary", TVGexpression_postfixUnary]
    | [ "parenthesizedExpression", TVGexpression_parenthesizedExpression]
    | [ "objectLiteral", TVGexpression_objectLiteral]
    | [ "nullKeyword", TVGexpression_nullKeyword]
    | [ "numericLiteral", TVGexpression_numericLiteral]
    | [ "noSubstitutionTemplateLiteral", TVGexpression_noSubstitutionTemplateLiteral]
    | [ "new", TVGexpression_new]
    | [ "identifier", TVGexpression_identifier]
    | [ "false", TVGexpression_false]
    | [ "elementAccess", TVGexpression_elementAccess]
    | [ "conditional", TVGexpression_conditional]
    | [ "call", TVGexpression_call]
    | [ "binary", TVGexpression_binary]
    | [ "arrowFunction", TVGexpression_arrowFunction]
    | [ "arrayLiteral", TVGexpression_arrayLiteral]
export type TGexpression =  TVTGexpression
export type TVTGblock$ = TGstatement
export type TVGblock$ = pt.Array<TVTGblock$>

export type TNGblock$ = TAnnotatedType<Details, TVGblock$>
export type TVTGblock = TNGblock$
export type TGblock =  TVTGblock
export type TVTroot_statements = TGstatement
export type TVroot_statements = pt.Array<TVTroot_statements>

export type TNroot_endOfFile$ = Details
export type TVTroot_endOfFile = TNroot_endOfFile$
export type TVroot_endOfFile = TVTroot_endOfFile
export type TVTroot = {
    readonly "statements":  TVroot_statements
    readonly "endOfFile":  TVroot_endOfFile
}
export type TVroot = TVTroot

export type TNroot = TAnnotatedType<Details, TVroot>
export type TRoot = TNroot