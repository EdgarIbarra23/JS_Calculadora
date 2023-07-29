function add(valor) {
    document.getElementById('enumeration').value += valor;
}

function deleteNumber() {
    document.getElementById('enumeration').value = '';
    document.getElementById('finalResult').value = '';
}

function result() {
    let data = document.getElementById('enumeration').value;

    const final = eval(data);

    document.getElementById('finalResult').value = final.toString();
}