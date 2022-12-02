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
    return storage
}