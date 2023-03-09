const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//collego elementi html al javascript

let imgContainer = document.getElementById("img-container");

let btnLeft = document.getElementById("btn-left");

let btnRight = document.getElementById("btn-right");

let description = document.getElementById("des");

let thumbnailsContainer = document.getElementById("thumbnails");

//creo elementi e li appendo

let newImg;

index = 0;

//nuovo elemento per l'immagine

newImg = document.createElement("img");

imgContainer.append(newImg);

newImg.src = images[index].image;

//elemento per il titolo

newTitle = document.createElement("h2");

des.append(newTitle);

newTitle.innerText = images[index].title;

//elemento per la descrizione

newDes = document.createElement("span");

des.append(newDes);

newDes.innerText = images[index].text;

//thumbnails

for (const key in images) {
    
    newImgThumbnails = document.createElement("img");

    newImgThumbnails.classList.add("thumbnails");
    
    thumbnailsContainer.append(newImgThumbnails);
    
    newImgThumbnails.src = images[key].image;
   
}

//seleziono tutte le thumbnails

let thumbnailsElements = document.querySelectorAll('.thumbnails');

//aggiungo la classe active

thumbnailsElements[index].classList.add("active")

//creo il funzionamento del bottone destro

btnRight.addEventListener("click", function(){
    
    index++
    
    if(index == images.length) {
        index = 0;
        thumbnailsElements[thumbnailsElements.length - 1].classList.remove("active");
    } else {
        thumbnailsElements[index - 1].classList.remove("active");
    }
    
    //aggiorno le immagini all'html
    
    newImg.src = images[index].image;
    
    newTitle.innerText = images[index].title;
    
    newDes.innerText = images[index].text;


    thumbnailsElements[index].classList.add("active")
    
});

//creo il funzionamento del bottone sinistro

btnLeft.addEventListener("click", function(){
    
    index--;
    
    if(index == - 1) {
        index = thumbnailsElements.length - 1;
        thumbnailsElements[0].classList.remove("active");
    } else {    
        thumbnailsElements[index + 1].classList.remove("active");
    }
    
    //aggiorno le immagini all'html
    
    newImg.src = images[index].image;
    
    newTitle.innerText = images[index].title;
    
    newDes.innerText = images[index].text;

    thumbnailsElements[index].classList.add("active")
});
