/*
* @Author: Administrator
* @Date:   2018-09-08 18:34:41
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-11 18:53:27
*/
window.onload=function() {
	
	let user=document.getElementsByClassName("username")[0];
	let pass=document.querySelector(".password");
	let hint=document.querySelector(".wyq_box-list .hint");
	let correct=document.querySelector(".dui");
	let correct1=document.querySelector(".dui1");
	let mistake=document.querySelector(".cuo");
	let mistake1=document.querySelector(".cuo1");
	let btn=document.querySelector(".wyq_submit1");
	console.log(user,pass,hint,correct,btn);
	btn.onclick=function(){
		if(user.value=="123456" && pass.value!="123456"){
			correct.style.display="block";
			hint.style.display="none"
			mistake1.style.display="block";
			correct1.style.display="none";
			mistake.style.display="none";
		}else if(user.value!="123456" && pass.value=="123456"){
			mistake.style.display="block";
			hint.style.display="block"
			correct1.style.display="block";
			mistake1.style.display="none";
			correct.style.display="none";
		}else if(user.value!="123456" && pass.value!="123456"){
			mistake.style.display="block";
			hint.style.display="block"
			mistake1.style.display="block";
			correct.style.display="none";
			correct1.style.display="none";
		}else if(user.value=="123456" && pass.value=="123456"){
			mistake.style.display="none";
			hint.style.display="none"
			mistake1.style.display="none";
            correct.style.display="block";
            correct1.style.display="block";
			setTimeout(function () {
				// alert("登录成功")
				window.open("cluster.html");
            },200);
		}

}
}