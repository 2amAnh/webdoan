<template>
    <TheHeader />
    <div class="container-fluid mt-3">
        <div class="row " style="background-color:azure ; padding: 1rem">

            <div class="col-sm-3 col-3 d-none d-sm-flex">

                <a-list bordered style="width: 100%">
                    <TheMenu />
                    <template #header>
                        <div><font-awesome-icon icon="align-justify" class="me-1" />TÍNH NĂNG</div>
                    </template>

                </a-list>
                <!-- <div>
            <img src="../assets/anh377373.jpg" ; width: 50%  height: 10rem >
        </div> -->
            </div>
            <div class="col-12 col-sm-9">
                <router-view></router-view>
                <img src="../assets/anhanahaha.jpg" height="500" width="1000">
            </div>

        </div>

    </div>

    <TheFooter/>
</template>
<script>
import TheHeader from '../components/TheHeader.vue';
import TheMenu from '../components/TheMenu.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
    components: {
        TheHeader,
        TheMenu,
        TheFooter
    }
}
</script>