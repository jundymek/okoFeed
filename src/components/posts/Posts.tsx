import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Post {
  title: string;
  thumb: string;
  date: string;
  excerpt: string;
  url: string;
}

const Posts = React.memo(() => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [lastIndex, setLastIndex] = useState<number>(0);

  console.log(posts.length);

  useEffect(() => {
    fetch("http://localhost:3000/posts?_end=100")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLastIndex(101);
      });
  }, []);

  const fetchMore = () => {
    setTimeout(() => {
      fetch(`http://localhost:3000/posts?_start=${lastIndex}&_limit=10`)
        .then((res) => res.json())
        .then((data) => {
          setLastIndex((prevState) => prevState + 1);
          setPosts((prevState) => [...prevState, ...data]);
        });
    }, 2000);
  };

  return (
    <div>
      <InfiniteScroll dataLength={posts.length} next={fetchMore} hasMore={true} loader={<h4>Loading...</h4>}>
        {posts.map((i, index) => {
          return (
            <div key={index}>
              <p>
                {i.title} - #{index}
              </p>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
});

export default Posts;
