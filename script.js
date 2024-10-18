function showVantagens() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('vantagens').style.display = 'block';
}

function showPlanos() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('planos').style.display = 'block';
}

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('vantagens').style.display = 'none';
    document.getElementById('planos').style.display = 'none';
}
