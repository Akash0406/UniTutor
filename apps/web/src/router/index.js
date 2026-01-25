import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Blog from "../pages/Blog.vue";
import BlogPost from "../pages/BlogPost.vue";
import Career from "../pages/Career.vue";
import EOI from "../pages/EOI.vue";
import HowItWorks from "../pages/HowItWorks.vue";
import NotFound from "../pages/NotFound.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/news", name: "News", component: News },
    { path: "/blog", name: "Blog", component: Blog },
    { path: "/blog/:slug", name: "BlogPost", component: BlogPost, props: true },
    { path: "/career", name: "Career", component: Career },
    { path: "/eoi", name: "EOI", component: EOI },
    { path: "/howitwork", name: "HIW", component: HowItWorks },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
