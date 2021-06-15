import { ELEMENTFORM, GETMSG } from "./constant.js";
import { informUser } from "./function.js"

const messageForm = document.createElement("p");
messageForm.setAttribute("tabindex", "0")

export const validData = (e) => {
    e.preventDefault();
    let isValid = true;
    
    ELEMENTFORM.input.forEach((item,key) => {
        if (!item.value || item.value.length < 2){
            informUser(messageForm, GETMSG[0].msg, ELEMENTFORM.boxData[key])
            isValid = false
        }

        if(!ELEMENTFORM.mail.value){
            informUser(messageForm, GETMSG[2].msg, ELEMENTFORM.boxData[2])
            isValid = false
        }
    })
    if (!message.value || message.value.length < 20){
        informUser(messageForm, GETMSG[1].msg, ELEMENTFORM.boxData[3])
        isValid = false
    }
    
    if(isValid){
        e.preventDefault();
        alert(`<p role="alert">${GETMSG[3].msg}</p>`);
    }
} 
