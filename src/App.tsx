import React, { ReactElement } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Posts from "./components/posts/Posts";

const queryCache = new QueryCache();

function App(): ReactElement {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App">
        <Posts />
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
