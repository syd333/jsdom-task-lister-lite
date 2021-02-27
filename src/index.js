document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', function(e){

    const input = document.getElementById('new-task-description')
    e.preventDefault()

    const ul = document.getElementById('tasks')
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const text = document.createElement('text')

    btn.textContent ='x'
    text.textContent = input.value + ' '
    btn.addEventListener('click', function (e){
      e.target.parentNode.remove()
    })

    li.appendChild(text)
    ul.appendChild(li)
    li.appendChild(btn)

    input.value = ""

  })

})
