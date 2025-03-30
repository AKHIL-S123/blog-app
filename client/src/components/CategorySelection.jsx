import React from 'react'

const CategorySelection = ({onSelectCategory,selectedCategory}) => {

    const categories = ['Startups','Security','AI','Apps','Teach']

  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900'>
        <button onClick={() => onSelectCategory(null)} className={`${selectedCategory ? "" : "active-button"} lg:ml-12  `}>All</button>
        {categories.map((category) => <button className={` mr-2 space-x-16 ${selectedCategory === category ? "active-button" : ""}`} key={category} onClick={() => onSelectCategory(category)}>{category}</button>)}
    </div>
  )
}  

export default CategorySelection