/*This is a Date object in javascript*/
var today = new Date;
var days_list =["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
var month_list = ["January", "February", "March", "April", "May", "june", "July", "August", "September", "October",
"November", "December"];
var year =today.getFullYear();
var month = today.getMonth();
var kawuono = today.getDate();
var hour = today.getHours();
var minutes = today.getMinutes();
var mili = today.getSeconds();
var right_now = "The date today is " + kawuono + " of " + month_list[month] + " the year " + year + " ";
var time_now = "and the time right now is " + hour + ":" + minutes + ":" + mili;
console.log(right_now + time_now);

