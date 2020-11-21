import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import LoadMoreButton from "./loadMoreButton/LoadMoreButton";
import Posts from "./posts/Posts";
import ClockLoader from "react-spinners/ClockLoader";

import styled from "styled-components";

export interface SinglePostType {
  title: string;
  thumb: string;
  date: string;
  excerpt: string;
  url: string;
}

const StyledSpinnerContainer = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PostsManager = React.memo(() => {
  const [totalNumberOfRecords, setTotalNumberOfRecords] = useState<number>(0);
  const fetchPosts = async (index = 0) => {
    const response = await fetch(`http://localhost:3000/posts?_start=${index}&_limit=10`);
    const numberOfRecords = response.headers.get("x-total-count");
    if (totalNumberOfRecords === 0) {
      numberOfRecords && setTotalNumberOfRecords(parseInt(numberOfRecords));
    }
    const posts = await response.json();
    return posts;
  };

  const { status, data, isFetchingMore, fetchMore, canFetchMore } = useInfiniteQuery("posts", fetchPosts, {
    getFetchMore: (lastGroup, allGroups): boolean | number => {
      const morePagesExist =
        totalNumberOfRecords === 0 || (lastGroup?.length === 10 && allGroups.length * 10 - 1 <= totalNumberOfRecords);
      if (!morePagesExist) return false;
      return (allGroups.length + 1) * 10;
    },
  });

  const loadMoreButtonRef = React.useRef(null);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchMore,
    enabled: data && data.length > 1 && canFetchMore,
  });

  return (
    <div className="container mx-auto">
      {status === "loading" ? (
        <StyledSpinnerContainer>
          <ClockLoader size={50} color={"#464649"} loading={true} />
        </StyledSpinnerContainer>
      ) : status === "error" ? (
        <span>Coś poszło nie tak</span>
      ) : (
        <div className="mb-24">
          <Posts data={data} />
          <div className="py-5 flex items-center justify-center">
            <LoadMoreButton
              loadMoreButtonRef={loadMoreButtonRef}
              fetchMore={fetchMore}
              isFetchingMore={isFetchingMore}
              canFetchMore={canFetchMore}
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default PostsManager;
