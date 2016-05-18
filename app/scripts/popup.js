var url = "http://127.0.0.1:8000/api/words/en/?format=json"
 /
var data=JSON.parse(url);
document.getElementById("placeholder").innerHTML=data.title+ " " + data.definition;