const url = new URL(window.location.href.toString())
const id  = url.searchParams.get('id')

const player = document.getElementById('player')
player.setAttribute('src',`https://www.youtube.com/embed/${id}`)