import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home_alas",
			redirect: "/home/home",
		},
		{
			path: "/login",
			name: "login",
			component: () => import("./../views/auth/Login.vue"),
		},
		{
			path: "/home",
			name: "home",
			component: HomeView,
			children: [
				{
					path: "home",
					name: "homelist",
					component: () => import("./../views/post/PostList.vue"),
				},
				{
					path: "my",
					name: "my",
					component: () => import("./../views/auth/My.vue"),
				},
			],
		},
	],
});

export default router;
