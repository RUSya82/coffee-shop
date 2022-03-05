<template>
  <div class="spinner">
    <img  :src="require(`@/assets/img/infinity.gif`)" alt="">
  </div>
</template>

<style scoped lang="scss">
.spinner{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
}
</style>