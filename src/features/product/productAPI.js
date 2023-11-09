export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: not hardcode the server URL here
    const response = await fetch("http://localhost:5051/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  //filter = {"category:"smartphone","laptops"}
  // sort = {_sort:"price", _order:"desc"}

  //TODO: on server support multiple values
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategory = categoryValues[categoryValues.length - 1];
      queryString += `${key} = ${lastCategory}& `;
    }
  }

  for (let key in sort) {
    queryString += `${key} = ${sort[key]}& `;
  }

  return new Promise(async (resolve) => {
    console.log(queryString);
    const response = await fetch(
      "http://localhost:5051/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
