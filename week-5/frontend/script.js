

const API = "http://localhost:3000/api/user"
 
document.getElementById("signup-form").addEventListener('submit', async (e)=>{
       e.preventDefault()
    const username =document.getElementById("signup-username").value
    const password =document.getElementById("signup-password").value
    const div= document.getElementById("signup")
    const h5= document.createElement("h5")

    div.querySelectorAll('h5').forEach(msg => msg.remove());

    const res = await fetch(`${API}/signup`,{
        method:"POST",
        headers:{ 'Content-Type':' application/json'},
        body: JSON.stringify({username,password})
    })
     
    const data = await res.json()
    if(data.error){
        h5.innerHTML=`${data.error}`
        h5.style.color='red'
        div.appendChild(h5)

    }else{
        console.log(data)
        alert("signup-sucessful")
        showloginform()
    }



})

const showloginform= function(){
    document.getElementById("login").style.display="block"
    document.getElementById("signup").style.display="none"

}


document.getElementById("login-form").addEventListener('submit', async (e)=>{
    e.preventDefault()
 const username =document.getElementById("login-username").value
 const password =document.getElementById("login-password").value
 const div= document.getElementById("login")
 const h5= document.createElement("h5")

 div.querySelectorAll('h5').forEach(msg => msg.remove());

 const res = await fetch(`${API}/login`,{
     method:"POST",
     headers:{ 'Content-Type':' application/json'},
     body: JSON.stringify({username,password})
 })
  
 const data = await res.json()
 if(data.error){
     h5.innerHTML=`${data.error}`
     h5.style.color='red'
     div.appendChild(h5)

 }else{
     console.log(data)
     alert("login-sucessful")
     localStorage.setItem('token',data.token)
    showtodo()
    loadTodos()
 }

})


const showtodo= function(){
    document.getElementById("login").style.display="none"
    document.getElementById("signup").style.display="none"
    document.getElementById("Todos").style.display="block"
    loadTodos();

}


const loadTodos=  async function(){
     const token = localStorage.getItem('token')
     const todoli= document.getElementById("todo-li")

     const res = await fetch(`${API}/alltodos`,{
        headers:{
            'Content-Type':' application/json',
            'Authorization':`Bearer ${token}`

     },
     })

     const Data = await res.json()
     console.log(Data)
     console.log(Data.alltodos)
     todoli.innerHTML = ''

     Data.alltodos.forEach(todo => {
        const li= document.createElement('li')
        li.className = 'todo-list-item';
        li.id = todo._id;
        li.innerHTML=`
         <span> Title: ${todo.title}
         Description: ${todo.description}</span>
         <div>
            <button onclick="updateTodo('${todo._id}')">update</button>
            <button onclick="deleteTodo('${todo._id}')">delete</button>

         </div>
        `
        todoli.appendChild(li)
     });
     
}


document.getElementById("todo-form").addEventListener('submit', async (e)=>{
    e.preventDefault()

    const token = localStorage.getItem('token')
    const title =document.getElementById("title").value
    const description =document.getElementById("description").value
    const div= document.getElementById("Todos")
    const h5= document.createElement("h5")

    div.querySelectorAll('h5').forEach(msg => msg.remove());
   

    const res = await fetch(`${API}/createtodo`,{
        method:"POST",
        headers:{
               'Content-Type':' application/json',
               'Authorization':`Bearer ${token}`

        },
        body: JSON.stringify({  title, description    })
    })

    const Data =  await res.json()
    if(Data.error){
        h5.style.color='red'
        div.appendChild(h5)
    }else{
        loadTodos()
    }
    document.getElementById("title").value
    document.getElementById("description").value
})


    document.getElementById("logout").addEventListener('click', async(e)=>{
        e.preventDefault()
        const token= localStorage.getItem('token')

        const res = await fetch(`${API}/logout`,{
            method:"POST",
            headers:{
                'Content-Type':' application/json',
                'Authorization':`Bearer ${token}`
    
         },
         })
         const data= await res.json()

         if (data.error){
            alert(data.error)

         }else{
         document.getElementById("login").style.display="block"
         document.getElementById("signup").style.display="block"
         document.getElementById("Todos").style.display="none"
         
         localStorage.removeItem('token')
         }
    })

    window.onload = function(){
      const token=  localStorage.getItem('token')
        if(token){
            showtodo()
            loadTodos()
        }
    }

    //update

    async function updateTodo(id){

      const title=  prompt('Enter title ')
      const description=    prompt('Enter description ')

      const token= localStorage.getItem('token')

      const res = await fetch(`${API}/update/${id}`,{
        method:"PUT",
        headers:{
            'Content-Type':' application/json',
            'Authorization':`Bearer ${token}`

     },
     body: JSON.stringify({title,description})
      })
   
    const data = await res.json()
         if(data.error){
            alert(data.error)
         }else{
            loadTodos()
         }
        }



    async function deleteTodo(id){

      const token= localStorage.getItem('token')

      const res = await fetch(`${API}/deletea/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':' application/json',
            'Authorization':`Bearer ${token}`

     },
      })
   
    const data = await res.json()
         if(data.error){
            alert(data.error)
         }else{
            alert("item deleted sucessfully")
            loadTodos()
         }
        }











