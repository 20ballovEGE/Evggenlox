const commentBox = document.getElementById('testimonialComment').querySelector('p');
const carousel = document.getElementById('testimonialCarousel');

carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = carousel.querySelector('.carousel-item.active');
    const comment = activeItem.getAttribute('data-comment');
    commentBox.textContent = comment;
});

document.addEventListener('DOMContentLoaded', function () {
    const activeItem = document.querySelector('.carousel-item.active');
    const comment = activeItem.getAttribute('data-comment');
    commentBox.textContent = comment;
    console.log(activeItem)
    console.log(comment)
});

const forms = document.querySelectorAll('.needs-validation');

forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault(); 
        let successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    }
    form.classList.add('was-validated');
    });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))