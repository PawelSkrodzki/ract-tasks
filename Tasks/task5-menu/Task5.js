import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Task5() {
  const [menu, setMenu] = useState(items);
  // Tu pytanie, czy można się tego pozbyć i bazować na allCategories skoro i tak nie zmieniamy stanu categories
  const [categories, setCategories] = useState(allCategories)


  const filterFood = (category) => {
    if (category == 'all') {
      setMenu(items);
      return;
    }
    const filteredFood = items.filter((meal) => {
      return meal.category == category;
    });
    setMenu(filteredFood);
  };

  return (
    <div className="section">
      <Categories filterFood={filterFood} categories={categories} />
      {menu.map((item) => (
        <Menu key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Task5;
