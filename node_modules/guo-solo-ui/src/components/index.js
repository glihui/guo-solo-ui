import mFormItem from './FormItem.vue';
import mInput from './input.vue';
import mForm from './Form.vue';

const components = [
    mFormItem,
    mInput,
    mForm
]

const install = (Vue) => {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    mFormItem,
    mInput,
    mForm 
}