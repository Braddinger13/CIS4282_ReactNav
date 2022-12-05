import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import "./App.css";
import "./style/nav.css";

function App() {
  return (
    // all returns must have a parent div that includes the rest of the JSX
    <div class="App">
      <div class="nav">
        {/* 
            Here we place a navbar logo and our two Links. Link is imported from React, and in simple terms is just 
            a link within our nav bar. The "to" defines what page we want to render in our SPA
        */}
        <div class="links">
          <Link class="link" to="/">
            HOME
          </Link>
          <Link class="link" to="blog">
            BLOG
          </Link>
        </div>
      </div>
      {/*
        The "routes" of React tell React what to render when we go to certain links, like above where they are 
        called inside our Link components. The "/" route is our home route, and blog is as indicated, our blog page.
        Notice element = { <NameOfPage /> } that we want to render.
    */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
