import {
    INgxFormInputAutoComplete,
    INgxFormInputBankCard,
    INgxFormInputCheckbox,
    INgxFormInputComment,
    INgxFormInputDomain,
    INgxFormInputEmail,
    INgxFormInputIp,
    INgxFormInputMobile,
    INgxFormInputMultiSelect,
    INgxFormInputName,
    INgxFormInputNationalCode,
    INgxFormInputNumber,
    INgxFormInputPassword,
    INgxFormInputSelect,
    INgxFormInputText,
    INgxFormInputTextarea,
    INgxFormInputUrl,
    INgxFormInputUsername,
} from './inputs';

export type NgxFormInputTypes =
    // VIEWS
    | INgxFormInputComment
    // INPUTS
    | INgxFormInputAutoComplete
    | INgxFormInputBankCard
    | INgxFormInputCheckbox
    | INgxFormInputDomain
    | INgxFormInputEmail
    | INgxFormInputIp
    | INgxFormInputMobile
    | INgxFormInputMultiSelect
    | INgxFormInputName
    | INgxFormInputNationalCode
    | INgxFormInputNumber
    | INgxFormInputPassword
    | INgxFormInputSelect
    | INgxFormInputText
    | INgxFormInputTextarea
    | INgxFormInputUrl
    | INgxFormInputUsername;
