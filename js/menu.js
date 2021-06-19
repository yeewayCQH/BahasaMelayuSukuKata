
/****************************************************************
 *                           Mathematics                        *
 ****************************************************************/

/*
const menu_addition    = document.getElementById("menu_addition");
const menu_subtract    = document.getElementById("menu_subtract");
const menu_multiply    = document.getElementById("menu_multiply");
const menu_divide      = document.getElementById("menu_divide");

menu_addition.addEventListener("click", function(){
	var x = document.documentURI;
	x = x.replace("menu.html","page/basicMath_add.html");
	x = x.replace("#basicMath","");
	window.open(x);
	//window.location.href = x;
});

menu_subtract.addEventListener("click", function(){
	var x = document.documentURI;
	x = x.replace("menu.html","page/basicMath_subtract.html");
	x = x.replace("#basicMath","");
	window.open(x);
	//window.location.href = x;
});

menu_multiply.addEventListener("click", function(){
	var x = document.documentURI;
	x = x.replace("menu.html","page/basicMath_multiply.html");
	x = x.replace("#basicMath","");
	window.open(x);
	//window.location.href = x;
});

menu_divide.addEventListener("click", function(){
	var x = document.documentURI;
	x = x.replace("menu.html","page/basicMath_divide.html");
	x = x.replace("#basicMath","");
	window.open(x);
	//window.location.href = x;
});
*/




/****************************************************************
 *                  Bahasa Melayu                               *
 ****************************************************************/

const menu_hurufVokal_1   = document.getElementById("menu_hurufVokal_1");
const menu_hurufVokal_2   = document.getElementById("menu_hurufVokal_2");

menu_hurufVokal_1.addEventListener("click", function(){

	sessionStorage.setItem("MENU", "MenuHurufVokal_1");
	var x = document.documentURI;
	x = x.replace("preSchool4yoMenu.html","page/hurufVokal_1_ipad.html");
	x = x.replace("#sukuKata","");
	window.open(x);
	//window.location.href = x;
});

menu_hurufVokal_2.addEventListener("click", function(){

	sessionStorage.setItem("MENU", "MenuHurufVokal_2");
	var x = document.documentURI;
	x = x.replace("preSchool4yoMenu.html","page/hurufVokal_2_ipad.html");
	x = x.replace("#sukuKata","");
	window.open(x);
	//window.location.href = x;
});






/****************************************************************
 *                  Bahasa English                              *
 ****************************************************************/

const menu_phonics_abc_read   = document.getElementById("menu_phonics_abc_read");
const menu_phonics_abc_e1     = document.getElementById("menu_phonics_abc_e1");

menu_phonics_abc_read.addEventListener("click", function(){

	window.open("https://online.fliphtml5.com/pwtji/ypbo/#p=1");

});

menu_phonics_abc_e1.addEventListener("click", function(){

	var x = document.documentURI;
	x = x.replace("preSchool4yoMenu.html","page/phonics_e1.html");
	x = x.replace("#phonicsABC","");
	window.open(x);
	//window.location.href = x;
});