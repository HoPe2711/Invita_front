import {render} from 'mustache';

export const styleC: Partial<CSSStyleDeclaration> = {
    width: '1000px'
};

export enum GENDER_TYPE {
    MALE,
    FEMALE
}

export const content = (
    input: any,
    template: string
) => {
    const {gender} = input;
    const reInput = {
        ...input,
        vocative: gender === GENDER_TYPE.MALE ? 'anh' : 'chị',
        upperCaseVocative: gender === GENDER_TYPE.MALE ? 'Anh' : 'Chị',
    }

    return render(template, reInput);
}
