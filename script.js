const leftBtn = document.getElementById("left-swap");
const images = document.querySelectorAll(".carousel-img");
const rightBtn = document.getElementById("right-swap");

// console.log(images.length);
let currentIndex = 0;

rightBtn.addEventListener("click", () => {
    // images[currentIndex].classList.add('translate-x-[500%]')
    images[currentIndex].classList.add('hidden')
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.remove('hidden')
});

leftBtn.addEventListener("click", () => {
    images[currentIndex].classList.add('hidden')

    currentIndex = currentIndex - 1;
    if (currentIndex <= 0) {
        currentIndex = 2;
    }
    images[currentIndex].classList.remove('hidden')

});


document.querySelectorAll('.beauty-card-container').forEach(card => {
    const img = card.querySelector('.beauty-card-image')
    const cardText = card.querySelector('.beauty-card-text');

    // console.log(cardText);

    const imgOptions = card.querySelectorAll('.beauty-card-options')
    // console.log(imgOptions);

    imgOptions.forEach(option => {
        option.addEventListener('click', () => {
            // console.log(option.firstElementChild.getAttribute('src'));
            img.setAttribute('src', option.firstElementChild.getAttribute('src'))
            cardText.innerHTML = option.lastElementChild.innerHTML
            imgOptions.forEach(opt => {
                opt.firstElementChild.classList.remove('border-2')
            })
            option.firstElementChild.classList.add('border-2')
        })
    })

})


document.querySelectorAll('.item-image-container').forEach(card => {
    const img = card.querySelector('.item-scroll')

    const leftBtn = card.querySelector('.item-scroll-left')
    const rightBtn = card.querySelector('.item-scroll-right')


    leftBtn.onclick = () => {
        // console.log(card.getAttribute('value'));

        let newImageNumber = Number(card.getAttribute('value')) + 1;
        if (newImageNumber > 5) {
            newImageNumber = 1;
        }
        img.src = `./asset/item-ima-${newImageNumber}.jpg`

        card.setAttribute('value', newImageNumber)
        // console.log(newImageNumber);

        // console.log(card.getAttribute('value'));

    }

    rightBtn.onclick = () => {
        // console.log(card.getAttribute('value'));

        let newImageNumber = Number(card.getAttribute('value')) - 1;
        if (newImageNumber <= 0) {
            newImageNumber = 5;
        }
        img.src = `./asset/item-ima-${newImageNumber}.jpg`

        card.setAttribute('value', newImageNumber)
        // console.log(newImageNumber);

        // console.log(card.getAttribute('value'));

    }

})

let currentPage = 1;
// let startIndex = 0;
let toShowInPage = 4;

if (window.innerWidth > 1400) {
    toShowInPage = 8
}
else if (window.innerWidth > 1226) {
    toShowInPage = 6
}
else if (window.innerWidth > 1024) {
    toShowInPage = 5
}
else {
    toShowInPage = 4
}

function renderCards(toShowInPage, startIndex = 0) {

    let endIndex = startIndex + toShowInPage;

    if (endIndex > productsForPagination.length) {
        endIndex = productsForPagination.length
    }

    productsForPagination.slice(startIndex, endIndex).forEach(product => {



        const div = document.createElement('div');
        div.classList = ' sm:m-2 lg:m-4 max-w-[150px]'

        const imageWrapper = document.createElement('div');
        imageWrapper.classList = 'flex justify-center'

        const image = document.createElement('img');
        image.src = product.img;
        image.className = "w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[90px] lg:h-[100px] mx-auto";

        imageWrapper.append(image);

        const description = document.createElement('h6');
        description.innerText = product.title;
        description.className =
            "text-[7px] text-blue-500 sm:text-[9px] lg:text-[11px]  line-clamp-4";



        const ratingStars = document.createElement('ul');
        ratingStars.className = "flex text-[7px] lg:text-[11px] sm:text-[9px]";

        let givenRating = product.stars;
        let remainingStar = 5 - givenRating;

        while (givenRating > 0) {
            const star = document.createElement('li');
            star.innerHTML = '&star;';
            star.className = "text-orange-500";
            ratingStars.append(star);
            givenRating--;
        }

        while (remainingStar > 0) {
            const star = document.createElement('li');
            star.innerHTML = '&star;';
            ratingStars.append(star);
            remainingStar--;
        }


        const price = document.createElement('h5');
        price.innerHTML = `&#8377; ${product.price}`;
        price.className = "text-[8px] sm:text-[10px] lg:text-[13px]";

        const para = document.createElement('p');
        para.innerText = product.delivery;
        para.className = "text-[7px] sm:text-[9px] lg:text-[11px] line-clamp-2 ";

        div.append(imageWrapper);
        div.append(description);
        div.append(ratingStars);
        div.append(price);
        div.append(para);

        paginationContainer.append(div);
        paginationContainer.innerHTML += ``
    });

    const totalPageCount = document.getElementById('total-page')
    totalPageCount.innerText = Math.ceil(productsForPagination.length / Number(toShowInPage))


}


