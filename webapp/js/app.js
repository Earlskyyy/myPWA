let myimg = document.querySelector('#myimg');

fetch("https://dog.ceo/api/breeds/image/random", {method:"GET"})
  .then(response => response.json())
  .then(result => {
    myimg.src = result.message;
  })
  .catch(error => console.log('error', error));        

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
  }