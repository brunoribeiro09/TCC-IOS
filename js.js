let foto  = document.querySelector("#gravatar");
let login = document.getElementById('logar');
let email = document.querySelector('#email');

const user = 
{
        mail :'ariston@gmail.com',

        senha:'17092001'
}

login.addEventListener('click', logar); 

email.addEventListener  ("keyup", checar);


/* close.addEventListener('click',fechar)


function fechar () {
     
  

    modal.style.display ="none";
    caixa.style.filter = '';
    footer.style.filter ='';

}
 */

function logar(evento){ 

    evento.preventDefault;
   // let modal  = document.querySelector('.popup');

    if(email.value === "" || pass.value === "" ){
   
        modalar()  

    }else if(email.value != "" || pass.value != "" ){

        if(  email.value== user.mail && pass.value == user.senha ){
               
           // alert("parabéns você logou com  " + user.mail + " e  a senha " + user.senha)
           
          window.location.href = 'wwww.google.com.br'      
        }
    }
} 

function checar(evento){

    //mudar  a foto de acordo com o email

   let texto  = evento.target.value.toLowerCase();
   let foto  = document.querySelector("#gravatar")
 
   let bancoEmail = "brunoribeiropereiradasilva@gmail.com";
   let bancoEmail2 =  user.mail
   
   console.log(texto);
 
   if(texto == bancoEmail  ) {  
          
       foto.src = '../imagens/bruno.png'
       

   } else if (texto == bancoEmail2) {
    foto.src = '../imagens/bob.png'
   } 
}
