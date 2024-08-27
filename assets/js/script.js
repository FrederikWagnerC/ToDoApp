const body = document.getElementById('app')
let myData = []

// SAVEDATA 
function saveData() {
    let saveableData = JSON.stringify(myData)
    localStorage.setItem('data', saveableData)
}

// ONLOAD 
addEventListener('load', (e) => {
    bygStatics()
    hentData()

})



// FUNCTION HENTER DATA FRA LOCALSTORAGE OG KONVERTERE DEN. 

function hentData() {
    let tempData = JSON.parse(localStorage.getItem('data'))
    if (!tempData) {
        myData = []
    } else {
        myData = tempData
    }

    bygListeSection()


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

function dataReceived() {
    bygListeSection()
}


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

function bygListeSectionElement() {
    const bygListeSectionElement = document.createElement('section')
    bygListeSectionElement.setAttribute('id', 'listeSection')
    body.appendChild(bygListeSectionElement)
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
        saveData()
        bygListeSection()
    })
    bygFooter.appendChild(bygNyListeKnap)
}

function bygStatics() {
    bygTitle()
    bygListeSectionElement()
    bygFooter()
}

function bygListeSection() {
    const listeSectionElement = document.getElementById('listeSection')
    listeSectionElement.innerHTML = ''
    
    for(let i = 0; i < myData.length; i++) {
        const bygListeSectionDiv = document.createElement('div')
        bygListeSectionDiv.setAttribute('id', 'listeSectionDiv')
        listeSectionElement.appendChild(bygListeSectionDiv)
        const bygListeSectionP = document.createElement('p')
        bygListeSectionP.append(myData[i].name)
        bygListeSectionDiv.appendChild(bygListeSectionP)
        const bygListeRemoveButton = document.createElement('p')
        bygListeRemoveButton.setAttribute('id', 'listeRemoveButton')
        bygListeRemoveButton.append('X')
        bygListeRemoveButton.addEventListener('click', (e) => {
            const listIndex = i
            event.target.parentElement.remove()
            myData.splice(listIndex,1)
            saveData()
            bygListeSection()
            
        })
        bygListeSectionDiv.appendChild(bygListeRemoveButton)
        
    }
}


