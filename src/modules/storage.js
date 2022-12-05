import {createInbox, createNotes} from './addTask'

export let inboxArray = []
export let notesArray = []
export let projectsArray = []

export function storage(taskInput, date, tab) {
    switch (tab[0]) {
        case 'I': 
            createInbox()
            inboxArray.push({taskInput, date});
            break;
        case 'N': 
            createNotes()
            notesArray.push({taskInput, date});
            break;
        case 'P': 
            tab = projectsArray;
            projectsArray.push({taskInput, date});
            break;
    }
    saveLocal()
    return storage
}

export function saveLocal() {
    //Updates local storage by saving arrays
    localStorage.setItem('inbox', JSON.stringify(inboxArray))
    localStorage.setItem('notes', JSON.stringify(notesArray))
    localStorage.setItem('projects', JSON.stringify(projectsArray))
}

export function loadLocal() {
    //Updates arrays to local storage
    inboxArray = JSON.parse(localStorage.getItem('inbox')) 
    notesArray = JSON.parse(localStorage.getItem('notes'))  
    projectsArray = JSON.parse(localStorage.getItem('projects')) 
}

