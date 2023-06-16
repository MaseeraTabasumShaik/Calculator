var b=0;
var m="";
document.getElementById("add").onclick=function()
{
    var a=parseInt(document.getElementById("n1").value);
    b=b+a;
    if(m.length==0)
    {
        m=m+a;
    }
    else
    {
        m=m+("+"+a);
    }
    document.getElementById("t").textContent=b;
}
document.getElementById("sub").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    b=b-a;
    if(m.length==0)
    {
        m=m+a;
    }
    else
    {
        m=m+("-"+a);
    }
    document.getElementById("t").textContent=b;
}
document.getElementById("mul").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    b=b*a;
    if(m.length==0)
    {
        m=m+a;
    }
    else
    {
        m=m+("*"+a);
    }
    document.getElementById("t").textContent=b;
}
document.getElementById("div").onclick=function(){
    var a=parseInt(document.getElementById("n1").value);
    b=b/a;
    if(m.length==0)
    {
        m=m+a;
    }
    else
    {
        m=m+("/"+a);
    }
    document.getElementById("t").textContent=b;
}
document.getElementById("fou").onclick=function()
{
    document.getElementById("f").textContent=m;
}