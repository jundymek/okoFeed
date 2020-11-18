import React, { ReactElement } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";

const queryCache = new QueryCache();

function App(): ReactElement {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="container mx-auto">
        <Header />
        <Posts />
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
