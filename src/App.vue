<template>
  <nav>
    <router-link to="/">Images gallery</router-link> |
    <router-link to="/dom-elements-generator">Elements generator</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
html,body {
  background-color: lightgrey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0e0000;
    }
  }
}
</style>
