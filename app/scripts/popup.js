var url = "http://127.0.0.1:8000/api/words/en/?format=json"

var data={"users":[
        {
            "firstName":"Ray",
            "lastName":"Villalobos",
            "joined":2012
        },
        {
            "firstName":"John",
            "lastName":"Jones",
            "joined":2010
        }
]}
document.getElementById("placeholder").innerHTML=data.users[0].firstName + " " + data.users[0].lastName+" "+ data.users[0].joined;