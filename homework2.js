//გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი

let x=87, y=65;

console.log (x+y);

//გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks

var student = {
    "firstname": "Mari",
    "lastname": "Ivaneishvili",
    "Age": 25,
    "email": "alexandraivaneishvili@gmail.com",
    "marks": 95
}

//დაბეჭდეთ student ის სახელი

console.log(student.firstname)

//გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.

let m=45, n=23;

if (m>n) {
    console.log(m+n);
}
else {
    console.log (n);
}

//გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! )

let studentName = "Mari"

if (studentName = "Mari") {
    console.log ("Rise and shine,"  + studentName + "!")
}

//გამოაცხადეთ ცვლადი bonus და salary ცვლადები, salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus)

let bonus
let salary = 5000 

if (salary>=2000){
    bonus=0;
} else {
    bonus=(salary*10/100);
}

console.log(bonus);

//გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, b=a-ნახევარი, c= a-ს და b-ს ჯამი. დაბეჭდეთ c. 

let a=23, b=a/2, c=a+b;

console.log(c);


//გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.

let phones=["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"]

console.log(phones);

//Phones მასივს ბოლოში დაამატეთ ახალი ელემენტი Motorola და დაბეჭდეთ მასივი

phones.push("Motorola")

console.log(phones);

//Დაბეჭდეთ რიცხვები 1 დან ( 1 შედის) 12-ის ჩათვლით.

let i=1

for (i; i<=12; i++){
    console.log(i)
}

