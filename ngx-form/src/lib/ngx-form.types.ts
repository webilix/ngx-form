import {
    INgxFormInputAutoComplete,
    INgxFormInputBankCard,
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
    INgxFormInputText,
    INgxFormInputUrl,
    INgxFormInputUsername,
} from './inputs';

export type NgxFormInputTypes =
    // VIEWS
    | INgxFormInputComment
    // INPUTS
    | INgxFormInputAutoComplete
    | INgxFormInputBankCard
    | INgxFormInputDomain
    | INgxFormInputEmail
    | INgxFormInputIp
    | INgxFormInputMobile
    | INgxFormInputMultiSelect
    | INgxFormInputName
    | INgxFormInputNationalCode
    | INgxFormInputNumber
    | INgxFormInputPassword
    | INgxFormInputText
    | INgxFormInputUrl
    | INgxFormInputUsername;
