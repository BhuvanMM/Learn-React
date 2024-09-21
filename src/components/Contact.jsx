import React, { useState } from 'react'

function Contact() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log('Submitted');
    }

  return (
    <form className='flex flex-col justify-left items-center p-12
     bg-slate-800 w-64 h-auto mx-auto mt-40 text-white rounded-md shadow-2xl'
     onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" 
            placeholder='Enter Name' 
            className='px-2 py-1 rounded-sm shadow-md text-black' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <div>
            <label>Email</label>
        <input type="email" placeholder='Enter email'
         className='px-2 py-1 rounded-sm shadow-md text-black'
         value={email}
        onChange={(e)=>setEmail(e.target.value)}
         />
        </div>
        <div>
            <label>Message</label>
            <input type="text" placeholder='Enter a message..' 
            className='p-2 rounded-sm shadow-md text-black' 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
        </div>
      
      <button className='mt-4 bg-slate-400 w-full py-1 px-2 rounded-md'
      type='submit'>submit</button>
    </form>
  )
}

export default Contact
