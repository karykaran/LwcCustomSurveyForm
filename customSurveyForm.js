import { LightningElement } from 'lwc';

export default class CustomSurveyForm extends LightningElement {
    value = '';
    value1 = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }

    get options1() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }

    get options2() {
        return [
            { label: 'English', value: 'en' },
            { label: 'German', value: 'de' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
            { label: 'Italian', value: 'it' },
            { label: 'Japanese', value: 'ja' },
        ];
    }
}