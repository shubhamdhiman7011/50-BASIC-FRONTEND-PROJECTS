const panels=document.querySelectorAll('.panel')


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses() // function call to remove previous node
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove("active")
    } )
}