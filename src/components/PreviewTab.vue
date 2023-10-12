<template>
  <div class="preview-container">
    <h3 v-if="formData">Персональные данные</h3>
    <div class="personal-info" v-if="formData">
      {{ formData.fullName }}, {{ formData.age }} лет
    </div>
    <h3 v-if="formData">Дети</h3>
    <ul class="children" v-if="formData">
      <li
        v-for="(child, index) in formData.children"
        :key="index"
        class="child-info"
      >
        {{ child.name }}, {{ child.age }} лет
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PreviewTab",
  data() {
    return {
      formData: null,
    };
  },
  created() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
  },
};
</script>

<style scoped>
.preview-container {
  max-width: 616px;
  margin: 60px auto;
  padding: 10 20px;
  text-align: left;
}

.personal-data {
  font-weight: bold;
}

.personal-info {
  padding: 20px;
  border-radius: 5px;
}

.children h3 {
  font-weight: bold;
}
.children {
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  height: 100px;
}
.child-info {
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #f1f1f1;
  margin-bottom: 10px;
  flex: 0 1 auto;
  display: inline-flex;
}

.child-info:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding-left: 0;
}
</style>
