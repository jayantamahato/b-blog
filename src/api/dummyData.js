export const data = {
  post: [
    {
      _id: "post_id_1",
      title: "Sample Blog Post 1",
      content: [
        {
          type: "text",
          value: "This is the introduction to the blog post.",
        },
        {
          type: "code",
          language: "javascript",
          value: "function greet() {\n  console.log('Hello, world!');\n}",
        },
        {
          type: "text",
          value: "Now, let's discuss the rest of the content.",
        },
      ],
      authorId: "author_id_1",
      authorName: "Bappa Banerjee",
      categories: ["programming", "web development"],
      createdAt: "2023-09-20T12:00:00Z",
      updatedAt: "2023-09-20T14:30:00Z",
      comments: ["hello", "hii"],
    },
  ],
  authors: [
    {
      _id: "author_id_1",
      name: "John Doe",
      email: "johndoe@example.com",
      profilePicture: "https://example.com/johndoe.jpg",
    },
  ],
  comments: [
    {
      _id: "comment_id_1",
      postId: "post_id_1",
      authorId: "author_id_2",
      text: "Great post! Thanks for sharing.",
      createdAt: "2023-09-20T15:45:00Z",
    },
    {
      _id: "comment_id_2",
      postId: "post_id_1",
      authorId: "author_id_3",
      text: "I found this really helpful.",
      createdAt: "2023-09-20T16:00:00Z",
    },
  ],
};
