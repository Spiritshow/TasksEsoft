
let line = "([{[}]])"

function bracket(line){
    let list = []
    if (line != null)
    for (let i = 0; i < line.length; i++){
        if(line[i] == '(' || line[i] == '[' || line[i] == '{'){
            list.push(line[i])
            continue
        }
        if(line[i] == ')'){
            if ('(' == list.pop()){
            }else {
                return false;
            }
        }
        if(line[i] == ']'){
            if ('[' == list.pop()){
            } else {
                return false;
            }
        }
        if(line[i] == '}'){
            if ('{' == list.pop()){
            } else {
                return false;
            }
        }

    }
    if (list.length == 0){
        return true;
    }else{
        return false;
    }
}

console.log(bracket(line))

