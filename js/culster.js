/*
* @Author: Lenovo
* @Date:   2018-09-09 13:31:03
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-09 14:48:20
*/
window.onload=function(){
	let submit=document.querySelector(".wyq_submit");
	let error=document.querySelector(".error");
	let yes=document.querySelector(".yes");
	let no=document.querySelector(".no");
	let cover=document.querySelector(".wyq_cover");
	console.log(submit,yes);
	submit.onclick=function(){
		cover.style.display="block";
	}
	error.onclick=function(){
		cover.style.display="none";
	}
	no.onclick=function(){
		cover.style.display="none";
	}

}