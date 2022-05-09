var entreprise;
var poste;
var lieu;
var url;
var description;
var tabJob = [];

function scrapJobApec(){
    // recuper la donnée voulu et la push dans le tableau
    const xEntreprise = "/html/body/main/div/apec-offres/div/apec-detail-emploi/div/div/article/div/div/apec-offre-metadata/div/div/ul/li[1]";
    entreprise = document.evaluate(xEntreprise, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    entreprise = entreprise.innerHTML;
    tabJob.push(entreprise);

    poste = document.querySelector("h2.card-title.mt-0").innerHTML;
    tabJob.push(poste);


    // récupération du xpath
    const xlieu = "/html/body/main/div/apec-offres/div/apec-detail-emploi/div/div/article/div/div/apec-offre-metadata/div/div/ul/li[3]";
    // evalue le xpath, dans la page, Xpathresult retourne le premier résultat, et affiche juste la valeur
    lieu = document.evaluate(xlieu, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    lieu = lieu.innerHTML;
    
    tabJob.push(lieu);

    url = window.location.href;
    
    tabJob.push(url);
    
    const xDescription = "/html/body/main/div/apec-offres/div/apec-detail-emploi/div/div/article/div/div/apec-poste-informations/div/div/div/p[1]";
    description = document.evaluate(xDescription, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    description = description.innerText;
    tabJob.push(description);
    
    return tabJob;
    // récupérer la valeur du tableau
}