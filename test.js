var jas = 0;

function test(var guestVar){
	while(guestVar === 0){
		console.log("This is all a test");
		guestVar = 1;
	}
}

$window.onload(){
	test(jas);
}