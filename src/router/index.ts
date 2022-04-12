import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import PostView from "../views/PostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/createPost",
      name: "createPost",
      component: CreatePostView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    },
    // // 404
    // {
    //   path: "/:catchAll(.*)",
    //   component: NotFound,
    //   name: "notFound",
    // },
  ],
});

export default router;
