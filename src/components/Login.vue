<template>
    <div>
        <div id="login">
            <div class="weui-cells__title">登录</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">用户名：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入登录用户名" required emptyTips="此栏必填写"
                               v-model="userInfo.userId"/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">密码：</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" placeholder="请输入登录密码" required emptyTips="此栏必填写"
                               v-model="userInfo.password"/>
                    </div>
                </div>
                <div class="weui-btn-area">
                    <button class="weui-btn weui-btn_primary" v-on:click="login">登录</button>
                </div>
                <div class="weui-cells__title" v-on:click="ToRegister"><u>没有账号？马上注册</u></div>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    import {setCookie} from '@/assets/js/cookie'

    export default {
        data() {
            return {
                userInfo: this.GLOBAL.userInfo,
            }
        },
        mounted() {
        },
        methods: {
            login() {
                this.$http.post(this.GLOBAL.serverUrl + 'login', this.userInfo).then((res) => {
                    if (!res.data.success) {
                        this.GLOBAL.userInfo.password = '';
                        this.GLOBAL.userInfo.userId = '';
                        alert(res.data.msg);
                    } else {
                        alert("登录成功");
                        setCookie("userId", this.userInfo.userId, 1800);
                        this.$router.push('/');
                    }
                });
            },
            ToRegister() {
                this.$router.push({
                    path: '/register'
                });
            },

        }
    }
</script>
