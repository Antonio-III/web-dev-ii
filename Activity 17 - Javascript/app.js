let student={
    first_name:"First Name",
    last_name:"Last Name",
    age:21,
    email:"student@email.com"
}

console.log(student["first_name"])
console.log(student.age)

//Odd or even?
const num = 12;
if(num%2==0){
    console.log('The number is an even')
}

else{
    console.log('The number is odd')
}

//Temperature
const temperature=20;
if(temperature<=20){
    console.log('The temperature is cold')
}

else{
    console.log('The temperature is hot')
}

//Grading marks
const mark = 50;

if(mark<50){
    console.log('Fail')
}

else{
    console.log('Pass')
}

//loops
for(i=0;i<51;i+=2){
    console.log(i)
}