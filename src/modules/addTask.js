import { inboxArray, notesArray, projectsArray} from './storage'

export function createInbox () {
    let tasks = document.createElement('div')
    tasks.className = 'inboxTasks'

    for (let i = 0; i < inboxArray.length; i++) {
        let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')

        taskDiv.dataset.id = i
        taskTitle.textContent = inboxArray[i].taskInput
        taskDate.textContent = inboxArray[i].date

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDate)
        taskDiv.appendChild(removeTask(taskDiv.dataset.id))
        tasks.appendChild(taskDiv)
    }
    return tasks
}

export function createNotes () {
    let tasks = document.createElement('div')
    tasks.className = 'notesTasks'

    for (let i = 0; i < notesArray.length; i++) {
        let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')

        taskDiv.dataset.id = i
        taskTitle.textContent = notesArray[i].taskInput
        taskDate.textContent = notesArray[i].date

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDate)
        taskDiv.appendChild(removeTask(taskDiv.dataset.id))
        tasks.appendChild(taskDiv)
    }
    return tasks
}

export function createProjects() {
    let tasks = document.createElement('div')
    tasks.className = 'projectsTasks'

    for (let i = 0; i < projectsArray.length; i++) {
        let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')

        taskDiv.dataset.id = i
        taskTitle.textContent = projectsArray[i].taskInput
        taskDate.textContent = projectsArray[i].date

        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(taskDate)
        taskDiv.appendChild(removeTask(taskDiv.dataset.id))
        tasks.appendChild(taskDiv)
    }
    return tasks
}

function removeTask(id) {
    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'X'
    removeBtn.addEventListener('click', () => {
        switch (event.target.parentElement.parentElement.className) {
            case 'inboxTasks': 
                inboxArray.splice(id, 1)
                return (event.target.parentElement).remove()
            case 'notesTasks':
                notesArray.splice(id, 1)
                return (event.target.parentElement).remove()
            case 'projectsTasks':
                projectsArray.splice(id, 1)
                return (event.target.parentElement).remove()
        }
    })
    console.log(inboxArray, notesArray, projectsArray)
    return removeBtn
}