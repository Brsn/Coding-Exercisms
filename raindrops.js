//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//var temp = "";

export const convert = (num) => {
	//temp = num.toString();
	if (divByThree(num) && divByFive(num) && divBySeven(num)) return 'PlingPlangPlong';
	if (divByThree(num) && divByFive(num)) return 'PlingPlang';
	if (divByThree(num) && divBySeven(num)) return 'PlingPlong';
	if (divByFive(num) && divBySeven(num)) return 'PlangPlong';
	if (divByFive(num)) return 'Plang';
	if (divBySeven(num)) return 'Plong';
	if (divByThree(num)) return 'Pling';
	else return num.toString();
};
const divByThree = (num) => {
	return num % 3 == 0;
};
const divByFive = (num) => {
	return num % 5 == 0;
};
const divBySeven = (num) => {
	return num % 7 == 0;
};
