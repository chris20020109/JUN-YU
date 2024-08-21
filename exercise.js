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

//計算機
function cal(){
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var bmi = weight/(height*height)
    if(height == 0 || weight == 0){
        document.getElementById("BMI").innerHTML="資料未填完";
    }
    else{
        document.getElementById("BMI").innerHTML=bmi;
    }
        
}

//左側連結
let display_block = "bmi_block";
function leftnavck(name) {                              //使用變數即可將id變換
    let y = document.getElementById(display_block);
    let y_display =window.getComputedStyle(y).display;
    if (y.style.display == "block"){
        y.style.display = "none";
    }
    
    const x = document.getElementById(name);
    display_block = name;
    const display = window.getComputedStyle(x).display; //問題:元素初始狀態不匹配條件檢查   
    if (display == "none") {                            //解決方法:在函數中使用 getComputedStyle 來檢查元素的實際顯示狀態，而不是僅依賴 style.display。             
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
    

    
}

//實作1A2B猜數字遊戲                                             問題:無法自動刪除輸入資料 & 答案無法紀錄於下方 & 無計次數方法
//生成數字
let target;
function ABgame_run(){
    while (true){
        target = Math.floor((Math.random()*10000)+1).toString();
        if (target.length === 4){
            let digitSet = new Set();
            let hasDuplicate = false;

            // 檢查4個數字是否重複
            for (let char of target) {
                if (digitSet.has(char)) {
                    hasDuplicate = true; // 如果發現有重複
                    break;               // 跳出 for 循環
                }
                digitSet.add(char);
            }

            if (!hasDuplicate) {
                break;                  // 如果没有重複，跳出 while 循環
            } else {
                continue;               // 如果有重複，繼續 while 循環
            }
        }
    }
    console.log(target)
    return target;
}
//對答案
function confirm(){
    let input_answer = document.querySelector('#guess_num').value;
    let A = 0;
    let B = 0;
    if (!input_answer){
        document.querySelector('#answer1').innerHTML = "未輸入數字";
    }
    if (input_answer.length > 4){
        document.querySelector('#answer1').innerHTML = "只能輸入4個數字!!!";
    }
    else if (input_answer && input_answer.length <= 4){
        let set = new Set();
        let hasDuplicate = false;
        for (let char of input_answer){
            if (set.has(char)){
                hasDuplicate = true;
                break;
            }
            else{
                set.add(char);
            }
        }
        if (!hasDuplicate){
            for(i=0;i<=3;i++){
                if (input_answer[i] == target[i]){
                    A+=1;
                }
                else if (target.includes(input_answer[i]) && input_answer[i] != target[i]){  //includes()方法能找是否存在input_answer[i]
                    B+=1;
                }
            if(A == 4){
                document.querySelector('#answer1').innerHTML = "恭喜答對,答案就是"+input_answer;
            }
            else{
                document.querySelector('#answer1').innerHTML = input_answer+" "+A+"A"+B+"B";
            }
            }
        }
        else {
            document.querySelector('#answer1').innerHTML = "數字有重複";
        }
    }
}
//規則顯示
document.addEventListener("DOMContentLoaded",function(){
    let ABgame_rule = document.getElementById("ABgame_rule");
    console.log(ABgame_rule);
    ABgame_rule.addEventListener("click",function(){
            alert("玩家需要猜測對方設定的一組四位數字,數字範圍為0~9,且不重複\n玩家每次可輸入4個數字,且不重複\n按下確認後將會得到猜測結果\nA 表示數字正確且位置正確的個數\nB 表示數字正確但位置不正確的個數\n反覆猜測直到猜對為止")
    })
})



//按鍵偵測
document.addEventListener("DOMContentLoaded",function(){
    const obj = document.querySelector("#key");
    if (obj){
        obj.addEventListener("keydown",function(event){
        let keyvalue = event.which || event.keyCode;
        console.log(keyvalue);                          //console.log()是回傳數值給控制台的函式
        document.getElementById("keyvalue").innerHTML="<p>"+keyvalue+"</P>";
        ;})
    }})

//2D圖物件移動
document.addEventListener("DOMContentLoaded",function(){
    const obj = document.querySelector('#omb')
    if (obj){
        obj.addEventListener("click",function(){
            obj.addEventListener("keydown",function(event){
                let per =document.querySelector('.person_pic');
                let x = per.offsetLeft || 0;
                let y = per.offsetTop || 0;
                let fs = document.querySelector('#object_move_fieldset')
                let fs_x = fs.offsetLeft;
                let fs_y = fs.offsetTop;
                let keyvalue = event.which || event.keyCode;
                switch (keyvalue){
                    case 65:
                        if(x>fs_x){
                            per.style.left = (x-10)+'px';
                            break
                        }
                        else{
                            break  
                        }
                    case 68:
                        if(x<(fs_x+910)){
                            per.style.left = (x+10)+"px";
                            break
                        }
                        else{
                            break
                        }
                    case 87:
                        if(y>(fs_y+20)){
                            per.style.top = (y-10)+"px";
                            break
                        }
                        else{
                            break
                        }
                    case 83:
                        if(y<(fs_y+460)){
                            per.style.top = (y+10)+"px";
                            break
                        }
                        else{
                            break
                        }
                        
                }
            })
        })
    }
})
//第二版
document.addEventListener("DOMContentLoaded", function() {
    const obj = document.querySelector('#omb2');
    const per = document.querySelector('.person_pic2');
    if (obj && per) {
        let keysPressed = {};
        let speed = 5;
        let moving = true;

        obj.addEventListener("click", function() {
            obj.focus();

        });

        obj.addEventListener("keydown", function(event) {
            keysPressed[event.keyCode] = true;

            // 如果按下 Esc 鍵 (keyCode 27)，則停止移動
            if (event.keyCode === 27) {
                moving = false;
            }
        });

        obj.addEventListener("keyup", function(event) {
            keysPressed[event.keyCode] = false;
        });

        function move() {
            if (!moving) return; // 如果 moving 為 false，則停止執行 move 函數

            let x = per.offsetLeft;
            let y = per.offsetTop;

            if (keysPressed[65]) {                          // A key
                per.style.left = (x - speed) + 'px';
            }
            if (keysPressed[68]) {                          // D key
                per.style.left = (x + speed) + 'px';
            }
            if (keysPressed[87]) {                          // W key
                per.style.top = (y - speed) + 'px';
            }
            if (keysPressed[83]) {                          // S key
                per.style.top = (y + speed) + 'px';
            }

            requestAnimationFrame(move);
        }

        move(); // 開始動畫循環
    }
});