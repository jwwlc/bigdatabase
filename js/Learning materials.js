window.onload=function(){

//选项卡
	let lis=document.querySelectorAll("main .wyq_content .lmx_content .lmx_list");
	let inn=document.querySelectorAll("main .lmx_content .lmx_list ul");
	// console.log(lis);
	// console.log(inn);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<inn.length;j++){
				inn[j].style.display="none";
			}
			inn[i].style.display="block";
		}
		lis[i].onmouseleave=function(){
			inn[i].style.display="none";
		}
	}

}


box.onmousemove=function(){
		let element=e.target;
		if (element.nodeName="DIV"&&element.classList.contain) {
			console.log(1);
			element.classList.add("");
		}
	}