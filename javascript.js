//les codes js de la formation
// window.onload = function(){
//     alert('bonsoir')
// };
//window.addEventListener("load", alert('bonsoir'));
function afficher_masquer(e) {
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
        document.getElementsByClassName('save-data')[0].style.display='none';
        document.getElementsByClassName('informations-remplir')[0].style.display='none';
        document.getElementsByClassName('informations-a-afficher')[0].style.display='block';
        e.preventDefault();
    }
}

document.getElementById('save-data').addEventListener('click', afficher_masquer);