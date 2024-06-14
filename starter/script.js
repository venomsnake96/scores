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

const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills, tips, totals)