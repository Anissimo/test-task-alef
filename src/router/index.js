import { createRouter, createWebHistory } from "vue-router";
import FormTab from "@/components/FormTab.vue";
import PreviewTab from "@/components/PreviewTab.vue";

const routes = [
  {
    path: "/",
    component: FormTab,
  },
  {
    path: "/preview",
    name: "preview",
    component: PreviewTab,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
