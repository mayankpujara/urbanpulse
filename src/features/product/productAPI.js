export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: not hardcode the server URL here
    const response = await fetch('http://localhost:5051/products') 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter) {
  //filter = {"category:"smartphone}
  //TODO: on server support multiple values
  let queryString = '';
  for(let key in filter){
    queryString += `${key} = ${filter[key]}&  `
  }
  return new Promise(async (resolve) =>{
    console.log(queryString)
    const response = await fetch('http://localhost:5051/products?'+queryString) 
    const data = await response.json()
    resolve({data})
  }
  );
}