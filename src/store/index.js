import { createStore } from "vuex";

export default createStore({
  state: {
    formData: {
      fullName: "",
      age: "",
      children: [],
    },
  },
  getters: {},
  mutations: {
    updateFormData(state, data) {
      state.formData = data;
    },
    clearFormData(state) {
      state.formData = {
        fullName: "",
        age: "",
        children: [],
      };
    },
  },
  actions: {},
  modules: {},
});
