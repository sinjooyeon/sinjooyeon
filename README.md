<!doctype html>
<html>
<head> <tiltle>
</tiltle>


<style type="text/css">
div.sondow{
  position:absolute;
  width: 300px;height:200px
;
border: 3px outset gray;
}
 div.titlebar{
position:absolute;
top:0px;
 height:18px;
 width:290px;
 background-color: #aaa;
 border-bottom: groove gray 2px;
 padding: 3px 5px 2px 5px;
 font: bold 11pt sans-serif;


 }

div.content{
position:absolute;
top:25px;
height:165px;
width:290px;
padding:5px;
overflow:auto;
background-color:#fff;

}
div.translucent{
opacity: .75;
filter:alpha(opacity=75);


}


</style>

</head>
<body>
<div xlass="window" style="left: 10px; top:10px; z-index:10;">
  <div xlass="titlebar">Test Window 창테스트</div> 
  <div xlass="content">
1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0<br>
1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0<br>

  </div>
</div>
<div xlass="window" style="left: 75px; top:110px; z-index:20;">
  <div xlass="titlebar">또다른 창</div> 
  <div xlass="content translucent" style-"background-color:#ccc; font-weight:bold;">
    이것은 또 다른 창입니다. 이창의 <tt>z-index</tt>는 다른 창보다 높습니다 브라우저가 지원할 수 있는 CSS스타일로 내용 영역을  반투명하게 했습니다.</div>
  </div>
</body>




