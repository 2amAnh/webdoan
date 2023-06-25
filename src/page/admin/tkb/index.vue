<template>
    <a href=" https://tms.tnut.edu.vn/tkb/">TKB</a>
 
</template>
<script>
import { useMenu } from '../../../store/use-menu';
export default{
    setup(){
        useMenu().onselectedKeys(["admin-tkb"]);
    },
}
</script>