function setDetails(name, password) {
    let BaseURL = "https://localhost:8080/";

    return new Promise((resolve, reject) =>{
        fetch(BaseURL+"setDetails/?name=" + name + "&password=" + password, {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}
export default setDetails;
