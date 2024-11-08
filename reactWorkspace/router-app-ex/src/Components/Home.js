import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome</p>
      <Link to="/content">도서목록보기</Link>
    </div>
  );
};

export default Home;
