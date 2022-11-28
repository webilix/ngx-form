import {
    INgxFormInputAutoComplete,
    INgxFormInputComment,
    INgxFormInputEmail,
    INgxFormInputMobile,
    INgxFormInputMultiSelect,
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
    | INgxFormInputMultiSelect
    | INgxFormInputNumber
    | INgxFormInputText;
