
/****************************************************************
 *                           Mathematics                        *
 ****************************************************************/





/****************************************************************
 *                  Bahasa Melayu                               *
 ****************************************************************/

const menu_hurufVokal_1    = document.getElementById("menu_hurufVokal_1");
const menu_hurufVokal_2    = document.getElementById("menu_hurufVokal_2");
const menu_hurufVokal_read = document.getElementById("menu_hurufVokal_read");

menu_hurufVokal_read.addEventListener("click", function(){

	window.open("https://online.fliphtml5.com/pwtji/vxgd/#p=1");

});

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