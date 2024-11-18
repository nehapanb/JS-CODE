async function fet() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments")
    let a = await res.json()
   let answ = a.map((e)=>`
   <h1>${e.id}</h1>
   <h1>${e.email}</h1>
   `).join("")
   document.querySelector('#demo').innerHTML = answ
    //console.log(a);
}

fet()