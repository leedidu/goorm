import React from "react";
import { useParams } from "react-router-dom";

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

const Book = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id, 10));

  if (!book) {
    return <div>책 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>저자: {book.author}</p>
      <p>출판사: {book.publisher}</p>
      <p>출간일: {book.date}</p>
      <p>가격: {book.price}</p>
    </div>
  );
};

export default Book;
