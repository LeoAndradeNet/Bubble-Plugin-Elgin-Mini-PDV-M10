function(properties, context) {
  	
  	var result = androidApp.printerInternalImpStart();

    if(result != 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }
}