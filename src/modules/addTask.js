import {storage, inboxArray, notesArray, projectsArray} from './storage'
import UI from './UI'


export function taskObject(taskInput, date) {
    let inbox = document.createElement('div')
    for (let i = 0; i < inboxArray.length; i++) {
        inbox.appendChild(createTaskDiv(i))
    }
    console.log('create taskDivs 4')
    return inbox
}

function createTaskDiv (i) {
    let taskDiv = document.createElement('div')
    let taskTitle = document.createElement('div')
    let taskDate = document.createElement('div')
    taskDiv.className = 'taskDiv'

    taskTitle.textContent = inboxArray[i].taskInput
    taskDate.textContent = inboxArray[i].date

    taskDiv.appendChild(taskTitle)
    taskDiv.appendChild(taskDate)

    return taskDiv
}