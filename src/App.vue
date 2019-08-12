<template xmlns="http://www.w3.org/1999/html">

    <div id="app">
        <head><title>一和研发</title></head>
        <div v-show="chooseProject">
            <div class="weui-cells__title">请选择项目</div>
            <li v-for="(project, index) in projects" v-bind:key="index">
                <button v-on:click="changeChooseProjectModle(project)" class="weui-btn weui-btn_primary">{{ project.projectName }}</button>
                <br>
            </li>
        </div>
        <form @submit.prevent="submit" v-show="!chooseProject">

        <div class="weui-cells__title">{{informations.projectName}}项目登记报名</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">公司名称：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司全称" required emptyTips="此栏必填写" v-model="informations.companyName"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">国家或地区：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司国家或地区" required emptyTips="此栏必填写" v-model="informations.regionName"/>
                </div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">联系方式：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" placeholder="请输入11位手机号"  required pattern="[0-9]{11}" emptyTips="此栏必填写" notMatchTips="请输入正确的手机号" v-model="informations.phoneNumber">
                </div>
                <!--                <div class="weui-cell__ft">-->
                <!--                    <a href="javascript:;" class="weui-vcode-btn">获取验证码</a>-->
                <!--                </div>-->
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">类似业绩：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.companyAchievement"/>
                </div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主要成员：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司主要成员" required emptyTips="此栏必填写" v-model="informations.teamMember"/>
                </div>
            </div>
            <div class="weui-btn-area">
                <button class="weui-btn weui-btn_primary" type="primary" formType="submit">提交报名</button>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
    var Vue = require('vue');

    import 'weui';
    import weui from 'weui.js';
    // weui.form.validate('#form', function (error) {
    //     if (!error) {
    //         var loading =  Vue.$weui.loading('提交中...');
    //         setTimeout(function () {
    //             loading.hide();
    //             Vue.$weui.toast('提交成功', 3000);
    //         }, 1500);
    //     }
    //     // return true; // 当return true时，不会显示错误
    // },);
    export default {
        data() {
            return {
                informations: {
                    companyAchievement: "",
                    companyName: "",
                    phoneNumber: "",
                    regionName: "",
                    teamMember: "",
                    projectName:"",
                    projectCode:"",
                    expireDate:""
                },
                projects: [],
                chooseProject:true
            }
        },
        methods: {
            submit() {
                const url = 'http://106.52.245.156:9527/api/enroll';
                const formData = JSON.stringify(this.informations); // this指向这个VUE实例 data默认绑定在实例下的。所以直接this.student就是要提交的数据
                this.$http.post(url, formData).then(function () {
                        alert("报名成功！");
                        this.chooseProject = !this.chooseProject;
                })
                    .catch(function () {
                        alert("服务器异常！！！");
                    })

            },
            changeChooseProjectModle(project) {
                const now = new Date();
                const expire = new Date(project.expireDate)
                if (expire.getTime() < now.getTime()) {
                    alert("该项目已过截止日期！")
                } else {
                    this.chooseProject = !this.chooseProject;
                    this.informations.projectName = project.projectName;
                    this.informations.projectCode = project.projectCode;
                    this.informations.expireDate = project.expireDate;
                    this.informations.enrollDate = now;
                }
            },
            getAllProject() {
                const url = "http://106.52.245.156:9527/api/getProjectList";
                this.$http.get(url,{emulateJSON:true}).then(response => {
                    this.projects = response.data.data;})
                    .catch(function () {
                        alert("服务器异常")
                    });
            }
        },
        mounted() {
            this.getAllProject();
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        list-style: none;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
