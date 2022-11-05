'use strict'
// ! animação de scroll

$(document).ready(()=>{
    $("#submeter_coment").click( ()=>{
        $.ajax({
            type: "get",
            url: "",
            data: {
                opiniao: $("#comentarios").val()
            },
            dataType: "application/json",
            success: (response)=>{
                console.log(response.seconds)
            }
        });  
    });
});


let y = 0,
    animacao;

function descer(local){
    animacao=setInterval(scrolar, 8, local.getBoundingClientRect().top);
}

function scrolar(final){
    if(y>=final+20) {
        eliminarAnimacao();
        return;
    }
    window.scroll(0, y);
    y+=20;
}

function eliminarAnimacao(){
    clearInterval(animacao);
    y=0;
}

// ! fim da animação de scroll

// ! abrir todos os modals

let modals = {
    'singIn': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
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
    'singUp': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
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
    'IA': "<div id='externa'>\
                <button id='modalBtn' onclick='closeModal()'>x</button>\
            </div>\
            <form id='interna' method='POST' action='index.php'>\
                <h1 id='modalIA'>Inteligência Artificial</h1>\
                <p>\
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                </p>\
            </form>", 
    'matriz': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
                <form id='interna' method='POST' action='index.php'>\
                    <h1 id='modalMatrize'>Matrizes energéticas</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
               </form>",
    "quiz":'',
    'eolica': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
               <form id='interna' method='POST' action='index.php'>\
                   <h1 id='modalEolica'>Energia eolica</h1>\
                   <p>\
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                   </p>\
               </form>",
    'nuclear': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
                <form id='interna' method='POST' action='index.php'>\
                    <h1 id='modalNuclear'>Energia nuclear</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
                </form>",
    'solar': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
                <form id='interna' method='POST' action='index.php'>\
                    <h1 id='modalSolar'>Energia solar</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
                </form>",
                'hidrelétrica': "<div id='externa'>\
                <button id='modalBtn' onclick='closeModal()'>x</button>\
            </div>\
            <form id='interna' method='POST' action='index.php'>\
                <h1 id='modalHidreletrica'>Energia hidrelétrica</h1>\
                <p>\
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                </p>\
             </form>",
}

const CONTENT=document.body.innerHTML

let interna,
    externa,
    posicoes = [];

function criarModal(tipo){
    atualizarPosicoes();
    document.body.innerHTML=CONTENT+modals[tipo];
    let qual=0;
    for(let i in modals){
        if(i==tipo) break;
        qual++;
    }
    interna = $('#interna')[0];
    externa = $('#externa')[0];
    (qual<5) ? colocarDiv(posicoes[qual]) : colocarDiv(posicoes[qual], 1)
    definirPosisaoInicialEFinal(posicoes[qual])
    document.body.classList = 'semScroll';
}


function colocarDiv(local=[], val=0){
    if(val){
        interna.style.width = local.width + 'px';
        interna.style.height = local.height + 'px';
    }
    interna.style.top = local.y + 'px';
    interna.style.left = local.x + 'px';
}


function definirPosisaoInicialEFinal(local){
    let top = '10%',
        left;
    if(1000<window.innerWidth && window.innerWidth<=1800)left='8%';
    else if(750<window.innerWidth && window.innerWidth<=1000)left='7%';
    else if(350<window.innerWidth && window.innerWidth<=750)left='6.5%';
    else left='6%';
    $('#fim')[0].innerHTML = `:root{
        --posicaoFinalX: ${left};
        --posicaoFinalY: ${top};
    }`;
    $('#inicio')[0].innerHTML = `:root{
        --posicaoInicialX: ${local.x}px;
        --posicaoInicialY: ${local.y}px;
    }`;
    interna.classList = 'ajustarModal';
    setTimeout(()=>{
        interna.classList = 'abrirModal';
    }, 990)
    setTimeout(() => {
        interna.classList = 'modalAberto';
    }, 1990);
    setTimeout(() => {
        interna.classList = 'modalAberto mostrarItens';
        externa.classList = 'mostrarItens';
    }, 1990);
    setTimeout(() => {
        interna.classList = 'modalAberto mostrarItem';
        externa.classList = 'mostrarItem';
    }, 2990);
}

// ! fim da função de abrir todos os modals

// ! fechar modals

function closeModal(){
    $('#externa')[0].remove();
    $('#interna')[0].remove();
    document.body.classList = '';
}

// ! fim da função fechar modals

// ! função mudar

function mudar(elemento1, elemento2){
    let item1 = $('#item1')[0],
        item2 = $('#item2')[0],
        item3 = $('#item3')[0],
        btn1 = $('#boton1')[0],
        btn2 = $('#boton2')[0],
        btn3 = $('#boton3')[0];
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


const BOTOES = ['#sing_in', '#sing_up', '#botao_ia', '#botao_matriz', '#botao_quiz', '#card1', '#card2', '#card3', '#card4']
function atualizarPosicoes(){
    let x = 0
    for(let i of BOTOES){
        let elemento = $(i)[0]
        posicoes[x++] = elemento.getBoundingClientRect()
    }
}