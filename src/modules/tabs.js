const tabPanel = document.querySelector('.service-header')
    const tabs = document.querySelectorAll('.service-header-tab')
    const tabContant = document.querySelectorAll('.service-tab')
    
    
    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.service-header-tab')) { 
            const tabBtn = e.target.closest('.service-header-tab')
            tabs.forEach((tab, index) => { 
                if (tab === tabBtn) { 
                    tab.classList.add('active')
                    tabContant[index].classList.remove('d-none')
                } else {
                    tab.classList.remove('active')
                    tabContant[index].classList.add('d-none')
                }
            })
        }
    })