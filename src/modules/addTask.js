import { inboxArray, notesArray, projectsArray} from './storage'

//how to create according tab array then display the according taskObject(array  )

export function createInbox () {
    let tasks = document.createElement('div')

    for (let i = 0; i < inboxArray.length; i++) {
    let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')
        taskDiv.className = 'taskDiv'

        taskTitle.textContent = inboxArray[i].taskInput
        taskDate.textContent = inboxArray[i].date

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDate)
        tasks.appendChild(taskDiv)
    }
    return tasks
}

export function createNotes () {
    let tasks = document.createElement('div')

    for (let i = 0; i < notesArray.length; i++) {
    let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')
        taskDiv.className = 'taskDiv'

        taskTitle.textContent = notesArray[i].taskInput
        taskDate.textContent = notesArray[i].date

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDate)
        tasks.appendChild(taskDiv)
    }
    return tasks
}

export function createProjects() {
    let tasks = document.createElement('div')

    for (let i = 0; i < projectsArray.length; i++) {
    let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')
        taskDiv.className = 'taskDiv'

        taskTitle.textContent = projectsArray[i].taskInput
        taskDate.textContent = projectsArray[i].date

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDate)
        tasks.appendChild(taskDiv)
    }
    return tasks
}