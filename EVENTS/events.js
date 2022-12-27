var button = document.getElementById('button')
var off = document.getElementById('off')

button.addEventListener('click', function onClick(event){
    document.body.style.background = 'salmon'
})

off.addEventListener('click', function onClick(event){
    document.body.style.background = '#39399b'
})