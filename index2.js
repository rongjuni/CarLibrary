// // Excercise 1 : Print Odds Cont.Cont

// function printOdds(count){
//     if (count < 0){
//         count = count * -1
//     }if (count %2 == 1){
//         console.log(`It's Odd Number ${count}`)
//     }else if(count%2 == 0){
//             console.log('even number')
//     }
// }

// printOdds(15)


// function checkAge(userName, age){
//     let aboveSixteen = `"Contrats ${userName}, you can drive"`
//     let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`

//     if(userName == undefined || age == undefined){
//         return "Please put your name and age"
//     }else{
//     if(age < 16){
//         return belowSixteen;
//     }else {
//         return aboveSixteen;
//     }
// }
// }

// console.log(checkAge('djseo' ))


// var instructors = ['Ben', 'Whit', 'Jeremy', 'John']
// console.log(instructors);

// function Person(firstName, lastName, favoriteColor){
//     const person = {
//         firstName: firstName,
//         lastName: lastName,
//         favoriteColor: favoriteColor,
//         codeSome : function () {
//             console.log("const name = " + this.firstName + ";")   
//         }
//     }
//     return person;
// }

// const ben = Person("Ben", "Bryant", "Red");
// ben.codeSome();




// const singleDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(singleDigits.length);


// function generateRandom(min, max){
//     for(i=0; i<100; i++){
//         console.log( Math.floor(Math.random() * (max-min +1)) + min);
//     }
    
// }

// generateRandom(1, 5);


function watchTurorialCallback(callback, errorCallback) {
    let userLeft = true;
    let userWatchingLiveStream = true;
  
    if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingLiveStream) {
      callback("Thumbs up and Subscribe");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );
  