document.getElementById('btn').addEventListener('click', function() {
   
    this.classList.add('active');

   
    var cartel = document.getElementById('cartel');
    cartel.style.display = 'block';

    
    setTimeout(() => {
      cartel.classList.add('active');
    }, 10);

   
    setTimeout(() => {
      this.classList.remove('active');
      cartel.classList.remove('active');
      cartel.style.display = 'none';
    }, 2000);
});