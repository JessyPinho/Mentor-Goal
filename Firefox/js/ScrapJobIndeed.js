var entreprise;
var poste;
var lieu;
var url;
var description;
var tabJob = [];

function scrapJobIndeed(){
    entreprise = document.querySelector("div.icl-u-lg-mr--sm.icl-u-xs-mr--xs").innerHTML;
    tabJob.push(entreprise);

    poste = document.querySelector("h1.icl-u-xs-mb--xs.icl-u-xs-mt--none.jobsearch-JobInfoHeader-title").innerHTML;
    tabJob.push(poste);

    const xlieu = "/html/body/div[1]/div/div[1]/div[3]/div/div/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div[2]"
    lieu = document.evaluate(xlieu, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    lieu = lieu.innerHTML;
    tabJob.push(lieu);

    url = window.location.href;
    tabJob.push(url);
    
    description = document.querySelector("div.jobsearch-jobDescriptionText").innerText;
    // parser les balises à l'intérieur
    tabJob.push(description);
    
    console.log(description);
    console.log(url);
    console.log(lieu);
    console.log(entreprise);
    console.log(poste);
    console.log(tabJob);
    return tabJob;
}