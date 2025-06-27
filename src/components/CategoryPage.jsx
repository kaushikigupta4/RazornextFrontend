import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SortingSection from "./SortingSection.jsx";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState();
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        if (!res.data.products) {
          setProducts([]);
          setSortedProducts([]);
          setLoading(false);
          return;
        }

        setProducts(res.data.products);

        setSortedProducts(res.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Sorting
  useEffect(() => {
    const sorted = [...products];
    if (sortOrder === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "az") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "za") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }
    setSortedProducts(sorted);
  }, [sortOrder, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:flex">
      {/* sorting section */}
      <div className="w-[200px]">
        <SortingSection sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {loading && <div className="text-center font-bold">Loading...</div>}
      
      {!loading && (
        <>
          <div className="">
            <div className="text-xl text-center font-bold m-5 capitalize">
              {categoryName}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {sortedProducts.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105"
                  onClick={() => handleProductClick(item.id)}
                >
                  <div className="h-48 bg-gray-100">
                    <img
                      src={item.images[0]}
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-medium text-center capitalize">
                      {item.title}
                    </h3>
                    <p className="text-center text-gray-600">{item.brand}</p>
                    <p className="text-center text-green-600 font-semibold">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {!loading && sortedProducts.length === 0 && (
        <div className="text-center font-semibold text-lg mt-6">
          Products not found.
        </div>
      )}

    </div>
  );
};

export default CategoryPage;
