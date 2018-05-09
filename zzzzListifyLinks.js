// The following is from:  http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript/
// Use the browser's built-in functionality to quickly and safely escape the string
function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}


//var saveOriginal = document.getElementById("thelinks").innerHTML;
var saveOriginal = document.body.innerHTML;

var links = document.getElementsByTagName('a');
var i;
var txt = "";
for (i = 0; i < links.length; ++i) {
    if (i == 0) {
      txt += "<ol>";
    }
    // Do something with links[i].href
    txt += '<li>';
    txt += '<a href="' + links[i].href + 
                             '" target="' + links[i].href + '">' + links[i].href +  '</a><br />';
    if (links[i].innerHTML) {
      txt += '<a href="' + links[i].href + '" target="' + links[i].href + '">' + links[i].innerHTML +  '</a><br />';
    }
    txt += '<br />'
    txt += '</li>';
}
if (links.length > 0){
      txt += "</ol>";
}

document.body.innerHTML = txt;

//document.innerHTML += '<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>';
document.body.innerHTML += '<div><h1>--- original text (unchanged) ---</h1>';
document.body.innerHTML += '<pre>' + escapeHtml(saveOriginal) + '</pre>';

document.body.innerHTML += '<div><h1>--- original text (rendered) ---</h1>';
document.body.innerHTML += '<pre>' + saveOriginal + '</pre>';
