import { GetAttributes, GlobalAttributes } from '../Attributes';

export interface textarea extends Partial<
    GlobalAttributes
    & GetAttributes<'autocapitalize'
        | 'autocomplete'
        | 'autofocus'
        | 'cols'
        | 'disabled'
        | 'form'
        | 'maxlength'
        | 'minlength'
        | 'name'
        | 'placeholder'
        | 'readonly'
        | 'required'
        | 'rows'
        | 'spellcheck'
        | 'wrap'
    >
>{}