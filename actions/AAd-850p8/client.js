function(properties, context) {

	var params = { xmlNFCe: properties.xmlNFCe, indexcsc: properties.indexcsc, csc: properties.csc, param: properties.param };
    
    var result = androidApp.imprimeXMLNFCe(JSON.stringify(params));
    
    if(result < 0) {
		var lengthLong = true;
  		var message = "Ocorreu um erro - Código: " + result;

    	androidApp.makeToast(message, lengthLong);
    }

}