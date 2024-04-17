<script setup>
import { ref } from 'vue'
import { usePostsStore } from '@/stores/posts'
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'

const postStore = usePostsStore()
const postFilter = ref('all')

const settPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}
</script>

<template>
  <div class="header">
    <div>
      <h3>{{ postFilter === 'all' ? 'All posts' : ' Saved posts' }}</h3>
    </div>
    <button @click="settPostFilter">
      {{ postFilter === 'all' ? 'Show saved posts' : ' Show All posts' }}
    </button>
  </div>

  <div v-for="post in postStore.sorted" :key="post.id">
    <MyWrapper>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }
  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background: #0ea5e9;
    }
  }
}
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
