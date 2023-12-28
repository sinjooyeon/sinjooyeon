window.onload = function () {
  const savedText = localStorage.getItem("savedText");
  document.getElementById("displayText").innerText = savedText;
};