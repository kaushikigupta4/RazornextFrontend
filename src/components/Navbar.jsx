import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false); //for the category
  const [menuOpen, setMenuOpen] = useState(false); //for the hamburger menu
  const [categoryName, setCategoryName] = useState([]);
const [showHamburgerCategories,  setShowHamburgerCategories] = useState(false);
//for the caetgory in hamburger menu

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/categories`
        );

        setCategoryName(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategory();
  }, [categoryName]);
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/products/category/${category}`);
  };

  const handleHamburgerMenu=()=>{
    setMenuOpen(!menuOpen);
  }
  

  return (
    <nav className="bg-orange-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="text-xl font-bold">ShopStack</div>
          <div className="sm:w-full lg:max-w-md m-3 flex items-center gap-1">
            <CiSearch className="text-gray-500 w-10 h-10 " />
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-100 text-black"
            />
          </div>
          <div className=" md:flex gap-6 text-sm font-medium hidden md:block flex items-center">
            <a href="#" className="hover:text-black">
              Home
            </a>

            {/* navbar category section */}
            <div className="relative hover:text-black">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Category
              </div>
              {open && (
                <div className="absolute top-[300%] right-[0.5px] mt-2 grid grid-cols-3 gap-1 bg-white text-gray-700 p-3 rounded-md shadow-lg min-w-[240px] w-max z-50">
                  {categoryName.map((item, index) => (
                    <div
                      key={index}
                      className="text-xs p-2 hover:bg-orange-100 rounded cursor-pointer"
                      onClick={() => {
                        handleClick(item.name);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="hover:text-black">
              <CiHeart className="text-gray-100 w-7 h-7 " />
            </a>
            <a href="#" className="hover:text-black">
              <CiShoppingCart className="text-gray-100 w-7 h-7 " />
            </a>
            <a href="#" className="hover:text-black">
              <CiUser className="text-gray-100 w-7 h-7 " />
            </a>
          </div>
          <div className="md:hidden relative">
            <RxHamburgerMenu className="text-gray-500 w-10 h-10" onClick={handleHamburgerMenu} /> 
          </div>
           {menuOpen && (<>
           <div className="bg-gray-200 text-black p-2 shadow-lg rounded-sm text-sm text-center absolute left-0 w-full top-18 md:hidden">
           
            <p className="cursor-pointer">Home </p>
            <p className="cursor-pointer" onClick={() => setShowHamburgerCategories((prev) => !prev)}>Category</p>

            {showHamburgerCategories && (
             <div className="mt-2 grid grid-cols-3 gap-1 bg-white text-gray-700 p-3 rounded-md shadow-lg min-w-[240px] w-max-[300px] mx-auto">
        {categoryName.map((item, index) => (
          <div
            key={index}
            className="text-xs p-2 hover:bg-orange-100 rounded cursor-pointer"
            onClick={() => {
              handleClick(item.name);
              setMenuOpen(false);
              setShowHamburgerCategories(false); 
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
            )}

            <p className="cursor-pointer">Wishlist</p>
            <p >Cart</p>
            <p>User</p>
          </div>
           </>)}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
