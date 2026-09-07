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
var Store;
(function (Store) {
    Store[Store["mensItem"] = 10] = "mensItem";
    Store["womenItem"] = "twenty";
})(Store || (Store = {}));
console.log(Store.mensItem); //10
console.log(Store.womenItem); //twenty
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Normal Enums JavaScript mein heavy object create karte hain. Agar aap chahte hain ke 
// compiled JS code clean aur fast ho, toh const enum ka use karein
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
console.log(Direction.Down);
export {};
//# sourceMappingURL=enums.js.map