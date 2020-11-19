import React, { ReactElement } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Header from "./components/header/Header";
import PostsManager from "./components/postsManager/PostsManager";

const queryCache = new QueryCache();

function App(): ReactElement {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="container mx-auto">
        <Header />
        <PostsManager />
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
