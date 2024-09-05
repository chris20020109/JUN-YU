//onload 回到最上方
window.onload = function(){
    window.scrollTo({top:0,behavior:"smooth"})
}
//body下滑導覽列背景顏色出現
document.addEventListener("DOMContentLoaded",function(){
    window.addEventListener('scroll', function() {
        let header = document.querySelector('.header');
        let scrollPosition = window.scrollY; // 獲取當前滾動位置
    
        if (scrollPosition > 0) {
            header.style.backgroundColor = 'rgba(58, 54, 54)'; // 當滾動時，顯示背景色
        } else {
            header.style.backgroundColor = 'transparent'; // 回到頂部時，背景變透明
        }
    });
})
//下拉式選單
function dropdownfunction() {
    document.getElementById("myDropdown").classList.toggle("show"); //toggle()方法可以進行取消和賦予
    }
//點選介面其他地方關掉選單
window.onclick = function(event){
    if(!event.target.matches("#dropbtn")){
        document.getElementById("myDropdown").classList.remove("show");
    }
}

//底部時間
setInterval(function(){
    let time = new Date();
    document.querySelector("footer").innerHTML = 'Copyright &copy; 2024 JUN-YU ,HUANG.All rights reserved. '+time;
},1000);
