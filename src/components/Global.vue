<template>
    
</template>

<script>
    const serverUrl = "http://106.52.245.156:9527/";
    // const serverUrl = "http://127.0.0.1:9527/";
    export default {
        name: "Global",
        serverUrl,
        project:{},
        userInfo: {
            userId: "",
            password: "",
            password2: "",
            companyName: "",
            contact: "",
            telNumber: "",
            email: "",
            incorporator: "",
            webSite: "",
            companyAddress: ""
        }
    }
</script>

<style scoped>

</style>