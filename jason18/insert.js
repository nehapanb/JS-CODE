function insertdata(){
    let data = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        address : document.querySelector('#address').value
    }
    fetch("http://localhost:3000/students",{
        method : 'POST',
        Headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)

        })
        .then(res=>alert("inserted..!!!"))
    }

    
