/////////////////////////////=============== unknown type 
export {};
///Har kisam ka data accept kar leta hai (Store karna aasan hai) 
// let myVar: unknown;
// myVar = "hello world";
// myVar = 234;
// myVar = true;
///Lekin jab tak type na batao, koi bh method ex .length apply krne nh dega 
///TS bolega: "Mujhe nahi pata andar String hai ya Number tou mai kyse es br .length wla method apply krlo, 
///pehle confirm karo!"
// let secretBox: unknown = "hello world";
// secretBox.length; //error 
/// typescript ko btnaw prta hae do ways sy ke var mai asal mai kia h tbhi ospr us type 
/// ke accordingly method appy hoga
/// Confirm Karna (if condition se)
// let secretBox: unknown = "hello world";
// if (typeof secretBox === "string"){
//     // Ab TS maan gaya ke dabba String ka hai
//     console.log(secretBox.length); //11
// }
// Type Cast Karna (as keyword se)
// let secretBox: unknown = "hello world";
// let myLength = (secretBox as string).toUpperCase(); //HELLO WORLD
// console.log(myLength);
//agr mai esy string na bnaty tou es pr es method jo string pr ya text pr use hota vo nh hota 
//short summary : "Tum mere andar kuch bhi daal do (Number, String, Object), main rakh loonga.
//  Lekin jab tak tum if (typeof...) se check na kar lo ya as se cast na kar do, 
// main tumhein is par koi method (jaise .length ya .toUpperCase()) chalane nahi dunga."
/////////////////////==================== TYPE CASTING
//********************  as Keyword Ke Saath Casting
// Yh sb se zyda use hone wla way hai. variable ke age "as" lga kr usko nya type btate hai.
// let x : unknown = "hello";
// console.log((x as string).length);  //5
//******************** Ghalat Assumption (Data Change Nahi Hota):
// Agr variable mau number ho ar ap usko string cast kar dein, th number convert ho kr text nhi banta.
// Uska value number hi rahega
// let x :unknown = 5;
// console.log((x as string).length);  //undefined beecause number ki length nhi hoti
//********************* TypeScript Ka Direct Error Prevention:
// TypeScript itna samajhdar hai ke agar aap direct incompatible types ko cast karenge 
// (jaise number ko direct string), toh woh error de dega:
// let x : unknown = 5;
// console.log((5 as string).length);  //error
//******************** <> (Angle Brackets) Ke Saath Casting
//Yeh bilkul as ki tarah kaam karta hai, sirf likhne ka syntax alag hai
// let x : unknown = "heeloo";
// console.log((<string>x ).length); // 6 var se phle <> ke andr type dena hoga
//***************** Force casting (also called Double Casting) TypeScript ka ek aisa tariqa hai 
// jisse aap TypeScript ke safety system ko bypass (cross) karke kisi variable ko zabardasti (forcibly) kisi dusre type mein convert 
// karte hain.
//TypeScript ka maqsad aapko runtime bugs se bachana hai. Agar aap ek aise type ko doosre type mein cast
//karne ki koshish karein jinka aas-paas mein koi talluq (overlap) nahi hai, toh TypeScript samajhta hai ke aap 
//se ghalti hui hai.
// let x : number = 22;
// let name = x as string; //Ts Error dega Conversion of type 'number' to type 'string' may be a mistake
/////////////////////////////////////////////////////////////////////////////////////////////////////
// interface User {
//     id: number;
//     name: string;
// }
// let apiData: User = {id: 345, name: "aqsa"};
// interface CustomConfig {
//     theme: string;
//     permission: string[];
// }
// let config = (apiData as unknown) as CustomConfig;
// console.log(config); //{id: 345, name: 'aqsa'}
// console.log(config.permission); //undefined
// console.log(config.theme);  //undefined
// let num: unknown = "55 A";
// console.log(Math.floor(num as number)); //NaN
// console.log((num as string).toLowerCase()); //55 a
// console.log((<string>num).toLowerCase()); //55 a
/////////////========================== GENERICS 
/////////////==== WITHOUT GENERICS
// function getValue(val: any):any{
//     return val;
// }
// let str = getValue("hello");
// str.toFixed(2);
// console.log(str); // str.toFixed is not a function
/////////////==== WITH GENERICS
// function getValue <T> (val : T):T{
//     return val;
// }
// let num = getValue<number>(10.9);
// let str = getValue<string>("hello");
// ///TYPE INFERENCRE
// let autoStr = getValue("mellow");
// console.log((autoStr).toUpperCase());  // MELLOW
// console.log((str).toUpperCase());  //HELLO
// console.log(Math.ceil(num));  //11
// console.log(Math.floor(num));  //10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GENERICS WITH ARRAY 
//Ek function jo kisi bhi type ki single value ko array me convert kare:
// function wrapInArray <T> (value: T) :T [] {
//   return [value];
// }
// let wrapNumber = wrapInArray("hello");
// console.log(wrapNumber);  //['hello']
// let wrapStr = wrapInArray(24);
// console.log(wrapStr);  //[24]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GENERICS INTERFACES
//INTERFACES WITHOUT GENERICS 
//example API se different data recieve horhy 1) User ka data 2) Product ka data
//without generics  2 alag interfaces banane parenge
// interface UserResponse {
//     status : number;
//     data : {name: string ; age: number}
// }
// interface ProductResponse {
//     status : number;
//     data : {title: string ; price: number}
// }
//Dono me status aur structure bilkul same hai, sirf data ki property badal rahi hai.
//WITH GENERICS
// interface ApiResponse <T> {
//     status : number;
//     data : T;
// }
// // now ek hi interface ko alag-alag types ke sath use kr sakte han
// let response1 :ApiResponse<{name: string ; age: number}> = {
//     status: 200,
//     data: {
//         name: "aqsa",
//         age: 20
//     }
// };
//Example 2: String List (Array) ke sath
// Wahi same ApiResponse use kiya, par is baar T ki jagah string[] pass kar diya:
// let response2 :ApiResponse <string[]> = {
//     status : 200,
//     data : ["apple" , "mango" , "banana"],
// }
// Example 3: Boolean value ke sath
// Is baar T ki jagah simple boolean pass kar diya:
// let response3 : ApiResponse <boolean> = {
//     status : 200,
//     data : true
// }
// ApiResponse<T> means "Ek aisa structure jisme status number hoga, aur data me wo cheez aayegi jo bracket 
// <T> ke andar bataoge"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MULTIPLE GENERICS 
// function getValue <T , V>(first:T , second:V){
//     return{
//         first: first,   
//         second: second
//     };
// }
// let item1 = getValue("hello" , 121);
// let item2 = getValue(["mango", "banana"] , true);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function abcd <T extends object, U extends object, V extends string>(objA : T , objB : U , str : V ){
//   console.log(str);  //heeloo world
//   return{ ...objA , ...objB }; 
// }
// console.log(
//     abcd(
//         {name: "aqsa khattak" , age: 21 , education: "BS IT"},
//         {skills: ["html", "CSS" , "javascript"] , isDoingJob: true},
//         "heeloo world"
//     )
// );
////////=================   Decorators
//WITHOUT DECORATORS 
// class Student {
//     name = "aqsa";
//     constructor(){
//      console.log("welcome");
//     }
// }
// let str = new Student();
// class Teacher {
//     name = "huzaifa";
//     constructor(){
//      console.log("welcome");
//     }
// }
// let str2 = new Teacher();
///WITH DECORATORS 
// function sayWelcome (target: Function){
//    console.log("welcome! Class is: " + target.name);
// }
// @sayWelcome
// class Student {
//     name = "aqsa";
// }
// @sayWelcome
// class Teacher {
//     name = "huzaifa";
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function logger (constructor: Function){
//     console.log("class register hogae:" , constructor.name);
// }
// @logger
// class car {
//     brand = "toyota";  //class register hogae: car
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function AddTimeStamp(constructor : Function){
//     constructor.prototype.createdAt = new Date().toLocaleDateString();
// }
// @AddTimeStamp
// class Order{
//     constructor(  public name : string, public id : number){}
// }
// const myOrder = new Order("aqsa" , 76);
// console.log(myOrder.id);  //76
// console.log((myOrder as any).createdAt); //9/4/2026
//TypeScript ko nahi pata hota ke decorator ne chupke se peeche se ek nayi property createdAt attach kar di hai.
//Is liye agar aap direct myOrder.createdAt likhenge, to TypeScript compile-time par error de dega:
//TypeScript ke is error se bachne ke liye humne Type Casting (as any) use ki hai:
//myOrder as any: Hum TypeScript compiler ko keh rahe hain: "Aap tension mat lo, myOrder ko filhal 'any' type
//samjho aur iski strict type-checking band kar do." .createdAt: Ab TypeScript khamosh ho jata hai aur hume 
//createdAt property access karne deta hai.
///////////=========== OBJECT.FREEZE METHOD
// Object.freeze() JavaScript aur TypeScript ka ek built-in method hai jo kisi object ko completely immutable 
// (un-changeable) bana deta hai.Jab aap kisi object ko freeze kar dete hain, to runtime par us object me na 
// kuch add hota hai, na remove hota hai, aur na hi modify hota hai.
// const user = {
//     name: "aqsa",
//     age: 21,
//     education: "BS IT"
// };
// Object.freeze(user);
// console.log(user.age); //21
// //add new property
// (user as any).city = "karachi";
// //delete name 
// delete (user as any).name;
// console.log(user); //{name: 'aqsa', age: 21, education: 'BS IT'}
//============================  Shallow Freeze 
// Object.freeze() sirf top-level properties ko freeze karta hai. Agar object ke andar koi aur inner object ho,
// to inner object ki values change ho sakti hain!
// const user = {
//     name: "aqsa",
//     age: 21,
//     skills: {
//         structure: "html",
//         designing: "CSS",
//         interactivity: "Javascript"
//     }
// };
// Object.freeze(user)
// // user.name = "hammad";  // Fail
// user.skills.structure = "CSS";
// console.log(user.skills.structure); // CSS
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//TypeScript jab is code ko parhta hai, to woh class par decorators ko niche se upar (Bottom-to-Top)
//ki taraf apply karta hai.
// function FisrtDeco(constructor : Function){
//     console.log('1. FirstDeco Executed (Outer)');
// }
// function SecondDeco(constructor : Function){
//     console.log('2. SecondDeco Executed (Inner)');
// }
// @FisrtDeco
// @SecondDeco  // jo decoartor class ke sbse ziyda near hota vo phle chlta fr upr wla 
// class Teacher {
//     constructor(public age: number){}
// }
// const str = new Teacher(20); 
// console.log(str);
//output
//2. SecondDeco Executed (Inner)
//1. FirstDeco Executed (Outer)
/////////////  ======== DECORATOR FACTORY 
//Decorator factory basically ek aisa outer function hota hai jo pehle arguments receive karta hai, aur phir
//andar se real decorator function return karta hai.
// function Promise (msg : string){
//     return function(constructor:any){
//         console.log(msg);  // hellow world 
//     }
// }
// @Promise("hellow world")
// class Student{
//     subject: string = "ts";
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function Logger (logMsg: string){
//   return function (constructor: Function){
//     console.log(`${logMsg} - Class Name : ${constructor.name}`);
//   }
// }
// @Logger("Student profile created")
// class Student{
//     class: string = "web and app development";
// }
// @Logger("Teacher profile created")
// class Teacher{
//     subject: string = "typescript";
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//What is prototype?
// JavaScript/TypeScript me jab aap koi class banate hain, to us class ke paas ek prototype object hota hai.
// Aap prototype ke andar jo bhi property ya method add karenge, wo us class se banne wale har naye object ko 
// automatically mil jaye gi.
// function Role (adminRole : string){
//     return function (constructor : Function){
//        constructor.prototype.role = adminRole;  //new property mai wohi ayga jo adminRole mai ayga 
//     }
// }
// @Role("admin")
// class Student{}
// @Role("guest")
// class Teacher{}
// const s1 = new Student();
// const s2 = new Teacher();
// console.log((s1 as any).role); //admin
// console.log((s2 as any).role); //guest
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////============= ENUMS
// without enum
// let orderStatus = "deliv" //Typo ho gaya! ("delivered" ki jagah "delvrd" likh diya)
// if (orderStatus === "Deliverd"){
//     console.log("order deliverd hogya");
// }
// else{
//     console.log("order rasty mai hae"); //yeh print hoa jabke upr wla print hona chye quky spelling mistake thi
// }
//with emun
// enum OrderStatus {
//   Pending = "PENDING",
//   Processing = "PROCESSING",
//   Delivered = "DELIVERED",
//   Cancelled = "CANCELLED"
// }
// let currentStatus: OrderStatus = OrderStatus.Pending;
// if (currentStatus === OrderStatus.Pending){
//   console.log("Customer ko message bhejo: Order mil gaya!");
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Numeric Enums (Default)
// Agar aap koi value assign nahi karte, toh TypeScript automatic 0 se numbering start kar deta hai.
// enum OrderStatus {
//   Pending,    //0
//   Processing, //1
//   Delivered,  //2
//   Cancelled   //3
// }
// let status: OrderStatus = OrderStatus.Cancelled;
// console.log(status); //3
// let status2: OrderStatus = OrderStatus.Pending;
// console.log(status2); //0
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Custom Initializer: Aap custom index bhi set kar sakte hain, uske baad wali values automatically increment 
// ho jayengi:
// enum OrderStatus {
//   Pending = 3,
//   Processing = 4,
//   Delivered,  //automatically 5 agae
//   Cancelled   //automatically 6 agae
// }
// console.log(OrderStatus.Pending); //3
// console.log(OrderStatus.Delivered) //5
// console.log(OrderStatus.Cancelled) //6
// // Reverse Mapping: Numeric enums mein aap value se uska key name bhi nikal sakte hain:
// console.log(OrderStatus[6]);  //Cancelled
// console.log(OrderStatus[5]);  //Delivered
// console.log(OrderStatus[3]);  //Pending
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// String Enums
// Jab aapko code read karne mein clearity chahiye ho, toh har member ko explicit string value di jati hai.
// enum Role {
//     admin = "ADMIN",
//     user = "USER"
// }
// let s1 : Role = Role.admin;
// console.log(s1); //ADMIN
// let s2 : Role = Role.user;
// console.log(s2); //USER
// Note: String Enums mein Reverse Mapping kaam nahi karti (yani Role["ADMIN"] undefined hoga).
// console.log(Role["ADMIN"]);  //undefined
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Heterogeneous Enums (Mixed)
// Is mein Numeric aur String values dono ko combine kiya ja sakta hai, lekin professional code mein ise avoid 
// karna chahiye kyun ke yeh confusion paida karta hai.
// enum Store {
//     mensItem = 10,
//     womenItem = "twenty"
// }
// console.log(Store.mensItem);   //10
// console.log(Store.womenItem);  //twenty
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Normal Enums JavaScript mein heavy object create karte hain. Agar aap chahte hain ke 
//compiled JS code clean aur fast ho, toh const enum ka use karein
// const enum Direction {
//     Up = "UP",
//     Down = "DOWN"
// }
// console.log(Direction.Down);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// ==== TYPE GUARD
//typeof Guard 
// function printValue (val : string | number){
//     if (typeof val === "number"){
//         console.log(val.toFixed(3));
//     }else{
//         console.log(val.toUpperCase());
//     }
// }
// printValue("hello");  //HELLO
// printValue(20.9069); //20.907
//instanceof Guard
//Yeh check karta hai ke koi object kisi specific Class ka instance (constructor function) hai ya nahi.
// class Dog{
//     bark(){
//         console.log("bhao bhao");
//     }
// }
// class Cat {
//     cat(){
//         console.log("meow meow");
//     }
// }
// function makeSound (animal : Dog | Cat){ //makeSound naam ka ek fux banaya jo ek parameter animal leta hai.
//     if (animal instanceof Dog){          //Type Union (Dog | Cat): Yeh Ts ko btata hake animal ki type ya 
//         animal.bark();                   //toh Dog class ka instance ho sakti hai, ya Cat class ka.
//     }else{
//         animal.cat();
//     }
// }
// makeSound(new Dog())  //bhao bhao
//in Operator Guard
//Yeh check karta hai ke kisi object ke andar specific property exist karti hai ya nahi.
// interface User {  //blueprint define krha jska naam User hae
//     name : string;
//     id : number;
//     email : string;
// }
// interface Admin {  //blueprint define krha jska naam admin hae
//     name : string;
//     permission : string[];  //Strings ki ek array
// }
// ///Objects Creation
// const user1 : User = {
//     name: "aqsa khattak",
//     id: 21,
//     email: "aqsakhattak632@gmail.com"
// };
// const admin1: Admin = {
//     name: "huzaifa",
//     permission: ["Create_User" , "Delete_User"],
// }
// //Ek function checkAccess define ho raha hai jo ek parameter person leta hai. Union type (User | Admin)
// //ka matlab hai ke person ya toh User object ho sakta hai ya Admin object.
// function checkAccess (person : User | Admin){  
//     //Yhn in operator Type Guard ka kaam kar raha hai. Yeh runtime par check karta hai ke kya permissions naam
//     //ki key person object ke andar majood hai ya nahi.
//     if("permission" in person){   
//      console.log(`Admin Permission: ${person.permission.join(", ")}`);
//     }else{
//         //Agar permissions key nahi milti (yani condition false ho jati hai), toh TypeScript automatically 
//         //samajh jata hai ke person User hai. Is block mein aap safely person.email access kar saktay hain.
//         console.log(`User Email: ${person.email}`);
//     }
// }
// checkAccess(user1);
// //checkAccess ko user1 pass kiya gaya. Kyun ke user1 mein permissions key nahi hai, if condition
// //false hui aur else block chala.
// checkAccess(admin1);
//checkAccess ko admin1 pass kiya gaya. Kyun ke admin1 mein permissions key majood hai, if condition true
//hui aur if block chala.
//javaScript Template Literals (${...})
//.join(", ") Array Method
// permissions ek Array of strings hai (jaise: ["read", "write", "delete"]).
// .join(", ") method array ke tamam items ko aapas me mila kar ek single string bana deta hai aur har item 
// ke beech me ,  (comma aur space) laga deta hai.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// ==== FUNCTION OVERLOADING
//Function Overloading ka matlab hai ek hi function ke multiple "signatures" (rules) define karna, taake wo alag 
//alag inputs ke sath alag tarah se kaam kar sake.
// function greet(name : string) : string;
// function greet(age : number): string;
// function greet (value : string | number): string{
//     //value: string | number means yeh parameter string ya number, dono mein se koi ek ho sakta hai (Union Type).
//     //: string means function execution ke baad result string format mein hi return karega.
//     if (typeof value === "string") {
//         return "hello " + value;
//     }else{ 
//         return "apki umer " + value  + " etne hae";
//     }
// }
// console.log(greet("hammad"));  // hello hammad
// console.log(greet(12));        //apki umer 12 etne hae
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Upar wale functions (Signatures / Rules): Yeh sirf TypeScript ki checking ke liye hote hain. Is mein koi code 
// (curly brackets {}) nahi hota. Yeh JavaScript mein convert (compile) hone ke baad gayab ho jate hain.
// Neeche wala function (Implementation / Asli Code): Yeh woh asli function hai jo actually run hota hai.
// Misaal: Upar wale do rules Asool (Rules) hain, aur neeche wala function un asoolon par Amal (Execution) hai.
// function calculateDiscount (price : number, discountAmount: number):number;
//rule no 1 TypeScript ko bataya ja raha hai: "Agar user 2 numbers pass kare (price aur discountAmount), toh return 
//type number hogi." (Jaise: Rs. 1000 ki price par Rs. 200 direct discount).
// function calculateDiscount (price : number, discountPercentage: number, isPercentage:boolean):number;
// //rule no 2 TypeScript ko bataya ja raha hai: Agar user 2 numbers ke sath ek boolean (true/false) pass kare, 
// //return type number hogi. 
// function calculateDiscount(productPrice: number, productDiscount: number, isPercentage?: boolean){
//     if(isPercentage === true){
//         return  productPrice - (productPrice * (productDiscount / 100));
//      // if product price is 1000 and discount is 20%  Pehle 20 / 100 solve hoga = 0.2 
//      // 0.2 ko actual product price sy * kru tou actual jo discount mila hoga vo price ajegi like 200
//      // now actual product price sy 200 - which is eqaul to 800
//     }else{
//         return productPrice - productDiscount;
//     }
// }
// // console.log(calculateDiscount(1000, 20, true));     //800
// // console.log(calculateDiscount(3000, 50, true ));    //1500
// // console.log(calculateDiscount(500, 250, false));    //250
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function dateFormat(year: number, month: number, date: number): string;
// function dateFormat(dateObject: Date): string
// //dateObject ko JS ka built-in Date object (jaise new Date()) paas karenge edr dateObject parameter ko type define kry
// //es lie srf Date lekha h
// function dateFormat(param1: number | Date , month?: number, day?: number): string {
//     //param1: number | Date: Pehla argument ya toh number (year) ho sakta hai ya Date object.
//     //month?: number aur day?: number: Yahan ? ka matlab hai ke month aur day optional hain (jab sirf Date object 
//     //pass hoga toh yeh dono nahi diye jayeinge).
//     if(typeof param1 === "number" && month !== undefined && day !== undefined){
//         //!== Strict Not Equal To
//         //Check karo ke kya user ne teeno (3) numbers poore diyan hain ya nahi? "typeof param1 === "number" 
//         //Check karta hai ke pehla number (year) diya gaya hai.month !== undefined Check karta hai ke doosra number 
//         //(month) khali/missing toh nahi hai.day !== undefined Check karta hai ke teesra number (day) khali/missing
//         // toh nahi hai.Agar teeno numbers maujood honge, tabhi if ke andar wala code chalega.
//         return `${day}/${month}/${param1}`;
//      }else if (param1 instanceof Date){
//         //Agar pehli condition poori nahi hui, toh code yahan aayega aur check karega ke: "Kya param1 JavaScript ka
//         //Date object hai?" (instanceof object types ko check karne ke liye use hota hai).
//         return `${param1.getDate()}/${param1.getMonth() + 1}/${param1.getFullYear()}`;
//         //Template Literals (Backticks `${...}`)
//         //Is poori line mein jo backticks (`) aur ${} use hue hain, ise Template Literals kehte hain. Iska maksad
//         //hota hai variables aur text ko aapas mein aasan tareeqay se jorna (concatenate karna).
//     }
//     return "Invalid Date";
//     //Agar upar di gayi dono conditions mein se koi bhi match na ho, toh yeh safety ke liye
// }
//  console.log(dateFormat(2005 , 8 , 8));  //8/8/2005
//  console.log(dateFormat(new Date()));    //8/9/2026
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// git pull origin main --rebase
// Yeh kya karega? Yeh GitHub se README file download karke aapke local code mein shamil kar dega.
// Iske baad apna code push kar dein
// git push -u origin main
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Methods (Date se information nikalna)
// const d = new Date();
// console.log(d.getDate());   //9
// console.log(d.getDay());   // 3 // Hafte ka din (0-6) -> 0 = Sunday, 1 = Monday 
// console.log(d.getFullYear()); // 2026
// console.log(d.getHours());   // 1 // Ghante (0-23)
// console.log(d.getMinutes());  // Minutes (0-59)
// console.log(d.getMonth());  //Mahina (0-11) -> 0 = Jan, 8 = Sep
// console.log(d.getSeconds()); // Seconds (0-59)
// console.log(d.getTime());  //1 Jan 1970 se ab tak ke Total Milliseconds (Timestamp)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Set Methods (Date badalna ya set karna)
// const d = new Date();
// d.setDate(23);
// d.setFullYear(2000);
// d.setHours(12);
// d.setMonth(9);
// console.log(d);  //Mon Oct 23 2000 12:01:18 GMT+0500 (Pakistan Standard Time)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Formatting Methods (Date ko achi tarah print karna)
// Default date bohot lambi print hoti hai. In methods se aap usko clean format mein la sakte hain
// const d = new Date();
// console.log(d.toDateString());  //Wed Sep 09 2026 ONLY DATE 
// console.log(d.toISOString());   //date ko ek International Standard Format (ISO 8601) mein convert karna.
// //2026-09-08T21:09:28.923Z  //Year-Month-Day - 2026-09-08
//                             //T - Time ka separator (yeh batata hai ke yahan se time shuru ho raha hai).
//                             //Hours : Minutes : Seconds . Milliseconds. - 21:09:28.923
//  console.log(d.toLocaleDateString()); // Local country format - 9/9/2026
//  console.log(d.toTimeString()); //02:12:51 - ONLY TIME
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CHANGES POST KRNE KE JO REPO ALREADY POST HO GITHUB PR 
// # Step 1: Tamam new changes ko select karein
// git add .
// # Step 2: Changes ka message save karein (quotes ke andar apna message likhein)
// git commit -m "Updated code and fixed bugs"
// # Step 3: GitHub par bhej dein
// git push
//# sourceMappingURL=index.js.map