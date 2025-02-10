const pesquisaInput = document.getElementById('pesquisa');
const divCorBorda = document.getElementById('borda-div');
const IconDePesquisa = document.getElementById('icon-pesquisa');

// focus na cor da borda da div
pesquisaInput.addEventListener('focus', () =>{
    divCorBorda.classList.add('border-[#C81C6F]')
    })

pesquisaInput.addEventListener('blur', () =>{
    divCorBorda.classList.remove('border-[#C81C6F]')
    })
    
// focus na cor do icone de pesquisar
pesquisaInput.addEventListener('focus', () =>{
    IconDePesquisa.setAttribute('color', IconDePesquisa.getAttribute('color') === '#464646'? '#C81C6F' : '#464646')
    })

pesquisaInput.addEventListener('blur', () =>{
    IconDePesquisa.setAttribute('color', IconDePesquisa.getAttribute('color') === '#C81C6F'? '#464646' : '#C81C6F')
    })

