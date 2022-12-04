import { inboxArray, notesArray, projectsArray} from './storage'

export function createInbox () {
    let tasks = document.createElement('div')
    tasks.className = 'inboxTasks'

    for (let i = 0; i < inboxArray.length; i++) {
        let taskDiv = document.createElement('div')
        let taskTitle = document.createElement('div')
        let taskDate = document.createElement('div')

        taskDiv.className = 'task'
        taskDiv.dataset.id = i
        taskTitle.textContent = inboxArray[i].taskInput
        taskDate.textContent = inboxArray[i].date

        taskDiv.appendChild(taskDate)
        taskDiv.appendChild(taskTitle)
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


        taskDiv.className = 'task'
        taskDiv.dataset.id = i
        taskTitle.textContent = notesArray[i].taskInput
        taskDate.textContent = notesArray[i].date

        taskDiv.appendChild(taskDate)
        taskDiv.appendChild(taskTitle)
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

        taskDiv.className = 'task'
        taskDiv.dataset.id = i
        taskTitle.textContent = projectsArray[i].taskInput
        taskDate.textContent = projectsArray[i].date

        taskDiv.appendChild(taskDate)
        taskDiv.appendChild(taskTitle)
        taskDiv.appendChild(removeTask(taskDiv.dataset.id))
        tasks.appendChild(taskDiv)
    }
    return tasks
}

export function createToday() {
    function leadingZero() {
        let today = new Date().getDate()
        if (today < 10) return today = '0' + today.toString().slice(-2) 
    }
    let dateToday = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${leadingZero()}`
    let sumArray = inboxArray.concat(notesArray, projectsArray)
    let todayTasks = document.createElement('div')
    todayTasks.className = 'todayTasks'
    let todayArray = sumArray.filter(el => { if (el.date == dateToday) return el.taskInput})
    for (let i = 0; i < todayArray.length; i++) {
        console.log(todayArray[i].taskInput)
        let task = document.createElement('div')
        task.textContent = todayArray[i].taskInput
        todayTasks.appendChild(task)
    }
    return todayTasks
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
    return removeBtn
}