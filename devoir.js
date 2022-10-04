"use strict";

let list_operations = ["-", '+', 'abs', "cos", "div", "help", "max", "min", "mod", "mul", "pwr", "rev", "sin", "sort", "sq", "uniq"];
let cowsay = require("cowsay");

let list = [];
for(let i=2; i<process.argv.length; i++) {
    list.push(process.argv[i]);
}
let x = list[list.length-1];

switch(x) {
    case undefined:
        console.log(cowsay.say({
            text : "Calculator, Author: Sebastian"
        }));
        for(let i in list_operations) {
            console.log(list_operations[i]);
        }
        break;
    
    case "help":
        if(list.length !== 1) {
            console.log("ERROR: help has no parametres");
            break;
        }
        else {
            console.log(cowsay.say({
                text : "Calculator, Author: Sebastian"
            }));
            for(let i in list_operations) {
                console.log(list_operations[i]);
            }
        }
        break;
    
    case "+":
        if(list[list.length-2] === "complex") {
            let vr = 0;
            let vim = 0;
            for(let i=0; i<list.length-2; i++) {
                if(i%2 == 0) {
                    vr += parseFloat(list[i]);
                }
                else {
                    vim += parseFloat(list[i]);
                }
            }
            if(vr == 0 && vim == 0) {
                console.log(0);
                break;
            }
            if(vr == 0) {
                console.log(vim + "i");
                break;
            }
            if(vim == 0) {
                console.log(vr);
                break;
            }
            if(vim < 0) {
                console.log(vr + "" + vim + "i");
                break;
            }
            console.log(vr + "+" + vim + "i");
            break;
        }

        if(list.length > 2) {
            let sum = 0;
            for(let i=0; i<list.length-1; i++) {
                let verif = parseFloat(list[i]);
                if(!isNaN(verif)) {
                    sum += verif;
                }
                else {
                    console.log("Ecrive seulement des nombres!");
                    break;
                }
            }
            console.log(sum);
        } 
        else {
            console.log("ERROR: + command uses at least 1 parameter");
        }
        break;
    
    case "-":
        if(list[list.length-2] === "complex") {
            let vr = parseFloat(list[0]);
            let vim = parseFloat(list[1]);
            for(let i=2; i<list.length-2; i++) {
                if(i%2 == 0) {
                    vr -= parseFloat(list[i]);
                }
                else {
                    vim -= parseFloat(list[i]);
                }
            }
            if(vr == 0 && vim == 0) {
                console.log(0);
                break;
            }
            if(vr == 0) {
                console.log(vim + "i");
                break;
            }
            if(vim == 0) {
                console.log(vr);
                break;
            }
            if(vim > 0) {
                console.log(vr + "+" + vim + "i");
                break;
            }
            console.log(vr + "" + vim + "i");
            break;
        }
    
        if(list.length > 2) {
            let dif = list[0];
            for(let i=1; i<list.length-1; i++) {
                let verif = parseFloat(list[i]);
                if(!isNaN(verif)) {
                    dif -= verif;
                }
                else {
                    console.log("Ecrive seulement des nombres!");
                    break;
                }
            }
            console.log(dif);
        } 
        else {
            console.log("ERROR: - command uses at least 2 parameters");
        }
        break;
    
    case "mul":
        if(list[list.length-2] === "complex") {
            let re = parseFloat(list[0]);
            let im = parseFloat(list[1]);
            for(let i=2; i<list.length-2; i++) {
                if(list[i+1] === "complex") {
                    re *= parseFloat(list[i]);
                    im *= parseFloat(list[i]);
                }
                else {
                    let aux1 = re;
                    let aux2 = im;
                    re = aux1*parseFloat(list[i]) - aux2*parseFloat(list[i+1]);
                    im = aux1*parseFloat(list[i+1]) + aux2*parseFloat(list[i]);
                }
                i++;
            }
            if(re == 0 && im == 0) {
                console.log(0);
                break;
            }
            if(re == 0) {
                console.log(im + "i");
                break;
            }
            if(im == 0) {
                console.log(re);
                break;
            }
            if(im < 0) {
                console.log(re + "" + im + "i");
                break;
            }
            console.log(re + "+" + im + "i");
            break;           
        }

        if(list.length > 2) {
            let mul = 1;
            for(let i=0; i<list.length-1; i++) {
                let verif = parseFloat(list[i]);
                if(!isNaN(verif)) {
                    mul *= verif;
                }
                else {
                    console.log("Ecrive seulement des nombres!");
                    break;
                }
            }
            console.log(mul);
        } 
        else {
            console.log("ERROR: mul command uses at least 2 parameters");
        }
        break;

    case "div":
        if(list.length > 2) {
            let div = list[0];
            for(let i=1; i<list.length-1; i++) {
                let verif = parseFloat(list[i]);
                if(!isNaN(verif)) {
                    div /= verif;
                }
                else {
                    console.log("Ecrive seulement des nombres!");
                    break;
                }
            }
            console.log(div);
        } 
        else {
            console.log("ERROR: div command uses at least 2 parameters");
        }
        break;

    case "mod":
        if(list.length === 3) {
            let mod1 = list[0];
            let mod2 = list[1];

            if(!isNaN(mod1) && !isNaN(mod2)) {
                let mod = mod1%mod2;
                console.log(mod);
            }
            else {
                console.log("Ecrive seulement des nombres!");
            }
        } 
        else {
            console.log("ERROR: mod command uses at least 2 parameters");
        }
        break;

    case "sq":
        if(list.length === 2) {
            if(!isNaN(list[0])) {
                console.log(Math.sqrt(list[0]));
            }
            else {
                console.log("Ecrive un nombres!");
            }
        }
        else {
            console.log("ERROR: sq command uses at least 1 parameters");
        }
        break;

    case "abs":
        if(list.length === 2) {
            if(!isNaN(list[0])) {
                console.log(Math.abs(list[0]));
            }
            else {
                console.log("Ecrive un nombres!");
            }
        }
        else {
            console.log("ERROR: abs command uses at least 1 parameters");
        }
        break;

    case "pwr":
        if(list.length === 3) {
            let pwr1 = list[0];
            let pwr2 = list[1];

            if(!isNaN(pwr1) && !isNaN(pwr2)) {
                let pwr = Math.pow(pwr1,pwr2);
                console.log(pwr);
            }
            else {
                console.log("Ecrive seulement des nombres!");
            }
        } 
        else {
            console.log("ERROR: pwr command uses at least 2 parameters");
        }
        break;

    case "sort":
        if(list.length > 2) {
            let tab = [];
            for(let i=0; i<list.length-1; i++) {
                let t = parseFloat(list[i]);
                if(!isNaN(t)) {
                    tab.push(t);
                }
                else {
                    console.log("Il doit etre un nombre!");
                    break;
                }
            }
            tab.sort(function (a,b){return a-b;});
            let res = tab.join(" ");
            console.log(res);
        } 
        else {
            console.log("ERROR: sort command uses at least 1 parameters");
        }
        break;

    case "rev":
        if(list.length > 1) {
            let tab = [];
            for(let i=0; i<list.length-1; i++) {
                let t = parseFloat(list[i]);
                if(!isNaN(t)) {
                    tab.push(t);
                }
                else {
                    console.log("Il doit etre un nombre!");
                    break;
                }
            }
            tab.reverse();
            let res = tab.join(" ");
            console.log(res);
        } 
        else {
            console.log("ERROR: rev command uses at least 1 parameters");
        }
        break;

    case "uniq":
        if(list.length > 1) {
            let tab = [];
            for(let i=0; i<list.length-1; i++) {
                let t = parseFloat(list[i]);
                if(isNaN(t)) {
                    console.log("Il doit etre un nombre!");
                    break;
                }
                else {
                    if(tab.indexOf(t) === -1) tab.push(t);
                }
            }
            let res = tab.join(" ");
            console.log(res);
        } 
        else {
            console.log("ERROR: uniq command uses at least 1 parameters");
        }
        break;

    case "max":
        if(list.length > 2) {
            let tab = [];
            for(let i=0; i<list.length-1; i++) {
                let t = parseFloat(list[i]);
                if(isNaN(t)) {
                    console.log("Il doit etre un nombre!");
                    break;
                }
                else {
                    tab.push(t);
                }
            }
            let res = Math.max(...tab);
            console.log(res);
        } 
        else {
            console.log("ERROR: max command uses at least 2 parameters");
        }
        break;

    case "min":
        if(list.length > 2) {
            let tab = [];
            for(let i=0; i<list.length-1; i++) {
                let t = parseFloat(list[i]);
                if(isNaN(t)) {
                    console.log("Il doit etre un nombre!");
                    break;
                }
                else {
                    tab.push(t);
                }
            }
            let res = Math.min(...tab);
            console.log(res);
        } 
        else {
            console.log("ERROR: min command uses at least 2 parameters");
        }
        break;

    case "cos":
        if(list.length === 2) {
            if(!isNaN(list[0])) {
                console.log(Math.cos(process.argv[2]));
            }
            else {
                console.log("Ecrive un nombres!");
            }
        }
        else {
            console.log("ERROR: cos command uses at 1 parameter");
        }
        break;

    case "sin":
        if(list.length === 2) {
            if(!isNaN(list[0])) {
                console.log(Math.sin(process.argv[2]));
            }
            else {
                console.log("Ecrive un nombres!");
            }
        }
        else {
            console.log("ERROR: sin command uses at 1 parameter");
        }
        break;

    default:
        console.log("ERROR: this command does not exist, use help to see available commands");       
}