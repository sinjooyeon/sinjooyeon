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


</head>
<body>
<h1>Difital Clock</h1>
<span id=""clock"></span>
<style>



    #clock {
        font: bold 24pt sans;
        background: #ddf;
        padding: 10px;
        border: solid black 2px;
        border-radius: 10px;
    }
    </style>
    
</body>
</html>
       
