function redirect1() {
  var rawInput = document.getElementById("input1");
  if (!rawInput.checkValidity()) {
    if (rawInput.validationMessage == "Please match the requested format.") {
      alert("Tên phòng chỉ bao gồm chữ (A-Z, a-z) hoặc số (0-9), không bao gồm các ký tự khác!");
    }
    else if (rawInput.validationMessage == "Please fill out this field.") {
      alert("Vui lòng nhập tên phòng!");
    }
  } else {
    var link = "https://daotao.thanhhoaict.gov.vn/" + rawInput.value;
    location.replace(link);
  } 
}


function redirect2() {
  var rawInput = document.getElementById("input2")
  if (!rawInput.checkValidity()) {
    if (rawInput.validationMessage == "Please match the requested format.") {
      alert("Tên phòng chỉ bao gồm chữ (A-Z, a-z) hoặc số (0-9), không bao gồm các ký tự khác!");
    }
    else if (rawInput.validationMessage == "Please fill out this field.") {
      alert("Vui lòng nhập tên phòng!");
    }
  } else {
    var link = "https://daotao.thanhhoaict.gov.vn/" + rawInput.value;
    location.replace(link);
  } 
}