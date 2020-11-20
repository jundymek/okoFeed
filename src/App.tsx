import React, { ReactElement } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PostsManager from "./components/postsManager/PostsManager";

const queryCache = new QueryCache();

function App(): ReactElement {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="container mx-auto">
        <Header />
        <PostsManager />
        <Footer />
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
