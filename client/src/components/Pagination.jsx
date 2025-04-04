import React from 'react'

const Pagination = ({onPageChange,currentPage,blogs,pageSize}) => {

    const totalPages = Math.ceil(blogs.length/pageSize)
  

    const renderPadginationLinks = () => {
        return Array.from({length:totalPages},(_,i)=> i+1).map((pageNo) =>(
            <li className={pageNo === currentPage ? "activerPaginaition" : ""} key={pageNo}>
                <a href="#" onClick={() => onPageChange(pageNo)}>{pageNo}</a>
            </li>
        ) ) 
    }

  return (

    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChange(currentPage -1)} disabled={currentPage === 1}>Previous</button>
        </li>
        <div className='flex gap-1'>
            {renderPadginationLinks()}
        </div>
        <li>
            <button onClick={() => onPageChange(currentPage +1)} disabled={currentPage === totalPages}>Next</button>
        </li>
    </ul>
  
  ) 
}

export default Pagination