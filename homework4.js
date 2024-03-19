// დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function num(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0;
    }
}

console.log (num(17,23));


// დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function sumnums(a,b) {
    return a+b
}

console.log (sumnums(25,73));


//დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function Name() {
    console.log("Mari Ivaneishvili");
}

Name();

// დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)


function printFullName(firstname, lastname){
    let fullName = firstname + " " + lastname;
    console.log(fullName);
    return fullName;
}

let fullName = printFullName("Mari", "Ivaneishvili");
console.log("Full name outside function:", fullName);

console.log( fullName);


//Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი 



// ობიექტი student - რომელსაც აქვს შემდეგი properties: firstname, lastname, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
// და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 


let student = {
    firstname: "Mari",
    lastname: "ivaneishvili",
    age: 25,
    scores: [4, 7, 5, 3, 2],
    FullName: function() {
        return this.firstname + " " + this.lastname;
    }
};

//დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)

console.log(student.FullName());

//დაბეჭდეთ სტუდენტის სახელი და ასაკი

console.log("სტუდენტის სახელი:", student.firstname);
console.log("სტუდენტის ასაკი:", student.age);
