var links = document.getElementsByTagName('a');
var i;
//var txt = document.getElementById("thelinks").innerHTML ;
var txt = "";
for (i = 0; i < links.length; ++i) {
    if (i == 0) {
      txt += "<ol>";
    }
    // Do something with links[i].href
    txt = txt + '<li>';
    txt = txt + '<a href="' + links[i].href + '">' + links[i].href +  '</a><br /><br />';
    if (trim(links[i].innerHTML) != "") {
      txt = txt + '<a href="' + links[i].href + '">' + links[i].innerHTML +  '</a><br />';
    }
    txt = txt + '</li>';
}
if (links.length > 0){
      txt += "</ol>";
}

document.getElementById("thelinks").innerHTML = txt;
