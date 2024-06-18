

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let interpolateResult=document.getElementById("content3");
let interpolateResult2=document.getElementById("content4");
let interpolateResult3=document.getElementById("content5");
let a;
let b;
let c;

function change(){
    let W = document.getElementById("W").value;
    let FWA = document.getElementById("FWA").value;
    console.log(DWA);
    a=(1025-DWA)*FWA/25;
    content1.innerHTML= a + "mm";

}
function findFwa(){
    let W = document.getElementById("W").value;
    let TPC = document.getElementById("TPC").value;
    console.log(TPC);
    a=W/(4*TPC);
    content2.innerHTML= a + "mm";

}
function interpolate(){
    let tb1 = Number(document.getElementById("tb1").value);
    let tb2 = Number(document.getElementById("tb2").value);
    let tb3 = Number(document.getElementById("tb3").value);
    let tb4 = Number(document.getElementById("tb4").value);
    let tb5 = Number(document.getElementById("tb5").value);
    let tb6 = Number(document.getElementById("tb6").value);
    let tb7 = Number(document.getElementById("tb7").value);
    let tb8 = Number(document.getElementById("tb8").value);
    let tb9 = Number(document.getElementById("tb9").value);
    let tb10 = Number(document.getElementById("tb10").value);
  
    
    a=((tb2-tb1)*(tb5-tb4))/(tb3-tb1)+tb4;
    interpolateResult.innerHTML= a ;
    b=((tb2-tb1)*(tb7-tb6))/(tb3-tb1)+tb6;
    interpolateResult2.innerHTML= b ;
    console.log(tb9-tb8);
    console.log(b-a);
    console.log(tb10-a);

    c=((tb9-tb8)*(b-a))/(tb10-tb8)+a;
    interpolateResult3.innerHTML= c ;

}
