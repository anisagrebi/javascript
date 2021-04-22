//les codes js de la formation
// window.onload = function(){
//     alert('bonsoir')
// };
//window.addEventListener("load", alert('bonsoir'));
function afficher_masquer() {
    // informations a remplir
    var nom = document.informations.nom.value
    var prenom = document.informations.prenom.value
    var age = document.informations.age.value
    var genre =''
    if (document.getElementById('homme').checked) {
         genre = document.informations.homme.value;
    }
    if (document.getElementById('femme').checked) {
        genre = document.informations.femme.value;
    }
    // Validation du formulaire
    var erreur = document.getElementsByTagName('small');
    let valid = true;
    for (let index = 0; index < erreur.length; index++) {
        erreur[index].innerHTML ='';
    }
    if (nom == '') {
        erreur[0].innerHTML = 'le champs nom ne doit pas etre vide';
        valid = false;
    }
    if (prenom == '') {
        erreur[1].innerHTML = 'le champs prénom ne doit pas etre vide';
        valid = false;
    }
    if (age == '') {
        erreur[2].innerHTML = 'vous devez sélectionner l\'age';
        valid = false;
    }
    if (genre == '') {
        erreur[3].innerHTML = 'vous devez choisir votre genre';
        valid = false;
    }
    if (valid) {
        // informations a afficher 
        document.getElementById('nom').innerHTML = nom;
        document.getElementById('prenom').innerHTML = prenom;
        document.getElementById('age').innerHTML = age;
        document.getElementById('genre').innerHTML = genre;
        //afficher masquer les div
        document.getElementsByClassName('save-data')[0].style = "display:none";
        document.getElementsByClassName('informations-remplir')[0].style = "display:none";
        document.getElementsByClassName('informations-a-afficher')[0].style = "display:block";
        document.getElementsByClassName('quiz')[0].style = "display:block";
    }
}
function score() {
    var [q1, q2, q3, q4, q5, q6, q7] = [0, 0, 0, 0, 0, 0, 0, 0]
    if (document.getElementById('question11').value == "document.getElementsByTagName('input')[2].value" || document.getElementById('question11').value == 'document.getElementsByTagName("input")[2].value') {
        var q1 = 1;
    }
    if (document.getElementById('question23').checked) {
        var q2 = Number(document.getElementById('question23').value); //ou var q2 = 1
    }
    if (document.getElementById('question31').checked) {
        var q3 = Number(document.getElementById('question31').value); //ou var q3 = 1
    }
    if (document.getElementById('question42').checked) {
        var q4 = Number(document.getElementById('question42').value); //ou var q4 = 1
    }
    if (document.getElementById('question51').checked) {
        var q5 = Number(document.getElementById('question51').value); //ou var q5 = 1
    }
    if (document.getElementById('question63').checked) {
        var q6 = Number(document.getElementById('question63').value); //ou var q5 = 1
    }
    if (document.getElementById('question72').checked) {
        var q7 = Number(document.getElementById('question72').value); //ou var q7 = 1
    }
    document.getElementById('score').value = q1 + q2 + q3 + q4 + q5 + q6 + q7;
    if (document.getElementById('score').value == 7) {
        alert('Bravoo toutes les réponses sont correctes')
    }
}

window.onload = function () {
    document.getElementById('Bouton2').addEventListener('click', score);
    document.getElementById('save-data').addEventListener('click', afficher_masquer);
}