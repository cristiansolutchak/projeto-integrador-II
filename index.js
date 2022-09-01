"use strict"
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

let conteudos = {'singIn': {h1:{textContent: "Sing In", id:"modalSingIn", }, }}



let allEvents = {0: "onabort",
    1: "onafterprint",
    2: "onanimationend",
    3: "onanimationiteration",
    4: "onanimationstart",
    5: "onappinstalled",
    6: "onauxclick",
    7: "onbeforeinstallprompt",
    8: "onbeforematch",
    9: "onbeforeprint",
    10: "onbeforeunload",
    11: "onbeforexrselect",
    12: "onblur",
    13: "oncancel",
    14: "oncanplay",
    15: "oncanplaythrough",
    16: "onchange",
    17: "onclick",
    18: "onclose",
    19: "oncontextlost",
    20: "oncontextmenu",
    21: "oncontextrestored",
    22: "oncuechange",
    23: "ondblclick",
    24: "ondevicemotion",
    25: "ondeviceorientation",
    26: "ondeviceorientationabsolute",
    27: "ondrag",
    28: "ondragend",
    29: "ondragenter",
    30: "ondragleave",
    31: "ondragover",
    32: "ondragstart",
    33: "ondrop",
    34: "ondurationchange",
    35: "onemptied",
    36: "onended",
    37: "onerror",
    38: "onfocus",
    39: "onformdata",
    40: "ongotpointercapture",
    41: "onhashchange",
    42: "oninput",
    43: "oninvalid",
    44: "onkeydown",
    45: "onkeypress",
    46: "onkeyup",
    47: "onlanguagechange",
    48: "onload",
    49: "onloadeddata",
    50: "onloadedmetadata",
    51: "onloadstart",
    52: "onlostpointercapture",
    53: "onmessage",
    54: "onmessageerror",
    55: "onmousedown",
    56: "onmouseenter",
    57: "onmouseleave",
    58: "onmousemove",
    59: "onmouseout",
    60: "onmouseover",
    61: "onmouseup",
    62: "onmousewheel",
    63: "onoffline",
    64: "ononline",
    65: "onpagehide",
    66: "onpageshow",
    67: "onpause",
    68: "onplay",
    69: "onplaying",
    70: "onpointercancel",
    71: "onpointerdown",
    72: "onpointerenter",
    73: "onpointerleave",
    74: "onpointermove",
    75: "onpointerout",
    76: "onpointerover",
    77: "onpointerrawupdate",
    78: "onpointerup",
    79: "onpopstate",
    80: "onprogress",
    81: "onratechange",
    82: "onrejectionhandled",
    83: "onreset",
    84: "onresize",
    85: "onscroll",
    86: "onsearch",
    87: "onsecuritypolicyviolation",
    88: "onseeked",
    89: "onseeking",
    90: "onselect",
    91: "onselectionchange",
    92: "onselectstart",
    93: "onslotchange",
    94: "onstalled",
    95: "onstorage",
    96: "onsubmit",
    97: "onsuspend",
    98: "ontimeupdate",
    99: "ontoggle",
    100: "ontransitioncancel",
    101: "ontransitionend",
    102: "ontransitionrun",
    103: "ontransitionstart",
    104: "onunhandledrejection",
    105: "onunload",
    106: "onvolumechange",
    107: "onwaiting",
    108: "onwebkitanimationend",
    109: "onwebkitanimationiteration",
    110: "onwebkitanimationstart",
    111: "onwebkittransitionend",
    112: "onwheel",
}