const ingrid = atletas[0];

    const espaço_nome = document.getElementById('nome');
    const imagem = document.querySelector('div#container > img');
    const espaço_descrição = document.querySelector('div#container > p');

    espaço_nome.innerText = ingrid.nome;
    imagem.src = ingrid.imagem;
    espaço_descrição.innerText = ingrid.descricao;

    const preenche = (atleta) => {
        espaço_nome.innerText = atleta.nome;
        imagem.src = atleta.imagem;
        espaço_descrição.innerText = atleta.descricao;
    }   
    preenche(ingrid);