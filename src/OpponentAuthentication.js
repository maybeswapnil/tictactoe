function PostOppoData(type, opponentID) {
    let BaseURL = "http://ec2-52-15-138-114.us-east-2.compute.amazonaws.com:8080/";

    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type+"/?Id=" + opponentID, {
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
export default PostOppoData;