import {taskObject} from './addTask'
import UI from './UI'

export let inboxArray = []
export let notesArray = []
export let projectsArray = []

export function storage(taskInput, date, tab) {
    switch (tab[0]) {
        case 'I': 
            inboxArray.push({taskInput, date});
            break;
        case 'N': 
            notesArray.push({taskInput, date});
            break;
        case 'P': 
            projectsArray.push({taskInput, date});
            break;
    }
    console.log('storage push 3')

    return storage
}