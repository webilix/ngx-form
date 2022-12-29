import { FormControl, ValidatorFn } from '@angular/forms';

export abstract class NgxFormMethods<I /** INPUT **/, V /** VALUE **/> {
    abstract control(input: I, validators: ValidatorFn[]): FormControl<V>;
    abstract value(value: any, input?: I): V;
}
