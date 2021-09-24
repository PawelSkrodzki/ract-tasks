import React from 'react';
import dataEntries from '../dataEntries/dataEntries';
import usePagination from '../Pagination/Pagination.hooks';
import paginationLogic from '../Pagination/PaginationLogic';

const defaultPageSettings = {
  actualPageIdx: 3,
  elementsOnPage: 5,
};

const PaginateTable = ({ actualPageIdx, setActualPageIdx }) => {
  console.log(paginationLogic(defaultPageSettings));

  paginationLogic();

  //   return <div>{dataEntries.map((element) => console.log(element))}</div>;

  console.log();
  return (
    <div>
      {dataEntries.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </div>
  );
};

export default PaginateTable;
