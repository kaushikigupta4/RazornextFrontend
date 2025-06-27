const SortingSection = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="max-w-full">
      <div className='p-2'>
        <input
          type="radio"
          name="sort"
          value="highToLow"
          checked={sortOrder === "highToLow"}
          onChange={(e) => setSortOrder(e.target.value)}
          className='m-3 text-gray-300'
        />
        <span>Price: High to Low</span>
      </div>
      <div className='p-2'>
        <input
          type="radio"
          name="sort"
          value="lowToHigh"
          checked={sortOrder === "lowToHigh"}
          onChange={(e) => setSortOrder(e.target.value)}
          className='m-3 text-gray-300'
        />
        <span>Price: Low to High</span>
      </div>
      <div className='p-2'>
        <input
          type="radio"
          name="sort"
          value="az"
          checked={sortOrder === "az"}
          onChange={(e) => setSortOrder(e.target.value)}
          className='m-3 text-gray-300'
        />
        <span>A-Z</span>
      </div>
      <div className='p-2'>
        <input
          type="radio"
          name="sort"
          value="za"
          checked={sortOrder === "za"}
          onChange={(e) => setSortOrder(e.target.value)}
          className='m-3 text-gray-300'
        />
        <span>Z-A</span>
      </div>
    </div>
  );
};

export default SortingSection;
