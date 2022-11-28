import {
    INgxFormInputAutoComplete,
    INgxFormInputComment,
    INgxFormInputEmail,
    INgxFormInputMobile,
    INgxFormInputMultiSelect,
    INgxFormInputName,
    INgxFormInputNumber,
    INgxFormInputPassword,
    INgxFormInputText,
    INgxFormInputUsername,
} from './inputs';

export type NgxFormInputTypes =
    // VIEWS
    | INgxFormInputComment
    // INPUTS
    | INgxFormInputAutoComplete
    | INgxFormInputEmail
    | INgxFormInputMobile
    | INgxFormInputMultiSelect
    | INgxFormInputName
    | INgxFormInputNumber
    | INgxFormInputPassword
    | INgxFormInputText
    | INgxFormInputUsername;
