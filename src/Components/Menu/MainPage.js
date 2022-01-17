import React, { useState } from "react";
import Menu from "./Menu";
import data from "./data";
import "./menu.css";
import Categories from "./Categories";

function MainPage() {
  const CategoriesFromData = data.map((item) => {
     return item.category;
    });
    const categoriesincALL=['all', ... new Set(CategoriesFromData)]
  console.log(categoriesincALL);

// const categoriesincALL=['all', ... new Set (data.map(item=>item.category))]

  const [items, setItems] = useState(data);
//   const [categories, setCategories] = useState([]);//empy before we are passing manually
  const [categories, setCategories] = useState(categoriesincALL)

  const filteredItems = (category) => {
      if(category === 'all')
      {
        setItems(data);
        return;
      }
  
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
        <div className="section-center">
          {items.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default MainPage;
