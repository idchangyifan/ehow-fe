<template>
    <div>
        <div id="register">
            <head><title></title></head>
            <form @submit.prevent="submit">
                <div class="weui-cells__title">欢迎注册一和研发</div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">账号：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" v-on:blur="checkUserIdAvailable" type="text" placeholder="请输入账号" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.userId"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">密码：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="password" placeholder="请输登录密码" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.password"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">确认密码：</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" v-on:blur="checkPassword" type="password" placeholder="请再次输入登录密码" required emptyTips="此栏必填写"
                                   v-model="userInfoDto.password2"/>
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
                            <input class="weui-input" type="text" placeholder="请输入公司注册地，包括国家、省、市" required emptyTips="此栏必填写"
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
                        <button class="weui-btn weui-btn_primary" type="primary" formType="submit">注册</button>
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
        methods: {
            submit() {
                const url = this.GLOBAL.serverUrl + 'anno/register';
                this.$http.post(url, this.userInfoDto).then(function () {
                    alert("注册成功！");
                })
                    .catch(function () {
                        alert("服务器异常！！！");
                    });
                this.$router.push({
                    name: 'Login'
                })
            },
            checkUserIdAvailable() {
                const url = this.GLOBAL.serverUrl + 'anno/checkIdAvailable/' + this.userInfoDto.userId;
                this.$http.get(url, {emulateJSON: true, credentials: true}).then(response => {
                    if (!response.data.data) {
                        alert("此账号已存在，请重新输入！");
                        this.userInfoDto.userId = null;
                    }
                })
            },
            checkPassword() {
                if (this.userInfoDto.password != this.userInfoDto.password2) {
                    this.userInfoDto.password = null;
                    this.userInfoDto.password2 = null;
                    alert("两次输入的密码不一致，请重新输入！")
                }
            }
        }
    }
</script>

<style scoped>

</style>