<template>
  <div class="row" style="background-color:lightgray ; width: 100% ; height: 20rem">
    <footer id="footer" class="small">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 px-3 py-5 mb-5 mb-md-0">
            <div class="row">
              <div class="col-md-5 border-end">
                <img src="../assets/10-removebg-preview.png" alt="logo" height="60" width="60" class="ms-1 me-3 mt-2">

                <div class="fw-bold text-uppercase h5">KHOA ĐIỆN TỬ - TRƯỜNG ĐẠI HOC KỸ THUẬT CÔNG NGHIỆP
                  THÁI NGUYÊN</div>

                <div class="mb-2"><font-awesome-icon :icon="['fas', 'map-pin']" class="me-2" />Số 666 Đường 3-2, P.Tích
                  Lương, TP
                  Thái Nguyên - Tỉnh Thái Nguyên</div>
                <div class="mb-3 text-uppercase"><font-awesome-icon :icon="['fas', 'envelope']" class="me-2" />Email:
                  fee@tnut.edu.vn</div>
                <div class="mb-2"><font-awesome-icon :icon="['fas', 'phone']" class="me-2" />Điện thoại: 0944.122.388
                </div>
              </div>
              <div class="col-md-7">
                <div class="row g-4" id="rnmnlv6">
                  <div class="col-6">
                    <div class="h6 text-uppercase fw-bold">THÔNG TIN LIÊN QUAN</div>
                    <div class="footerr ">
                      <div >
                        <div> 
                          <router-link :to="{ name: 'user-about' }">
                            <a >Giới thiệu</a>
                          </router-link>
                        </div>
                      </div>

                      <div> <router-link :to="{ name: 'user-new' }">
                          <a>
                            <UserOutlined />Thông báo
                          </a>
                        </router-link></div>
                      <div> <router-link :to="{ name: 'user-tuyensinh' }">
                          <span>
                            <UserOutlined />Tuyển sinh
                          </span>
                        </router-link></div>
                      <div> <router-link :to="{ name: 'user-tech' }">
                          <span>
                            <UserOutlined />Nghiên cứu khoa học
                          </span>
                        </router-link></div>
                      <div><span>Tra văn bằng</span></div>
                      <div><span>Đào tạo</span></div>


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.9449161096213!2d105.84269551537759!3d21.54900907518878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313521406ca0840d%3A0x40cb6f8d2cad2168!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBL4bu5IFRodeG6rXQgQ8O0bmcgTmdoaeG7h3A!5e0!3m2!1svi!2s!4v1657681263775!5m2!1svi!2s"
              width="100%" height="300" style="border:0;" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div id="footerBt" class="">
        <div class="container-lg">
          <div class="copyright">
            <div class="row">
              <div class="col-8 col-md-9 ftBt-left  text-center">Copyright © FEE.TNUT.EDU.VN 2023. All Rights
                Reserved. </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.footerr a {
color: black;
}
.footerr a:hover {
  color: rgb(240, 181, 20)
}
</style>