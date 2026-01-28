let current = 0;

document.getElementById('left-swap').addEventListener('click', () => {
    current = (current % 3) + 1
    document.getElementById('tag-for-carousel').setAttribute('src', `./asset/carousel-${current}.jpg`)
})

document.getElementById('right-swap').addEventListener('click', () => {
    current--
    if (current <= 0) {
        current = 3;
    }
    document.getElementById('tag-for-carousel').setAttribute('src', `./asset/carousel-${(current)}.jpg`)
})



document.querySelectorAll('.beauty-card-container').forEach(card => {
    const img = card.querySelector('.beauty-card-image')
    const cardText = card.querySelector('.beauty-card-text');

    console.log(cardText);


    const imgOptions = card.querySelectorAll('.beauty-card-options')
    console.log(imgOptions);

    imgOptions.forEach(option => {
        option.addEventListener('click', () => {
            console.log(option.firstElementChild.getAttribute('src'));
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

