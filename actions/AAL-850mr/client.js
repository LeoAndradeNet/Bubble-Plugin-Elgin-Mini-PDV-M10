function(properties, context) {

	var params = { quant: properties.quant };        
    
    var result = androidApp.cutPaper(JSON.stringify(params));
    
    if(result < 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }


}