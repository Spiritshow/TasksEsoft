const obj = { 
    name: { 
        firstName: "Alice", 
        lastName: { secondName:"Corse", patronymic: "Kolian"}
    }, 
    birth: new Date(2011, 0, 1, 2, 3, 4, 567),
    address: { 
        number: 12345, 
        country: "London", 
        pincode: 208027 
    }, 
    email: "foo@bar.com", 
    hobbies: ["singing", "dancing", "music"], 
    map: new Map([
        ["огурец", 500],
        ["помидор", 350],
        ["лук",    50]
      ]),

    foo: function(){
        console.log(this.name)
    }
} 
 
const objTwo = { 
    a: null, 
    b: true
} 

function deepCopy(obj) { 
 
    const result = {}; 

    if (typeof obj !== "object" ||  
        typeof obj === undefined ||  
        obj === null ||
        typeof obj == "function") { 
        return obj; 
    } 
    
    if (obj instanceof Date) { return new Date(obj); }
    if (obj instanceof Map) { return new Map(obj); }
    if (obj instanceof Set) { return new Set(obj); }

    const keys = Object.keys(obj); 

    for (let key in keys) { 
        result[keys[key]] = deepCopy(obj[keys[key]]) 
    } 
    return result; 
} 
  
const deepCopiedObject = deepCopy(obj) 
  
const deepCopiedObjectTwo = deepCopy(objTwo); 

obj.name.lastName.patronymic = "Ivanov" 
obj.hobbies[0] = "swiming"
obj.birth = new Date(2022,2,2,5,3)
obj.map.set('banana', 1);
obj.email = "bin@mail.ru"
console.log(deepCopiedObject) 
console.log(obj)

  
//objTwo.a = "gfg"; 
//console.log(deepCopiedObjectTwo)
//console.log(objTwo)


