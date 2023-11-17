document.getElementById("carteDeVisite").onclick = function() {
  document.getElementById("accueil").style.display = "none";
  document.getElementById("ecranCarteDeVisite").style.display = "block";
}

document.getElementById("enregistrerContact").onclick = function() {
  document.getElementById("accueil").style.display = "none";
  document.getElementById("ecranEnregistrerContact").style.display = "block";
}

document.getElementById("retourAccueil1").onclick = function() {
  document.getElementById("accueil").style.display = "flex";
  document.getElementById("ecranCarteDeVisite").style.display = "none";
}

document.getElementById("retourAccueil2").onclick = function() {
  document.getElementById("accueil").style.display = "flex";
  document.getElementById("ecranEnregistrerContact").style.display = "none";
}


document.getElementById("enregistrer").onclick = function() {
  var contact = {
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    societe: document.getElementById("societe").value,
    telephone: document.getElementById("telephone").value,
    mail: document.getElementById("mail").value
  }

  console.log(contact);
}
