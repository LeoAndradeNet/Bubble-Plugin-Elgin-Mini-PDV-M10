function(properties, context) {
    
    var params = { qrSize: properties.qrSize, text: properties.text, align: properties.align };
    
    var result = androidApp.imprimeQR_CODE(JSON.stringify(params));
    
    if(result < 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }

}