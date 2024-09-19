// Initialize the slide index
let slideIndex = 0;

// Get the main slider element
let slider = document.getElementById('slider')

// Get all slide elements within the slider
let slides = slider.getElementsByClassName('slide')

// Get the slide control element
let slideControl = document.getElementById('slide-control')

// Get all slide control items
let slideControlItems = slideControl.getElementsByClassName('slide-control-item')

// Set the initial position of the slider
slider.style.marginTop = '-' + slideIndex + '00vh'

// Add 'active' class to the first slide and its control item after a short delay
setTimeout(() => {
    slideControlItems[slideIndex].classList.add('active')
    slides[slideIndex].classList.add('active')
}, 500)

// Function to change the displayed product
chooseProduct = (index) => {
    // If the clicked item is already active, do nothing
    if (index === slideIndex) return

    // Update the slide index
    slideIndex = index

    // Remove 'active' class from the current slide control item
    let currSlideControl = slideControl.querySelector('.slide-control-item.active')
    currSlideControl.classList.remove('active')

    // Remove 'active' class from the current slide
    let currSlide = slider.querySelector('.slide.active')
    currSlide.classList.remove('active')

    // After a delay, update the slider position and add 'active' class to the new slide and control item
    setTimeout(() => {
        slider.style.marginTop = '-' + slideIndex + '00vh'
        slideControlItems[slideIndex].classList.add('active')
        slides[slideIndex].classList.add('active')
    }, 1500)
}

// Add click event listeners to all slide control items
Array.from(slideControlItems).forEach((el, index) => {
    el.onclick = function() {
        chooseProduct(index)
    }
})

// Get the modal element
let modal = document.getElementById('modal')

// Get the close button for the modal
let closeBtn = document.getElementById('modal-close')

// Add click event listener to close the modal
closeBtn.onclick = () => {
    modal.style.display = 'none'
}

// Get all elements with class 'more-images-item'
let moreImages = document.getElementsByClassName('more-images-item')

// Get all elements with class 'img-preview'
let previewImages = document.getElementsByClassName('img-preview')

// Add click event listeners to all 'more-images-item' elements
Array.from(moreImages).forEach((el) => {
    el.onclick = () => {
        // Get all img elements within the clicked item's parent
        let imgItems = el.parentNode.getElementsByTagName('img')

        // Update the src of preview images
        Array.from(imgItems).forEach((item, index) => {
            previewImages[index].src = item.src
        })

        // Get the clicked image
        let img = el.querySelector('img')
        
        // Display the modal
        modal.style.display = 'block'

        // Set the modal content to the clicked image
        let modalContent = modal.querySelector('.modal-content')
        modalContent.src = img.src

        // Clone and replace the modal content to reset any ongoing animations
        let temp = modalContent.cloneNode(true)
        modalContent.parentNode.replaceChild(temp, modalContent)
    }
})