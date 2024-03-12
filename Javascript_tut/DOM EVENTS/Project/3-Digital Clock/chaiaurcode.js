const clock = document.getElementById('clock');
// setIntrval method is the js method which continously run the method 
setInterval(function(){
    // Date is an object of js
    let date = new Date();
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString();
},1000)
// 1000 is millisecond