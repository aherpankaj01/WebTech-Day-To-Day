let str= "pankaj"
let str1= "pankaj"
let str2= str1.slice(0,3);
let str3= str.slice(0,3);
if (str2===str3) {
    console.log("yes it's start with the same letter")
} else {
    console.log("no it's not start with the same letter ")
}






let stringExtract= "Welcome Home";
let str4= stringExtract.indexOf("Welcome");
console.log(stringExtract.slice(str4))








let str5= stringExtract.toUpperCase();
console.log(str5.slice(2,5))








let city= "chennai"
console.log(city.slice(-2))










let greet= "gOOD mOrNiNg"
console.log(greet.toLowerCase())











let checkInclude= "India is my country"
console.log(checkInclude.includes("my"))











let lang= "Javascript"
console.log(lang.substring(4))














let str8 = "telgu";

for (let index = 0; index < str8.length; index++) {
    console.log(str8.charAt(index));
    
}














let str7 = "Marathi";

let firstIndex = str.indexOf('a');
let secondIndex = str.indexOf('a', firstIndex + 1);

console.log(secondIndex);
















let removeAfterSpace= "Hello world"
console.log(removeAfterSpace.slice(5))













let checkPro= "proud"
let toUpper= checkPro.toUpperCase()
console.log(toUpper.includes("PRO"))






let anyMiddle = " pankaj"
let len= anyMiddle.length;
console.log(len)

let middle;

if (len%2==0) {
     console.log(anyMiddle.substring(len/2-1, len/2+1))
} else {
    console.log(anyMiddle.substring(len/2, len/2+1))
}










let breakIntoChar= "A B C D "
console.log(breakIntoChar.split(""))












let teacherName= "Arvind Kumar"
console.log(teacherName.includes("kum"))















let last= "initiave"
console.log(last.lastIndexOf("i"))
















let cit= "pune"
let first= cit.substring(0,1).toUpperCase()+ cit.substring(1)
console.log(first)















let fruit= "banana"
console.log(fruit.split("a"))











const sentence = "This is a sample sentence";
const words = sentence.split(" ");

console.log(words);
