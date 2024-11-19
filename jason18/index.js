async function fet_data(){
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json()
    let final_data = data.map((t)=>`
    <h1>${t.id}</h1>
    <h1>${t.name}</h1>

    `).join("")
    document.querySelector('#show').innerHTML=data
}
  fet_data()  