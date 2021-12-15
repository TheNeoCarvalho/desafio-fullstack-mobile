import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {FilterTitleCategory} from './styled';

const CategoryItem = ({children, action}) => {
  const [search, setSearch] = useState(' ');

  const searchFilter = () => {
    setSearch(action);
    action(search);
  };
  return (
    <>
      <TouchableOpacity onPress={searchFilter}>
        <FilterTitleCategory>{children}</FilterTitleCategory>
      </TouchableOpacity>
    </>
  );
};

export default CategoryItem;
