import {
    INgxFormInputAutoComplete,
    INgxFormInputBankCard,
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
    | INgxFormInputBankCard
    | INgxFormInputEmail
    | INgxFormInputMobile
    | INgxFormInputMultiSelect
    | INgxFormInputName
    | INgxFormInputNumber
    | INgxFormInputPassword
    | INgxFormInputText
    | INgxFormInputUsername;
