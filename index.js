document.addEventListener('click', e => {
    if (e.target.matches('.menu-open-btn')) document.body.classList.add('menu-open')

    if (e.target.matches('.menu-close-btn') ||
        e.target.matches('.overlay')) document.body.classList.remove('menu-open')
})
