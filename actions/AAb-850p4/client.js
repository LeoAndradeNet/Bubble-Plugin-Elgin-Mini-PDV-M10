function(properties, context) {
	    
    var result = androidApp.statusSensorPapel();
    var lengthLong = true;
  	var message = ""; 
    
    if (result == 5)
      message = "Papel está presente e não está próximo do fim!";
    else if (result == 6)
      message = "Papel próximo do fim!";
    else if (result == 7)
      message = "Papel ausente!";
    else
      message = "Status Desconhecido!";
      
    androidApp.makeToast(message, lengthLong);

}