import React from "react";
import Post from "../post/Post";
import { SinglePost } from "../PostsManager";

interface PostsProps {
  data: SinglePost[][] | undefined;
}

const Posts = React.memo<PostsProps>(({ data }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-24">
      {data?.map((page) =>
        page.map((post: SinglePost, index: number) => {
          return <Post key={index} item={post} />;
        })
      )}
    </div>
  );
});

export default Posts;
