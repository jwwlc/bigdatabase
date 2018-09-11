window.onload=function(){
	//新建学生声明
	let submit1=document.querySelector("main .lmx_search .lmx_button3");
	let close1=document.querySelector(".lmx_shade1 .lmx_title img");
	let save1=document.querySelector(".lmx_shade1 .lmx_text .lmx_btn .lmx_btn1");
	let cancel1=document.querySelector(".lmx_shade1 .lmx_text .lmx_btn .lmx_btn2");
	let cover1=document.querySelector(".lmx_shade1");

	//批量导入声明
	let submit2=document.querySelector("main .lmx_search .lmx_button4");
	let close2=document.querySelector(".lmx_shade2 .lmx_title img");
	let cover2=document.querySelector(".lmx_shade2");

//新建学生
function newstudent(submit,close,save,cancel){
	submit.onclick=function(){
		cover1.style.display="block";
	}
	close.onclick=function(){
		cover1.style.display="none";
	}
	save.onclick=function(){
		cover1.style.display="none";
	}
	cancel.onclick=function(){
		cover1.style.display="none";
	}
}
	newstudent(submit1,close1,save1,cancel1);


//批量导入
function load(submit,close){
	submit.onclick=function(){
		cover2.style.display="block";
	}
	close.onclick=function(){
		cover2.style.display="none";
	}
}
	load(submit2,close2);




}