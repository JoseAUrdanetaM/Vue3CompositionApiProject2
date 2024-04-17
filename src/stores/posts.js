import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  //Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'This great book',
          body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
          author: 'Jon Doe',
          created_at: '11/06/2023',
          is_saved: false
        },
        {
          id: 2,
          title: 'This great book',
          body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
          author: 'Jon Doe',
          created_at: '15/06/2023',
          is_saved: false
        },
        {
          id: 3,
          title: 'This great book',
          body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
          author: 'Jon Doe',
          created_at: '12/06/2023',
          is_saved: false
        },
        {
          id: 4,
          title: 'This great book',
          body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
          author: 'Jon Doe',
          created_at: '09/06/2023',
          is_saved: false
        },
        {
          id: 5,
          title: 'This great book',
          body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
          author: 'Jon Doe',
          created_at: '05/06/2023',
          is_saved: false
        },
        {
          id: 6,
          title: 'This great book',
          body: 'ADQWeasdasdQWeasdasdQWeasdasdQWeasdasdQWeasdasd  QWeasdasdQWeasdasdQWeasdasdQWeasdasd',
          author: 'Jon Doe',
          created_at: '20/06/2023',
          is_saved: false
        }
      ]
    }
  },

  // computed
  getters: {
    sorted: (state) => state.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },

  //methods
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Andy',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
    }
  }
})
