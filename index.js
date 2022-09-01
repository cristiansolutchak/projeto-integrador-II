'use strict'
// ! animação de scroll
let x = 0,
    animacao;

function descer(local){
    animacao=setInterval(scrolar, 10, local);
}

function scrolar(final){
    if(x===final+20) {
        eliminarAnimacao(animacao);
        return;
    }
    window.scroll(0, x);
    x+=20;
}

function eliminarAnimacao(animacao){
    clearInterval(animacao);
    x=0;
}

// ! fim da animação de scroll

// ! abrir todos os modals

let modals = {'singIn': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Sing In', 
                    id:'modalSingIn'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Email'
                }, 
                input1: {
                    tag: 'input',
                    type:'email', 
                    id: 'email',
                    placeholder: 'digite aqui seu email'
                },
                p2: {
                    tag: 'p',
                    textContent: 'Senha'
                },
                input2: {
                    tag: 'input',
                    type:'text', 
                    id: 'senha',
                    placeholder: 'digite aqui sua senha'
                },
                p3: {
                    tag: 'p',
                    innerHTML: 'Ainda não possui conta? <a onclick="limpar();criarModal(\'singUp\')">crie uma</a>!'
                },
                input3: {
                    tag: 'input',
                    type: 'submit',
                    value: 'conectar-se'
                }
            }
        }
    },
    'singUp':{
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Sing Up', 
                    id:'modalSingUp'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'nome'
                }, 
                input1: {
                    tag: 'input',
                    type:'text', 
                    id: 'nome',
                    placeholder: 'digite aqui seu nome'
                },
                p2:{
                    tag: 'p',
                    textContent:'Email'
                }, 
                input2: {
                    tag: 'input',
                    type:'email', 
                    id: 'email',
                    placeholder: 'digite aqui seu email'
                },
                p3: {
                    tag: 'p',
                    textContent: 'Senha'
                },
                input3: {
                    tag: 'input',
                    type:'text', 
                    id: 'senha1',
                    placeholder: 'digite aqui sua senha'
                },
                p4: {
                    tag: 'p',
                    textContent: 'Verificar senha'
                },
                input4: {
                    tag: 'input',
                    type:'text', 
                    id: 'senha2',
                    placeholder: 'confirme aqui sua senha'
                },
                p5: {
                    tag: 'p',
                    innerHTML: 'Ainda não possui conta? <a onclick="limpar();criarModal(\'singUp\')">crie uma</a>!'
                },
                input5: {
                    tag: 'input',
                    type: 'submit',
                    value: 'conectar-se'
                }
            }
        }
    },
    'eolica': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Energia eólica', 
                    id:'modalEolica'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.'
                }, 
                
            }
        }
    },
    'nuclear': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Energia nuclear', 
                    id:'modalEolica'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.'
                }, 
                
            }
        }
    },
    'hidrelétrica': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Energia hidrelétrica', 
                    id:'modalEolica'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.'
                }, 
                
            }
        }
    },
    'solar': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Energia solar', 
                    id:'modalEolica'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.'
                }, 
                
            }
        }
    },
    'IA': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Inteligência Artificial', 
                    id:'modalEolica'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.'
                }, 
                
            }
        }
    },
    'Matriz': {
        button:{
            id: 'modalBtn',
            textContent: 'X'
        },
        div: {
            id: 'externa'
        }, 
        form:{
            id: 'interna', 
            method: 'POST',
            action: 'index.php',
            nodes: {
                h1:{
                    tag: 'h1',
                    textContent: 'Matrizes energéticas', 
                    id:'modalEolica'
                }, 
                p1:{
                    tag: 'p',
                    textContent:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam debitis quas eos exercitationem consectetur quod veniam itaque fugiat inventore aliquam soluta, minus quaerat doloribus et neque beatae! Distinctio, temporibus voluptate.'
                }, 
                
            }
        }
    },
}
function criarModal(tipo){
    tipo=modals[tipo];
    for(let tag in tipo){
        let elemento=document.createElement(tag);
        elemento.id=tipo[tag].id;
        if(!(tag=='div')){
            for(let atributo in tipo[tag]){
                if(atributo == 'nodes'){
                    let filhos = tipo[tag]['nodes']
                    for(let qual in filhos){
                        let x=0,
                            element;
                        for(let subelemento in filhos[qual]){
                            if(!x) {
                                element = document.createElement(filhos[qual][subelemento]);
                                x++
                            }
                            else{
                                element[subelemento]=filhos[qual][subelemento];
                            }
                        }
                        elemento.appendChild(element);
                    }
                }else elemento[atributo] = tipo[tag][atributo]
            }
        } 
        document.body.append(elemento);
    }
    document.getElementById('modalBtn').setAttribute('onclick', 'closeModal()');
    document.body.classList = 'semScroll';
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

let allEvents = {0: 'onabort',
    1: 'onafterprint',
    2: 'onanimationend',
    3: 'onanimationiteration',
    4: 'onanimationstart',
    5: 'onappinstalled',
    6: 'onauxclick',
    7: 'onbeforeinstallprompt',
    8: 'onbeforematch',
    9: 'onbeforeprint',
    10: 'onbeforeunload',
    11: 'onbeforexrselect',
    12: 'onblur',
    13: 'oncancel',
    14: 'oncanplay',
    15: 'oncanplaythrough',
    16: 'onchange',
    17: 'onclick',
    18: 'onclose',
    19: 'oncontextlost',
    20: 'oncontextmenu',
    21: 'oncontextrestored',
    22: 'oncuechange',
    23: 'ondblclick',
    24: 'ondevicemotion',
    25: 'ondeviceorientation',
    26: 'ondeviceorientationabsolute',
    27: 'ondrag',
    28: 'ondragend',
    29: 'ondragenter',
    30: 'ondragleave',
    31: 'ondragover',
    32: 'ondragstart',
    33: 'ondrop',
    34: 'ondurationchange',
    35: 'onemptied',
    36: 'onended',
    37: 'onerror',
    38: 'onfocus',
    39: 'onformdata',
    40: 'ongotpointercapture',
    41: 'onhashchange',
    42: 'oninput',
    43: 'oninvalid',
    44: 'onkeydown',
    45: 'onkeypress',
    46: 'onkeyup',
    47: 'onlanguagechange',
    48: 'onload',
    49: 'onloadeddata',
    50: 'onloadedmetadata',
    51: 'onloadstart',
    52: 'onlostpointercapture',
    53: 'onmessage',
    54: 'onmessageerror',
    55: 'onmousedown',
    56: 'onmouseenter',
    57: 'onmouseleave',
    58: 'onmousemove',
    59: 'onmouseout',
    60: 'onmouseover',
    61: 'onmouseup',
    62: 'onmousewheel',
    63: 'onoffline',
    64: 'ononline',
    65: 'onpagehide',
    66: 'onpageshow',
    67: 'onpause',
    68: 'onplay',
    69: 'onplaying',
    70: 'onpointercancel',
    71: 'onpointerdown',
    72: 'onpointerenter',
    73: 'onpointerleave',
    74: 'onpointermove',
    75: 'onpointerout',
    76: 'onpointerover',
    77: 'onpointerrawupdate',
    78: 'onpointerup',
    79: 'onpopstate',
    80: 'onprogress',
    81: 'onratechange',
    82: 'onrejectionhandled',
    83: 'onreset',
    84: 'onresize',
    85: 'onscroll',
    86: 'onsearch',
    87: 'onsecuritypolicyviolation',
    88: 'onseeked',
    89: 'onseeking',
    90: 'onselect',
    91: 'onselectionchange',
    92: 'onselectstart',
    93: 'onslotchange',
    94: 'onstalled',
    95: 'onstorage',
    96: 'onsubmit',
    97: 'onsuspend',
    98: 'ontimeupdate',
    99: 'ontoggle',
    100: 'ontransitioncancel',
    101: 'ontransitionend',
    102: 'ontransitionrun',
    103: 'ontransitionstart',
    104: 'onunhandledrejection',
    105: 'onunload',
    106: 'onvolumechange',
    107: 'onwaiting',
    108: 'onwebkitanimationend',
    109: 'onwebkitanimationiteration',
    110: 'onwebkitanimationstart',
    111: 'onwebkittransitionend',
    112: 'onwheel',
}