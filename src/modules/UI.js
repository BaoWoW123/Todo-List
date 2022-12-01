import { taskObject } from "./addTask"
import {storage, inboxArray, notesArray, projectsArray} from './storage'

let UI = () => {
    let inbox = document.querySelector('.inboxTab')
    let today = document.querySelector('.todayTab')
    let notes = document.querySelector('.notesTab')
    let projects = document.querySelector('.projectsTab')
    let display = document.querySelector('.display')

    inbox.onclick = () => openInbox(display)
    today.onclick = () => openToday(display)
    notes.onclick = () => openNotes(display)
    projects.onclick = () => openProjects(display)
}
function addBtn(display) {
    let addBtn = document.createElement('button')
    addBtn.className = 'addBtn'
    addBtn.textContent = 'Add +'
    addBtn.onclick = addTask

     function addTask() {
        let task = document.createElement('div')
        let taskInput = document.createElement('input')
        let date = document.createElement('input')
        let addTaskBtn = document.createElement('button')
        let removeTaskBtn = document.createElement('button')

        date.setAttribute("type","date")
        addTaskBtn.textContent = 'Add'
        removeTaskBtn.textContent = 'Remove'
        
        task.appendChild(taskInput)
        task.appendChild(date)
        task.appendChild(addTaskBtn)
        task.appendChild(removeTaskBtn)
        addBtn.parentElement.appendChild(task)
        
//when add button clicked, create task into object then pushes to array
        addTaskBtn.onclick = () => {
            console.log('addBtn click 2')
            storage(taskInput.value, date.value, display.textContent)
            taskObject()
            openInbox(display)
        }
    }
    return addBtn
}

let openInbox = (display) => {
    console.log('display 1')
    display.innerHTML = 'Inbox'
    display.appendChild(addBtn(display))
    display.appendChild(taskObject())
}

let openNotes = (display) => {
    display.innerHTML = 'Notes'
    display.appendChild(addBtn(display))
}

let openProjects = (display) => {
    display.innerHTML = 'Projects'
    display.appendChild(addBtn(display))
}

let openToday = (display) => {
    display.innerHTML = 'Today'
}
export default UI()