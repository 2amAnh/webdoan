<template>
    Day la trang đăng ký  môn học
 
</template>
<script>
import { useMenu } from '../../../store/use-menu';
export default{
    setup(){
        useMenu().onselectedKeys(["admin-dkmh"]);
    },
}
</script>