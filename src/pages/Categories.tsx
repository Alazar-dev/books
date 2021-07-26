import React, { useState, useEffect } from "react";
import { CATEGORIES_ENDPOINT } from "../endpoints";
import { Link } from "react-router-dom";
import { SECRET_API_KEY } from "../config.js";

export default function Categories() {
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(CATEGORIES_ENDPOINT, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": SECRET_API_KEY,
        },
      });
      let res = await response.json();
      setCategories(res.data);

      console.log(res.data);
    }

    fetchMyAPI();
  }, []);
  return (
    <>
      <div className=" flex justify-between lg:px-80 bg-gray-100 py-10 rounded-3xl shadow-lg border">
        <h1 className="font-black text-elg mb-2">Top Results</h1>
        <Link to="/">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mb-10"
          >
            Back to Home
          </button>
        </Link>
      </div>
      <div className="flex justify-center bg-gray-200 py-40  rounded-3xl shadow-lg border">
        <div className="grid grid-cols-3 gap-40">
          {categories &&
            categories.map((category) => (
              <div>
                <h5 className="font-bold">{category.names.en}</h5>
                {category.children.map((child) => (
                  <h1>{child.names.en}</h1>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
