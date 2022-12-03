if(localStorage.getItem("html") !== null){
    let html1 = localStorage.getItem("html");
    let css1 = localStorage.getItem("css");
    let js1 = localStorage.getItem("js");
    document.getElementById("html").innerText = html1;
    document.getElementById("css").innerText = css1;
    document.getElementById("js").innerText = js1;    
}
function run(){
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let output = document.getElementById("iframe");
    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
}

setInterval(run, 250);