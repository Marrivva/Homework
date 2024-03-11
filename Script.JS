console.log ("homework");
 
//გამოაცხადეთ ორი ცვლადი a,b მიანიჭეთ მნიშვნელობები 23 და 4

const a =23;

console.log ("a", a);

const b =4;

console.log ("b", b);

//დაბეჭდეთ (console.log) a და b რიცხვების ჯამი

console.log (a+b);

//დავეჭდეთ a და b რიცხვების ნამრავლი

console.log (a*b);              

//გამოაცხადეთ ახალი ცვლადი c რომელიც იქნება boolean, მიანიჭეთ true და დაბეჭდეთ

let c=true; 

//გამოახცადეთ ახალი ობიექტის(object) ტიპის ცვლადი  person თქვენი მონაცემებით ( first name, last name, age, address(რომელიც შეიცავს: city, country), phone no, email, friends (სახელების სია),  

var person = {
    "firstname":"Mari",
    "lastname":"ivaneishvili",
    "age":25,
    "address":{
        "country":"Georgia",
        "city":"Tbilisi",
        },
    "phone": 55555555,
    "email":"alexandraivaneishvili@gmail.com",
    "friends": ["Keta", "Mariami", "Tornike"]
}

console.log (person)

//დაბეჭდეთ person ობიექტის სახელი და მეორე მეგობრის სახელი

console.log (person.firstname, person.friends[1])

