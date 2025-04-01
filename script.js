document.getElementById('adicionarInfo').addEventListener('click',function(){
    document.getElementById('nomeInfoForm').style.display = 'block';
});

document.getElementById('salvarInfo').addEventListener('click', function(){
    let novaInfo = document.getElementById('novaInfo').value;
    if(novaInfo){
        let p = document.createElement('p');
        p.textContent = novaInfo;
        document.getElementById('perfil').appendChild(p);
        document.getElementById('nomeInfoForm').style.display = 'none';
        document.getElementById('novaInfo').value = '';
    }
});

document.getElementById('removerInfo').addEventListener('click', function(){
    let perfil = document.getElementById('perfil');
    let paragraphs = perfil.getElementsByTagName('p');
    if(paragraphs.length > 0){
        perfil.removeChild(paragraphs[paragraphs.length-1]);
    }
});