window.addEventListener('resize', () => {

    let startIndex = 0;
    if (window.innerWidth > 1400) {
        toShowInPage = 8

        const currentPage = Number(
            document.getElementById('current-page').innerText
        );
        startIndex = (currentPage - 1) * toShowInPage

    }
    else if (window.innerWidth > 1226) {
        toShowInPage = 6

        const currentPage = Number(
            document.getElementById('current-page').innerText
        );

        startIndex = (currentPage - 1) * toShowInPage

        // renderCards(5)
    }
    else if (window.innerWidth > 1024) {
        toShowInPage = 5
        const currentPage = Number(
            document.getElementById('current-page').innerText
        );

        startIndex = (currentPage - 1) * toShowInPage

        // renderCards(5)
    }
    else {
        toShowInPage = 4
        const currentPage = Number(
            document.getElementById('current-page').innerText
        );
        startIndex = (currentPage - 1) * toShowInPage

        // renderCards(4);
    }

    // const currentPage = Number(
    //     document.getElementById('current-page').innerText
    // );

    // console.log(currentPage);

    // const startIndex = (currentPage - 1) * toShowInPage

    console.log(startIndex);
    paginationContainer.innerHTML = ''
    renderCards(toShowInPage, startIndex);

})

const productsForPagination = [
    {
        img: "./asset/pagination-1.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 998,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-2.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 545,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-4.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 4,
        price: 925,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-3.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 2,
        price: 608,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-1.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 998,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-4.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 4,
        price: 925,
        delivery: "Get it by Friday, January 26 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-2.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 545,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-3.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 2,
        price: 608,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-1.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 998,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-2.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 545,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-2.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 545,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-3.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 2,
        price: 608,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-1.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 998,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-4.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 4,
        price: 925,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-3.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 2,
        price: 608,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-1.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 3,
        price: 998,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    },
    {
        img: "./asset/pagination-3.jpg",
        title: "TrueDecor Metal Bread Box Set Sourdough Bread Box 4.1L Airtight Bread Storange Box For Kitchen Bread Dispenser Food Grade Storage Box (Red)",
        stars: 2,
        price: 608,
        delivery: "Get it by Friday, January 30 FREE Delivery by Amazon"
    }
];

const paginationContainer = document.querySelector('.pagination-container')

renderCards(toShowInPage)

// console.log(Math.ceil(productsForPagination.length / toShowInPage));

document.getElementById('pagination-left').addEventListener('click', () => {
    const currentPage = Number(document.getElementById('current-page').innerText)
    // console.log(currentPage);

    if (currentPage == 1) {
        return;
    }

    let startIndex = (toShowInPage * (currentPage - 1)) - toShowInPage
    // console.log(startIndex);

    paginationContainer.innerHTML = ''

    document.getElementById('current-page').innerText = currentPage - 1;

    renderCards(toShowInPage, startIndex)

})

document.getElementById('pagination-right').addEventListener('click', () => {
    const currentPage = Number(document.getElementById('current-page').innerText)
    // console.log(currentPage);

    if (currentPage == Math.ceil(productsForPagination.length / Number(toShowInPage))) {
        return;
    }

    let startIndex = productsForPagination.length - (productsForPagination.length - currentPage * toShowInPage);
    // console.log(startIndex);

    paginationContainer.innerHTML = ''

    document.getElementById('current-page').innerText = currentPage + 1;

    renderCards(toShowInPage, startIndex)

})


const goToFirstPage = document.querySelector('.start-over')

goToFirstPage.addEventListener('click', () => {
    // console.log(`to show ${toShowInPage}`);
    document.getElementById('current-page').innerText = 1
    paginationContainer.innerHTML = ''
    renderCards(toShowInPage)
})


