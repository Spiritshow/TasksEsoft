const player = {
    name:{
        firstName: "Petr",
        LastName: {
            secondName: "Joket",
            patrtonymic: "Sertin"
        }
    },
    birth: new Date(2000, 2, 12, 6, 0),
    address: { 
        number: 12345, 
        country: "Moscow", 
        pincode: 208027 
    },
    email: "",
    hobbies: ["singing", "dancing", "music"],
    points: new Map([
        ["HP", 100],
        ["Stamina", 200],
        ["Power", 15]
     ]),

    foo: function(){
        console.log(this.name.firstName)
    }
}

function cloneObject(obj){
    const result = {}

    if( typeof obj !== "object" ||  
        typeof obj === undefined ||  
        obj === null ||
        typeof obj == "function"){
            return obj;
        }

    if (obj instanceof Date) { return new Date(obj); }
    if (obj instanceof Map) { return new Map(obj); }
    if (obj instanceof Set) { return new Set(obj); }

    const keys = Object.keys(obj)
    for(let key in keys){
        result[keys[key]] = cloneObject(obj[keys[key]])
    }
    return result;
}

const clonePlayer = cloneObject(player)

player.name.firstName = "Alice"
player.name.LastName.secondName = "Corse"
player.birth = new Date(2011,5,16,2,30)
player.hobbies[0] = "swiming"
player.points.set("HP", 500)
console.log(player)
console.log(clonePlayer)