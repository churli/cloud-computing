module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        if(msg.productId){
            var res;
			mockData.map(function (item) {
			    if (item.product_id == msg.productId) {
			        res = item.product_url;
			    }
			});
			console.log(res);
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }

    function productName(msg, respond) {
        if(msg.productId){
            var res;
			mockData.map(function (item) {
			    if (item.product_id == msg.productId) {
			        res = item.product_name;
			    }
			});
			console.log(res);
            respond(null, { result: res });
        }
        else {
            respond(null, { result: ''});
        }
    }
}