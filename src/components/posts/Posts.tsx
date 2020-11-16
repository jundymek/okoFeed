import React, { useEffect, useState } from "react";

interface Post {
  title: string;
  thumb: string;
  date: string;
  excerpt: string;
  url: string;
}

const Posts = React.memo(() => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
});

export default Posts;
