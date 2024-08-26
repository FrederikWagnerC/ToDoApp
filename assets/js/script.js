const body = document.getElementById('app')

// ONLOAD 
addEventListener('load', (e) => {
    let testStorage = localStorage.getItem('test')
    console.log(testStorage)
    // hentData()
    bygStatics()
    localStorage.setItem('test', 'asd')
})


// FUNCTION HENTER DATA FRA LOCALSTORAGE OG KONVERTERE DEN. 
    // MANGLER KONVERTERING

function hentData() {
    // localStorage.getItem() // MANGLER DATA
    // MANGLER KONVERTERING
    // if(error) {
    //     dataError()
    // } else {
    //     dataReceived()
    // }
}

// STATICS 

function bygTitle() {
    const bygHeader = document.createElement('header')
    bygHeader.setAttribute('id', 'header')
    body.appendChild(bygHeader)

    const bygH1 = document.createElement('h1')
    bygH1.setAttribute('id', 'title')
    bygH1.append('ToDoApp')
    bygHeader.appendChild(bygH1)
}

function bygStatics() {
    bygTitle()
    // bygFooter()
}

