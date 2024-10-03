// write your code here

const logincontainer = document.getElementById("login-page")
const signupcontainer= document.getElementById("signup-page")

document.getElementById("signup-1").addEventListener('click',(e)=>{
    e.preventDefault()

   logincontainer.style.display='none'
   signupcontainer.style.display="block"
})

//
//sprevious-page

document.getElementById('previous-page').addEventListener('click',(e)=>{

    e.preventDefault(),
    logincontainer.style.display='block',
   signupcontainer.style.display="none"
})

//signup User and Signup Admin

// Event listener for the sign-up button
document.getElementById("signup-user").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        
        const loginContainer = document.getElementById('login-page');
        const signupContainer = document.getElementById('signup-page');

        if (loginContainer && signupContainer) {
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
        }
    } catch (error) {
      
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});

//signup admin

document.getElementById("signup-admin").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/admins/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        
        const loginContainer = document.getElementById('login-page');
        const signupContainer = document.getElementById('signup-page');

        if (loginContainer && signupContainer) {
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
        }
    } catch (error) {
      
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});

/// login user  

document.getElementById("user-login").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        const data = await response.json()
        localStorage.setItem('userToken', data.token);
        const loginContainer = document.getElementById('login-page');
        const mainweb = document.getElementById('real-content-User');

        if (loginContainer && mainweb) {
            loginContainer.style.display = 'none';
            
            mainweb.style.display = 'block';
           
        }
    } catch (error) {
      
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});


// login- admin  

document.getElementById("admin-login").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/admins/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        const data = await response.json()
        // console.log(data.token)
        localStorage.setItem('adminToken', data.token);

        const loginContainer = document.getElementById('login-page');
        const mainweb = document.getElementById('real-content-Admin');

        if (loginContainer && mainweb) {
            loginContainer.style.display = 'none';
            
            mainweb.style.display = 'block';
           
        }
    } catch (error) {
      
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});


/// logout user 


document.getElementById("user-logout").addEventListener('click',async (e)=>{
    e.preventDefault()
   const token = localStorage.getItem('userToken')

   const logout = await fetch('http://localhost:4000/api/users/logout',{
    method: 'POST',
    headers :{
        'authorization':`Bearer ${token}`
    }

})
  
    const data = await logout.json()
    if(!data){
        throw new Error(' server error plz try again later')
    }else{
        const loginContainer = document.getElementById('login-page');
        const mainweb = document.getElementById('real-content-User');

        if (loginContainer && mainweb) {
            loginContainer.style.display = 'block';
            
            mainweb.style.display = 'none';
           
        }
        localStorage.removeItem('userToken')
    }

})
// admin logout
document.getElementById("admin-logout").addEventListener('click',async (e)=>{
    e.preventDefault()
   const token = localStorage.getItem('adminToken')
//    console.log(token)

   const logout = await fetch('http://localhost:4000/api/admins/logout/ok',{
    method: 'POST',
    headers :{
        'authorization':`Bearer ${token}`
    }

})
  
    const data = await logout.json()
    // console.log(data)
    if(!data){
        throw new Error(' server error plz try again later')
    }else{
        const loginContainer = document.getElementById('login-page');
        const mainweb = document.getElementById('real-content-Admin');

        if (loginContainer && mainweb) {
            loginContainer.style.display = 'block';
            
            mainweb.style.display = 'none';
           
        }
        localStorage.removeItem('adminToken')
        // console.log(localStorage.removeItem('adminToken'))
    }

})

    
    
    document.getElementById('preview-course').addEventListener('click', async (e) => {
    e.preventDefault();
  
    
      const response = await fetch('http://localhost:4000/api/preview', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
  
      const data = await response.json();
  
      // If data is returned correctly
      if (data.find) {
        const course = data.find
        
        
        course.forEach(course =>{
            console.log(course)
            console.log(course.title)
            const coursection= document.getElementById('all-cards-user')


          const card=   document.createElement('div')
          card.className = "card"

          const img = document.createElement('img')
          img.src = "https://via.placeholder.com/300"
       
          const title = document.createElement('h2');
          title.textContent = course.title;
          
          const description = document.createElement('h5');
          description.textContent = course.description;
          
          const price = document.createElement('h3');
          price.textContent = course.price;

          const button = document.createElement('button')
          button.setAttribute('id', `${course._id}`)
          button.textContent = 'buy now'


          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(price);
          card.appendChild(button);

          coursection.appendChild(card)

          

             
        })

        const allcourses= document.getElementById('all-course-view')
        const fullweb = document.getElementById('real-content-User')

        document.getElementById('previous-page-2').addEventListener('click',(e)=>{

            e.preventDefault(),
            fullweb.style.display='block',
           allcourses.style.display="none"
        })
        
       allcourses.style.display='block'
       fullweb.style.display='none'


        
      } else {
        console.log('No courses found.');
      }
   
})



    document.getElementById('create-course').addEventListener('click', async (e) => {
        e.preventDefault();

        
        const createNow = document.getElementById('course-view');

        // Check if elements exist
        if (createNow) {
            createNow.style.display = 'block';
        }

    })


    document.getElementById('previous-page-3').addEventListener('click', async (e) => {
        e.preventDefault();

        const createNow = document.getElementById('course-view');
        // Check if elements exist
        if (createNow) {
            createNow.style.display = 'none';
            
        }
    })
    
    
    document.getElementById('create-now').addEventListener('click', async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('adminToken')


        const title = document.getElementById('title').value
        const description = document.getElementById('description').value
        const price = document.getElementById('price').value
        const imageUrl = document.getElementById('Image-ok').value

        const response = await fetch ('http://localhost:4000/api/admins/createcourse',{
            method : 'POST',
            headers :{
                'Content-Type': 'application/json',
                'authorization':`Bearer ${token}`
            },
            body : JSON.stringify({
                title : title,
                description:description,
                price: price,
                imageUrl : imageUrl
            })
        })

        const data = await response.json()
        console.log(data)

        if(!data){
            alert('data is missing in create section')
        }else{
           
            const course = data.course

           if(course){
               
               const createNow = document.getElementById('course-view');
               if (createNow) {
               createNow.style.display = 'none';
              }
               }

                // const coursection= document.getElementById('my-course')

                // const card=   document.createElement('div')
                // card.className = "card"
      
                // const img = document.createElement('img')
                // img.src = course.imageUrl
             
                // const title = document.createElement('h2');
                // title.textContent = course.title;
                
                // const description = document.createElement('h5');
                // description.textContent = course.description;
                
                // const price = document.createElement('h3');
                // price.textContent = course.price;
      
                // const button = document.createElement('button')
                // button.setAttribute('id', `${course._id}`)
                // button.textContent = 'buy now'
      
      
                // card.appendChild(img);
                // card.appendChild(title);
                // card.appendChild(description);
                // card.appendChild(price);
                // card.appendChild(button);
      
                // coursection.appendChild(card)
            }

        })

