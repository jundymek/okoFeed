import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Post from "./post/Post";

export interface SinglePost {
  title: string;
  thumb: string;
  date: string;
  excerpt: string;
  url: string;
}

const PostsManager = React.memo(() => {
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
        console.log({ isFetching });
        console.log({ isFetchingMore });
        console.log({ fetchMore });
        console.log({ canFetchMore });
        console.log({ status });
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <React.Fragment key={i}>
                  {page.map((post: SinglePost, index: number) => {
                    return <Post key={index} item={post} />;
                  })}
                </React.Fragment>
              </div>
            ))}
          <div className="py-5">
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

export default PostsManager;
