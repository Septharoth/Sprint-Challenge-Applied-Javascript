/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/



function Carousel(imgs) {
  const carousel = document.createElement('div')
  const left = document.createElement('div')
  const right = document.createElement('div')
  // function seemed more useful with images being loaded in on call instead of being hardcoded, :shrug:
  // const imgs = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']
  let index = 0
  let paused = false

  carousel.classList.add('carousel')
  left.classList.add('left-button')
  right.classList.add('right-button')

  carousel.appendChild(left)

  let imgEls = []
  let _i = 0

  imgs.forEach((i) => {
    const img = document.createElement('img')
    img.src = i
    imgEls.push(img)
    if (_i == 0) {
      img.classList.add("active")
      img.classList.add("first")
    } else if (_i == 1) {
      img.classList.add("nextImg")
    } else if (_i == imgs.length - 1) {
      img.classList.add("prevImg")
    }
    carousel.appendChild(img)
    _i++
  })

  carousel.appendChild(right)


  right.addEventListener('click', () =>{
    if (!paused) {
      if (index === (imgs.length)) {
        index = 0
      } else if (index > (imgs.length - 1)) {
        index = 0
      } else {
        index++
      }
        move(imgEls, index)
        paused = true
        setTimeout(() => {
          paused = false
        }, 1000)
    }
  })

  left.addEventListener('click', () => {
    if (!paused) {
      if (index === 0) {
        index = (imgs.length - 1)
      } else if (index > (imgs.length - 1)) {
        index = 0
      } else {
        index--
      }
      
        move(imgEls, index)
        paused = true
        setTimeout(() => {
          paused = false
        }, 1000)
    }
  })

  console.log(carousel)
  return carousel
}

function move(imgs, idx) {
    let next = idx + 1
    let prev = idx - 1

    if (prev < 0) {
      prev = imgs.length - 1
    }

    if (next > imgs.length - 1) {
      next = 0
    }

      imgs.forEach((i) => {
        i.classList.remove("prevImg", "active", "first", "nextImg")
      })

      imgs[prev].classList.add("prevImg")
      if (idx > imgs.length - 1) {
        imgs[0].classList.add("active")
      } else {
        imgs[idx].classList.add("active")
      }
      imgs[next].classList.add("nextImg")
}

const carouselDiv = document.querySelector(".carousel-container")
carouselDiv.appendChild(Carousel(['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']))

