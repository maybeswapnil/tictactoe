function setPoints(ID,value) {
    let BaseURL = 'https://ec2-3-133-13-88.us-east-2.compute.amazonaws.com:8080/';
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