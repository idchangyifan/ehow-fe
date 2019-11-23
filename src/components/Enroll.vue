<template>
    <div id="enroll">
        <head><title>一和研发</title></head>
        <form @submit.prevent="submit">


            <div class="weui-cells__title"><font size="4">{{project.projectName}}项目登记报名</font></div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_select" v-if="project.allowUnion==='1'">
                    <div class="weui-cell__hd"><label class="weui-label">&nbsp;&nbsp;&nbsp;&nbsp;申报方式：</label></div>
                    <div class="weui-cell__bd">
                        <select class="weui-select" name="select1" v-model="informations.unionTypeCode" v-on:click="checkUnionType">
                            <option selected value="0">独立申报</option>
                            <option value="1">作为牵头公司联合申报</option>
                            <option value="2">联合申报</option>
                        </select>
                    </div>
                </div>
                <label><font size="1" color="red">{{tips}}</font></label>
                <div class="weui-cell" v-if="asLeader">
                    <div class="weui-cell__hd"><label class="weui-label">牵头公司代码：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" disabled=true placeholder="联合申报请填写牵头公司联合申报专属id "
                               v-model="informations.leaderCompanyId"/>
                    </div>
                </div>
                <div class="weui-cell" v-if="asFollower">
                    <div class="weui-cell__hd"><label class="weui-label">牵头公司代码：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="联合申报请填写牵头公司联合申报专属id" v-on:blur="checkLeaderCodeExist" required emptyTips="此栏必填写"
                               v-model="informations.leaderCompanyId"/>
                    </div>
                </div>

                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">公司业绩1：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.companyAchievement1"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">公司业绩2：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.companyAchievement2"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">公司业绩3：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.companyAchievement3"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">公司业绩4：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.companyAchievement4"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">公司业绩5：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入公司类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.companyAchievement5"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创团队：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入公司主创团队成员" required emptyTips="此栏必填写"
                               v-model="informations.teamMember"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创业绩1：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.memberAchievement1"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创业绩2：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.memberAchievement2"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创业绩3：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.memberAchievement3"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创业绩4：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.memberAchievement4"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创业绩5：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入主创团队类似业绩,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.memberAchievement5"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">主创获奖：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入主创团队获奖情况,没有请填无" required emptyTips="此栏必填写"
                               v-model="informations.memberAward"/>
                    </div>
                </div>


                <div class="weui-btn-area">
                    <button class="weui-btn weui-btn_primary" type="primary" formType="submit">提交/修改报名</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Enroll",
        data() {
            return {
                informations: {
                    companyAchievement1: '',
                    companyAchievement2: '',
                    companyAchievement3: '',
                    companyAchievement4: '',
                    companyAchievement5: '',
                    memberAchievement1: '',
                    memberAchievement2: '',
                    memberAchievement3: '',
                    memberAchievement4: '',
                    memberAchievement5: '',
                    memberAward: '',
                    companyName: '',
                    phoneNumber: '',
                    regionName: '',
                    teamMember: '',
                    projectName: '',
                    projectCode: '',
                    expireDate: '',
                    emailAddress: '',
                    contact: '',
                    userId: '',
                    leaderCompanyId: '',
                    unionTypeCode: '',
                    unionTypeName: '',
                },
                project: {
                    projectName: '',
                    projectCode: '',
                    expireDate: '',
                    allowUnion: '',
                    maxUnionNumbers: 0
                },
                asLeader: false,
                asFollower: false,
                tips:""
            };
        },
        methods: {
            checkLeaderCodeExist() {
                let url = this.GLOBAL.serverUrl + 'api/checkLeaderCodeExist/' + this.informations.leaderCompanyId;
                this.$http.get(url, {emulateJSON: true, credentials: true}).then().catch(function () {
                    alert("牵头公司代码有误，请确保牵头公司已报名成功！")
                    this.informations.leaderCompanyId = "";
                });

            },
            checkUnionType() {
                if (this.informations.unionTypeCode === "0") {
                    this.asFollower = false;
                    this.asLeader = false;
                    this.tips = "";
                    this.informations.leaderCompanyId = "";
                } else if (this.informations.unionTypeCode === '1') {
                    this.tips = "请将贵公司作为联合申报牵头公司的专属代码告知与贵公司联合申报的公司，用于报名填写";
                    // alert("请将贵公司作为联合申报牵头公司的专属代码告知与贵公司联合申报的公司，用于报名填写");
                    let url = this.GLOBAL.serverUrl + 'api/getLeaderCode';
                    this.$http.get(url, {emulateJSON: true, credentials: true}).then(response => {
                        this.informations.leaderCompanyId = response.data.data;
                    })
                        .catch(function () {
                            alert("服务器异常")
                        });
                    this.asLeader = true;
                    this.asFollower = false;
                } else {
                    this.tips = "请填写联合申报牵头公司专属代码，该代码将由牵头公司报名后提供";
                    this.asFollower = true;
                    this.asLeader = false;
                    this.informations.leaderCompanyId = "";
                }
            },
            submit() {
                const url = this.GLOBAL.serverUrl + 'api/enroll';
                const formData = JSON.stringify(this.informations); // this指向这个VUE实例 data默认绑定在实例下的。所以直接this.student就是要提交的数据
                this.$http.post(url, formData).then(function () {
                    alert("报名成功！");
                    this.informations = null;
                })
                    .catch(function () {
                        alert("服务器异常！！！");
                    });
                this.$router.push({
                    name: 'Project'
                })
            },
            getEnrollInfo() {
                let projectCode = this.$route.params.projectCode;
                let url1 = this.GLOBAL.serverUrl + 'api/getProjectByCode/' + projectCode;
                this.$http.get(url1, {emulateJSON: true, credentials: true}).then(response => {
                    this.project = response.data.data;
                    const now = new Date();
                    const expire = new Date(this.project.expireDate)
                    if (expire.getTime() < now.getTime()) {
                        alert("该项目已过截止日期！")
                    } else {
                        const url = this.GLOBAL.serverUrl + "api/findEnrollsInfoByUserIdAndProjectCode/" + this.project.projectCode;
                        this.$http.get(url, {emulateJSON: true, credentials: true}).then(response => {
                            if (response.data.data) {
                                this.informations = response.data.data;
                                if (this.informations.unionTypeCode === '0') {
                                    this.asFollower = false;
                                    this.asLeader = false;
                                } else if (this.informations.unionTypeCode === '1') {
                                    this.asFollower = false;
                                    this.asLeader = true;
                                } else if (this.informations.unionTypeCode === '2') {
                                    this.asFollower = true;
                                    this.asLeader = false;
                                }
                            }
                        });
                            /*.catch(function () {
                                alert("服务器异常")
                            });*/
                        if (!this.informations.userId) {
                            this.informations.projectName = this.project.projectName;
                            this.informations.projectCode = this.project.projectCode;
                            this.informations.expireDate = this.project.expireDate;
                            this.informations.enrollDate = now;
                        }
                    }
                })
                    .catch(function () {
                        alert("服务器异常")
                    });
            }
        },
        mounted() {
            this.getEnrollInfo();
        }
    }

</script>

<style scoped>

</style>