const mensagem = document.querySelector('#mensagem');

const textBox = document.querySelector('.text-box');
const imagemTextBox = textBox.querySelector('img');
const mensagemTextBox = textBox.querySelector('.text-display-mensagem');

const btnCriptografar = document.querySelector('.btn.criptografar');

if(btnCriptografar) {
  let mensagemCriptografada = '';

  function criptografar() {
    mensagemCriptografada = mensagem.value.replace(/[aeiou]/g, letra => {
      switch(letra) {
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'a':
          return 'ai';
        case 'o':
          return 'ober'
        case 'u':
          return 'ufat';
        default:
          return letra;
      }
    })
  
    mensagem.value = mensagemCriptografada;
  
    textBox.classList.add('ativo');
  
    mensagemTextBox.innerHTML = mensagemCriptografada;
  }
  
  btnCriptografar.addEventListener('click', criptografar);
}

const btnDescriptografar = document.querySelector('.btn.descriptografar');

if(btnDescriptografar) {
  let mensagemDescriptografada = '';

  function descriptografar() {
    mensagemDescriptografada = mensagem.value.replace(/(enter|imes|ai|ober|ufat)/g, letra => {
      switch(letra) {
        case 'enter':
          return 'e';
        case 'imes':
          return 'i';
        case 'ai':
          return 'a';
        case 'ober':
          return 'o';
        case 'ufat':
          return 'u';
        default:
          return letra;
      }
    });
    
    mensagem.value = mensagemDescriptografada;
    mensagemTextBox.innerHTML = mensagemDescriptografada;
  }
  
  btnDescriptografar.addEventListener('click', descriptografar);
}

const btnCopiar = document.querySelector('.btn.copiar');

if(btnCopiar) {
  function copiar() {
    navigator.clipboard.writeText(mensagemTextBox.innerHTML).then(() => {
      alert('Texto copiado para a área de transferência');
    });
  }
  
  btnCopiar.addEventListener('click', copiar);
}