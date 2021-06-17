function setPoints(ID,value) {
    let BaseURL = 'http://ec2-52-15-138-114.us-east-2.compute.amazonaws.com:8080/';
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