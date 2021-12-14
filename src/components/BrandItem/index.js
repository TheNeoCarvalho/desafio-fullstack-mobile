import React from 'react';

import {FilterTitleBrand} from './styled';

const BrandItem = ({children}) => {
  return (
    <>
      <FilterTitleBrand>{children}</FilterTitleBrand>
    </>
  );
};

export default BrandItem;
