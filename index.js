function vejaMais(){
    var oculta = document.getElementsByClassName("oculta")[0]
    var verMais = document.getElementById("vejaMais")
    oculta.style.display="block"
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
function slide(){
    var slide1 = document.getElementById("slide1")
    var slide2 = document.getElementById("slide2")
    slide1.style.display='none'
    slide2.style.display='flex'
}
