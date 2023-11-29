//function example
function PascalCaseSyntax(arguments,are,here){
    return arguments+are+here
}

console.log(PascalCaseSyntax(1,2,3))


// check if the number is odd or even
function OddOrEven(number){
    if(number % 2==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

console.log(OddOrEven(1))


// cr function 'Average' that calculates the average of 3 numbers
function Average(the,three,numbers){
    return (the+three+numbers)/3
}

console.log(Average(1,2,3))

//while loop exercise

function WhileLoopExercise(friendsAtYourParty=0){
    while (friendsAtYourParty<10){
        friendsAtYourParty+=1 
    }
    return friendsAtYourParty
}

console.log("Friends at your party: "+WhileLoopExercise())

// for loop exercise
function ForLoopExercise(friendsAtYourParty=0){
    for(friendsAtYourParty;friendsAtYourParty<10;friendsAtYourParty++){
        console.log("Friends at your party: "+friendsAtYourParty)  
    }
}

ForLoopExercise()


// another exercise. log the character based on the amount in 'repetition'
function AnotherExercise(char='c',repetition=5){
    for(i=1;i<repetition+1;i++){
        console.log(char.repeat(i))
    }
}

AnotherExercise('💀',5)

