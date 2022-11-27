import {
    INgxFormInputAutoComplete,
    INgxFormInputComment,
    INgxFormInputEmail,
    INgxFormInputMobile,
    INgxFormInputNumber,
    INgxFormInputText,
} from './inputs';

export type NgxFormInputTypes =
    // VIEWS
    | INgxFormInputComment
    // INPUTS
    | INgxFormInputAutoComplete
    | INgxFormInputEmail
    | INgxFormInputMobile
    | INgxFormInputNumber
    | INgxFormInputText;
