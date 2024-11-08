import React from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "소년이 온다",
    author: "한강",
    publisher: "창비",
    date: "2014-05-19",
    price: "13,500원",
  },
  {
    id: 2,
    title: "채식주의자",
    author: "한강",
    publisher: "창비",
    date: "2022-03-28",
    price: "13,500원",
  },
  {
    id: 3,
    title: "넥서스",
    author: "유발 하라리",
    publisher: "김영사",
    date: "2024-10-11",
    price: "25,020원",
  },
];

const Content = () => {
  return (
    <div>
      <h2>도서 목록</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
