function form () {

      // form 


      let  message = {
        loading : 'Загрузка ...',
        success: 'Спасибо!Скоро мы  с вам свяжемся!',
        failure: 'Что-то пошло не так ...'
   };
   let form  = document.querySelector('.main-form'),
       input = form.getElementsByTagName('input'),
       statusMassager =document.createElement('div');
       statusMassager.classList.add('status');

       
  form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.appendChild(statusMassager);

  let request = new XMLHttpRequest();
  request.open('POST','server.php');
  request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

  let formData = new FormData (form);
  request.send(formData);
  
  request.addEventListener('readystatechange',function() {
      if (request.readyState < 4) {
          statusMassager.innerHTML = message.loading;
      }else if(request.readyState === 4 && request.status == 200) {
          statusMassager.innerHTML =message.success;
      }else {
          this.statusMessage.innerHTML = message.failure;
      }
      
  });
     for (let i=0;i < input.length;i++) {
         input[i].value = "";
     }
  });



}
module.exports = form ;