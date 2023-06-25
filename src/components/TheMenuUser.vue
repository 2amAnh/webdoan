<template>
    <div class="containter-fuild">
      <div class="row " style="background-color:bisque ; padding: 1rem">
       
  
        <div class="col-10 col-sm-9 d-flex  align-items-center justify-content-center justify-content-sm-start">
          <img src="../assets/dvt-removebg-preview.png " alt="logo" height="50" width="150"
            class="sm-3 me-3">
          <b>
            <span class="d-none d-sm-flex justify-content-sm-center fw-400"> CHUYÊN NGÀNH ĐIỆN TỬ VIỄN THÔNG </span>
            
          </b>
        </div>
  
      
      </div>
    </div>
  
    <div class="containter-fuild ">
      <div class="row " style="background-color:bisque ; padding: 1rem">
        <div class="col-sm-12 d-sm-flex align-items-center justify-content-sm-end">
  
          <span class="me-5 text-black"  text="black">
            <router-link :to="{ name: 'user-index' }">
              <b > TRANG CHỦ</b>
                      </router-link>
          </span>
          <span class="me-5 text-black">
            <router-link :to="{ name: 'user-about' }">
              <b> GIỚI THIỆU</b>
            </router-link>
          </span>
          <span class="me-5 text-black">
            <router-link :to="{ name: 'user-danhsach' }">
              <b>DANH SÁCH</b>
            </router-link>
          </span>
          <!-- <span class="me-5 text-black">
            <router-link :to="{ name: 'user-new' }">
              <b>TIN TỨC</b>
            </router-link>
          </span> -->
          <span class="me-5 text-black">
            <router-link :to="{ name: 'user-tuyensinh' }">
              <b> TUYỂN SINH</b>
            </router-link>
          </span>
          <span class="me-5 text-black">
            <router-link :to="{ name: 'user-tech' }">
              <b> KHOA HỌC CÔNG NGHỆ</b>
            </router-link>
          </span>
          <span class="me-5 text-black">
            <router-link :to="{ name: 'user-contact' }">
              <b>LIÊN HỆ</b>
            </router-link>
          </span>
          
          
          <div class=" d-none d-sm-flex align-items-center justify-content-sm-end">
            <span class="me-5 text-black">
              <router-link :to="{ name: 'user-login' }">
                <font-awesome-icon :icon="['fas', 'user']" />
            </router-link>
          
            </span>
          </div>
  
        </div>
  
  
      </div>
    </div>
   
  </template>
  <style>
b{
  color:black ; 
display:inline-block;
}
b:hover{
  background-color:floralwhite;
}
</style>
  