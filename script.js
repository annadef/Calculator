function numero(dato) {
    document.getElementById("calcoli").value += dato;
}

function operazioni() {
    document.getElementById("calcoli").value = eval(document.getElementById("calcoli").value);
}

function cancella() {
    document.getElementById("calcoli").value = "";
}