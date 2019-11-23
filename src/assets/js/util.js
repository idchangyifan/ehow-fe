exports.install = function (Vue, options) {
    Vue.prototype.getUserInfo = function () {
        const url = this.GLOBAL.serverUrl + "api/getUserInfo";
        this.$http.get(url, {emulateJSON: true}).then(response => {
            this.GLOBAL.userInfo = response.data.data;
        })
            .catch(function () {
                alert("服务器异常")
            });
    };
    Vue.prototype.text2 = function () {
        console.log('执行成功2');
    };
};
