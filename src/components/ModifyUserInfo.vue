<template>
    <div>
        <div id="modifyUserInfo">
            <head><title></title></head>
            <form @submit.prevent="submit">
                <div class="weui-cells__title">修改用户信息</div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">账号：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" disabled=true type="text" placeholder="请输入账号"
                                   required emptyTips="此栏必填写"
                                   v-model="userInfoDto.userId"/>
                        </div>
                    </div>

                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">公司名称：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司名称" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.companyName"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">公司注册地：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司注册地，包括国家、省、市" required
                                   emptyTips="此栏必填写"
                                   v-model="userInfoDto.companyAddress"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">法人代表/incorporator：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司法人代表" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.incorporator"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">联系人：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司联系人" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.contact"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">联系人电话：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司联系人电话" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.telNumber"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">电子邮箱：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司联系人电子邮箱" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.email"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">公司首页：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入公司网站地址" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.webSite"/>
                        </div>
                    </div>
                    <div class="weui-btn-area">
                        <button class="weui-btn weui-btn_primary" type="primary" formType="submit">确认修改</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                userInfoDto: {
                    userId: "",
                    password: "",
                    password2: "",
                    companyName: "",
                    companyAddress: "",
                    incorporator: "",
                    contact: "",
                    telNumber: "",
                    email: "",
                    webSite: "",
                }
            };
        },
        mounted() {
            this.getUserInfo();
        },
        methods: {
            getUserInfo() {
                const url = this.GLOBAL.serverUrl + "api/getUserInfo/";
                this.$http.get(url, {emulateJSON: true, credentials: true}).then(response => {
                    this.userInfoDto = response.data.data;
                })
                    .catch(function () {
                        alert("服务器异常")
                    });
            },
            submit() {
                const url = this.GLOBAL.serverUrl + 'api/modifyUserInfo';
                this.$http.post(url, this.userInfoDto).then(function () {
                    alert("修改成功！");
                })
                    .catch(function () {
                        alert("服务器异常！！！");
                    });

                this.$router.push({
                    name: 'Home'
                })
            },

        }
    }
</script>

<style scoped>

</style>