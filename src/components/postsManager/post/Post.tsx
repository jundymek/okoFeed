import React from "react";
import { SinglePostType } from "../PostsManager";
import "render-smooth-image-react/build/style.css";
import { getAlt } from "./utils/getAlt";

interface PostProps {
  item: SinglePostType;
}

const Post = React.memo<PostProps>(({ item }) => {
  return (
    <section className="p-4 shadow-md hover:shadow-lg">
      <a href={item.url} title={item.url}>
        <h3 className="h-24 font-bold">{item.title}</h3>
        <img
          loading="lazy"
          width="440"
          height="280"
          src={item.thumb}
          alt={getAlt(item.excerpt)}
          className="h-48 w-full"
        />
        <p className="pt-2 font-hairline">{item.excerpt}</p>
        <span className="float-right m-2 text-gray-600 text-sm">{item.date}</span>
      </a>
    </section>
  );
});

export default Post;