// user-my course  
        document.getElementById('user-course').addEventListener('click', async (e) => {
            e.preventDefault();
        
            const token = localStorage.getItem('userToken');
        
            // Fetch all courses
            const response = await fetch('http://localhost:4000/api/users/purchasedcourse', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            });
        
            const data = await response.json();

            console.log(data,"data")
            console.log(data.coursedata)//array
            console.log(data.coursedata.courseId)
            console.log(data.found)//array
        
            if (!data ) {
                alert('No courses available');
            } else {


                //course data
                const coursedatas = data.coursedata

                coursedatas.forEach(coursess=>{
                    console.log(coursess)
                    console.log(coursess.title)

                    const courseSectionhh = document.getElementById('display-purchases');

                    // courseSection.innerHTML = ''; // Clear existing content
            
                        const cards = document.createElement('div');
                        cards.className = "card";
            
                        const img = document.createElement('img');
                        img.src = coursess.imageUrl;
            
                        const title = document.createElement('h2');
                        title.textContent = coursess.title;
            
                        const description = document.createElement('h5');
                        description.textContent = coursess.description;
            
                        const price = document.createElement('h3');
                        price.textContent = coursess.price;
            
                        const button = document.createElement('button');
                        button.setAttribute('id', `${coursess._id}`);
                        button.textContent = 'buy now';
            
                        cards.appendChild(img);
                        cards.appendChild(title);
                        cards.appendChild(description);
                        cards.appendChild(price);
                        cards.appendChild(button);
            
                    courseSectionhh.appendChild(cards)
                })
            }

        })

        //admin course preview 


        document.getElementById('my-courses').addEventListener('click', async (e) => {
            e.preventDefault();
        
            const token = localStorage.getItem('adminToken');
        
            // Fetch all courses
            const response = await fetch('http://localhost:4000/api/admins/mycourses', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            });
        
            const data = await response.json();

            console.log(data,"data")
            console.log(data.coursedata)//array
            // console.log(data.coursedata.courseId)
            console.log(data.found)//array
        
            if (!data ) {
                alert('No courses available');
            } else {


                //course data
                const coursedatas = data.found

                coursedatas.forEach(coursess=>{
                    console.log(coursess)
                    console.log(coursess.title)

                    const courseSectionhh = document.getElementById('all-cards-admin-hehe');

                    // courseSection.innerHTML = ''; // Clear existing content
            
                        const cards = document.createElement('div');
                        cards.className = "card";
            
                        const img = document.createElement('img');
                        img.src = coursess.imageUrl || 'hehe' ;
            
                        const title = document.createElement('h2');
                        title.textContent = coursess.title;
            
                        const description = document.createElement('h5');
                        description.textContent = coursess.description;
            
                        const price = document.createElement('h3');
                        price.textContent = coursess.price;
            
                        const button = document.createElement('button');
                        button.setAttribute('id', `${coursess._id}`);
                        button.textContent = 'buy now';
            
                        cards.appendChild(img);
                        cards.appendChild(title);
                        cards.appendChild(description);
                        cards.appendChild(price);
                        cards.appendChild(button);
            
                    courseSectionhh.appendChild(cards)
                })
            }

        })


                



        // delete 

        document.getElementById('course-delete').addEventListener('click', async (e) => {
            e.preventDefault();
            
            const createNow = document.getElementById('delete-course');
    
            // Check if elements exist
            if (createNow) {
                createNow.style.display = 'block';
            }
    
        })

        

        document.getElementById('delete-now').addEventListener('click',async(e)=>{
           e.preventDefault()

           
        const token = localStorage.getItem('adminToken')

        const placeholder = document.getElementById('Course-id').value
        const button = document.getElementById('delete-now')
        // const bigcontainer = document.getElementById('delete-course')

        const response = await fetch('http://localhost:4000/api/admins/delete',{
                method : "DELETE",
                headers : {
                    'authorization': `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({ courseId: placeholder })
        })

        if(!response.ok){
            alert('response is not okey')
        }else{
            const data = await response.json()
            alert('course deleted sucessfully ')


        }

        })

        //update 

        document.getElementById('update').addEventListener('click', async (e) => {
            e.preventDefault();
            
            const createNow = document.getElementById('update-course');
    
            // Check if elements exist
            if (createNow) {
                createNow.style.display = 'block';
            }
    
        })


        document.getElementById('update-now').addEventListener('click',async(e)=>{
            e.preventDefault()
 
            
         const token = localStorage.getItem('adminToken')
 
         const courseId = document.getElementById('update-id').value
         const title = document.getElementById('update-title').value
         const description = document.getElementById('update-description').value
         const price = document.getElementById('update-price').value
         const imageUrl = document.getElementById('update-image').value
        
         // const bigcontainer = document.getElementById('delete-course')
 
         const response = await fetch('http://localhost:4000/api/admins/course',{
                 method : "PUT",
                 headers : {
                     'authorization': `Bearer ${token}`,
                     'Content-Type' : 'application/json'
                 },
                 body : JSON.stringify({ courseId: courseId,
                    title:title,
                    description:description,
                    price:price,
                    imageUrl:imageUrl
                 })
         })
 
         if(!response.ok){
             alert('response is not okey')
         }else{
             const data = await response.json()
             alert('course update sucessfully ')
             document.getElementById('update-id').value =''
             document.getElementById('update-title').value=''
             document.getElementById('update-description').value=''
             document.getElementById('update-price').value=''
             document.getElementById('update-image').value=''
 
 
         }
 
         })


         // user purcahse course 

         document.getElementById('buy-course').addEventListener('click', async (e) => {
            e.preventDefault();
            
            const createNow = document.getElementById('purchase');
    
            // Check if elements exist
            if (createNow) {
                createNow.style.display = 'block';
            }
    
        })



        document.getElementById('buy-now').addEventListener('click',async(e)=>{
            e.preventDefault()

         const token = localStorage.getItem('userToken')
 
         const placeholder = document.getElementById('buy-id').value

         const response = await fetch('http://localhost:4000/api/purchase',{
                 method : "POST",
                 headers : {
                     'authorization': `Bearer ${token}`,
                     'Content-Type' : 'application/json'
                 },
                 body : JSON.stringify({ courseId: placeholder })
         })
 
         if(!response.ok){
             alert('response is not okey')
         }else{
             const data = await response.json()
             alert('course purchased   sucessfully ')
 
 
         }
 
         })
 






       
    


























