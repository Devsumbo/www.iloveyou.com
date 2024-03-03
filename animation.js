document.addEventListener('DOMContentLoaded', function(){
    animateHeading();
    animatePhotos();
});

function animateHeading(){
    const heading = document.querySelector('.animated-heading');
    heading.classList.add('slide-in');
}

function animatePhotos(){
    const photos = document.querySelectorAll('animated-photo');
    photos.forEach((photo,index) =>{
        setTimeout(() =>{
            photo.computedStyleMap.opacity = '1';
            photo.computedStyleMap.transform ='translateY(0)';
        }, index * 200);
    });
}