import React from 'react';
import {Text} from 'react-native';

import {FilterTitleCategory} from './styled';

const CategoryItem = ({children}) => {
  return (
    <>
      <FilterTitleCategory>{children}</FilterTitleCategory>
    </>
  );
};

export default CategoryItem;
