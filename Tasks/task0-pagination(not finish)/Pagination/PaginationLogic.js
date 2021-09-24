import React from 'react';
import dataEntries from '../dataEntries/dataEntries';

const paginationLogic = (pageSettings, maxElementsOnPage = 5) => {
  if (pageSettings.elementsOnPage <= 0 || pageSettings.actualPageIdx <= 0) {
    throw new Error('Settings keys must be postive numbers');
  }

  if (pageSettings.elementsOnPage > maxElementsOnPage) {
    throw new Error(`This page has got only ${maxElementsOnPage} elements`);
  }

  const outOfScopeIndex = (pageSettings.actualPageIdx - 1) * maxElementsOnPage >= dataEntries.length;

  if (outOfScopeIndex) {
    throw new Error('page index does not exist');
  }

  const startSlice = (pageSettings.actualPageIdx - 1) * maxElementsOnPage;
  const endSlice = (pageSettings.actualPageIdx - 1) * maxElementsOnPage + pageSettings.elementsOnPage;

  const entriesOnSelectedPage = dataEntries.slice(startSlice, endSlice);
  return entriesOnSelectedPage;
};

export default paginationLogic;
