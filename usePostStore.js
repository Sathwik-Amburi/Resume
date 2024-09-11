import create from 'zustand';

const usePostStore = create((set) => ({
  posts: {},

  likePost: (postId) => set((state) => {
    const post = state.posts[postId] || { likes: 0, comments: [] };
    return {
      posts: {
        ...state.posts,
        [postId]: {
          ...post,
          likes: post.likes + 1,
        },
      },
    };
  }),

  unlikePost: (postId) => set((state) => {
    const post = state.posts[postId] || { likes: 0, comments: [] };
    return {
      posts: {
        ...state.posts,
        [postId]: {
          ...post,
          likes: Math.max(post.likes - 1, 0),
        },
      },
    };
  }),

  addComment: (postId, comment) => set((state) => {
    const post = state.posts[postId] || { likes: 0, comments: [] };
    return {
      posts: {
        ...state.posts,
        [postId]: {
          ...post,
          comments: [...post.comments, comment],
        },
      },
    };
  }),
}));

export default usePostStore;
