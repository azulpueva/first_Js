let client = +prompt("Введите свой год рождения");

let young = 2022 - 29;
let startYoung = 2022 - 1;
let middle = 2022 - 59;
let startMiddle = 2022 - 30;
let old = 2022 - 60;
let unborn = 2022 - 0;
console.log(young,startYoung,middle,startMiddle,old,unborn);

 if(client >=  young&& client <= startYoung ) {
     alert("вы молодой человек");
}

if(client >= middle  && client <= startMiddle) {
    alert("кризис среднего возвраста");
}

if(client <= old ) {
    alert("вам советуется посетить доктора");
} 
if(client >= unborn ) {
    alert("вы еще не родились");
} 

