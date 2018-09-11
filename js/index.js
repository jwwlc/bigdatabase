/*
* @Author: 123
* @Date:   2018-09-08 16:53:30
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-09 15:13:50
*/
window.onload=function(){
	let Btn=document.querySelector(".wyq_submit");
	let hint=document.querySelector(".wyq_alert");
	let Btn2=document.querySelector(".wyq_close");
	console.log(Btn,hint,Btn2);
	Btn.onclick=function(){
		hint.style.display="block";
	}
	Btn2.onclick=function(){
		hint.style.display="none";
	}
}