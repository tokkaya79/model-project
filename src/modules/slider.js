console.log('slider');

const sliderBlock = document.querySelector('.portfolio-content')
const slides = document.querySelectorAll('.portfolio-item')
const listDots = document.querySelector('.portfolio-dots')
const timeInterval = 2000
const dot = document.getElementsByClassName('dot')


let currenSlide = 0
let interval


slides.forEach(() => {
    const getNewDot = () => {
        const newDot = document.createElement('li')
        newDot.classList.add('dot')
        listDots.append(newDot)// добавили в список 
          
    }
        getNewDot()
})


const prevSlider = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
}
const nextSlider = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
}

const autoSlide = () => {
    prevSlider(slides, currenSlide, 'portfolio-item-active')
    prevSlider(dot, currenSlide, 'dot-active')
    currenSlide++
    if (currenSlide >= slides.length) {
        currenSlide = 0
    }
    nextSlider(slides, currenSlide, 'portfolio-item-active')
    nextSlider(dot, currenSlide, 'dot-active')
}
const startSlader = (timer = 1500) => { //если не передадим, то по умолчанию 1,5сек
    interval = setInterval(autoSlide, timer)
}
const stopSlider = () => { //очищает данный интервал
    clearInterval(interval)
}

sliderBlock.addEventListener('click', (e) => {
    e.preventDefault() //при клике на стрелку нас выбрасывало на главную страницу, т.к. в html стоит решетка. этой функцией мы отменяем действие
    // console.log(e.target);//выведет то по чем кликаем
    if (!e.target.matches('.dot, .portfolio-btn')) { // обработка событий при клике на сам слайд не будет работать
        return
    }
    let dots = document.querySelectorAll('.dot')
    prevSlider(slides, currenSlide, 'portfolio-item-active')
    prevSlider(dots, currenSlide, 'dot-active')

    if (e.target.matches('#arrow-right')) {
        currenSlide++
    } else if (e.target.matches('#arrow-left')) {
        currenSlide--
    } else if (e.target.classList.contains('dot')) {
        dots.forEach((dot, index) => {
            if (e.target === dot) {
                currenSlide = index
            }
        })
    }
    if (currenSlide >= slides.length) {
        currenSlide = 0
    }
    if (currenSlide < 0) {
        currenSlide = slides.length -1 //-1 - 1 = 0(т.е. первый слайдер)
    }

    nextSlider(slides, currenSlide, 'portfolio-item-active')
    nextSlider(dot, currenSlide, 'dot-active')
})
//делаем чтобы слайдер замирал, когда мышкой наводим на стрелку или точку:
sliderBlock.addEventListener('mouseenter', (e) => { // при наведении мышкой
    if (e.target.matches('.dot, .portfolio-btn')) { 
        stopSlider()
    }

}, true) //true - чтобы перехватывать (ознакомиться с перехватами) будем получать все дочерние элементы родительского блока. если наведем на точки, получим точки, если на стрелки - стрелки. 
sliderBlock.addEventListener('mouseleave', (e) => {// при отводе мышки
    if (e.target.matches('.dot, .portfolio-btn')) { 
        startSlader(timeInterval)
    }
    
}, true) 

startSlader(timeInterval)