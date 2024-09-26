const API_URL = 'http://localhost:3001/bookmarks';


document.getElementById('container').addEventListener('submit',async (e)=>{
    e.preventDefault()

    const url= document.getElementById('bookmark-url').value
    const category  = document.getElementById('bookmark-category').value
    const li = document.createElement("li")
    const append= document.getElementById('bookmark-list')

    const res= await fetch(`${API_URL}`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({url:url, category:category})
    })
    const Data=await res.json()

    li.textContent = `${Data.url},(${Data.category}) `;
    const button= document.createElement('button')
    button.textContent="Delete"
    button.id = `delete-${Data.id}`; // Set the ID of the button
    button.className = 'delete-button';
    append.appendChild(li)
    li.appendChild(button)
    
  button.onclick= async function(){
    await deleted(Data.id)
    append.removeChild(button)
    
}



async function deleted(id){
 

    const res= await fetch(`${API_URL}/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
    })

    if (!res.ok) {
        console.error('Failed to delete the bookmark');
    } else {
        console.log('Bookmark deleted successfully');
        append.removeChild(li)
    }
    
}
  
  
})

