
import { useNavigate } from "react-router-dom";

const categories = [
  {
    category: "beauty",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrczd5ouJo_uYHD_v79Y3VtcHly9FZf0RZnw&s"
  },
  {
    category: "fragrances",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOb0qSo62wQxk-u7wcMqr7T7NJcN4FuyENA&s"
  },
  {
    category: "furniture",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwbie5bHVDDk-xQwS6g3kOtb-aSo1b6F2eQ&s"
  },
  {
    category: "groceries",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgUgimfTMsWfIyHkyrtH9bfvxdcdykvADaQ&s"
  }
];

const CategoryCarousel = () => {
  const navigate= useNavigate();
  const handleClick=(category)=>{
console.log(category);
 navigate(`/products/category/${category}`);
}
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Browse By Category
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden " onClick={()=>handleClick(item.category)}>
            <div className="h-48 bg-gray-100">
              <img
                src={item.img}
                alt={item.category}
                className="w-full h-full object-cover hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-center capitalize">
                {item.category}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
