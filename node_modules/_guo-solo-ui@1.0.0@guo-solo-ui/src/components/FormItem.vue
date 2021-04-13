<template>
    <div>
        <label v-if="label"></label>
        <slot></slot>
        <p v-if="validateStatus==='error'" class="error">
            {{errorMessage}}
        </p>
    </div>
</template>
<script>
    import schema from "async-validator";
    export default {
        name:"mFormItem",
        inject:['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                validateStatus: '',
                errorMessage: '',
                recoreValue: ''
            }
        },
        created() {
            this.$on('validate', this.validate)
        },
        mounted(){
            if(this.prop) {
                this.$parent.$emit('formItemAdd',this)
            }
        },
        methods: {
            validate(value=this.recoreValue) {
                console.log('value',value)
                this.recoreValue = value;
                return new Promise(resolve => {
                    console.log(value);
                    const descriptor = {[this.prop]: this.form.rules[this.prop]};
                    const validator = new schema(descriptor);

                    validator.validate({[this.prop]: value}, errors => {
                        if (errors) {
                            this.validateStatus = "error";
                            this.errorMessage = errors[0].message;
                            resolve(false)
                        } else {
                            this.validateStatus = "";
                            this.errorMessage = "";
                            resolve(true)
                        }
                    })
                })
            }
        }
    }
</script>
