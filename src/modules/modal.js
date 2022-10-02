const menuBtn = document.querySelector('.menu') 
const menu = document.querySelector('menu') 
const closeBtn = menu.querySelector('.close-btn') 
const menuItems = menu.querySelectorAll('ul>li>a') 
const modal = document.querySelector('.popup')
const buttons = document.querySelectorAll('.popup-btn')
const popupContent = modal.querySelector('.popup-content')



// let count = 0
// let idInterval

//по клику вызываем модальное окно:
buttons.forEach(btn => { 
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })
})
// при нажатии на закладку открываем соответствующую информацию:  
const handlMenu = () => { 
    menu.classList.toggle('active-menu')  
}

menuBtn.addEventListener('click', handlMenu)
closeBtn.addEventListener('click', handlMenu)
menuItems.forEach(menuItem => menuItem.addEventListener('click', handlMenu))


//закрывается модальное окно при клике в любом месте экрана, но не на самом модальном окне:
modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) { 
        modal.style.display = 'none'
    }
})

//анимация для модального окна (универсальная запись):
const animate = ({timing, draw, duration}) => { 

    let start = performance.now() 

    requestAnimationFrame(function animate(time) { 
        let timeFraction = (time - start) / duration 
        if (timeFraction > 1)  timeFraction = 1

        let progress = timing(1, timeFraction)

        draw(progress) 

        if (timeFraction < 1) {
            requestAnimationFrame(animate)
        }
        
    })
}
//задача параметров для конкретной анимации:
setTimeout(() => { // чтобы функция выполнялась через 1,5 секунды, как раз загрузится страница
    animate({
        duration: 3000,
        timing(x, timeFraction) {
            return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
        },
        draw(progress) {
        //    block.style.left = 50 + '%' // блок переместится в лево на 50% быстро
           popupContent.style.left = (40 * progress) + '%' // блок переместится в лево медленно
           popupContent.style.top = (25 * progress) + '%' //блок пойдет по диагонали
           popupContent.style.opacity = progress // блок исчезает через 1,5 сек 
        }
    })
}, 1000)