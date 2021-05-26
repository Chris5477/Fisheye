import { ELEMENTHTML , getMsg } from "./constant.js";
import { informUser } from "./function.js"

const messageForm = document.createElement("p");
messageForm.setAttribute("tabindex", "0")

export const validData = (e) => {
    e.preventDefault();
    let isValid = true;

    ELEMENTHTML.input.forEach((item,key) => {
        if (!item.value || item.value.length < 2){
            informUser(messageForm, getMsg[0].msg, ELEMENTHTML.boxData[key])
            isValid = false
        }
    })
        if (!message.value || message.value.length < 20){
            informUser(messageForm, getMsg[1].msg, ELEMENTHTML.boxData[3])
            isValid = false
        }

        if(isValid){
            e.preventDefault();
            alert(getMsg[2].msg);
        }
} 