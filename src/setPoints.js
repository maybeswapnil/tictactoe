function setPoints(ID,value) {
    let BaseURL = 'https://localhost:8080/';
var l = 1;
    return new Promise((resolve, reject) =>{
        fetch(BaseURL+"setPoints/?Id=" + ID+"&points=" + value, {
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
export default setPoints;