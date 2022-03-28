var made = document.getElementById("made");
var model = document.getElementById("model");
var year = document.getElementById("year");
var submit = document.getElementById("submit");
var list = document.getElementById("list");
var emptyObj = [];

var detail = document.getElementById('detail');
var madeDetail = document.getElementById('madeDetail')
var modelDetail = document.getElementById('modelDetail')
var yearDetail = document.getElementById('yearDetail')


form.addEventListener("submit", function (event) {
  event.preventDefault();


  var temp = new Car(made.value, model.value, year.value);
  emptyObj.push(temp);

  made.value = "";
  model.value = "";
  year.value = "";
  
  while(list.firstChild){
      list.removeChild(list.firstChild)
  }

  for (let i = 0; i < emptyObj.length; i++) {
    var pTag = document.createElement("h3");
    pTag.className = `line`
    list.appendChild(pTag).textContent = emptyObj[i].made;

    var lineClass = document.getElementsByClassName("line")
    console.log(lineClass);

    lineClass[i].addEventListener('click', function(){
        madeDetail.textContent = "Made : " + emptyObj[i].made
        modelDetail.textContent = "Model : " + emptyObj[i].model 
        yearDetail.textContent = "Year : " + emptyObj[i].year 
        console.log(emptyObj);
    })
  }


  // list.appendChild(pTag).textContent = temp.made
});

class Car {
  constructor(made, model, year) {
    this.made = made;
    this.model = model;
    this.year = year;
  }
}

// function WishList(){

//     new Car('honda','accord',2011)
// }
