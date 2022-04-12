function(properties, context) {

	var params = { text: properties.text, align: properties.align, font: properties.font, fontSize: properties.fontSize, isUnderline: properties.isUnderline, isBold: properties.isBold };
    
    var result = androidApp.imprimeTexto(JSON.stringify(params));
    
    if(result < 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }

}