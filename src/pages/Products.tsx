import React, { useState, useEffect } from "react";
import { PRODUCTS_ENDPOINT } from "../endpoints";
import { SECRET_API_KEY } from "../config";
import { Link } from "react-router-dom";

const styles = {
  bookImg: {
    height: "75%",
    width: "100%",
  },
  price: {
    textDecoration: "line-through",
  },
};

export default function Products() {
  const [books, setBooks] = useState<any>(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(PRODUCTS_ENDPOINT, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": SECRET_API_KEY,
        },
      });
      let res = await response.json();
      setBooks(res.data);

      console.log(res.data);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="p-10">
      <h1 className="font-black text-elg mb-2">Top Results</h1>
      <Link to="/categories">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mb-10"
        >
          Category
        </button>
      </Link>
      <div className="grid lg:grid-cols-6 gap-24 md:grid-cols-4 sm:grid-cols-2">
        {books == null ? (
          <h1>Loading...</h1>
        ) : (
          books &&
          books.map((book) => (
            <div>
              <img
                style={styles.bookImg}
                src={`https://shewaberr.com/images/books/${book.cover}`}
                alt="image"
              />
              {book.title.am.am ? (
                <h6 className="font-black">{book.title.am.am}</h6>
              ) : (
                <h6 className="font-black">{book.title.am.en}</h6>
              )}

              {book.author[0] ? (
                <>
                  <h6>{book.author[0].names.en}</h6>
                  <img src={book.author[0].image} alt="" />
                </>
              ) : (
                <h6>Author Name</h6>
              )}
              <div className="flex">
                <h4 className="font-black">Br{book.pricing.retail}</h4>
                <h5 style={styles.price} className="text-xs pl-3 pt-2">
                  Br{book.pricing.price}
                </h5>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
