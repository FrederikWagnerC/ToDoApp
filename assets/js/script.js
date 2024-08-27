const body = document.getElementById('app')
let myData = []

// SAVEDATA 
function saveData() {
    let saveableData = JSON.stringify(myData)
    localStorage.setItem('data', saveableData)
}

// ONLOAD 
addEventListener('load', (e) => {
    readData()
    hentData()
    bygStatics()

})

function readData() {

}


// FUNCTION HENTER DATA FRA LOCALSTORAGE OG KONVERTERE DEN. 

function hentData() {
    let tempData = JSON.parse(localStorage.getItem('data'))
    if (!tempData) {
        myData = []
    } else {
        myData = tempData
    }



    // if(error) {
    //     dataError()
    // } else {
    //     dataReceived()
    // }
    console.log(myData)


}

window.addEventListener('beforeunload', (e) => {
    saveData()
    // localStorage.clear()
})


// VIEWCODE ----------------------------------------------------------------------------

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

function bygFooter() {
    const bygFooter = document.createElement('footer')
    bygFooter.setAttribute('id', 'footer')
    body.appendChild(bygFooter)

    const bygNyListeKnap = document.createElement('p')
    bygNyListeKnap.setAttribute('id', 'NyListeKnap')
    bygNyListeKnap.append('+')
    bygNyListeKnap.addEventListener('click', (e) => {
        let myList = {
            name: 'New List',//key value pair
            listItems: []
        }

        myData.push(myList)
        console.log(myData)
        // console.log(JSON.stringify(myData));

    })
    bygFooter.appendChild(bygNyListeKnap)
}

function bygStatics() {
    bygTitle()
    bygFooter()
}



