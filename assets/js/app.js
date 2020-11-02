function nextProd(root){    
    var count = $( "#"+ root +" div").length;    
    
    if(count == 4){
        var firstElement = $("#"+ root +" div").get(1);
	    $("#"+ root +" div").get(1).remove;
	    
	    console.log(firstElement);
    }
    console.log(count);
}