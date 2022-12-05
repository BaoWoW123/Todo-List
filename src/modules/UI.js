import {createInbox,createNotes, createProjects, createToday } from "./addTask"
import {loadLocal, storage} from './storage'

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
        let removeBtn = document.createElement('button')

        date.setAttribute("type","date")
        addTaskBtn.textContent = 'Add'
        removeBtn.textContent = 'Remove'
        
        task.appendChild(taskInput)
        task.appendChild(date)
        task.appendChild(addTaskBtn)
        task.appendChild(removeBtn)
        addBtn.parentElement.appendChild(task)
        
//when add button clicked, create task into object then pushes to array
        addTaskBtn.onclick = () => {
            if (taskInput.value === '') return;
            storage(taskInput.value, date.value, display.textContent)
            switch(display.firstChild.textContent) {
                case 'Inbox':
                    return openInbox(display)
                case 'Notes':
                    return openNotes(display)
                case 'Projects':
                    return openProjects(display)
            }
        }
        removeBtn.onclick = () => {
           event.target.parentNode.remove()
        }
    }
    return addBtn
}

let openInbox = (display) => {
    display.innerHTML = 'Inbox'
    display.appendChild(addBtn(display))
    loadLocal()
    display.appendChild(createInbox())
}

let openNotes = (display) => {
    display.innerHTML = 'Notes'
    display.appendChild(addBtn(display))
    loadLocal()
    display.appendChild(createNotes())
}

let openProjects = (display) => {
    display.innerHTML = 'Projects'
    display.appendChild(addBtn(display))
    loadLocal()
    display.appendChild(createProjects())
}

let openToday = (display) => {
    let dateToday = new Date().toLocaleDateString("en-US")
    display.innerHTML = `${dateToday}`
    loadLocal()
    display.appendChild(createToday())
}

export default UI()

