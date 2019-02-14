<template>
    <el-menu
            :default-active="'1'"
            @select="routeA"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1">Button1</el-menu-item>
        <el-menu-item index="2">Button2</el-menu-item>
        <el-menu-item index="3">Button3</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Head",
        methods:{
            routeA:function(key){
                if(key==1){
                    this.$router.push('/foo')
                }else{
                    this.$router.push('/bar')
                }

            }
        }
    }
</script>

<style scoped>

</style>