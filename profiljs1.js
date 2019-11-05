// inputInstance.indeterminate = true;

function cache(id){
    document.getElementById(id).style.display = "none"; }

function montre(id){
    document.getElementById(id).style.display = "block"; }

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

if(checkBoxes[0].getAttribut('checked') == true) {
    montre()
}