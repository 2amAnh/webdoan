const admin = [
    {
        path: "/admin",
        component: () => import("../layout/admin.vue"),
        children: [
            //quan ly user
            {
                path: "user",
                name: "admin-user",
                component: () => import("../page/admin/user/index.vue")
            },
            {
                path: "user/create",
                name: "admin-user-create",
                component: () => import("../page/admin/user/create.vue")
            },
            {
                path: "user/:id/edit",
                name: "admin-user-edit",
                component: () => import("../page/admin/user/edit.vue")
            },
            // {
            //     path: "user/:id/delete",
            //     name: "admin-user-delete",
            //     component: () => import("../page/admin/user/delete.vue")
            // },
            {
                path: "usern",
                name: "admin-usern",
                component: () => import("../page/admin/usern/index.vue")
            },
            {
                path: "tkb",
                name: "admin-tkb",
                component: () => import("../page/admin/tkb/index.vue")
            },

            //quan ly cai dat
            {
                path: "setting",
                name: "admin-setting",
                component: () => import("../page/admin/setting/index.vue")
            },
            //quan ly vai tro
            {
                path: "roles",
                name: "admin-roles",
                component: () => import("../page/admin/roles/index.vue")
            },
            {
                path: "dkmh",
                name: "admin-dkmh",
                component: () => import("../page/admin/dkmh/index.vue")
            },
            {
                path: "ykien",
                name: "admin-ykien",
                component: () => import("../page/admin/ykien/index.vue")
            },
            {
                path: "xemdiem",
                name: "admin-xemdiem",
                component: () => import("../page/admin/xemdiem/index.vue")
            },
            {
                path: "index",
                name: "admin-index",
                component: () => import("../page/admin/index/index.vue")
            }
            ,
            {
                path: "about",
                name: "admin-about",
                component: () => import("../page/admin/about/index.vue")
            }
            ,
            {
                path: "tech",
                name: "admin-tech",
                component: () => import("../page/admin/tech/index.vue")
            },
            {
                path: "new",
                name: "admin-new",
                component: () => import("../page/admin/new/index.vue")
            },
            {
                path: "tintuc",
                name: "admin-new-tintuc",
                component: () => import("../page/admin/new/tintuc.vue")
            },
            {
                path: "tuyensinhadmin",
                name: "admin-new-tuyensinh",
                component: () => import("../page/admin/new/tuyensinh.vue")
            },
            {
                path: "introduce",
                name: "admin-new-introduce",
                component: () => import("../page/admin/new/introduce.vue")
            },
            {
                path: "khcn",
                name: "admin-new-khcn",
                component: () => import("../page/admin/new/KHCN.vue")
            },
            {
                path: "tuyensinh",
                name: "admin-tuyensinh",
                component: () => import("../page/admin/tuyensinh/index.vue")
            }
        ]
        
    }
    
];
export default admin;