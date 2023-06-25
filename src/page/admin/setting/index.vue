<template>
    Day la trang quan ly setting
 
</template>
<script>
import { useMenu } from '../../../store/use-menu';
export default{
    setup(){
        useMenu().onselectedKeys(["admin-setting"]);
    },
}
</script>