import React, { useState, useReducer } from 'react';
import paginationLogic from './PaginationLogic';

const defaultPageSettings = {
  actualPageIdx: 3,
  elementsOnPage: 5,
};

const initialState = {
  isBusy: true,
  actualPageIdx: 0,
  elementsOnPage: 10,
  lastPageIdx: 0,
  allEntries: [],
  entriesOnSelectedPage: [],
};

// loadPageWithInitialSetting()
// const initialState = {
//   isBusy:false,
//   actualPageIndex:0,
//   elementsOnPage:10,
//   lastPageIdx:10,
//   allEntries:[...],
//   entriesOnSelectedPage:[...]
// }

const paginationActionTypes = {
  setIsBusy: 'SET_IS_BUSY',
  setActualPageIdx: 'SET_ACTUAL_PAGE_IDX',
  setLastPageIdx: 'SET_LAST_PAGE_IDX',
  setAllEntries: 'SET_ALL_ENTRIES',
  setEntriesOnSelectedPage: 'SET_ENTRIES_ON_SELECTED_PAGE',
};

const pagainationReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case paginationActionTypes.setIsBusy:
      return {
        ...prevState,
        isBusy: action.payload,
      };
    case paginationActionTypes.setActualPageIdx:
      return {
        ...prevState,
        actualPageIndex: action.payload,
      };
    case paginationActionTypes.setLastPageIdx:
      return {
        ...prevState,
        lastPageIdx: action.payload,
      };
    case paginationActionTypes.setAllEntries:
      return {
        ...prevState,
        allEntries: action.payload,
      };
    case paginationActionTypes.setEntriesOnSelectedPage:
      return {
        ...prevState,
        entriesOnSelectedPage: action.payload,
      };
    default:
      return prevState;
  }
};

// changePage(page)

// const initialState = {
//   isBusy: false,
//   actualPageIndex:2,
//   elementsOnPage:10,
//   lastPageIdx:10,
//   allEntries:[...],
//   entriesOnSelectedPage:[...]
// }

// useReducer

const usePagination = (dataEntries, pageSettings) => {
  const [{ isBusy, actualPageIdx, elementsOnPage, lastPageIdx, allEntries, entriesOnSelectedPage }, dispatch] = useReducer(pagainationReducer, initialState);

  // const [actualPageIdx, setActualPageIdx] = useState(0);
  // const [lastPageIdx, setLastPageIdx] = useState();
  // const [entriesOnSelectedPage, setEntriesOnSelectedPage] = useState(paginationLogic(pageSettings));
  // const [isBusy, setIsBusy] = useState(false);

  // const [pageSettings, setPageSettings] = useState(defaultPageSettings);

  // return [paginationState, paginationActions]; // wrzucić do stanu

  const goToFirstPage = () => {
    dispatch({
      type: paginationActionTypes.setActualPageIdx,
      payload: 1,
    });
  };

  // const goToPrevPage = () => {
  //   setActualPageIdx(actualPageIdx - 1);
  // };

  // const goToPage = (i) => {
  //   setActualPageIdx(i);
  // };

  // const goToNextPage = () => {
  //   setActualPageIdx(actualPageIdx + 1);
  // };

  // const goToLastPage = () => {
  //   setActualPageIdx(lastPageIdx);
  // };

  return {
    paginationState: {
      actualPageIdx,
      lastPageIdx,
      entriesOnSelectedPage,
      isBusy,
    },
    paginationActions: {
      goToFirstPage,
      // goToPrevPage,
      // goToPage,
      // goToNextPage,
      // goToLastPage,
    },
  };
};

//  const [
// 	{ actualPageIdx, lastPageIdx, entriesOnSelectedPage, isBusy },
// 	{ goToFirstPage, goToPrevPage, goToPage, goToNextPage, goToLastPage }
// ] = usePagination(dataEntries)

export default usePagination;
