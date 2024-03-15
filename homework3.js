//დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
//თუ ტიცხვები ტოლია : a  და b ტოლია
//თუ a მეტია b ze : a  მეტია b -ზე
//თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე


function number(a,b){
    if (a=b)
        return "a  და b ტოლია"}
    function number(a,b){
            if (a>b)
        return "a  მეტია b -ზე"
    else
        return "a  ნაკლებია  b -ზე"
    }
    
    
    console.log (number(5,10));
    
    
    //დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , 
    //false , თუ არ არის მეტი 100 ზე
    
    function num(a,b){
        if ((a+b)>100)
        return "true"
    else 
    return "false"
    }
    
    console.log (num(60,120));
    
    
    //დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). 
    //ფუნქციას აქვს სამი პარამეტრი
    //პირველი პარამეტრი - 1 ქულიანების რაოდენობა
    //მეორე პარამეტრი -  2 ქულიანების რაოდენობა
    //მესამე - 3 ქულიანების რაოდენობა 
    
    function sum(erti,ori,sami){
        let sum= erti+ori+sami
        console.log (sum);
        return sum 
    }
    
    let a= sum(15,25,35);
    
    
    //დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან end-ჩათვლით  
    //რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- 
    //მასივში ელემენტის დამატება) 
    
    function par(start,end){
        let arr=[]
        for (let i=start; i<=end; i++){
        arr.push(i);
    }
    return arr
    }
    
    console.log (par(7,12));
    
    
    //ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, დაწერეთ ფუნქცია რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
    //თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
    //თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 
    
    let person = {
        firstname :"M",
        lastname :"I",
        age :25
    }
     function isadult(age){
        if (age < 18)
        return "არასრულწლოვანია"
    else 
    return "სრულწლოვანია"
     }
     
     console.log (person.firstname, isadult(person.age));
    
    
    //გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. 
    //Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)
    
    let phones = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
    
    function elements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    
    console.log (elements(phones));
    
    
    //Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით 
    //( გამოიყენეთ while ციკლი).
    
    let numb=15;
    
    function numbers(numb) {
        let i = 1;
    while (i <= numb) {
        console.log(i);
        i++;
    }
    }
    
    console.log (numbers(numb));
    
    
    //Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , 
    //გამოიყენეთ სასურველი ციკლი (for, while)
    
    
    function even() {
        for (let i = 2; i <= 13; i += 2) {
            console.log(i);
        }
    }
    
    console.log (even());