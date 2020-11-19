import React from "react";
import { SinglePost } from "../PostsManager";
import styled from "styled-components";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";

interface PostProps {
  item: SinglePost;
}

const ImgWrapper = styled.div`
  height: 12rem;
  width: 100%auto;
`;

const Post = React.memo<PostProps>(({ item }) => {
  return (
    <section className="p-2">
      <a href={item.url} title="item.url">
        <h3 className="h-24 font-bold">{item.title}</h3>
        <ImgWrapper>
          <RenderSmoothImage src={item.thumb} alt={item.thumb} objectFit="cover" />
        </ImgWrapper>
        <p className="pt-2">{item.excerpt}</p>
        <span className="float-right m-2 text-gray-600 text-sm">{item.date}</span>
      </a>
    </section>
  );
});

export default Post;
