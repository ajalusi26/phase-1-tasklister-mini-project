const submit = document.querySelector('#submit-btn')
const list = document.querySelector('#tasks')
const input = document.querySelector('#new-task-description')


submit.addEventListener("click", (e) => {
    e.preventDefault()
    let li = document.createElement('li')
    li.innerText = (`${input.value}  `)
    list.append(li)
    input.value = ""
    deleteButton(li)
})

function deleteButton(li){
    let button = document.createElement('button')
    button.innerText = "x"
    li.append(button)
    button.addEventListener("click", () => {
        li.style.display = 'none'
    })
}