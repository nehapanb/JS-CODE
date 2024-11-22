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
async function myedit(id) {
    let myupdate = await fetch(`http://localhost:3000/students\${id}`)
    let redata = await myupdate.json()

    let senddata =`
    <input type="text" value="${redata.id}"readonly><br>
    <input type="text" value="${redata.name}"readonly><br>
<input type="text" value="${redata.age}"readonly><br>
<input type="text" value="${redata.address}"readonly><br>
        <input type="submit" onclick="finalupdate"('${redata.id}')">

        `
        document.querySelector('#edittable').innerHTML = senddata
}
function finalupdate(id){
    let fdata={
        name:document.querySelector('#name1').value,
        age:document.querySelector('#age1').value,
        address:document.querySelector('#address1').value,

    }
    fet_data(`/${id}`,{
        method:'PUT',
        
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(fdata)

    })
    .then(r=>alert("updated..!!!"))
    
}