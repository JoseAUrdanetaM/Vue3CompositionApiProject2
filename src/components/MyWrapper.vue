<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 2rem;
  background: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
  margin-bottom: 2rem;
  border-radius: 2rem;
  overflow: hidden;
}
</style>
