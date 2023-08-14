const imgContainer = document.getElementById('img-container');

let img = document.createElement('img');


img.src = './johnny-bravo.jpg';
img.alt = 'Mr. Bean Photo';
img.height = 600;
img.width = 350;
img.style.borderRadius = '25px';

imgContainer.appendChild(img);
document.getElementById('img-container').style.textAlign = 'center';
document.getElementById('img-container').style.paddingTop = '100px';
