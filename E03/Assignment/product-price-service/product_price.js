module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond) {
        if(msg.productId){
            var res;
			mockData.map(function (item) {
			    if (item.product_id == msg.productId) {
			        res = item.product_price;
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