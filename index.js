let addToCartButtons = document.getElementsByClassName('btn')
let cartContainer = document.getElementsByTagName('tbody')[0]
let quantityFields = document.getElementsByClassName('num')
let delete_buttons = document.getElementsByClassName('uk-button-danger')


var parent= document.querySelectorAll(".card")
console.log(parent);

for(let i=0; i< parent.length; i++ ){

    let btnPlus = parent[i].children [1].children[6];
    
let supprimerProduit = parent[i].children[1].children[7];


    let btnMinus = parent[i].children[1].children[4];

    let qty = parent[i].children [1].children[5];
    let quantity = +(qty.innerText)
    console.log(quantity);
    btnPlus.addEventListener('click', function(){
        quantity++;
        qty.innerText=quantity

    });

    btnMinus.addEventListener('click', function(){
        quantity--;
        qty.innerText=quantity

    });
    }
    //   supprimer
function supprimerProduit(produit1) {
    const produit = document.getElementById(produitId);
    produit.remove();
  }
  //   le coeur 
  function toggleLike() {
    var like = document.getElementById("like");
    like.classList.toggle("red");
  }
  function calculerPanier() {
    // Récupérer les valeurs des champs de quantité
    var quantity1 = parseInt(document.getElementById('quantity1').value);
    var quantity2 = parseInt(document.getElementById('quantity2').value);
    var quantity3 = parseInt(document.getElementById('quantity3').value);
    var quantity4 = parseInt(document.getElementById('quantity4').value);
    var quantity5 = parseInt(document.getElementById('quantity5').value);
    var quantity6 = parseInt(document.getElementById('quantity6').value);
    
    // Définir les prix des produits en Francs CFA
    var price1 = 8000;
    var price2 = 1000;
    var price3 = 5000;
    var price4 = 1500;
    var price5 = 3500;
    var price6 = 5000;
    
    // Calculer le sous-total de chaque produit
    var sousTotal1 = quantity1 * price1;
    var sousTotal2 = quantity2 * price2;
    var sousTotal3 = quantity3 * price3;
    var sousTotal4 = quantity4 * price4;
    var sousTotal5 = quantity5 * price5;
    var sousTotal6 = quantity6 * price6;
    
    // Calculer le total du panier
    var total = sousTotal1 + sousTotal2 + sousTotal3 + sousTotal4 + sousTotal5 + sousTotal6;
    
    // Afficher les sous-totaux et le total en Francs CFA
    document.getElementById('sousTotal1').innerHTML = sousTotal1.toLocaleString('fr-FR') + ' CFA';
    document.getElementById('sousTotal2').innerHTML = sousTotal2.toLocaleString('fr-FR') + ' CFA';
    document.getElementById('sousTotal3').innerHTML = sousTotal3.toLocaleString('fr-FR') + ' CFA';
    document.getElementById('sousTotal4').innerHTML = sousTotal4.toLocaleString('fr-FR') + ' CFA';
    document.getElementById('sousTotal5').innerHTML = sousTotal5.toLocaleString('fr-FR') + ' CFA';
    document.getElementById('sousTotal6').innerHTML = sousTotal6.toLocaleString('fr-FR') + ' CFA';
    document.getElementById('total').innerHTML = total.toLocaleString('fr-FR') + ' CFA';
  }


//   // Tableau pour stocker les produits
// var parfum = [];

// // Fonction d'ajout de produit
// function ajouterProduit(parfum1, price, quantity) {
//   var parfum = {
//     parfum: parfum1,
//     price: price,
//     quantity: quantity
//   };
//   parfum.push(parfum);
//   console.log("Produit ajouté :", parfum);
//   calculerTotal();
// }

// // Fonction de calcul du total
// function calculerTotal() {
//   var total = 0;
//   for (var i = 0; i < parfum.length; i++) {
//     var parfum = parfum[i];
//     var priceIndividuel = parfum.price * parfum.quantity;
//     total += priceIndividuel;
//   }
//   console.log("Total :", total);
// }

// // Exemple d'utilisation
// ajouterProduit("parfum1", 1.5, 5);
// ajouterProduit("parfum2", 2.0, 3);
 // JavaScript pour calculer le total
 function calculerPrix() {
    // Récupérer les valeurs des quantités et des prix unitaires
    var quantites = document.getElementsByClassName('quantity');
    var prixUnitaires = document.getElementsByClassName('prix-unitaire');

    var total = 0;

    // Calculer le total en multipliant la quantité par le prix unitaire
    for (var i = 0; i < quantites.length; i++) {
      var quantite = parseInt(quantites[i].value);
      var prixUnitaire = parseFloat(prixUnitaires[i].innerText);
      total += quantite * prixUnitaire;
    }

    // Afficher le total en CFA
    var totalCFA = total * 100;
    document.getElementById('total').innerText = totalCFA.toFixed(2) + ' CFA';
  }