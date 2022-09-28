var zahlstr = '';
var text = "Bitte einen gültigen Betrag eingeben!";
var text_out = "Sie erhalten in Kürze:";
var info_elem = document.getElementById("atm_info");
var fldset_elem = document.getElementById("atm_ausgabe");

document.getElementById("btn_cash_true").onclick = getInputAmount;
var eingabe_ok = evalAmount((zahlstr));
console.log('rueckgabe eval ist ' + eingabe_ok);

// var info_elem =  document.querySelector('.toggle_info');
// console.log(info_elem.id);

function getInputAmount() {
    zahlstr = document.getElementById("betrag_str").value;
    var eingabe_ok=evalAmount(zahlstr);
    if (eingabe_ok) {
        info_elem.textContent = text_out;
        let zahl=Number(zahlstr);
        let wert = 100;
        if (zahl >= 100) {    
            let r10 = getAnz(zahl, wert);
            zahl = getRest(zahl, r10*wert);
            console.log("100er : ",r10, "übrig sind ", zahl)
            document.getElementById("100_anz").innerHTML = `<div>${r10}</div>`;
        }
        if (zahl >= 50) {  
            wert=50;  
            let r5 = getAnz(zahl, wert);
            zahl = getRest(zahl, r5*wert);
            console.log("50er : ",r5, "übrig sind ", zahl)
            document.getElementById("50_anz").innerHTML = `<div>${r5}</div>`;
        }
        if (zahl >= 20) {  
            wert=20;  
            let r2 = getAnz(zahl, wert);
            zahl = getRest(zahl, r2*wert);
            console.log("20er : ",r2, "übrig sind ", zahl)
            document.getElementById("20_anz").innerHTML = `<div>${r2}</div>`;
        }
        if (zahl >= 10) {  
            wert=10;  
            let r1 = getAnz(zahl, wert);
            zahl = getRest(zahl, r1*wert);
            console.log("10er : ",r1, "übrig sind ", zahl)
            document.getElementById("10_anz").innerHTML = `<div>${r1}</div>`;
        }
        fldset_elem.style.display = "block";  	
    }
    else {
        info_elem.textContent = text;
    }
    info_elem.style.display = "block";
}

function evalAmount(zahlstr) {
    let eval_ok = false;
    if (zahlstr) {
    //  console.log(typeof (zahlstr), zahlstr);
        let lastChar = zahlstr.charAt(zahlstr.length - 1);
        if (zahlstr <= "400" & lastChar == '0') {
            eval_ok = true;
        }
    }
    return eval_ok;
}

function getAnz(zahl, wert) {
    let n=Math.floor(zahl / wert);
    zahl = zahl - wert * n;
return n;
}

function getRest(zahl,wert) {
    return (zahl - wert);
}