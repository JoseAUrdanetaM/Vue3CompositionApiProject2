<script setup>
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'

const posts = [
  {
    id: 1,
    title: 'This great book',
    body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
    author: 'Jon Doe',
    created_t: '11/06/2023',
    is_saved: false
  },
  {
    id: 2,
    title: 'This great book',
    body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
    author: 'Jon Doe',
    created_t: '11/06/2023',
    is_saved: false
  },
  {
    id: 3,
    title: 'This great book',
    body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
    author: 'Jon Doe',
    created_t: '11/06/2023',
    is_saved: false
  },
  {
    id: 4,
    title: 'This great book',
    body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
    author: 'Jon Doe',
    created_t: '11/06/2023',
    is_saved: false
  },
  {
    id: 5,
    title: 'This great book',
    body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
    author: 'Jon Doe',
    created_t: '11/06/2023',
    is_saved: false
  },
  {
    id: 6,
    title: 'This great book',
    body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
    author: 'Jon Doe',
    created_t: '11/06/2023',
    is_saved: false
  }
]
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <MyWrapper>
      <PostItem :post post="post" />
    </MyWrapper>
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
