<template>
  <header>
    <img
      src="@/assets/Logo_imi_horizontal.svg"
      alt="Иконка"
      width="175"
      height="32"
    />
    <nav>
      <ul>
        <li><router-link to="/">Форма</router-link></li>
        <li><router-link to="/preview">Превью</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  color: #111;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1111111a;
  position: relaftive;
}

img {
  width: 175px;
  height: 32px;
  margin-right: 16px;
}

nav {
  width: auto;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-grow: 1;
  position: absolute;
  width: 100%;
  height: 100%;
}

h1 {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

nav ul li {
  margin: 0;
  padding: 0;
}

nav ul li a {
  text-decoration: none;
  color: #1111117a;
}
</style>
