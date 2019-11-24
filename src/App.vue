<template xmlns="http://www.w3.org/1999/html">

    <div id="app">
        <head><title></title></head>
        <router-view></router-view>
    </div>
</template>

<script>
    import Project from './components/Project'
    export default {
        components: {
            Project
        },
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
