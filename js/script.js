const snack1Input = document.getElementById('snack1-input');
const snack1Button = document.getElementById('snack1-button');
snack1Button.addEventListener('click', snack1);

function snack1() {
    let snack1Valore = snack1Input.value % 2;
    const snack1Risultato = document.querySelector('.risultato');
    if (snack1Valore == 0){
        snack1Risultato.innerHTML = snack1Input.value;
    } else {
        snack1Risultato.innerHTML = parseInt(snack1Input.value) + 1;
    }
}

const nomiFamosi = ['Jimi','Axl','Bob','Frank','Ozzy']
const cognomiFamosi = ['Hendrix','Rose','Zappa','Osbourne','Dylan']
const snack2Button = document.getElementById('snack2-button');
snack2Button.addEventListener('click', snack2);

function snack2() {
    document.getElementById('titoloLista').classList.remove('d-none');
    let riga1 = document.createElement('div');
    let riga2 = document.createElement('div');
    riga1.classList.add('col-6','d-inline','artista');
    riga2.classList.add('col-6','d-inline','artista');

    for (i = 0; i < nomiFamosi.length; i++ ){
        let randomNomi = (Math.floor(Math.random() * nomiFamosi.length));
        riga1.innerText = nomiFamosi[randomNomi];

        console.log(nomiFamosi[randomNomi])
    }

    for (i = 0; i < cognomiFamosi.length; i++ ){
        let randomNomi = (Math.floor(Math.random() * cognomiFamosi.length));
        riga2.innerText = cognomiFamosi[randomNomi];

        console.log(cognomiFamosi[randomNomi])
    }

    let risultato2 = document.querySelector('.risultato2')
    risultato2.append(riga1,riga2);
}

const resetLista = document.getElementById('snack2-reset');
resetLista.addEventListener('click', snack2Reset);

function snack2Reset() {
    document.getElementById('titoloLista').classList.add('d-none');
    const snack2Reset = document.querySelector('.risultato2');
    while (snack2Reset.firstChild) {
        snack2Reset.removeChild(snack2Reset.firstChild);
    }
}