const body = document.getElementById('app')
let myData = []
let listStatus = false

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



// LISTE ITEM SECTION 

function bygListeItemSection(listIndex) {
    const listeSectionElement = document.getElementById('listeSection')
    listeSectionElement.innerHTML = ''

    bygH1(listIndex)

    for (let i = 0; i < myData[listIndex].listItems.length; i++) {
        let ListItemIndex = i
        const bygListeItemSectionDiv = document.createElement('div')
        bygListeItemSectionDiv.setAttribute('id', 'listeSectionItemDiv' + i)
        listeSectionElement.appendChild(bygListeItemSectionDiv)

        const bygListeItemP = document.createElement('p')
        bygListeItemP.append(myData[listIndex].listItems[i].name)
        bygListeItemSectionDiv.appendChild(bygListeItemP)

        const bygListeItemCheckbox = document.createElement('input')
        bygListeItemCheckbox.setAttribute('type', 'checkbox')
        if(myData[listIndex].listItems[i].status === true) {
            bygListeItemCheckbox.checked = true;
        }
        bygListeItemCheckbox.addEventListener('click', (e) => {
            myData[listIndex].listItems[i].status = event.target.checked
            // console.log(event.target.checked);

            console.log(myData[listIndex].listItems[i].status);
            saveData()
            // console.log(myData);
            
            
            

        })
        bygListeItemSectionDiv.appendChild(bygListeItemCheckbox)

    }


}


// LISTE SECTION 

function bygListeSection() {
    const listeSectionElement = document.getElementById('listeSection')
    listeSectionElement.innerHTML = ''

    for (let i = 0; i < myData.length; i++) {
        const listIndex = i
        const bygListeSectionDiv = document.createElement('div')
        bygListeSectionDiv.setAttribute('id', 'listeSectionDiv' + i)
        listeSectionElement.appendChild(bygListeSectionDiv)

        const bygListeSectionP = document.createElement('p')
        bygListeSectionP.append(myData[i].name)
        bygListeSectionP.addEventListener('click', (e) => {
            bygListeItemSection(listIndex)
            listStatus = true;
            bygH1(listIndex)
            bygFooter(listIndex)

            return listIndex
        })

        bygListeSectionDiv.appendChild(bygListeSectionP)
        const bygListeRemoveButton = document.createElement('p')
        bygListeRemoveButton.setAttribute('id', 'listeRemoveButton')
        bygListeRemoveButton.append('X')
        bygListeRemoveButton.addEventListener('click', (e) => {

            event.target.parentElement.remove()
            myData.splice(listIndex, 1)
            saveData()
            bygListeSection()

        })
        bygListeSectionDiv.appendChild(bygListeRemoveButton)

    }
}

// LIST ITEM ADD BUTTON 
function listItemAddButton(listIndex) {
    let toDoItem = prompt('Type your ToDoItem')
    let newToDoItem = {
        name: toDoItem,
        status: false
    }
    myData[listIndex].listItems.push(newToDoItem)
    bygListeItemSection(listIndex)
    saveData()
}




// BYG H1 

function bygH1(listIndex) {
    const header = document.getElementById('header')
    header.innerHTML = ''
    const bygH1 = document.createElement('h1')
    bygH1.setAttribute('id', 'title')
    if (!listStatus) {
        bygH1.append('ToDoApp')
    } else if (listStatus) {
        bygH1.append(myData[listIndex].name)
    }
    // console.log(myData[listIndex])
    header.appendChild(bygH1)
}



// STATICS 

function bygTitle() {
    const bygHeader = document.createElement('header')
    bygHeader.setAttribute('id', 'header')
    body.appendChild(bygHeader)

    bygH1()
}

function bygListeSectionElement() {
    const bygListeSectionElement = document.createElement('section')
    bygListeSectionElement.setAttribute('id', 'listeSection')
    body.appendChild(bygListeSectionElement)
}

function bygFooter(listIndex) {
    let currentIndex = listIndex
    const footerElement = document.getElementById('footer')
    footerElement.innerHTML=''
    const bygFooterDiv = document.createElement('div')
    bygFooterDiv.setAttribute('id', 'footerDiv')
    footerElement.appendChild(bygFooterDiv)
    const footerDiv = document.getElementById('footerDiv')
    footerDiv.innerHTML = ''

    if (listStatus) {
        const bygTilbageButton = document.createElement('p')
        bygTilbageButton.setAttribute('id', 'tilbageButton')
        bygTilbageButton.append('<=')
        bygTilbageButton.addEventListener('click', (e) => {
            listStatus = false
            bygH1()
            bygListeSection()
            bygFooter()
        })
        bygFooterDiv.appendChild(bygTilbageButton)
    }
    const bygNyListeKnap = document.createElement('p')
    bygNyListeKnap.setAttribute('id', 'NyListeKnap')
    bygNyListeKnap.append('+')
    bygNyListeKnap.addEventListener('click', (e, listIndex) => {
        if (!listStatus) {
            let newListName = prompt('Name your ToDoList')
            let myList = {
                name: newListName,//key value pair
                listItems: []
            }
            myData.push(myList)
            saveData()
            bygListeSection()

        } else if (listStatus) {
            listIndex = currentIndex
            listItemAddButton(listIndex)

        }


    })
    bygFooterDiv.appendChild(bygNyListeKnap)
    
}

function bygFooterSection() {
    const bygFooterElement = document.createElement('footer')
    bygFooterElement.setAttribute('id', 'footer')
    body.appendChild(bygFooterElement)
    bygFooter()
}

function bygStatics() {
    bygTitle()
    bygListeSectionElement()
    bygFooterSection()
}


