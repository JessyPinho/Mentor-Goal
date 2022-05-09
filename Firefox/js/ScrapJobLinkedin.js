var entreprise;
var poste;
var lieu;
var url;
var description;
var tabJob = [];

function scrapJobLinkedin(){

    const xentreprise = "/html/body/div[7]/div[3]/div/div[1]/div[1]/div/div[1]/div/div[2]/div[1]/span[1]/span[1]/a"
    entreprise = document.evaluate(xentreprise, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    entreprise = entreprise.innerHTML;
    tabJob.push(entreprise);

    poste = document.querySelector("h1.t-24.t-bold").innerHTML;
    tabJob.push(poste);

    const xlieu = "/html/body/div[7]/div[3]/div/div[1]/div[1]/div/div[1]/div/div[2]/div[1]/span[1]/span[2]"
    lieu = document.evaluate(xlieu, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    lieu = lieu.innerHTML;
    tabJob.push(lieu);

    url = window.location.href;
    tabJob.push(url);

    const xdescription = "/html/body/div[7]/div[3]/div/div[1]/div[1]/div/div[2]/article/div/div[1]/span";
    description = document.evaluate(xdescription, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    description = description.innerText;
    tabJob.push(description);
    
    return tabJob;
}