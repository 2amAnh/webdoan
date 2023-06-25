
// const image = document.querySelectorAll("img")
// const input = document.querySelectorAll("input");
// input.addEvenListtener("change",() =>{
//     image.src = URL.createObjectURL(input.files[0])
// })
const user = [
{
    path: "/user",
    component: () => import("../layout/user.vue"),
    children:[
        {
            path:"index",
            name:"user-index",
            component:()=> import("../page/user/index/index.vue")

        },
        {
            path:"a",
            name:"user-a",
            component:()=> import("../page/user/create/a.vue")

        },
        {
            path: "danhsach",
            name: "user-danhsach",
            component: () => import("../page/user/danhsach/danhsach.vue")
        }
        ,
        {
            path: "about",
            name: "user-about",
            component: () => import("../page/user/about/index.vue")
        }
        ,
        {
            path: "tech",
            name: "user-tech",
            component: () => import("../page/user/tech/index.vue")
        },
        {
            path: "contact",
            name: "user-contact",
            component: () => import("../page/user/contact/contact.vue")
        },
        {
            path: "login",
            name: "user-login",
            component: () => import("../page/user/login/login.vue")
        },
        {
            path: "new",
            name: "user-new",
            component: () => import("../page/user/new/index.vue")
        },
        {
            path: "tt1",
            name: "user-tt1",
            component: () => import("../page/user/new/tt1.vue")
        },
        {
            path: "tt2",
            name: "user-tt2",
            component: () => import("../page/user/new/tt2.vue")
        },
        {
            path: "tt3",
            name: "user-tt3",
            component: () => import("../page/user/new/tt3.vue")
        },
        {
            path: "tuyensinh",
            name: "user-tuyensinh",
            component: () => import("../page/user/tuyensinh/index.vue")
        },
        {
            path: "55DVT",
            name: "user-class-55DVT",
            component: () => import("../page/user/classs/55DVT.vue")
        },
        {
            path: "56DVT",
            name: "user-class-56DVT",
            component: () => import("../page/user/classs/56DVT.vue")
        },{
            path: "57DVT",
            name: "user-class-57DVT",
            component: () => import("../page/user/classs/57DVT.vue")
        },
        
        // {
        //     path: "sv55DVT",
        //     name: "user-student-55DVT",
        //     component: () => import("../page/user/student/55DVT.vue")
        // },
        {
            path: "sv57DVT",
            name: "user-student-57DVT",
            component: () => import("../page/user/student/57DVT.vue")
        },
        {
            path: "sv56DVT",
            name: "user-student-56DVT",
            component: () => import("../page/user/student/56DVT.vue")
        },
        {
            path: "student/:id/55DVT",
            name: "user-student-55DVT",
            component: () => import("../page/user/student/55DVT.vue")
        },
    ]

}
];
export default user;
