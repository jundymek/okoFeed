import React from "react";
import { useQuery } from "react-query";

interface Post {
  title: string;
  thumb: string;
  date: string;
  excerpt: string;
  url: string;
}

const getPosts = () => {
  const posts = fetch("http://localhost:3000/posts/")
    .then((res) => res.json())
    .then((data) => data);
  return posts;
};

const Posts = React.memo(() => {
  const { isLoading, data } = useQuery("posts", getPosts);
  console.log(data);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return <div>{data && data.map((item: Post) => <p>{item.title}</p>)}</div>;
});

export default Posts;
