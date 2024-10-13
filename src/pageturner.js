const innerdiv = document.getElementById('innerdiv');

const pages = {
    home: {
        src: 'home.html',
        next: "about"
    },
    about: {
        src: 'about.html',
        next: "home"
    }
};

let currentPage = 'home';

function loadPage(page) {
    const pageFile = pages[page];

    if (!pageFile) {
        console.error('Page not found:', page);
        return;
    }
    
    fetch(pageFile)
        .then(response => response.text())
        .then(data => {
            innerdiv.innerHTML = data;
            document.getElementById('turnpage').addEventListener("click", pageTurn);
        })
        .catch(error => console.error('Error loading the HTML file:', error));
}

function pageTurn() {
    currentPage = pages[currentPage].next;
    loadPage(currentPage);
}

loadPage(currentPage);
