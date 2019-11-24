<template xmlns="http://www.w3.org/1999/html">

    <div id="project">
        <head><title></title></head>

        <div class="weui-cells__title">请选择项目</div>
        <li v-for="(project, index) in projects" v-bind:key="index">
            <button class="weui-btn weui-btn_primary" v-on:click="toEnroll(project)" v-if="project.ongoing === 1">
                {{ project.projectName }}
            </button>
            <br>
        </li>
    </div>
</template>

<script>
    var Vue = require('vue');
    import 'weui';
    export default {
        data() {
            return {
                projects: []
            }
        },
        methods: {
            getAllProject() {
                const url = this.GLOBAL.serverUrl + "api/getProjectList";
                this.$http.get(url, {emulateJSON: true, credentials: true}).then(response => {
                    this.projects = response.data.data;
                })
                    .catch(function () {
                        alert("服务器异常")
                    });
            },
            toEnroll(project) {
                this.$router.push({
                    name: 'Enroll',
                    params: {
                        projectCode: project.projectCode
                    }
                })
            }
        },
        mounted() {
            this.getAllProject();
        }
    }

</script>

<style>

</style>
