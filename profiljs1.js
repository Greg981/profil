// inputInstance.indeterminate = true;

// function cache(id){
//     document.getElementById(id).style.display = "none"; }

// function montre(id){
//     document.getElementById(id).style.display = "block"; }

// const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

// if(checkBoxes[0].getAttribut('checked') == true) {
//     montre()
// }


let tableau5 = document.querySelector('.compt6');


fetch('http://localhost:1337/competences')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
            // let ligne = document.createElement('p');

            let intitule = document.createElement('fieldset');
            intitule.textContent = d.intitule;
            intitule.addEventListener("click", ()=>{
                
                let nom = document.createElement('p');
            nom.setAttribute("type", "checkbox");
        
                
            })

            tableau5.append(intitule);

        });

    });

let tableau6 = document.querySelector('.compt7');
let tableau7 = document.querySelector('.compt8');


fetch('http://localhost:1337/niveaus')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
            // let ligne = document.createElement('p');

            let nom = document.createElement('p');
            nom.setAttribute("type", "checkbox");
  
            nom.textContent = d.nom;

            let score = document.createElement('p');
            score.textContent = d.score.nom;


            tableau6.append(nom);
            tableau7.append(score);
        });

    });


    // x.appendChild(t);
    // document.body.appendChild(x)