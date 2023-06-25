<template>
  Day la trang hoạt động ngoại khóa

</template>
<script>
import { useMenu } from '../../../store/use-menu';
export default{
  setup(){
      useMenu().onselectedKeys(["admin-roles"]);
  },
}
</script>