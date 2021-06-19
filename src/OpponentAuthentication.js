function PostOppoData(type, opponentID) {
    let BaseURL = "https://localhost:8080/";

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
