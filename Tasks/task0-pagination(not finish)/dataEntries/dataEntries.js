// webworker/serviceworker -> generuje 100k danych
// i jak wygeneruje to odda apce do paginacji

const dataEntries = new Array(1000).fill(1000).map((_, i) => i + 1);

export default dataEntries;
