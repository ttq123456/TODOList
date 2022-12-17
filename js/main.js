import CongViec from "./CongViec.js";
import MangCongViec from "./MangCongViec.js";

let mangCV = new MangCongViec;
let count = 0;    

mangCV.renderCV();

let themCV = () => {
    let congViec = new CongViec;
    count++;
    congViec.tenCV = document.getElementById("newTask").value ;
    congViec.id = count;
    mangCV.addCV(congViec);
}

document.querySelector("#addItem").onclick = themCV;

let capNhatCV = (id) => {
    mangCV.updateCV(id);
}

let xoaCV = (id) => {
    mangCV.deleteCV(id);
    console.log("xoa CV")
}

let sapXep = (isDes) => {
    mangCV.sortCV(isDes);
}

document.querySelector("#two").onclick = () => {sapXep(0) };
document.querySelector("#three").onclick = () => {sapXep(1) };

window.capNhatCV = capNhatCV;
window.xoaCV = xoaCV;

    
    
