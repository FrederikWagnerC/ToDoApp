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

function bygStatics() {
    bygTitle()
    bygFooter()
}

