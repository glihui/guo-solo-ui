<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"mForm",
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        data() {
            return {
            }
        },
        created() {
            this.fileds = [];
            this.$on('formItemAdd', item => {
                this.fileds.push(item);
            })
        },
        methods: {
            validate(callback) {
                const tasks = this.fileds.map(item => item.validate());
                let ret = true;
                Promise.all(tasks).then(results => {
                    results.forEach(valid=>{
                        if (!valid) {
                            ret = false;
                        }
                    })
                    callback(ret);
                })
            }
        }
    }
</script>
