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
    verMais[3].style.display='none'
    oculta[3].style.display='block'
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
    let ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    maisrecomendados[0].style.display='none'
    ViuIssoAquiOculto[0].style.display='block'
}
function mostrarMais2(){
    let ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    maisrecomendados[1].style.display='none'
    ViuIssoAquiOculto[1].style.display='block'
}
function mostrarMais3(){
    let ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    maisrecomendados[2].style.display='none'
    ViuIssoAquiOculto[2].style.display='block'
}
function mostrarMais4(){
    let ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    maisrecomendados[3].style.display='none'
    ViuIssoAquiOculto[3].style.display='block'
}
function mostrarMais5(){
    let ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    maisrecomendados[4].style.display='none'
    ViuIssoAquiOculto[4].style.display='block'
}
function mostrarMais6(){
    let ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    maisrecomendados[5].style.display='none'
    ViuIssoAquiOculto[5].style.display='block'
}
function mostrarMais7(){
    var seta = document.getElementById("seta")
    var mostarMaisOculto = document.getElementById("mostarMaisOculto")
    seta.style.padding='8px'
    seta.style.boxShadow='-2px 2px 0 1px #C4170C inset'
    seta.style.border='solid transparent'
    seta.style.borderWidth='0 0 0.5px 0.5px'
    seta.style.transform='rotate(45deg)'
    var ViuIssoAquiOculto = document.getElementsByClassName("ViuIssoAquiOculto")[6]
    let maisrecomendados = document.getElementsByClassName("maisrecomendados")
    var mostarMais2 = document.getElementsByClassName("mostarMais1")[0]
    mostarMaisOculto.style.display='none'
    mostarMais2.style.display='flex'
    ViuIssoAquiOculto.style.display='block'
    maisrecomendados[6].appendChild(seta)
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
    let propaganda_container2 = document.getElementsByClassName("propaganda")
    let ViuIssoAqui = document.getElementsByClassName("ViuIssoAqui")
    let div_noticia = document.getElementsByClassName("div-noticia")
    let data = new Date()
    let segundos = data.getSeconds()
    if(segundos<20){
        ViuIssoAqui[1].style.display='none'
        ViuIssoAqui[2].style.display='block'
        ViuIssoAqui[4].style.display='none'
        ViuIssoAqui[5].style.display='block'
        ViuIssoAqui[7].style.display='none'
        ViuIssoAqui[8].style.display='block'
        
        cssDestaque[2].style.display='none'
        cssDestaque[0].style.display='grid'
    }else if(segundos<40){
        ViuIssoAqui[2].style.display='none'
        ViuIssoAqui[1].style.display='block'
        ViuIssoAqui[5].style.display='none'
        ViuIssoAqui[4].style.display='block'
        ViuIssoAqui[8].style.display='none'
        ViuIssoAqui[7].style.display='block'

        cssDestaque[0].style.display='none'
        cssDestaque[1].style.display='grid'   
    }else if(segundos<60){
        ViuIssoAqui[1].style.display='none'
        ViuIssoAqui[2].style.display='block'
        ViuIssoAqui[4].style.display='none'
        ViuIssoAqui[5].style.display='block'
        ViuIssoAqui[7].style.display='none'
        ViuIssoAqui[8].style.display='block'

        cssDestaque[1].style.display='none'
        cssDestaque[2].style.display='grid'   
    }
    if(segundos<6){
        propaganda_container2[3].style.display='none'
        propaganda_container2[0].style.display='flex'
        propaganda_container2[9].style.display='none'
        propaganda_container2[6].style.display='flex'
        propaganda_container2[15].style.display='none'
        propaganda_container2[12].style.display='flex'
        propaganda_container2[21].style.display='none'
        propaganda_container2[18].style.display='flex'
        propaganda_container2[27].style.display='none'
        propaganda_container2[24].style.display='flex'
        propaganda_container2[33].style.display='none'
        propaganda_container2[30].style.display='flex'
        propaganda_container2[39].style.display='none'
        propaganda_container2[36].style.display='flex'
        propaganda_container2[45].style.display='none'
        propaganda_container2[42].style.display='flex'
        propaganda_container2[51].style.display='none'
        propaganda_container2[48].style.display='flex'
        propaganda_container2[57].style.display='none'
        propaganda_container2[54].style.display='flex'
        propaganda_container2[63].style.display='none'
        propaganda_container2[60].style.display='flex'
        
        propDestaque[19].style.display='none'
        propDestaque[10].style.display='flex'
        propDestaque[9].style.display='none'
        propDestaque[0].style.display='flex'
    }else if(segundos<12){
        propaganda_container2[0].style.display='none'
        propaganda_container2[1].style.display='flex'
        propaganda_container2[6].style.display='none'
        propaganda_container2[7].style.display='flex'
        propaganda_container2[12].style.display='none'
        propaganda_container2[13].style.display='flex'
        propaganda_container2[18].style.display='none'
        propaganda_container2[19].style.display='flex'
        propaganda_container2[24].style.display='none'
        propaganda_container2[25].style.display='flex'
        propaganda_container2[30].style.display='none'
        propaganda_container2[31].style.display='flex'
        propaganda_container2[36].style.display='none'
        propaganda_container2[37].style.display='flex'
        propaganda_container2[42].style.display='none'
        propaganda_container2[43].style.display='flex'
        propaganda_container2[48].style.display='none'
        propaganda_container2[49].style.display='flex'
        propaganda_container2[54].style.display='none'
        propaganda_container2[55].style.display='flex'
        propaganda_container2[60].style.display='none'
        propaganda_container2[61].style.display='flex'

        propDestaque[0].style.display='none'
        propDestaque[1].style.display='flex'
        propDestaque[10].style.display='none'
        propDestaque[11].style.display='flex'
    }else if(segundos<18){
        propaganda_container2[1].style.display='none'
        propaganda_container2[2].style.display='flex'
        propaganda_container2[7].style.display='none'
        propaganda_container2[8].style.display='flex'
        propaganda_container2[13].style.display='none'
        propaganda_container2[14].style.display='flex'
        propaganda_container2[19].style.display='none'
        propaganda_container2[20].style.display='flex'
        propaganda_container2[25].style.display='none'
        propaganda_container2[26].style.display='flex'
        propaganda_container2[31].style.display='none'
        propaganda_container2[32].style.display='flex'
        propaganda_container2[37].style.display='none'
        propaganda_container2[38].style.display='flex'
        propaganda_container2[43].style.display='none'
        propaganda_container2[44].style.display='flex'
        propaganda_container2[49].style.display='none'
        propaganda_container2[50].style.display='flex'
        propaganda_container2[55].style.display='none'
        propaganda_container2[56].style.display='flex'
        propaganda_container2[61].style.display='none'
        propaganda_container2[62].style.display='flex'

        propDestaque[1].style.display='none'
        propDestaque[2].style.display='flex'
        propDestaque[11].style.display='none'
        propDestaque[12].style.display='flex'
    }else if(segundos<24){
        propaganda_container2[2].style.display='none'
        propaganda_container2[3].style.display='flex'
        propaganda_container2[8].style.display='none'
        propaganda_container2[9].style.display='flex'
        propaganda_container2[14].style.display='none'
        propaganda_container2[15].style.display='flex'
        propaganda_container2[20].style.display='none'
        propaganda_container2[21].style.display='flex'
        propaganda_container2[26].style.display='none'
        propaganda_container2[27].style.display='flex'
        propaganda_container2[32].style.display='none'
        propaganda_container2[33].style.display='flex'
        propaganda_container2[38].style.display='none'
        propaganda_container2[39].style.display='flex'
        propaganda_container2[44].style.display='none'
        propaganda_container2[45].style.display='flex'
        propaganda_container2[50].style.display='none'
        propaganda_container2[51].style.display='flex'
        propaganda_container2[56].style.display='none'
        propaganda_container2[57].style.display='flex'
        propaganda_container2[62].style.display='none'
        propaganda_container2[63].style.display='flex'

        propDestaque[2].style.display='none'
        propDestaque[3].style.display='flex'
        propDestaque[12].style.display='none'
        propDestaque[13].style.display='flex'
    }else if(segundos<30){
        propaganda_container2[3].style.display='none'
        propaganda_container2[4].style.display='flex'
        propaganda_container2[9].style.display='none'
        propaganda_container2[10].style.display='flex'
        propaganda_container2[15].style.display='none'
        propaganda_container2[16].style.display='flex'
        propaganda_container2[21].style.display='none'
        propaganda_container2[22].style.display='flex'
        propaganda_container2[27].style.display='none'
        propaganda_container2[28].style.display='flex'
        propaganda_container2[33].style.display='none'
        propaganda_container2[34].style.display='flex'
        propaganda_container2[39].style.display='none'
        propaganda_container2[40].style.display='flex'
        propaganda_container2[45].style.display='none'
        propaganda_container2[46].style.display='flex'
        propaganda_container2[51].style.display='none'
        propaganda_container2[52].style.display='flex'
        propaganda_container2[57].style.display='none'
        propaganda_container2[58].style.display='flex'
        propaganda_container2[63].style.display='none'
        propaganda_container2[64].style.display='flex'

        propDestaque[3].style.display='none'
        propDestaque[4].style.display='flex'
        propDestaque[13].style.display='none'
        propDestaque[14].style.display='flex'
    }else if(segundos<36){
        propaganda_container2[4].style.display='none'
        propaganda_container2[5].style.display='flex'
        propaganda_container2[10].style.display='none'
        propaganda_container2[11].style.display='flex'
        propaganda_container2[16].style.display='none'
        propaganda_container2[17].style.display='flex'
        propaganda_container2[22].style.display='none'
        propaganda_container2[23].style.display='flex'
        propaganda_container2[28].style.display='none'
        propaganda_container2[29].style.display='flex'
        propaganda_container2[34].style.display='none'
        propaganda_container2[35].style.display='flex'
        propaganda_container2[40].style.display='none'
        propaganda_container2[41].style.display='flex'
        propaganda_container2[46].style.display='none'
        propaganda_container2[47].style.display='flex'
        propaganda_container2[52].style.display='none'
        propaganda_container2[53].style.display='flex'
        propaganda_container2[58].style.display='none'
        propaganda_container2[59].style.display='flex'
        propaganda_container2[65].style.display='none'
        propaganda_container2[60].style.display='flex'
        propaganda_container2[64].style.display='none'
        propaganda_container2[65].style.display='flex'

        propDestaque[4].style.display='none'
        propDestaque[5].style.display='flex'
        propDestaque[14].style.display='none'
        propDestaque[15].style.display='flex'
    }else if(segundos<42){
        propaganda_container2[5].style.display='none'
        propaganda_container2[0].style.display='flex'
        propaganda_container2[11].style.display='none'
        propaganda_container2[6].style.display='flex'
        propaganda_container2[17].style.display='none'
        propaganda_container2[12].style.display='flex'
        propaganda_container2[23].style.display='none'
        propaganda_container2[18].style.display='flex'
        propaganda_container2[29].style.display='none'
        propaganda_container2[24].style.display='flex'
        propaganda_container2[35].style.display='none'
        propaganda_container2[30].style.display='flex'
        propaganda_container2[41].style.display='none'
        propaganda_container2[36].style.display='flex'
        propaganda_container2[47].style.display='none'
        propaganda_container2[42].style.display='flex'
        propaganda_container2[53].style.display='none'
        propaganda_container2[48].style.display='flex'
        propaganda_container2[59].style.display='none'
        propaganda_container2[54].style.display='flex'
        propaganda_container2[65].style.display='none'
        propaganda_container2[60].style.display='flex'

        propDestaque[5].style.display='none'
        propDestaque[6].style.display='flex'
        propDestaque[15].style.display='none'
        propDestaque[16].style.display='flex'
    }else if(segundos<48){
        propaganda_container2[0].style.display='none'
        propaganda_container2[1].style.display='flex'
        propaganda_container2[6].style.display='none'
        propaganda_container2[7].style.display='flex'
        propaganda_container2[12].style.display='none'
        propaganda_container2[13].style.display='flex'
        propaganda_container2[18].style.display='none'
        propaganda_container2[19].style.display='flex'
        propaganda_container2[24].style.display='none'
        propaganda_container2[25].style.display='flex'
        propaganda_container2[30].style.display='none'
        propaganda_container2[31].style.display='flex'
        propaganda_container2[36].style.display='none'
        propaganda_container2[37].style.display='flex'
        propaganda_container2[42].style.display='none'
        propaganda_container2[43].style.display='flex'
        propaganda_container2[48].style.display='none'
        propaganda_container2[49].style.display='flex'
        propaganda_container2[54].style.display='none'
        propaganda_container2[55].style.display='flex'
        propaganda_container2[60].style.display='none'
        propaganda_container2[61].style.display='flex'

        propDestaque[6].style.display='none'
        propDestaque[7].style.display='flex'
        propDestaque[16].style.display='none'
        propDestaque[17].style.display='flex'
    }else if(segundos<54){
        propaganda_container2[1].style.display='none'
        propaganda_container2[2].style.display='flex'
        propaganda_container2[7].style.display='none'
        propaganda_container2[8].style.display='flex'
        propaganda_container2[13].style.display='none'
        propaganda_container2[14].style.display='flex'
        propaganda_container2[19].style.display='none'
        propaganda_container2[20].style.display='flex'
        propaganda_container2[25].style.display='none'
        propaganda_container2[26].style.display='flex'
        propaganda_container2[31].style.display='none'
        propaganda_container2[32].style.display='flex'
        propaganda_container2[37].style.display='none'
        propaganda_container2[38].style.display='flex'
        propaganda_container2[43].style.display='none'
        propaganda_container2[44].style.display='flex'
        propaganda_container2[49].style.display='none'
        propaganda_container2[50].style.display='flex'
        propaganda_container2[55].style.display='none'
        propaganda_container2[56].style.display='flex'
        propaganda_container2[61].style.display='none'
        propaganda_container2[62].style.display='flex'

        propDestaque[7].style.display='none'
        propDestaque[8].style.display='flex'
        propDestaque[17].style.display='none'
        propDestaque[18].style.display='flex'
    }else if(segundos<60){
        propaganda_container2[2].style.display='none'
        propaganda_container2[3].style.display='flex'
        propaganda_container2[8].style.display='none'
        propaganda_container2[9].style.display='flex'
        propaganda_container2[14].style.display='none'
        propaganda_container2[15].style.display='flex'
        propaganda_container2[20].style.display='none'
        propaganda_container2[21].style.display='flex'
        propaganda_container2[26].style.display='none'
        propaganda_container2[27].style.display='flex'
        propaganda_container2[32].style.display='none'
        propaganda_container2[33].style.display='flex'
        propaganda_container2[38].style.display='none'
        propaganda_container2[39].style.display='flex'
        propaganda_container2[44].style.display='none'
        propaganda_container2[45].style.display='flex'
        propaganda_container2[50].style.display='none'
        propaganda_container2[51].style.display='flex'
        propaganda_container2[56].style.display='none'
        propaganda_container2[57].style.display='flex'
        propaganda_container2[62].style.display='none'
        propaganda_container2[63].style.display='flex'

        propDestaque[8].style.display='none'
        propDestaque[9].style.display='flex'
        propDestaque[18].style.display='none'
        propDestaque[19].style.display='flex'
    }
   
}
setInterval(propDestaque1, 2000)
