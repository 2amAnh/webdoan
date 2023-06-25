<template>
    <TheMenuUser/>

    <RouterView></RouterView>
    <TheFooter/>
</template>
<script>
import TheMenuUser from '../components/TheMenuUser.vue';
import TheFooter from '../components/TheFooter.vue';
export default({
    components:{
        TheMenuUser,
        TheFooter
    }
})
</script>
