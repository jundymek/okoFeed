import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface Post {
  title: string;
  thumb: string;
  date: string;
  excerpt: string;
  url: string;
}

const Posts = React.memo(() => {
  const [totalNumberOfRecords, setTotalNumberOfRecords] = useState<number>(0);

  const fetchPosts = async (key: number, index = 0) => {
    const response = await fetch(`http://localhost:3000/posts?_start=${index}&_limit=10`);
    const numberOfRecords = response.headers.get("x-total-count");
    if (totalNumberOfRecords === 0) {
      numberOfRecords && setTotalNumberOfRecords(parseInt(numberOfRecords));
    }
    const posts = await response.json();
    return posts;
  };

  const { status, data, error, isFetching, isFetchingMore, fetchMore, canFetchMore } = useInfiniteQuery(
    "posts",
    fetchPosts,
    {
      getFetchMore: (lastGroup, allGroups): boolean | number => {
        const morePagesExist =
          totalNumberOfRecords === 0 || (lastGroup?.length === 10 && allGroups.length * 10 - 1 <= totalNumberOfRecords);
        if (!morePagesExist) return false;
        return (allGroups.length + 1) * 10;
      },
    }
  );

  const loadMoreButtonRef = React.useRef(null);

  console.log(data);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  });

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: : {error}</span>
      ) : (
        <>
          {data &&
            data.map((page, i) => (
              <React.Fragment key={i}>
                {page.map((post: Post, index: number) => {
                  return <p key={index}>{post.title}</p>;
                })}
              </React.Fragment>
            ))}
          <div>
            <button
              ref={loadMoreButtonRef}
              onClick={() => fetchMore()}
              disabled={!canFetchMore || (isFetchingMore as boolean | undefined)}
            >
              {isFetchingMore ? "Loading more..." : canFetchMore ? "Load More" : "Nothing more to load"}
            </button>
          </div>
          <div>{isFetching && !isFetchingMore ? "Background Updating..." : null}</div>
        </>
      )}
    </div>
  );
});

export default Posts;
