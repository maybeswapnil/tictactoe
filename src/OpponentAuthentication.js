function PostOppoData(type, opponentID) {
    let BaseURL = "https://ec2-3-133-13-88.us-east-2.compute.amazonaws.com:8080/";

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
