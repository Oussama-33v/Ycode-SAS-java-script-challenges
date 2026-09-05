const prompte = require('prompt-sync')();
function getUserInout() {
    let nArticles = +prompte('haw many articles you buy ?');
    return nArticles;
}

function factureGenerator(nArticles) {
    let total = 125;
    let remis = 0;
    if (nArticles <= 0) {
        return total = 0;
    }
    else if (nArticles == 1) {
        return total;
    }
    for() {
        total += total - 125 * remis / 100
        remis += 2;
    }
}

articles = getUserInout()
outpfactureGenerator