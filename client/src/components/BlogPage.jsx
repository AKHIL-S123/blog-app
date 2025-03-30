import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const pageSize= 12  ;

  useEffect(() => {
    async function fetchBlogs() {

      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory){
        url+=`?category=${selectedCategory}`
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);


  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
    setCurrentPage(1);
  };
  return <div>
     
    {/* category section */}
    <div><CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={activeCategory}/></div>

    

    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* blog cards section */}
      <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
      {/* sidebar section */}
      <SideBar/>
    </div>

    {/* pagination section */}

    <div className="mt-5 p-4">
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onCategoryChange={handleCategoryChange}
        blogs={blogs}
      />
    </div>

   </div>;


};

export default BlogPage;
