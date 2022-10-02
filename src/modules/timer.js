    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerseconds = document.getElementById('timer-seconds')
    const timeNumber = document.querySelector('.timer-numbers')
    // const spanList = timeNumber.querySelectorAll('.timer-numbers')


    const timerDays = document.createElement('span')
    const points = document.createElement('span')


    timeNumber.append(timerDays)
    timeNumber.append(points)
    timeNumber.prepend(timerDays)
    points.textContent = ' :'
    timerDays.after(points)

    const getTimeRemaining = (deadline) => {
        
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours = Math.floor((timeRemaining / 60 / 60) % 24)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60) //округление до целочисленного числа
    
    return { timeRemaining, days, hours, minutes, seconds }    
    
}

    const updateClock = () => {
            let getTime = getTimeRemaining('13 september 2023 18:11:00')

            timerDays.textContent = getTime.days
            timerHours.textContent = ('0' + getTime.hours).slice(-2)
            timerMinutes.textContent = ('0' + getTime.minutes).slice(-2)
            timerseconds.textContent = ('0' + getTime.seconds).slice(-2)

            if (getTime.timeRemaining > 0) {
                setTimeout(updateClock, 1000)
            } else if (getTime.timeRemaining <= 0) {
                timerDays.textContent = '0'
                timerHours.textContent = '00'
                timerMinutes.textContent = '00'
                timerseconds.textContent = '00'
                console.log();

            }
    }
   
updateClock()