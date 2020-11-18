import React from "react";
import { SinglePost } from "../Posts";
import styled from "styled-components";

interface PostProps {
  item: SinglePost;
}

const ImageWrapper = styled.div<{ background: string }>`
  background: url(${(props) => props.background}) no-repeat;
  background-size: cover;
  height: 12rem;
  width: 100%;
`;

const Post = React.memo<PostProps>(({ item }) => {
  return (
    <section className="p-2">
      <a href={item.url}>
        <h3 className="h-24 font-bold">{item.title}</h3>
        <ImageWrapper background={item.thumb}></ImageWrapper>
        <p className="pt-2">{item.excerpt}</p>
      </a>
    </section>
  );
});

export default Post;
