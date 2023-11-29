const x = '{"name":"Luna","age":10,"breed":"Havanese","location":{"city":"Seattle","state":"WA"}}'

console.log("String data type of pretend-response from server",x) //returns string data type

const parsed_x= JSON.parse(x)
console.log("JS object of the pretend-response",parsed_x) //an object??


console.log(parsed_x.name)
console.log(parsed_x.location.city)
console.log(parsed_x.age)

const dog={
    name: "Luna",
    age:10,
    breed: "Havanese",
    location :{
        city: "Seattle",
        state: "WA",
    },
}
console.log("This is dog:",dog) //js object
const string_dog= JSON.stringify(dog)
console.log("This is string_dog:",string_dog) // string data type