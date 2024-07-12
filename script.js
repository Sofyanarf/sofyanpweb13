const txtElement = ['Portofolio'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let Words = '';

(function ketik(){
if(count == txtElement.length){
    count=0;
}
currentTxt =txtElement[count];

Words = currentTxt.slice(0, ++txtIndex);
document.querySelector('.efek-ketik').textContent = Words;
    if(Words.length == currentTxt.length){
        count++;
        txtIndex=0;
    }
setTimeout(ketik, 500);
})();

