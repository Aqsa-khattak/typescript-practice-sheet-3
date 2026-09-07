////////=================   Decorators
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
function AddTimeStamp(constructor) {
    constructor.prototype.createdAt = new Date().toLocaleDateString();
}
let Order = (() => {
    let _classDecorators = [AddTimeStamp];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Order = _classThis = class {
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    };
    __setFunctionName(_classThis, "Order");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Order = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Order = _classThis;
})();
const myOrder = new Order("aqsa", 76);
console.log(myOrder.id); //76
console.log(myOrder.createdAt); //9/4/2026
export {};
//TypeScript ko nahi pata hota ke decorator ne chupke se peeche se ek nayi property createdAt attach kar di hai.
//Is liye agar aap direct myOrder.createdAt likhenge, to TypeScript compile-time par error de dega:
//TypeScript ke is error se bachne ke liye humne Type Casting (as any) use ki hai:
//myOrder as any: Hum TypeScript compiler ko keh rahe hain: "Aap tension mat lo, myOrder ko filhal 'any' type
//samjho aur iski strict type-checking band kar do." .createdAt: Ab TypeScript khamosh ho jata hai aur hume 
//createdAt property access karne deta hai.
//# sourceMappingURL=decorator.js.map