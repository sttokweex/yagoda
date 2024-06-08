import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Для рук и ногтей', 'Для лица', 'Для волос'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});
