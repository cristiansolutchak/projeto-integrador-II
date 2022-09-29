/*
const MODALS = [
    'primeiro', 
    'segundo', 
    'terceiro'
],
    MODAL_ATIVO = 0;

// tamanho do botão: w:138.95px h:44.4833
    
function animarModal(qual){
    let id = MODALS[qual]+'Modal',
        btn = document.getElementById(id)
        local = {y:btn.offsetTop, x:btn.offsetLeft};
    setInterval()
    console.log()
}



*/

'use strict'
// ! animação de scroll
let x = 0,
    animacao;

function descer(local){
    animacao=setInterval(scrolar, 10, local);
}

function scrolar(final){
    if(x===final+20) {
        eliminarAnimacao();
        return;
    }
    window.scroll(0, x);
    x+=20;
}

function eliminarAnimacao(){
    clearInterval(animacao);
    x=0;
}

// ! fim da animação de scroll

// ! abrir todos os modals

let modals = {
    'singIn': "<button id='modalBtn'>x</button>\
              <div id='externa'></div>\
              <form id='interna' method='POST' action='index.php'>\
                  <h1 id='modalSingUp'>Sing Up</h1>\
                  <p>nome</p>\
                  <input placeholder='digite aqui seu nome' type='text' id='nome'>\
                  <p>Email</p>\
                  <input placeholder='digite aqui seu email' type='email' id='email'>\
                  <p>Senha</p>\
                  <input placeholder='digite aqui sua senha' type='text' id='senha1'>\
                  <p>Verificar senha</p>\
                  <input placeholder='confirme aqui sua senha' type='text' id='senha2'>\
                  <input value='conectar-se' type='submit'>\
              </form>",
    'singUp': "<button id='modalBtn'>x</button>\
               <div id='externa'></div>\
               <form id='interna' method='POST' action='index.php'>\
                   <h1 id='modalSingUp'>Sing Up</h1>\
                   <p>nome</p>\
                   <input placeholder='digite aqui seu nome' type='text' id='nome'>\
                   <p>Email</p>\
                   <input placeholder='digite aqui seu email' type='email' id='email'>\
                   <p>Senha</p>\
                   <input placeholder='digite aqui sua senha' type='text' id='senha1'>\
                   <p>Verificar senha</p>\
                   <input placeholder='confirme aqui sua senha' type='text' id='senha2'>\
                   <input value='conectar-se' type='submit'>\
               </form>",
    'IA': "<button id='modalBtn'>x</button>\
            <div id='externa'></div>\
            <form id='interna' method='POST' action='index.php'>\
                <h1 id='modalIA'>Inteligência Artificial</h1>\
                <p>\
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                </p>\
            </form>", 
    'matriz': "<button id='modalBtn'>x</button>\
               <div id='externa'></div>\
               <form id='interna' method='POST' action='index.php'>\
                   <h1 id='modalMatrize'>Matrizes energéticas</h1>\
                   <p>\
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                   </p>\
               </form>",
    "quiz":'',
    'eolica': "<button id='modalBtn'>x</button>\
               <div id='externa'></div>\
               <form id='interna' method='POST' action='index.php'>\
                   <h1 id='modalEolica'>Energia eolica</h1>\
                   <p>\
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                   </p>\
               </form>",
    'nuclear': "<button id='modalBtn'>x</button>\
                <div id='externa'></div>\
                <form id='interna' method='POST' action='index.php'>\
                    <h1 id='modalNuclear'>Energia nuclear</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
                </form>",
    'hidrelétrica': "<button id='modalBtn'>x</button>\
                     <div id='externa'></div>\
                     <form id='interna' method='POST' action='index.php'>\
                         <h1 id='modalHidreletrica'>Energia hidrelétrica</h1>\
                         <p>\
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                         </p>\
                     </form>",
    'solar': "<button id='modalBtn'>x</button>\
              <div id='externa'></div>\
              <form id='interna' method='POST' action='index.php'>\
                  <h1 id='modalSolar'>Energia solar</h1>\
                  <p>\
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                  </p>\
              </form>",
}

const CONTENT=document.body.innerHTML;
let scrolAtual,
    id1,
    id2,
    contador1 = 0,
    contador2 = 0,
    interna;

function criarModal(tipo){
    atualizarPosicoes()
    document.body.innerHTML=CONTENT+modals[tipo];
    let qual=0;
    for(let i in modals){
        if(i==tipo) break;
        qual++;
    }
    interna = document.getElementById('interna')
    colocarDiv(posicoes[qual]);
    id1 = setInterval(ajustarModal, 1, {parteX: (screen.availWidth*0.2 - interna.offsetLeft)/200, parteY: (screen.availHeight*0.2-interna.offsetTop)/200})
    id2 = setInterval(animarModal, 1, {parteX: (screen.availWidth*0.8 - document.getElementById('interna').clientWidth)/500, parteY: (screen.availHeight*0.8 - document.getElementById('interna').clientHeight)/500}, );
    document.getElementById('modalBtn').setAttribute('onclick', 'closeModal()');
    document.body.classList = 'semScroll';
}


function colocarDiv(local){
    interna.style.top = local.y + 'px';
    interna.style.left = local.x + 'px';
}


const posicoes = [];

function animarModal(dados){
    if(contador1++===500)pararIntervalo('c1');
    interna.style.width = interna.clientWidth + dados.parteX + 'px';
    interna.style.height = interna.clientHeight + dados.parteY + 'px';
    
}

function ajustarModal(dados){
    if(contador2++===200)pararIntervalo('c2');
    interna.style.top = interna.offsetTop + dados.parteX + 'px';
    interna.style.left = interna.offsetLeft + dados.parteY + 'px';
}


function pararIntervalo(qual){
    
    if(qual=='c1'){
        contador1 = 0;
        clearInterval(id1);
    }
    else{
        contador2 = 0;
        clearInterval(id2);
    }
}


// ! fim da função de abrir todos os modals

// ! fechar modals

function closeModal(){
    document.getElementById('externa').remove();
    document.getElementById('interna').remove();
    document.getElementById('modalBtn').remove();
    document.body.classList = '';
}

// ! fim da função fechar modals

// ! função mudar

function mudar(elemento1, elemento2){
    let item1 = document.getElementById('item1'),
        item2 = document.getElementById('item2'),
        item3 = document.getElementById('item3'),
        btn1 = document.getElementById('boton1'),
        btn2 = document.getElementById('boton2'),
        btn3 = document.getElementById('boton3');
    if(elemento1){
        item1.style.display = 'block';
        item2.style.display = 'none';
        item3.style.display = 'none';
        btn1.style.backgroundColor = 'red';
        btn2.style.backgroundColor = 'white';
        btn3.style.backgroundColor = 'white';
    }else if(elemento2){
        item1.style.display = 'none'; 
        item2.style.display = 'block'; 
        item3.style.display = 'none';
        btn1.style.backgroundColor = 'white';
        btn2.style.backgroundColor = 'red';
        btn3.style.backgroundColor = 'white';
    }else{
        item1.style.display = 'none'; 
        item2.style.display = 'none'; 
        item3.style.display = 'block';
        btn1.style.backgroundColor = 'white';
        btn2.style.backgroundColor = 'white';
        btn3.style.backgroundColor = 'red';
    }
}


function atualizarPosicoes(){
    let x = 0,
        elementos = ['sing_in', 'sing_up', 'botao_ia', 'botao_matriz', 'botao_quiz', 'card1', 'card2', 'card3', 'card4']
    for(let i of elementos){
        let elemento = document.getElementById(i)
        posicoes[x++] = elemento.getBoundingClientRect()
    }
}