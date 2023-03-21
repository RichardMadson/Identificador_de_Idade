function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('![ERRO]! Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <= 2){
                //Bebe
                img.setAttribute('src','bebe.png')
            } else if(idade >=3 && idade <=12){
                //Criança Homem
                img.setAttribute('src','criancahomem.png')
            } else if(idade >=13 && idade <= 21){
                //Jovem Homem
                img.setAttribute('src','jovemhomem.png')
            } else if(idade >=22 && idade <=60){
                //Adulto Homem
                img.setAttribute('src','adultohomem.png')
            } else if(idade >=61){
                //Velho Homem
                img.setAttribute('src','velhohomem.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 2){
                //Bebe
                img.setAttribute('src','bebe.png')
            } else if(idade >=3 && idade <=12){
                //Criança Mulher
                img.setAttribute('src','criancamulher.png')
            } else if(idade >=13 && idade <= 21){
                //Jovem Mulher
                img.setAttribute('src','jovemmulher.png')
            } else if(idade >=22 && idade <=60){
                //Adulta Mulher
                img.setAttribute('src','adultomulher.png')
            } else if(idade >=61){
                //Velha Mulher
                img.setAttribute('src','velhamulher.png')
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}