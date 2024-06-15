// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner  = function (avgDolphins, avgKoalas){
//     if (avgDolphins >= 2* avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= 2* avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }else{
//         console.log('no team wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const calcAverage = (a, b, c) => (a + b + c ) / 3;
// console.log(calcAverage(44, 23, 71));

// const scoreTeamOne = [calcAverage(44, 23, 71), calcAverage(57, 12, 21), calcAverage(68, 21, 59)];
// const teamOneName = ['Dolphins', 'Hacks', 'Raptors'];
// const scoreTeamTwo = [calcAverage(65, 54, 49), calcAverage(70, 10, 0), calcAverage(39, 95, 40)];
// const teamTowName = ['Sharks', 'Wolfs', 'Lions']
// console.log(teamOneName[0],scoreTeamOne[2],teamTowName[0], scoreTeamTwo[2])

// const checkWinner = function (avgteamOne, avgteamTwo){
// if(avgteamOne >= 2* avgteamTwo){
//     console.log(`${teamOneName[0]} win (${avgteamOne}) vs. ${avgteamTwo}`)
// }else if(avgteamTwo >= 2* avgteamOne){
// console.log(`${teamTowName[0]} wins (${avgteamTwo}) vs. (${avgteamOne})`);
// }else{
//     console.log('no team wins')
// }
// }

// checkWinner(scoreTeamOne[2], scoreTeamTwo[0])

// teamOneName.push('Bulls');
// scoreTeamOne.push(calcAverage(110, 15, 45));
// teamTowName.unshift('Stallions');
// scoreTeamTwo.unshift(calcAverage(116, 65, 0));
// teamTowName.pop();
// scoreTeamTwo.pop();
// teamOneName.shift();
// scoreTeamOne.shift();
// console.log(teamOneName, teamTowName, scoreTeamOne, scoreTeamTwo)

// checkWinner(scoreTeamOne[0], scoreTeamTwo[0])
// console.log(teamOneName[0],scoreTeamOne[2],teamTowName[0], scoreTeamTwo[2])

// if (teamTowName.includes('Stallions')){
//     console.log('Team on board')
// }else{
//     console.log('May be the next time')
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// 'use strict';

// // let hasDriversLicense = false
// // const passTest = true

// // if (passTest) hasDriversLicense = true
// // if (hasDriversLicense) console.log('i can drive')

//     function logger() {
//         console.log('My name is gabriel');
//     }

// logger();

// function fuitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// function carriotCream(carrots, heavycream, salt){
//     console.log(carrots, heavycream, salt);
//     const realSoup = `for the soup you need ${carrots} carriots, ${heavycream} cups of heavycream
//     and ${salt} tea spound of salt.`;
//     return realSoup
// }

// const appleJuice = fuitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fuitProcessor(2, 4)
// console.log(appleOrangeJuice)

// const soupBest = carriotCream (8, 2, 1)
// console.log(soupBest)

// function calcAge1(birthYear){
//     return 2024 - birthYear;
// }

// const age1 = calcAge1(1996 );

// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(1996);

// console.log(age1, age2);

// function calcAge1(birthYear){
// return 2024 - birthYear;
// }

// const calcAge3 = birthYear => 2024 - birthYear
// const age3 = calcAge3(1996)
// console.log(age3)

// const calcAge = function (birthYear){
//     return 2024 - birthYear
// }

// const yaearsUntilRetirement = (birthYear, fisrtName) => {
//     const age = calcAge(birthYear)
//     const retirement = 68 - age;

//     if(retirement > 0){
//         console.log(`${fisrtName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${fisrtName} has already retired`);
//         return -1;
//     }
//     // return retirement
//     // return `${fisrtName} retires in ${retirement} years`
// }

// console.log(yaearsUntilRetirement(1996, 'Gabriel'));
// console.log(yaearsUntilRetirement(1950, 'frank')) ;

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fuitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangeSlices = cutFruitPieces(oranges);
//         const juice = `Juice with ${applePieces} pieces of apples and ${orangeSlices} oranges slices.`;
//         return juice;
//     }

//     console.log(fuitProcessor(2, 3))

// const friends = ['Juan', 'Geronimo', 'Ruben']
// console.log(friends);

// console.log(friends. length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Carla';
// console.log(friends);

// const calcAge = function (birthYear){
//     return 2024 - birthYear
// }

// const years = [1991, 1984, 2008, 2020, 1996];
// const  workInfo = calcAge(years[4]);

// const gabriel = ['Gabriel', 'Sotelo', workInfo, 'programer', friends];
// console.log(gabriel);
// console.log(gabriel.length);

// console.log(userInfo);
// console.log(userInfo.lastName)
// console.log(userInfo['job'])

// const nameKey = 'Name';
// console.log(userInfo['first' + nameKey], userInfo['last' + nameKey])

// const profileView  = prompt('what to you want to know abotu the user? Choose between firstName, lastName, age, job and skills ')
//      userInfo.location = 'Mexico City';
//      userInfo['instagram'] = '@Eriksss';
//      console.log(userInfo)

//     if(userInfo[profileView]){
//         console.log(userInfo[profileView]);

//     }else{
//         console.log('Wrong, try again bastard')
//         window.alert('Are you an asshole?')
//     }

//     console.log(`${userInfo.firstName} its a ${userInfo.job}, to make his job, she needs to have ${userInfo.skills.length} skills: ${userInfo.skills[0]}, ${userInfo.skills[1]} and ${userInfo.skills[2]}
//         on his ${userInfo.age}'s, she a very good developer`)

// const userInfo = {
//   firstName: "Erika",
//   lastName: "Hermamdez",
//   birthYear: 2000,
//   job: "Frontend Devolopert",
//   skills: ["JavaScript", "HTML", "CSS"],
//   hasAgeEnogth: true,

// //   calcAge: function(birthYear){
// //     return 2024 - birthYear
// //   },

// calcAge: function(){
//     console.log(this)
//     return 2024 - this.birthYear
//   },
// }
// console.log(userInfo)
// console.log(userInfo.calcAge())

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//     }
//   };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//     }
//   };

//   mark.calcBMI();
//   john.calcBMI();

//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
//   }

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`lifting weights repetition ${rep}`);
// }

// const userInfo = [
//      "Erika",
//    "Hermamdez",
//   2024 - 2000,
//    "Frontend Devolopert",
//    ["JavaScript", "HTML", "CSS"],
//    true,
// ]

// for(let i = userInfo.length - 1; i >= 0; i--){
//     console.log(i, userInfo[i])
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`Starting exercise ${exercise}`);

//
// }

// console.log('---only break')
// for (let i = 0; i < userInfo.length; i++){
//     if(typeof userInfo[i] === 'number') break;
//     console.log(userInfo[i], typeof userInfo[i])
// }

// const years = [1996, 1998, 2002, 2010 ]
// const ages = []

// for (let i = 0; i < years.length; i++ ){
//    ages.push( 2024 - years[i])
// }

// console.log(ages)

for (let rep = 1; rep <= 10; rep++) {
}

let rep = 1;
while(rep <= 10){
    console.log(`lifting weigth repetition ${rep}`);
    rep++;
    
}