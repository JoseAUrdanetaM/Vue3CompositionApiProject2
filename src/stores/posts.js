import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  state() {
    return {
      posts: [
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
    }
  }
})
