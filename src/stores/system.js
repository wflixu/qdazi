import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", () => {
	const token = ref("");

	const setToken = (val) => {
		token.value = val;
	};

	const user = reactive({});
	const setUser = (info) => {
		Object.assign(user, info);
	};

	return { token, setToken, user, setUser };
});
