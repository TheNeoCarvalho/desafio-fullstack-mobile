import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {FilterTitleBrand} from './styled';

const BrandItem = ({children, action}) => {
  const [search, setSearch] = useState('NIKE');

  const searchFilter = () => {
    setSearch(action);
    action(search);
  };

  return (
    <>
      <TouchableOpacity onPress={searchFilter}>
        <FilterTitleBrand>{children}</FilterTitleBrand>
      </TouchableOpacity>
    </>
  );
};

export default BrandItem;
