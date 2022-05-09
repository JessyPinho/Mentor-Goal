function scrapJob(site){
    var job;
    switch(site){
        case "linkedin":
            job = scrapJobLinkedin();
            break;

        case "indeed":
            job = scrapJobIndeed();
            break;

                    // scraping apec
        case "apec":
            job = scrapJobApec();
            break;
            
        default:
            job = [];
            break;
    }
    return job;
}