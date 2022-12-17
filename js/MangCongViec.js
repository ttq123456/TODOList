import CongViec from "./CongViec.js"

export default class MangCongViec {
    constructor() {
        this.mangCV = [];
    }

    renderCV() {
        let chuaLam = "";
        let daLam = "";
        this.mangCV.map((cv) => {
            if (cv.trangThai) {
                daLam += `
                <li>
                    <span>${cv.tenCV}</span>
                <div>
                    <i class="fa-regular fa-trash-can" onclick="xoaCV('${cv.id}')"></i>
                    <i class="fa-solid fa-circle-check"></i>
                   
                </div>    
            </li>
                `
            }
            else {chuaLam += `
            <li>
                <span>${cv.tenCV}</span>
                <div>
                    <i class="fa-regular fa-trash-can" onclick="xoaCV('${cv.id}')"></i>
                    <i class="fa-regular fa-circle-check" onclick="capNhatCV('${cv.id}')"></i>    
                </div>
              
            </li>     
            `
            }
        })
        document.getElementById("todo").innerHTML = chuaLam;
        document.getElementById("completed").innerHTML = daLam;

    }
    addCV(cv) {
        this.mangCV.push(cv);
        console.log(this.mangCV);
        this.renderCV();
    }
    // onclick="capNhatCV('${cv.id}'
    updateCV(id) {
        //console.log(id)
        let i = this.mangCV.findIndex((cv) => { 
            return cv.id == id;
         })
        this.mangCV[i].trangThai = 1;
        this.renderCV();
    }

    deleteCV(id) {
        let i = this.mangCV.findIndex((cv) => { 
            return cv.id == id;
        })
        this.mangCV.splice(i,1); 
        this.renderCV();
    }

    sortCV(isDes){
        for (let i = 0; i<this.mangCV.length; i++)
            for (let j = i+1; j<this.mangCV.length;j++){
                if (isDes) {
                    if (this.mangCV[i].tenCV > this.mangCV[j].tenCV) {
                        let temp = this.mangCV[i];
                        this.mangCV[i] = this.mangCV[j];
                        this.mangCV[j] = temp;
                    }
                }
                else {
                    if (this.mangCV[i].tenCV < this.mangCV[j].tenCV) {
                        let temp = this.mangCV[i];
                        this.mangCV[i] = this.mangCV[j];
                        this.mangCV[j] = temp;
                    }
                }
            }
            console.log("sap xep",this.mangCV);
        this.renderCV();
    }

}