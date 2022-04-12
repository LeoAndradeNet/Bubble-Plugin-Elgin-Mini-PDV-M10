function(properties, context) {

    var params = { imgBase64: properties.imgBase64 };
    
    var result = androidApp.imprimeImagem(JSON.stringify(params));
    
    if(result < 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }

}