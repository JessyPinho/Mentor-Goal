var allName;
var firstname;
var lastname;
var post;
var entreprise;
var url;
var email;
var number;
var tabProfile = [];

function scrapContact(){
    allName = document.querySelector("h1.text-heading-xlarge.inline.t-24.v-align-middle.break-words").innerHTML;

    firstname = allName.split(" ")[0];
    tabProfile.push(firstname);
    lastname = allName.split(/ (.+)/)[1];
    tabProfile.push(lastname);

    post = document.querySelector("div.text-body-medium.break-words").innerHTML;
    tabProfile.push(post);

    const xlink = "/html/body/div[7]/div[3]/div/div/div/div/div[3]/div/div/main/div/section/div[2]/div[2]/ul/li[1]/a/h2/div";
    entreprise = document.evaluate(xlink, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    entreprise = entreprise.innerHTML;
    tabProfile.push(entreprise);

    url =  window.location.href;
    tabProfile.push(url);

    var xbutton = "/html/body/div[7]/div[3]/div/div/div/div/div[3]/div/div/main/div/section/div[2]/div[2]/div[2]/span[2]/a"; 
    var buttonCoo = document.evaluate(xbutton, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    

    buttonCoo.click();

    const TimeOutCoo = setTimeout(openCoo, 300);

    
    return tabProfile;

}

function openCoo(){

    var xnum = "/html/body/div[3]/div/div/div[2]/section/div/div/div/section[2]/ul/li/span"
    number = document.evaluate(xnum, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if(number == null){
        number = "Non renseigné";
        var xemail = "/html/body/div[3]/div/div/div[2]/section/div/div/div/section[2]/div/a";
    }
    else{
        number = number.innerHTML;
        var xemail = "/html/body/div[3]/div/div/div[2]/section/div/div/div/section[3]/div/a";
    }

    email = document.evaluate(xemail, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if(email == null){
        email = "Non renseigné";
    }
    else{
        email = email.innerHTML;
    }

    tabProfile.push(email);
    tabProfile.push(number);

    var xexit = "/html/body/div[3]/div/div/button";
    var buttonexit = document.evaluate(xexit, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    buttonexit.click();
}