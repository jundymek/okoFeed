import React from "react";
import { FetchMoreOptions } from "react-query/types/core/query";
import ClipLoader from "react-spinners/ClipLoader";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

interface LoadMoreButtonProps {
  isFetchingMore: string | boolean | undefined;
  canFetchMore: boolean | undefined;
  fetchMore: (fetchMoreVariable?: unknown, options?: FetchMoreOptions | undefined) => Promise<boolean[] | undefined>;
}

const LoadMoreButton = React.forwardRef<any, LoadMoreButtonProps>(
  ({ isFetchingMore, canFetchMore, fetchMore }, ref) => {
    useIntersectionObserver({
      target: ref,
      onIntersect: fetchMore,
      enabled: true,
    });

    return (
      <button
        ref={ref}
        onClick={() => fetchMore()}
        disabled={!canFetchMore || (isFetchingMore as boolean | undefined)}
        className="flex items-center justify-center h-10 min-w-40 border-2 border-gray-400 bg-gray-900 hover:bg-gray-700 disabled:opacity-50 transform transition-colors duration-300 text-white py-2 px-4"
      >
        <>
          {isFetchingMore ? (
            <ClipLoader size={20} color={"#ffffff"} />
          ) : canFetchMore ? (
            "Wczytaj więcej"
          ) : (
            "Brak kolejnych postów"
          )}{" "}
        </>
      </button>
    );
  }
);

export default LoadMoreButton;
