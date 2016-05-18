/*$.ajax({
        url: siteUrl + "/api/words/en/?format=api",
        method: "GET",
        headers: { "Content- Type": "application/json; "},
        success: function (data) {
           console.log(JSON.stringify(data.d.results));
        },
        error: function (data) {
           console.log(JSON.stringify(data));
        }
});*/

var text = '{"words":[' +
'{"title":"Apple","definition":"is a fruit" , "translation":[{"title":"alma","definition":"zhemis"}, {"title":"yablokoo","definition":"frukt "}]},' +
'{"title":"yabloko","definition":"Smith" },' +
'{"title":"Peter","definition":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("placeholder").innerHTML =
obj.words[0].title+ " " + obj.words[0].translation[1].title;