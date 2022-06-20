var Slideshow = [
    "https://images.justwatch.com/backdrop/257870458/s1440/spider-man-no-way-home.webp",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5655/1175655-h-50fe5709fab4",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8084/1258084-h-5a45792c0366",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/480/1250480-h-7aa44ec06f31",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2728/1122728-h-bf0246e20e6d",
    
];

var showNum = document.querySelector("#randomNum");
var randNum = Math.floor(Math.random() * 4) + 1;
let i = 0;
var id;
var appendimg = document.getElementById('slideshow');
let img = document.createElement("img");
img.src = Slideshow[randNum];
appendimg.append(img);

function sliderStart() {

    id = setInterval(function() {
        if (i == Slideshow.length) {
            i = 0;
        }
        img.src = Slideshow[i];
        appendimg.append(img)
        i++;
    }, 1100);

}
appendimg.addEventListener("mouseleave", Hoverpdstart);

function Hoverpdstart() {
    sliderStart();

}
appendimg.addEventListener("mouseenter", Hoverpause);

function Hoverpause() {
    clearInterval(id);
}

window.addEventListener('load', function() {
    sliderStart();
});

//movie data 
var movie = [{
        name: 'The Batman',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg',
        rating: 8.3,
    }, {
        name: 'Moon knight',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BYmZkYTY3YTctNTNkMS00NjZiLWIxMjMtMDY2NGJjNTFlZGU3XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
        rating: 7.7
    },
    {
        name: 'Spider-Man:No Way Home',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BZmY2MGIzYjAtODkzMy00NDIzLThmMTctZjEyNWE4MmQ1ZGE0XkEyXkFqcGdeQXVyNDM1ODc2NzE@._V1_FMjpg_UX568_.jpg',
        rating: 8.7
    },
    {
        name: 'Coda',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BYzkyNzNiMDItMGU1Yy00NmEyLWE4N2ItMjkzMDZmMmVhNDU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX503_.jpg',
        rating: 8.1
    },
    {
        name: 'Turning Red',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BNjY0MGEzZmQtZWMxNi00MWVhLWI4NWEtYjQ0MDkyYTJhMDU0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY720_.jpg',
        rating: 7.1
    },
    {
        name: 'RRR',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX750_.jpg',
        rating: 8.9
    },
    {
        name: 'Severance',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BOThjMjc4NDUtNmIyOC00MzhmLWIxNjQtMDlkOTlmNzA0NDJlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX675_.jpg',
        rating: 8.6
    },
    {
        name: 'Dune',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX509_.jpg',
        rating: 8.1
    },
    {
        name: 'Dasvi',
        releaseDate: 2022,
        poster: 'https://m.media-amazon.com/images/M/MV5BZWE3OTg5ZTAtOThiYS00ODM5LWIyZmUtMWRiOTRlMGZhMTk0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1200_.jpg',
        rating: 8.2
    },
];
localStorage.setItem('movies', JSON.stringify(movie));
var Getmovie = JSON.parse(window.localStorage.getItem('movies')) || [];

function display(Getmovie) {
    document.querySelector("#movies").innerHTML = "";
    Getmovie.map(function(el, i) {
        let box = document.createElement('div');
        let img = document.createElement('img');
        var another = document.createElement('div');
        another.setAttribute('class', "infosection")
        img.src = el.poster;
        let rate = document.createElement('p');
        rate.innerHTML = el.rating;
        let name = document.createElement('p');
        name.innerHTML = el.name;
        let date = document.createElement('p');
        date.innerHTML = el.releaseDate;
        let icon = document.createElement('i');
        icon.setAttribute('class', "fa-solid fa-star");
        another.append(rate, name, date)

        rate.append(icon);
        box.append(img, another)

        document.querySelector("#movies").append(box);
    });
}

//filter out
document.querySelector("#high").addEventListener("click", higholow);

function higholow() {
    var high = 'hl';
    handleratingSort(high);
}
document.querySelector("#low").addEventListener("click", lowtohig);

function lowtohig() {
    var low = 'lh';
    handleratingSort(low);

}

function handleratingSort(e) {
    if (e == "hl") {
        Getmovie.sort(function(a, b) {
            return b.rating - a.rating;
        });
        display(Getmovie);
        console.log(Getmovie)
    }

    if (e == "lh") {
        Getmovie.sort(function(a, b) {
            return a.rating - b.rating;
        });
        display(Getmovie);
    }
}
window.addEventListener("load", function() {
    display(Getmovie);
});