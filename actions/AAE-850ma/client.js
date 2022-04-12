function(properties, context) {

	var params = { barCodeType: properties.barCodeType, text: properties.text, height: properties.height, width: properties.width, align: properties.align };
    
    var result = androidApp.imprimeBarCode(JSON.stringify(params));
    
    if(result < 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }

}