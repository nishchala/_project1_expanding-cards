const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeactive_func()
        panel.classList.add('active')
    })
    
});

function removeactive_func() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}