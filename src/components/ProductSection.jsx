import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const [page, setPage] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10); 
  const[loading, setLoading]= useState(false);
  
  const navigate= useNavigate();

  useEffect(() => {
    if (width >= 1024) {
      setLimit(10);
    } else if (width >= 640) {
      setLimit(8);
    } else {
      setLimit(6);
    }
  }, [width]);

 
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProductClick = (id) => {
  navigate(`product/${id}`);
};


  useEffect(() => {
    const loadProducts = async () => {
      const skip = (page - 1) * limit;
      try {
        setLoading(true);
        const res = await axios.get(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
       console.log(res.data.products);
        setProducts(res.data.products);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    loadProducts();
  }, [page, limit]);

  return (
    
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center my-6">Our Products</h2>
{loading && <div className="text-center text-lg">Loading...</div>}
{!loading && (
  <>
  <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 " >
        
        {products.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all shadow-md"
            onClick={()=>handleProductClick(item.id)}
          >
            <div className="h-48">
              <img
                src={item.images[0]} 
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-blue-600 font-semibold">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex justify-center items-center gap-4 mt-6 text-xl">
        <IoMdArrowDropleft
          onClick={() => setPage((prev) => Math.max(prev- 1, 1))}
          className="cursor-pointer hover:text-blue-500"
        />
        <span className="text-lg">{page}</span>
        <IoMdArrowDropright
          onClick={() => setPage((prev) => prev+1)}
          className="cursor-pointer hover:text-blue-500"
        />
      </div>
  </>
) }
      
    </div>
  );
};

export default ProductSection;
