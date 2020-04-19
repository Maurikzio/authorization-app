function emailValidation(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    return false;
}

function passwordValidation(pass){
    if(pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/)){
        return true;
    }
    return false;
}

function namesValidation(names){
    if(names.match(/^[a-zA-Z]{3,}$/)){
        return true
    }
    return false;
}

function hanlderEmailUpdate(e){
    if(emailValidation(e.target.value)){
        e.target.style.borderColor = 'green'
    }else{
        e.target.style.borderColor = 'red'
    }
}

function handlerPasswordUpdate(e){
    if(passwordValidation(e.target.value)){
        e.target.style.borderColor = 'green'
    }else{
        e.target.style.borderColor = 'red'
    }
}

function handlerNamesUpdate(e){
    if(namesValidation(e.target.value)){
        e.target.style.borderColor = 'green'
    }else{
        e.target.style.borderColor = 'red'
    }
}

function handlerInputsUpdates(e){
    switch(e.target.name){
        case 'email':
            hanlderEmailUpdate(e);
            break;
        case 'password':
            handlerPasswordUpdate(e);
            break;
        case 'firstname':
        case  'lastname':
            handlerNamesUpdate(e);
            break;
        default:
            alert('input name missing');  
    }
}
export default handlerInputsUpdates;