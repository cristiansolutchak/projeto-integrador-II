'use strict'

// ! inicio do controle de saves

function limparIntervalo(id){
    clearInterval(id);
}

let envios = 0,
    intervalo = 0,
    intervaloId,
    data = new Date;

if(localStorage.getItem('intervalo') !== null){
    let intervalo = data.getTime()-localStorage.getItem('intervalo');
    if(intervalo>0){
        envios = 3;
        intervaloId = setInterval(()=>{
            intervalo--;
            if(intervalo==0) limparIntervalo(intervaloId);
        }, 1000);
    }else{
        localStorage.removeItem('intervalo');
    }
}

// ! fim do controle de saves

// ! inicio do save com ajax

function salvar(){
    if(envios==3){
        $('#resposta').html('muitos envios em um curto entervalo de tempo')
    }else{
        if($("#nome").val().length!=0&&$("#email").val().length!=0&&$("#comentario").val().length!=0){
            $.ajax({
                type: "get",
                url: "",
                data: {
                    nome: $("#nome").val(),
                    email: $("#email").val(),
                    comentario: $("#comentario").val()
                },
                dataType: "application/json",
                beforeSend: ()=>{
                    $("#resposta").html('Enviando mensagem...');
                }
            }).fail((dados)=>{
                if(dados.status==200){
                    $("#resposta").html('Mensagem enviada com sucesso!');
                    envios++;
                }else $("#resposta").html('Erro ao enviar a mensagem!');
            });
        }else{
            if($("#nome").val().length==0){
                $("#resposta").html('Insira seu nome antes de enviar sua mensagem!')
            }else if($("#email").val().length!=0){
                $("#resposta").html('Insira seu email antes de enviar sua mensagem!')
            }else{
                $("#resposta").html('Insira seu comentário antes de enviar sua mensagem!')
            }
        }
    }
    if(envios===3){
        intervalo = 600;
        localStorage.setItem('intervalo', data.getTime()+intervalo);
        intervaloId = setInterval(()=>{
            intervalo--;
            if(intervalo==0) limparIntervalo(intervaloId)
        }, 1000)
    }
}

// ! fim do save com ajax

// ! inicio da animação de scroll

let y = 0,
    animacaoId;

function descer(local){
    animacaoId=setInterval(scrolar, 8, local.getBoundingClientRect().top);
}


function scrolar(final){
    if(y>=final) {
        limparIntervalo(animacaoId);
        y=0;
        return;
    }else{
        window.scroll(0, y);
        y+=20;
    } 
}

// ! fim da animação de scroll

// ! abrir todos os modals

let modals = {
    'IA': "<div id='externa'>\
                <button id='modalBtn' onclick='closeModal()'>x</button>\
            </div>\
            <div id='interna' method='POST'>\
                <h1 id='modalIA'>Inteligência Artificial</h1>\
                <p>\
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                </p>\
            </div>", 
    'matriz': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
                <div id='interna'>\
                    <h1 id='modalMatrize'>Matrizes energéticas</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
               </div>",
    "quiz":"<div id='externa'>\
            <button id='modalBtn' onclick='closeModal()'>x</button>\
            </div>\
            <div id='interna'>\
                <h1 id='questao'>O que é uma IA?</h1>\
                <form id='form' action='/'>\
                    <input type='radio' id='questao1' name='questão' value='1'>\
                    <label for='questão1'>Uma IA é uma réplica de um cérebro humano, mas criado no computador.</label><br>\
                    <input type='radio' id='questao2' name='questão' value='2'>\
                    <label for='questão2'>É um conjunto de cálculos utilizados para processar dados em massa.</label><br>\
                    <input type='radio' id='questao3' name='questão' value='3'>\
                    <label for='questão3'>É uma nova maneira usada para gerenciar redes.</label><br>\
                    <input type='radio' id='questao4' name='questão' value='4'>\
                    <label for='questão4'>Uma IA é uma nova tecnologia usada apenas para controle de computadores de dispositivos ultra modernos.</label><br>\
                    <input type='button' onclick='mudarQuiz(0)' value='enviar'>\
                </form>\
            </div>",
    'eolica': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
               <div id='interna'>\
                   <h1 id='modalEolica'>Energia eolica</h1>\
                   <p>\
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                   </p>\
               </div>",
    'nuclear': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
                <div id='interna'>\
                    <h1 id='modalNuclear'>Energia nuclear</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
                </div>",
    'solar': "<div id='externa'>\
                    <button id='modalBtn' onclick='closeModal()'>x</button>\
                </div>\
                <div id='interna'>\
                    <h1 id='modalSolar'>Energia solar</h1>\
                    <p>\
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                    </p>\
                </div>",
    'hidrelétrica': "<div id='externa'>\
            <button id='modalBtn' onclick='closeModal()'>x</button>\
            </div>\
            <div id='interna'>\
                <h1 id='modalHidreletrica'>Energia hidrelétrica</h1>\
                <p>\
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.\
                </p>\
             </div>",
    'opinião': `<div id='externa'>
                    <button id='modalBtn' onclick='closeModal()'>x</button>
                </div>
                <div id='interna'>
                    <h1 id='modalIA'>Inteligência Artificial</h1>
                    <input id='nome' type='text' placeholder='digite aqui seu nome!'>
                    <input id='email' type='email' placeholder='exemplo@gmail.com!'>
                    <textarea rows='2' cols='100' id='comentario' placeholder='Deixe sua opinião!'></textarea>
                    <button onclick='salvar()' id='submeter_coment'>submeter comentário</button>
                    <p id='resposta'></p>\
                </div>`,
}


