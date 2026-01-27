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


const beautyCardImageElement1 = document.getElementById('beauty-card-image-1')
const beautyCardTextElement1 = document.getElementById('beauty-card-text-1')
document.querySelectorAll('#beauty-card-options-1').forEach(option => {
    option.addEventListener('click', () => {
        beautyCardImageElement1.setAttribute('src', option?.firstElementChild?.getAttribute('src'))
        // console.log(option.lastElementChild.innerText);
        beautyCardTextElement1.innerHTML = option?.lastElementChild?.innerHTML
        beautyCardImageElement1.classList.remove('hidden')
        // console.log(beautyCardImageElement1.innerHTML);
        document.querySelectorAll('#beauty-card-options-1').forEach(opt => {
            opt.firstElementChild.classList.remove('border-2');
        })
        option.firstElementChild.classList.add('border-2')

    })
})

const beautyCardImageElement2 = document.getElementById('beauty-card-image-2')
const beautyCardTextElement2 = document.getElementById('beauty-card-text-2')
document.querySelectorAll('#beauty-card-options-2').forEach(option => {
    option.addEventListener('click', () => {
        beautyCardImageElement2.setAttribute('src', option?.firstElementChild?.getAttribute('src'))
        // console.log(option.lastElementChild.innerText);
        beautyCardTextElement2.innerHTML = option?.lastElementChild?.innerHTML
        document.querySelectorAll('#beauty-card-options-2').forEach(opt => {
            opt.firstElementChild.classList.remove('border-2');
        })
        option.firstElementChild.classList.add('border-2')
    })
})

const beautyCardImageElement3 = document.getElementById('beauty-card-image-3')
const beautyCardTextElement3 = document.getElementById('beauty-card-text-3')
document.querySelectorAll('#beauty-card-options-3').forEach(option => {

    option.addEventListener('click', () => {
        beautyCardImageElement3.setAttribute('src', option?.firstElementChild?.getAttribute('src'))
        // console.log(option.lastElementChild.innerText);
        beautyCardTextElement3.innerHTML = option?.lastElementChild?.innerHTML
        document.querySelectorAll('#beauty-card-options-3').forEach(opt => {
            opt.firstElementChild.classList.remove('border-2');
        })
        option.firstElementChild.classList.add('border-2')

    })

})

const beautyCardImageElement4 = document.getElementById('beauty-card-image-4')
const beautyCardTextElement4 = document.getElementById('beauty-card-text-4')
document.querySelectorAll('#beauty-card-options-4').forEach(option => {
    option.addEventListener('click', () => {
        beautyCardImageElement4.setAttribute('src', option?.firstElementChild?.getAttribute('src'))
        // console.log(option.lastElementChild.innerText);
        beautyCardTextElement4.innerHTML = option?.lastElementChild?.innerHTML
        document.querySelectorAll('#beauty-card-options-4').forEach(opt => {
            opt.firstElementChild.classList.remove('border-2');
        })
        option.firstElementChild.classList.add('border-2')
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

