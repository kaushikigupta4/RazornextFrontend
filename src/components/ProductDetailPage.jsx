import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);

        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    loadProduct();
  }, [id]);

  const handleBackArrowClick = () => {
    navigate("/");
  };
  return (
    <div className="max-w-4xl mx-auto p-4 relative">
      <div
        className="absolute left-0 rounded-full bg-gray-200 p-3"
        onClick={handleBackArrowClick}
      >
        <IoMdArrowBack />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">{product?.title}</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img src={product?.images[0]} className="w-full rounded shadow" />
        </div>
        <div className="md:w-1/2 space-y-2">
          <p>
            <strong>Description:</strong> {product?.description}
          </p>
          <p>
            <strong>Price:</strong> ₹{product?.price}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {product?.rating}
          </p>
          <p>
            <strong>Stock:</strong> {product?.stock}
          </p>
          <p>
            <strong>Brand:</strong> {product?.brand}
          </p>
          <p>
            <strong>Category:</strong> {product?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
