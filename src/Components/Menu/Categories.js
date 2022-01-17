import React from 'react';

const Categories = ({filteredItems,categories}) => {
  //now since the category is array so use itrate MAP()

  return (
    <div className="btn-container">
    {
      categories.map((category,index)=>{
       return <button type='button'className="filter-btn" key={index} onClick={()=>{filteredItems(category)}}>
        {category}
      </button>

      })
    }
      
     
    </div>
  )
};

export default Categories;
