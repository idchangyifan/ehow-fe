<template xmlns="http://www.w3.org/1999/html">

    <div id="app">
        <head><title>一和研发</title></head>
        <div v-show="chooseProject">
            <div class="weui-cells__title">请选择项目</div>
            <li v-for="(project, index) in projects" v-bind:key="index">
                <button v-on:click="changeChooseProjectModle(project)" class="weui-btn weui-btn_primary" v-if="project.ongoing === 1">{{ project.projectName }}</button>
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
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">公司业绩1：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.companyAchievement1"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">公司业绩2：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.companyAchievement2"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">公司业绩3：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.companyAchievement3"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">公司业绩4：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.companyAchievement4"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">公司业绩5：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.companyAchievement5"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创团队：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司主创团队成员" required emptyTips="此栏必填写" v-model="informations.teamMember"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创业绩1：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.memberAchievement1"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创业绩2：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.memberAchievement2"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创业绩3：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.memberAchievement3"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创业绩4：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.memberAchievement4"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创业绩5：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"  v-model="informations.memberAchievement5"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">主创获奖：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入主创团队获奖情况,没有请填无" required emptyTips="此栏必填写"  v-model="informations.memberAward"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系人：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入公司联系人" required emptyTips="此栏必填写"  v-model="informations.contact"/>
                </div>
            </div>
            <div class="weui-cell weui-cell_vcode">
                <div class="weui-cell__hd">
                    <label class="weui-label">联系人手机：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" placeholder="请输入11位手机号"  required pattern="[0-9]{11}" emptyTips="此栏必填写" notMatchTips="请输入正确的手机号" v-model="informations.phoneNumber">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系人邮箱：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="email" placeholder="请输入邮箱" required emptyTips="此栏必填写"  v-model="informations.emailAddress"/>
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

    export default {
        data() {
            return {
                informations: {
                    companyAchievement1: "",
                    companyAchievement2: "",
                    companyAchievement3: "",
                    companyAchievement4: "",
                    companyAchievement5: "",
                    memberAchievement1: "",
                    memberAchievement2: "",
                    memberAchievement3: "",
                    memberAchievement4: "",
                    memberAchievement5: "",
                    memberAward: "",
                    companyName: "",
                    phoneNumber: "",
                    regionName: "",
                    teamMember: "",
                    projectName:"",
                    projectCode:"",
                    expireDate:"",
                    emailAddress:"",
                    contact:""
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
