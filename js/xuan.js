/**
 * Created by Administrator on 2017/7/23.
 */

var cut=document.getElementById("slider-control");
var oA1=cut.getElementsByTagName("a");
var box=document.getElementById("slider-inner");
var oDiv=box.getElementsByClassName("item");
console.log(oDiv);
console.log(cut);
console.log(box);
console.log(oA1);

for(var i=0;i<oA1.length;i++){
    oA1[i].index=i;
    oA1[i].onmouseover=function(){
            for(var j=0;j<oA1.length;j++){
            oDiv[j].style.display="none";
            oA1[j].style.background="";
        }
        this.style.background="#fff";
        oDiv[this.index].style.display="block";
    }
}

