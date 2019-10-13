module.exports = function zeros(expression) {
  
let sum=0;
let sum2=0;

function howManyFives (x){
  
  var zeros=0;
  var i = 1;

  while (parseInt(x/Math.pow(5,i))>0) {

  zeros = zeros + parseInt(x/Math.pow(5,i));
  i++;
  }
return zeros;
}
  
function howManyFivesDouble (x){
	var zeros=0;
	var i;
	if (x%2==0){
		i = 2
	}
	else {
		i = 1;
	}
	while (i<=x){
		let j=i;
		while (i%5==0){
			zeros++;
			i=i/5;
		}
		i=j;
		i=i+2;
	}
	return zeros;
}

function howManyTwos (x){
	
	var zeros2=0;
	var i = 1;

	while (parseInt(x/Math.pow(2,i))>0) {

	zeros2 = zeros2 + parseInt(x/Math.pow(2,i));
	i++;
	}
return zeros2;
}

function howManyTwosDouble (x){
	var zeros2=0;
	var i;
	if (x%2==0){
		i = 2
	}
	else {
		zeros2 = 0;
	}
	while (i<=x){
		let j=i;
		while (i%2==0){
			zeros2++;
			i=i/2;
		}
		i=j;
		i=i+2;
	}
	return zeros2;
}





let numberArr=expression.split('*');

let num = 0;
let fact;
  
function trim(y){
  num=parseInt(y);
  fact=y.substring((num+'').length,y.length);
}
  
for (let i=0; i<numberArr.length; i++){
	trim(numberArr[i]);
	if (fact=='!'){
		sum=sum+howManyFives(num);
		sum2=sum2+howManyTwos(num);
	}
	if (fact=='!!'){
		sum=sum+howManyFivesDouble(num);
		sum2=sum2+howManyTwosDouble(num);
	}
}

if (sum>=sum2){
  return sum2;
}
else {
  return sum;
}

}
