let a=parseInt(prompt("enter a first number"))
let b=parseInt(prompt("enter a second number"))
let c=prompt("enter a  operator 1.+ , 2.- , 3.*, 4./ ")
if (c=='+') {
     document.write(a+b)
} else if(c=='-') {
    document.write(a-b)
}  else if(c=='*') {
    document.write(a*b)
} else if(c=='/') {
    document.write(a/b)
}
else {
    document.write("wrong input")
}