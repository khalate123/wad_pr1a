$(document).ready(function () {
    getData();
  });
  
  function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
   
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    
    $("#address").text(studentObj.address);
    
  }