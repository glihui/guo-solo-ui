<template>
    <div>
        s
        <m-form ref="ruleForm" :model="ruleForm" :rules="rules">
            <m-form-item label="用户名" prop="name">
                <mInput v-model="ruleForm.name"></mInput>
            </m-form-item> 
            <m-form-item label="密码" prop="pwd">
                <m-input v-model="ruleForm.pwd"></m-input>
            </m-form-item>  
        </m-form>  
        <div @click="submitForm('ruleForm')">button</div>  
    </div>
</template>

<script>
    // import mInput from "./components/input.vue";
    // import mFormItem from "./components/FormItem.vue";
    // import mForm from "./components/Form.vue";
    import {mInput,mForm,mFormItem} from "guo-solo-ui";
    export default {
         data() {
            return {
                ruleForm: {
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        {required: true, message: "请输入名称"},
                        {min: 6, max: 10, message: "请输入6-10为用户名"}
                    ],
                    pwd: [
                        {required: true, message: "请输入密码"}
                    ]
                }
            }
         },
         components: {
             mInput,
             mFormItem,
             mForm
         },
         methods: {
             submitForm(name) {
                 console.log('name',name)
                 console.log('name',this.$refs[name]);
                 console.log('mm',this.$refs.ruleForm.validate)
                 this.$refs[name].validate(valid => {
                     if(valid) {
                         alert("验证成功，可以提交")
                     } else {
                         alert('error 提交')
                         return false;
                     }
                 })
             }
         }
    }
</script>

