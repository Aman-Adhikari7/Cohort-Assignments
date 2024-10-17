import React, { useState } from 'react'
import FormData from './FormData'

const TableData = () => {

  const [values,setValues]=useState({
      username:'',
      petType:'',
      Breed:'',
      yourName:'',
      email:'',
      phone:''
  })

  const [submit,setSubmit]=useState(false)

  function addData(e){
    e.preventDefault()
    console.log(values)
    {setSubmit(true)}
    alert("sucess")

  }

  function handelEvent(e){
    e.preventDefault()

    const{name , value} = e.target

    setValues({
      ...values,
      [name]:value,
    })

    
  }
  return (
    <>
   { submit== false ? <div className='flex align-center justify-center h-full '>
      <div className="flex flex-col justify-between  mt-6  text-2xl font-bold  text-green-800 p-5 bg-[#CEA381] h-[500px] w-[390px]">
        <form onSubmit={addData}>

        <label htmlFor="username">Username</label>
        <input 
        type="text"
        name="username"
        id="username"
        placeholder='username'
        value={values.username}
        onChange={handelEvent}
        />

        <label  htmlFor='petType' >PetType</label>
        <input 
        type="text"
        placeholder="pettype"
        id="petType"
        name="petType"
        value={values.petType}
        onChange={handelEvent}/>


        <label  htmlFor='Breed' >Breed</label>
        <input 
        type="text"
        placeholder="Breed"
        id="Breed"
        name="Breed"
        value={values.Breed}
        onChange={handelEvent}/>


        <label  htmlFor='yourname' >Your Name</label>
        <input 
        type="text"
        placeholder="yourname"
        id="yourname"
        name="yourName"
        value={values.yourName}
        onChange={handelEvent}/>

        <label  htmlFor='email' >Email</label>
        <input 
        type="text"
        placeholder="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handelEvent}/>

        <label  htmlFor='phone' >Phone</label>
        <input 
        type="text"
        placeholder="phone"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={handelEvent}/>

        <input className='mt-4 pointer p-3 ml-[115px] bg-gray-400 rounded-full' type="submit" value="Submit" />
        </form>
      </div>
      </div> : null}
       { submit == true ? <FormData value={values} /> : null}
      
    </>
  )
}

export default TableData