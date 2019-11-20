//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 //var temp = "";
 
 export const convert = (num) =>  {
 //temp = num.toString();
 if(divByThree(num) && divByFive(num) && divBySeven(num)) {
 return ("PlingPlangPlong");
 }
 if(divByThree(num) && divByFive(num)) {
 return ("PlingPlang");
 }
 if(divByThree(num) && divBySeven(num)){
 return ("PlingPlong");
 }
 if(divByThree(num)) {
   return "Pling";
 }
 if(divByFive(num) && divBySeven(num)) {
 return ("PlangPlong");
 }
 if(divByFive(num)) {
 return ("Plang");
 }
 if(divBySeven(num)){
 return ("Plong");
 }
 else return num.toString();
}

function divByThree(num) {
  if(num % 3 == 0) return true;
  else return false;
  
}

 function divByFive(num) {
  if(num % 5 == 0) return true;
  else return false;
}

function divBySeven(num) {
  if(num % 7 == 0) return true;
  else return false;
}
