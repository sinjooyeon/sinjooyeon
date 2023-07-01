<!DOCTYPE html>
<html>
    <meta charset="utf-8">
<head>
    <title>
디지털시계
    </title>
    <script>
function displayTime(){
    var elt = document.getElementById("clock");
    var now = new Date();
    elt.innerHTML = now.toLocaleTimeString();
    setTimeout(displayTime, 1000);
}
window.onload = displayTime;
</script>
<style>
#clock {
        font: bold 24pt sans;
        background: #ddf;
        padding: 10px;
        border: solid black 2px;
        border-radius: 10px;
    }
    </style>

<style type="text/css">
    h2, h3 { color: blue; 
        font-style:italic;
        text-align:center;}
   .WARNING { 
    font-weight:bold;
    font-size:150%;
    margin:0 1in 0 1in;
    background-color: yellow;
    border:solid red 8px;
    padding:10 10px;
    text-align:center;
}

 .WARNING h2, .WARNING h3{text-align:center;}
#special{
    text-align:center;
    text-transform:uppercase;
    }

</style>

</head>





<body>
 <h1>Difital Clock</h1></div>


 <span id="clock"></span>
 <br>
 <br>
 <br>
 <br>

 <h2>캐스케이딩 스타일 시트 데모</h2>
<div class="WARNING">
    <h3>Warning</h3>
    경고!
    이 경고문은 굵고 밝은 글씨로 여러분의 시선을 사로잡습니다.<br>
        머릿글 역시 가운데 정렬된 파란색 이텔릭체로 표기했습니다.<br><br></div>
        
   <p id="special">
이 문단은 가운데로 정렬되어 있습니다. <br>
그리고, 영어로 쓰일경우 대문자로 표시됩니다.<br>
<span stule="text-transform:none">
    이곳에 쓰인 문자는 인라인 스타일을 사용하여 오버라이드 했습니다.
</span>

time

   </p>
        
    </body>
    </html>


 

