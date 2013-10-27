// Fonction sub qui permet de soustraire 2 nombres

function sub(x){
  return function(y){
    return x-y;
  }
}
	
// Fonction sub qui permet de multiplier 2 nombres

function mult(x){
  return function(y){
    return x*y;
  }
}
	
/* On utilise ici la fonction IsNumeric qui permet de savoir si un caractère est un nombre */

function IsNumeric(input){
    return (input - 0) == input && (input+'').replace(/^\s+|\s+$/g, "").length > 0;
}

/* Transformation de la fonction adder pour qu'elle accepte un nombre variable d'argument */

function adder(){
	var resultat=0;  
	var i=0;	
	var args = Array.prototype.slice.call(arguments);		
	return function(val){		
		for(i=0; i<arguments.length; i++){ 
			for(j=0; j<args.length; j++){
				if(IsNumeric(args[i])){
					resultat=resultat+args[i]+arguments[j];
				}else{
					resultat=resultat+args[j](arguments[i]); 
				}				
			}
		}		
		return resultat;
	};	
}

// Quelques tests

adder()(0); 
adder()(1); 
adder(mult(2))(1); 
adder(mult(2), mult(2))(1); 
adder(mult(2), mult(2), mult(2))(1); 
adder(mult(2), sub(2), mult(2))(1); 
