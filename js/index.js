let box = document.querySelector('.box')
let p = document.querySelector('.box p')

const color_matching = [
    {
        bg_color: '#ff9301',
        p_color: '#6dd0fa'
    },
    {
        bg_color: '#ffdf17',
        p_color: '#a1774d'
    },
    {
        bg_color: '#f8624f',
        p_color: '#8097d6'
    },
    {
        bg_color: '#4a1985',
        p_color: '#f8b606'
    },
    {
        bg_color: '#c2b290',
        p_color: '#524235'
    },
    {
        bg_color: '#feae00',
        p_color: '#f85400'
    }
]

let current_index = 0
function randomColor() {
    let random_number = Math.ceil(Math.random() * 10) % color_matching.length;
    if (random_number == current_index) {
        randomColor()
    } else {
        current_index = random_number
    }
}

box.addEventListener('click', () => {
    randomColor()
    box.style['background-color'] = color_matching[current_index].bg_color
    p.style.color = color_matching[current_index].p_color
    p.style.animation = ''
    box.style.transform = ''
    setTimeout(() => {
        p.style.animation = 'move 1s';
        box.style.transform = 'scale(1.2)'
    }, 100)
    setTimeout(() => {
        box.style.transform = 'scale(1)'
    }, 1000)
})
