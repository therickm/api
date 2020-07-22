var axios = require('axios');

export const notifyUsers = (userToken, apiKey,notification) =>{

    var data = JSON.stringify({"to":userToken,"collapse_key":"type_a","data":{"body":notification.body,"title":notification.title,"key_1":"Data for key one","key_2":"Hellowww"}});

    var config = {
      method: 'post',
      url: 'https://fcm.googleapis.com/fcm/send',
      headers: { 
        'Authorization': apiKey, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
}
