window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
    console.log({location});

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        moviesPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
    location.hash
};

function homePage() {
    console.log('HOME!!');
};

function categoriesPage() {
    console.log('CATEGORIES!!');
};

function searchPage() {
    console.log('SEARCH!!');
};

function trendsPage() {
    console.log('TRENDS!!');
};

function homePage() {
    console.log('HOME!!');
};