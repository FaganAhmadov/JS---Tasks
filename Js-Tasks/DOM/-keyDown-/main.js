const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        insert.innerHTML = `
    <div class='key'>
        Space
        <small>event.key</small>
    </div>
    <div class='key'>
        ${e.keyCode}
        <small>event.key</small>
    </div>
    <div class='key'>
        ${e.code}
        <small>event.key</small>
    </div>
    
    `
    } else {
        insert.innerHTML = `
    <div class='key'>
        ${e.key}
        <small>event.key</small>
    </div>
    <div class='key'>
        ${e.keyCode}
        <small>event.key</small>
    </div>
    <div class='key'>
        ${e.code}
        <small>event.key</small>
    </div>
    
    `
    }
})