const CONTENT=document.body.innerHTML


let interna,
    externa,
    posicoes = [];

function atualizarPosicoes(){
    const BOTOES = ['#botao_ia', '#botao_matriz', '#botao_quiz', '#card1', '#card2', '#card3', '#card4', '#botao_comentarios'];
    let x = 0;
    for(let i of BOTOES){
        let elemento = $(i)[0];
        posicoes[x++] = elemento.getBoundingClientRect();
    }
}


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
    interna.classList = 'ajustarModal';
    setTimeout(()=>{
        interna.classList = 'abrirModal';
    }, 985)
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

//! inicio quiz
let acertos = 0,
    qual = 0;

function mudarQuiz(quiz){
    const contents = [
        "<h1 id='questao'>2- O que é uma matriz energética?</h1>\
        <form id='form' action='/'>\
            <input type='radio' id='questao1' name='questão' value='1'>\
            <label for='questão1'>Uma matriz energética é uma forma de gerar energia usando apenas biocombustível.</label><br>\
            <input type='radio' id='questao2' name='questão' value='2'>\
            <label for='questão2'>Uma matriz energética é uma nova maneira de gerar eletricidade.</label><br>\
            <input type='radio' id='questao3' name='questão' value='3'>\
            <label for='questão3'>É qualquer forma de geração de energia.</label><br>\
            <input type='radio' id='questao4' name='questão' value='4'>\
            <label for='questão4'>Qualquer tipo de consumo de energia é considerado matriz energética.</label><br>\
            <input type='button' onclick='mudarQuiz(1)' value='enviar'>\
        </form>",
        "<h1 id='questao'>3- Qual o uso da IA nas matrizes energéticas?</h1>\
        <form id='form' action='/'>\
            <input type='radio' id='questao1' name='questão' value='1'>\
            <label for='questão1'>Controlar todo e qualquer movimento dos geradores.</label><br>\
            <input type='radio' id='questao2' name='questão' value='2'>\
            <label for='questão2'>Mover apenas as partes externas dos geradores.</label><br>\
            <input type='radio' id='questao3' name='questão' value='3'>\
            <label for='questão3'>A IA pode mover tudo dos geradores, podendo assim tirar uma maior eficiência dos geradores.</label><br>\
            <input type='radio' id='questao4' name='questão' value='4'>\
            <label for='questão4'>A IA pode fazer apenas relatórios e estatísticas dos geradores, mostrando a temperatura, geração, desgaste entre outros, podendo assim gerar uma ótima segurança dos geradores.</label><br>\
            <input type='button' onclick='mudarQuiz(2)' value='enviar'>\
        </form>",
        "<h1 id='questao'>Resultado</h1>\
        <form id='form' action='/'>\
            <p id='resultado'></p>\
        </form>"
    ];
    let corretos = [1, 2, 2],
        questoes = ['questao1', 'questao2', 'questao3', 'questao4'];
    for(const I in questoes){
        if($("#"+questoes[I])[0].checked){
            if(corretos[qual] == I) acertos++;
            break;
        }
    }
    qual++;
    interna.innerHTML = contents[quiz];
    if(quiz === 2){
        let content;
        if(!qual) content = "Infelismente você não acertou nenhuma questão, mais sorte na proxima.";
        else if(qual == 1)content = "Infelismente você acertou 1 questão, mais sorte na proxima!";
        else if(qual == 2)content = "Parabéns, você acertou 2 questões!!";
        else content = "Parabéns, você acertou 3 questões!!!";
        $("#resultado")[0].innerHTML = content;
    }
}

// ! fim quiz

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