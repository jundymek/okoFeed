import React from "react";
import { FetchMoreOptions } from "react-query/types/core/query";
import ClipLoader from "react-spinners/ClipLoader";

interface LoadMoreButtonProps {
  isFetchingMore: string | boolean | undefined;
  canFetchMore: boolean | undefined;
  loadMoreButtonRef?: React.MutableRefObject<null>;
  fetchMore: (fetchMoreVariable?: unknown, options?: FetchMoreOptions | undefined) => Promise<boolean[] | undefined>;
}

const LoadMoreButton = React.memo<LoadMoreButtonProps>(
  ({ isFetchingMore, loadMoreButtonRef, canFetchMore, fetchMore }) => {
    return (
      <button
        ref={loadMoreButtonRef}
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
