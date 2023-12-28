document.getElementById("saveButton").addEventListener("click", function () {
  const text = document.getElementById("textInput").value;
  localStorage.setItem("savedText", text);
  alert("저장되었습니다!");
  textInput.value = '';
});


document.getElementById("goToCallButton").addEventListener("click", function () {
  window.location.href = './call.html';
});