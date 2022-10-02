const sendForm = ({ formId, someElem = [] }) => { 
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div') 
    const loadText = 'Loading...'
    const errorText = 'Something wrong!'
    const successText = 'Thank You, our menedger will call soon!'
    const formPhone = document.querySelectorAll('.form-phone')

    console.dir(formPhone);

    // form.addEventListener('submit', (e) => {
    //     formPhone.value = e.target.value

    //     if(/[a-zA-Zа-яА-Я\,\.\:\;\_]/g.test(formPhone.value) && formPhone.value === '') {
    
    //                 alert('wrong phone!')
    //             }

    // })

    
    const validate = () => {
        let success = true

          
        
        return success
    }
    
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
    
    const submitForm = () => {
        
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form) 
        const formBody = {}
        
        statusBlock.textContent = loadText
        statusBlock.style.color = 'white'
        form.append(statusBlock)
        
        
        formData.forEach((val, key) => {
            formBody[key] = val 
        })
       
        someElem.forEach(elem => { 
            const element = document.getElementById(elem.id)
            console.log(element) // <span id="total">0</span>
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
        
            }
        })
        
        console.log('submit');
        if (validate(formElements)) {
            sendData(formBody).then(data => { 
                statusBlock.textContent = successText 
                formElements.forEach(input => { 
                    input.value = ''
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText 
            })
        } else {
            alert('Data is not valid!!!')
        }
        
        }
    
        try { 
    
            if (!form) { 
                throw new Error('Please, return the FORM!!!') 
            }
                form.addEventListener('submit', (e) => {
                e.preventDefault()
    
                submitForm()
            })
        } catch(error) { 
                console.log(error.message);
        }
    }
    
    sendForm({ 
        formId: 'form1', 
        someElem: [
            {
            type: 'block',
            id: 'total' 
            }
        ] 
    })
    sendForm({ 
        formId: 'form3'
    })
    sendForm({
        formId: 'form2',
    })