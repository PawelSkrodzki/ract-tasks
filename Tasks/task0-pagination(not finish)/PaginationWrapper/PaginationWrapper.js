import React from 'react';
import PaginateTable from '../PaginateTable/PaginateTable';
import Pagination from '../Pagination/Pagination';

const PaginationWrapper = () => {
  return (
    <div>
      <PaginateTable />
      <Pagination />
    </div>
  );
};

export default PaginationWrapper;
