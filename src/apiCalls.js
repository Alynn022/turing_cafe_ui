const apiCalls = {
  getData(path) {
    return fetch(`http://localhost:3001/api/v1/${path}`) 
    .then(response => {
      return response.json() 
    })
  } 
}

export default apiCalls;