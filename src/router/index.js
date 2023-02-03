import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import DashBoard from "../views/Dashboard.vue";
import ProfileBoard from "../views/ProfileBoard.vue";
import EventBoard from "../views/EventBoard.vue";
import HomeBoard from "../views/HomeBoard.vue";
import FreqAsked from "../views/FreqAsked.vue";
import EventProfile from "../views/EventProfile.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },

    {
      path: "/dashboard",
      name: "DashBoard",
      component: DashBoard,
    },

    {
      path: "/profile",
      name: "ProfileBoard",
      component: ProfileBoard,
    },

    {
      path: "/events",
      name: "EventBoard",
      component: EventBoard,
    },
    {
      path: "/",
      name: "HomeBoard",
      component: HomeBoard,
    },
    {
      path: "/faq",
      name: "FreqAsked",
      component: FreqAsked,
    },
    {
      path: "/event-name",
      name: "EventProfile",
      component: EventProfile,
    },
  ],
});

export default router;
