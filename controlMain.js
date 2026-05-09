function changeBgColor(){
    const colors = ['lightblue', 'darkblue', 'green', 'lightgoldenrodyellow'];
    const body = document.body;

    const currentColor = document.body.style.backgroundColor || 'lightblue';
    const currentIndex = colors.indexOf(currentColor);
    const nextColor = colors[(currentIndex + 1) % colors.length];

    

    body.style.backgroundColor = nextColor;
    const boxes = document.querySelectorAll('.box');
    const heading = document.querySelector('h1');

    if (nextColor === 'darkblue' || nextColor === 'green') {
    heading.style.color = 'white';
    boxes.forEach(
        box => box.style.borderColor = 'white'
    );
  } else {
    if (nextColor === 'lightblue' || nextColor === 'lightgoldenrodyellow') heading.style.color = 'black';
    boxes.forEach(
        box => box.style.borderColor = 'black'
    );
  }
}
function changeImage(){
    const images = [
        'green.png',
        'sunflower.png'
    ]

    const theseImages = document.querySelectorAll('.box img');


    theseImages.forEach(img =>{
        const randomIndex = Math.floor(Math.random() * images.length);
        img.src=images[randomIndex];
    })
}