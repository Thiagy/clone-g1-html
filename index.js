function vejaMais1(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[0].style.display='none'
    verMais[1].style.display='flex'
    oculta[0].style.display='block'
}
function vejaMais2(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[1].style.display='none'
    verMais[2].style.display='flex'
    oculta[1].style.display='block'
}
function vejaMais3(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[2].style.display='none'
    verMais[3].style.display='flex'
    oculta[2].style.display='block'
}
function vejaMais4(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[3].style.display='none'
    oculta[3].style.display='block'
}
function vejaMais5(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[4].style.display='none'
    verMais[5].style.display='flex'
    oculta[4].style.display='block'
}
function vejaMais6(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[5].style.display='none'
    verMais[6].style.display='flex'
    oculta[5].style.display='block'
}
function vejaMais7(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[6].style.display='none'
    verMais[7].style.display='flex'
    oculta[6].style.display='block'
}
function vejaMais8(){
    var oculta = document.getElementsByClassName("oculta")
    var verMais = document.getElementsByClassName("vejaMais")
    verMais[7].style.display='none'
    oculta[7].style.display='block'
}
function mostrarMais1(){
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[0]
    var mostarMais = document.getElementsByClassName("mostarMais")[0]
    mostarMais.innerHTML=''
    ViuIssoAquiOculto.style.display='block'
}
function mostrarMais2(){
    var seta = document.getElementById("seta")
    seta.style.padding='8px'
    seta.style.boxShadow='-2px 2px 0 1px #C4170C inset'
    seta.style.border='solid transparent'
    seta.style.borderWidth='0 0 0.5px 0.5px'
    seta.style.transform='rotate(45deg)'
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[1]
    var mostarMais = document.getElementsByClassName("mostarMais")[1]
    mostarMais.innerHTML='Tudo sobre Rock in Rio'
    ViuIssoAquiOculto.style.display='block'
    mostarMais.appendChild(seta)
}
function mostrarMais3(){
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[2]
    var mostarMais = document.getElementsByClassName("mostarMais")[2]
    mostarMais.innerHTML=''
    ViuIssoAquiOculto.style.display='block'
}
function mostrarMais4(){
    var seta = document.getElementById("seta")
    seta.style.padding='8px'
    seta.style.boxShadow='-2px 2px 0 1px #C4170C inset'
    seta.style.border='solid transparent'
    seta.style.borderWidth='0 0 0.5px 0.5px'
    seta.style.transform='rotate(45deg)'
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[3]
    var mostarMais = document.getElementsByClassName("mostarMais")[3]
    mostarMais.innerHTML='Tudo sobre Jornal Nacional'
    ViuIssoAquiOculto.style.display='block'
    mostarMais.appendChild(seta)
}
function mostrarMais5(){
    var seta = document.getElementById("seta")
    seta.style.padding='8px'
    seta.style.boxShadow='-2px 2px 0 1px #C4170C inset'
    seta.style.border='solid transparent'
    seta.style.borderWidth='0 0 0.5px 0.5px'
    seta.style.transform='rotate(45deg)'
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[4]
    var mostarMais = document.getElementsByClassName("mostarMais")[4]
    mostarMais.innerHTML='Tudo sobre blogs'
    ViuIssoAquiOculto.style.display='block'
    mostarMais.appendChild(seta)
}
function mostrarMais6(){
    var seta = document.getElementById("seta")
    var mostarMaisOculto = document.getElementById("mostarMaisOculto")
    seta.style.padding='8px'
    seta.style.boxShadow='-2px 2px 0 1px #C4170C inset'
    seta.style.border='solid transparent'
    seta.style.borderWidth='0 0 0.5px 0.5px'
    seta.style.transform='rotate(45deg)'
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[5]
    var mostarMais1 = document.getElementsByClassName("mostarMais")[5]
    var mostarMais2 = document.getElementsByClassName("mostarMais1")[0]
    mostarMaisOculto.style.display='none'
    mostarMais2.style.display='flex'
    ViuIssoAquiOculto.style.display='block'
    mostarMais1.appendChild(seta)
}
function setaSlide2(){
    var setaE = document.getElementById("setaSlide1pg1")
    var setaD = document.getElementById("setaSlide2pg2")
    setaD.style.padding='5px'
    setaD.style.boxShadow='-2px 2px 0 1px transparent inset'
    setaD.style.border='solid transparent'
    setaD.style.borderWidth='0 0 0.5px 0.5px'
    setaD.style.transform='rotate(45deg)'
    setaE.style.border='solid black'
    setaE.style.borderWidth='0 0 2px 2px'
    setaE.style.boxShadow='black inset'
    setaE.style.cursor='pointer'
}
function setaSlide1(){
    var setaE = document.getElementById("setaSlide1pg1")
    var setaD = document.getElementById("setaSlide2pg2")
    setaE.style.padding='5px'
    setaE.style.boxShadow='-2px 2px 0 1px transparent inset'
    setaE.style.border='solid transparent'
    setaE.style.borderWidth='0 0 0.5px 0.5px'
    setaD.style.transform='rotate(225deg)'
    setaD.style.border='solid black'
    setaD.style.borderWidth='0 0 2px 2px'
    setaD.style.boxShadow='black inset'
    setaD.style.cursor='pointer'
}
function vejaMaispg2(){
    var vejaMais_pg2 = document.getElementById("vejaMais-pg2")
    var oculta_p2 = document.getElementById("oculta-p2")
    oculta_p2.style.display="block"
    vejaMais_pg2.style.display="none"
}
function slide1(){
    var setaSlide1 =document.getElementById("setaSlide1")
    var setaSlide2 =document.getElementById("setaSlide2")
    var slide1 = document.getElementById("slide1")
    var slide2 = document.getElementById("slide2")
    slide1.style.display='none'
    slide2.style.display='flex'
    setaSlide2.style.boxShadow='-2px 2px 0 1px #0000006c'
    setaSlide1.style.boxShadow='-2px 2px 0 1px black'
}
function slide2(){
    var setaSlide1 =document.getElementById("setaSlide1")
    var setaSlide2 =document.getElementById("setaSlide2")
    var slide1 = document.getElementById("slide1")
    var slide2 = document.getElementById("slide2")
    slide1.style.display='flex'
    slide2.style.display='none'
    setaSlide2.style.boxShadow='-2px 2px 0 1px black'
    setaSlide1.style.boxShadow='-2px 2px 0 1px #0000006c'
}
function propDestaque1(){
    let propDestaque= document.getElementsByClassName("propaganda-destaque")
    let cssDestaque= document.getElementsByClassName("cssDestaque")
    let divNoticia = document.getElementsByClassName("div-noticia")
    let data = new Date()
    let segundos = data.getSeconds()
    let index = 0
    if(segundos<20){
        cssDestaque[2].style.display='none'
        cssDestaque[0].style.display='grid'
    }else if(segundos<40){
        cssDestaque[0].style.display='none'
        cssDestaque[1].style.display='grid'   
    }else if(segundos<60){
        cssDestaque[1].style.display='none'
        cssDestaque[2].style.display='grid'   
    }
    if(segundos<6){
        propDestaque[19].style.display='none'
        propDestaque[10].style.display='flex'
        propDestaque[9].style.display='none'
        propDestaque[0].style.display='flex'
    }else if(segundos<12){
        propDestaque[0].style.display='none'
        propDestaque[1].style.display='flex'
        propDestaque[10].style.display='none'
        propDestaque[11].style.display='flex'
    }else if(segundos<18){
        propDestaque[1].style.display='none'
        propDestaque[2].style.display='flex'
        propDestaque[11].style.display='none'
        propDestaque[12].style.display='flex'
    }else if(segundos<24){
        propDestaque[2].style.display='none'
        propDestaque[3].style.display='flex'
        propDestaque[12].style.display='none'
        propDestaque[13].style.display='flex'
    }else if(segundos<30){
        propDestaque[3].style.display='none'
        propDestaque[4].style.display='flex'
        propDestaque[13].style.display='none'
        propDestaque[14].style.display='flex'
    }else if(segundos<36){
        propDestaque[4].style.display='none'
        propDestaque[5].style.display='flex'
        propDestaque[14].style.display='none'
        propDestaque[15].style.display='flex'
    }else if(segundos<42){
        propDestaque[5].style.display='none'
        propDestaque[6].style.display='flex'
        propDestaque[15].style.display='none'
        propDestaque[16].style.display='flex'
    }else if(segundos<48){
        propDestaque[6].style.display='none'
        propDestaque[7].style.display='flex'
        propDestaque[16].style.display='none'
        propDestaque[17].style.display='flex'
    }else if(segundos<54){
        propDestaque[7].style.display='none'
        propDestaque[8].style.display='flex'
        propDestaque[17].style.display='none'
        propDestaque[18].style.display='flex'
    }else if(segundos<60){
        propDestaque[8].style.display='none'
        propDestaque[9].style.display='flex'
        propDestaque[18].style.display='none'
        propDestaque[19].style.display='flex'
    }
   
}
setInterval(propDestaque1, 2000)
