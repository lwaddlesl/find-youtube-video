<template>
  <div class="main-container">
    <router-view />
  </div>
</template>
<script>
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #fafafa;
}
* {
  margin: 0;
  padding: 0;
  font-family: Roboto;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: rgba(39, 39, 39, 0.3);
}
input {
  border: 1px solid rgba(23, 23, 25, 0.2);
  border-radius: 10px;
  padding: 15px;

  &:focus {
    outline: 1px solid #1390e5;
    background: rgba(197, 228, 249, 0.3);
  }
}
.main-container {
  margin: 0 13.88vw;
  @media screen and (max-width: 768px) {
    margin: 0 5.2vw;
  }
  @media screen and (max-width: 420px) {
    margin: 0 2.5vw;
  }
}
</style>
