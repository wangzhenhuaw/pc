/**
 * Created by Administrator on 2017/8/1.
 */
/*var box=document.getElementById("search-bottom");*/
var inp=document.getElementById("inp");
var btn=document.getElementById("search");
var uls=document.getElementById("uls");
var oA=uls.getElementsByTagName("a");
console.log(oA);
function Search(){
    window.open("http://www.baidu.com/s?wd="+inp.value,"_self");
    inp.value="";
}
inp.onkeyup=inp.onfocus=function(){
    var str=inp.value.replace(/(^\s+)|(\s+$)/g,"");
    uls.style.display=str?"block":"none";
}
document.body.onclick=function(e){
    var target= e.target|| e.srcElement;
    if(target.id=="inp"){
        return;
    }
    if(target.id=="search"){
        Search();
    }
    if(target.tagName.toLowerCase()=="a"){
        inp.value=target.innerHTML;
    }
    uls.style.display="none";
}
var n=-1;
var old=null;
inp.onkeydown=function(e){
    e=e||window.event;
    if(e.keyCode==40){
        //console.log(e.keyCode);
        n++;
        if(n>oA.length-1){
            n=-1;
        }
        list()
    }
    if(e.keyCode==38){
        n--;
        if(n<-1){
            n=oA.length-1;
        }
        list();
    }
    if(e.keyCode==13){
        Search();
    }
}
function list(){
    if(!old){
        old=inp.value;
    }
    for(var i=0;i<oA.length;i++){
        oA[i].style.background="";
    }
    if(n==-1){
        inp.value=old;
    }else{
        inp.value=oA[n].innerHTML;
        oA[n].style.background="#E3FAE1";
    }
}