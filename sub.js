// Fonction sub qui permet de soustraire 2 nombres

function sub(x){
  return function(y){
    return x-y;
  }
}
	
console.log(sub(0)(0));
console.log(sub(2)(1));
console.log(sub(2)(2));
console.log(sub(2)(4)); 