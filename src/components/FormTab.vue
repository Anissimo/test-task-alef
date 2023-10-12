<template>
  <div class="form-tab__container">
    <form @submit.prevent="saveData">
      <div class="form-tab__section-container">
        <h3>Персональные данные</h3>
        <div class="form-tab__field-wrapper">
          <div class="form-tab__input-container">
            <label for="fullName" class="form-tab__label">Имя</label>
            <input
              type="text"
              id="fullName"
              v-model="formData.fullName"
              required
              class="form-tab__input"
            />
          </div>
        </div>

        <div class="form-tab__field-wrapper">
          <div class="form-tab__input-container">
            <label for="age" class="form-tab__label">Возраст</label>
            <input
              type="number"
              id="age"
              v-model="formData.age"
              required
              class="form-tab__input"
            />
          </div>
        </div>
      </div>

      <div class="form-tab__section-container">
        <div class="container-title-and-button">
          <h3>Дети (макс.5)</h3>
          <button @click="addChild" class="form-tab__add-button">
            Добавить ребёнка
          </button>
        </div>

        <div
          v-for="(child, index) in formData.children"
          :key="index"
          class="form-tab__field-wrapper-children"
        >
          <div class="form-tab__input-container-children">
            <label class="form-tab__label">Имя ребенка</label>
            <input
              type="text"
              v-model="child.name"
              required
              class="form-tab__input"
            />
          </div>

          <div class="form-tab__input-container-children">
            <label class="form-tab__label">Возраст:</label>
            <input
              type="number"
              v-model="child.age"
              required
              class="form-tab__input"
            />
          </div>

          <button @click="removeChild(index)" class="form-tab__remove-button">
            Удалить
          </button>
        </div>
      </div>
      <button type="submit" class="form-tab__submit-button">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempFullName: "",
      tempAge: "",
      formData: {
        fullName: "",
        age: "",
        children: [],
      },
    };
  },
  methods: {
    saveData() {
      this.$store.commit("updateFormData", this.formData);
      localStorage.setItem("formData", JSON.stringify(this.formData));

      this.formData = {
        fullName: "",
        age: "",
        children: [],
      };
    },
    addChild() {
      if (this.formData.children.length < 5) {
        this.formData.children.push({ name: "", age: "" });
      }
    },
    removeChild(index) {
      this.formData.children.splice(index, 1);
    },
  },
  created() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      this.formData = JSON.parse(savedData);
      this.tempFullName = this.formData.fullName;
      this.tempAge = this.formData.age;
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Montserrat", sans-serif;
}
.form-tab__container {
  max-width: 616px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
}

.form-tab__field-wrapper {
  margin: 8px 0;
  padding-left: 4px;
  padding-right: 4px;
}

.form-tab__field-wrapper-children {
  margin: 8px 0;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-tab__section-container {
  padding: 8px;
  margin: 8px 0;
  text-align: left;
}

.container-title-and-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
}

.form-tab__input-container {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.form-tab__input-container-children {
  padding: 8px;
  flex: 0 1 auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-tab__label {
  display: block;
  margin-bottom: 4px;
  text-align: left;
  font-size: 14px;
  color: #1111117a;
}

.form-tab__title {
  font-size: 16px;
  flex: 0 1 auto;
  text-align: left;
  padding: 10px 5px;
}
.form-tab__add-button {
  flex: 0 1 auto;
}
.form-tab__input {
  border: none;
  outline: none;
  font-size: 14px;
}

.form-tab__submit-button {
  width: 118px;
  height: 44px;
  border-radius: 100px;
  padding: 10px 20px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  flex: 0 1 auto;
  max-width: 118px;
  &:hover {
    background-color: #0056b3;
  }
  &:active {
    background-color: #003d80;
  }
  &:focus {
    outline: none;
  }
}

.form-tab__add-button {
  width: 204px;
  height: 44px;
  border-radius: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #007bff;
  background-color: #ffffff;
  border: 2px solid #007bff;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    background-image: url("@/assets/plus.svg");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 8px;
  }
  &:hover {
    background-color: #ffffff;
    border-color: #0056b3;
    color: #0056b3;
  }
  &:active {
    background-color: #ffffff;
    border-color: #003d80;
    color: #003d80;
  }
  &:focus {
    outline: none;
  }
}
.form-tab__remove-button {
  font-family: "Montserrat", sans-serif;
  color: #007bff;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}
</style>
