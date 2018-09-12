window.onload=function(){
	//新建学生声明
	let submit1=document.querySelector("main .lmx_search .lmx_button3");
	let close1=document.querySelector(".lmx_shade1 .lmx_title img");
	let cancel1=document.querySelector(".lmx_shade1 .lmx_text .lmx_btn .lmx_btn2");
	let cover1=document.querySelector(".lmx_shade1");

	//批量导入声明
	let submit2=document.querySelector("main .lmx_search .lmx_button4");
	let close2=document.querySelector(".lmx_shade2 .lmx_title img");
	let cover2=document.querySelector(".lmx_shade2");

//新建学生
function newstudent(submit,close,cancel){
	submit1.onclick=function(){
		cover1.style.display="block";
	}
	close1.onclick=function(){
		cover1.style.display="none";
	}
	cancel.onclick=function(){
		cover1.style.display="none";
	}
}
	newstudent(submit1,close1,cancel1);


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


	//表格增删查
 	let table = document.querySelector("tbody");
    let add = document.querySelector(".lmx_shade1 .lmx_text .lmx_btn .lmx_btn1");
    console.log(localStorage);
    add.onclick = function () {
        let obj = {username:"张晓明",name:"张晓明",phone:"12345678",sex:"男",major:"视觉传达设计",school:"山西大学",classes:"MUIDF1807"};
        addTable(obj);
        cover1.style.display="none";
        // obj.id = date.length;
        // date.push(obj);
        // 存到储存器
        // localStorage.setItem("keys",JSON.stringify(date));
    }
    //渲染一条表格函数
    function addTable(obj) {

        let str = `<tr>
					<td class="lmx_list-1">
						<div class="lmx_check"></div>
					</td>
					<td class="lmx_list-2" type="username">${obj.username}</td>
					<td class="lmx_list-3" type="name">${obj.name}</td>
					<td class="lmx_list-4" type="phone">${obj.phone}</td>
					<td class="lmx_list-5" type="sex">${obj.sex}</td>
					<td class="lmx_list-6" type="major">${obj.major}</td>
					<td class="lmx_list-7" type="school">${obj.classes}</td>
					<td class="lmx_list-8" type="classes">${obj.classes}</td>
					<td class="lmx_list-9"><div class="lmx_del">删除</div></td>
				</tr>`;
        table.innerHTML += str;
        let del = document.querySelectorAll("div");

        //删除列表
        del.forEach((e)=>{
            e.onclick = function () {
                let parentD = this.parentNode.parentNode;
                table.removeChild(parentD);
                // let ids = parentD.id;
                // console.log(ids);

                // 过滤选出符合测试函数的元素并且返回给arr
                // date=date.filter(v=>v.id != ids
                // );

                // console.log(date);
                // localStorage.setItem("keys",JSON.stringify(date));

            }

        })
    }





}