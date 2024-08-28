"use client"
import React, { useEffect, useState } from 'react'
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault();
    setmaintask([...maintask, {title,desc}])
    settitle("")
    setdesc("")
  }


  // useEffect(()=>{
  //   const savedtasks = JSON.parse(localStorage.getItem('maintask'))
  //   console.log(savedtasks)
  //   if (Array.isArray(savedtasks)) {
  //     setmaintask(savedtasks);
  //   } else {
  //     setmaintask([]);
  //   }
  // },[])
  
  // useEffect(()=>{
  //   localStorage.setItem('maintask', JSON.stringify(maintask))
  //   console.log(maintask)
  // },[maintask])


  const deleteHandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let renderTask = <h2 className='text-gray-500'>No Tasks Available</h2>
  if(maintask.length>0)
  {
    renderTask = maintask.map((t,i)=>{
      return <div key={i} className='mb-3 '>
        <div className=' flex justify-between items-center px-4 py-4 bg-slate-200 rounded-full'>
        <h1 className='md:text-2xl text-lg whitespace-nowrap overflow-y-hidden w-[340px] font-semibold'>{t.title.slice(0,50)}</h1>
        <h6 className='md:text-xl text-lg whitespace-nowrap overflow-y-hidden w-[340px] font-semibold'>{t.desc.slice(0,55)}</h6>
        <button onClick={()=>{
          deleteHandler(i)
        }} className='bg-red-600 text-white font-bold rounded-full px-4 py-2'>Delete</button>
      </div>
      </div>
    })
  }
  return (
    <>
    <h1 className='bg-black text-white font-bold text-2xl p-5  '>My Todo List</h1>
    <form className='my-8 flex md:flex-row flex-col justify-center items-center ' onSubmit={submitHandler}>
      <input  className='border-zinc-800 mx-2 my-2 border-[3px] py-2 px-4 rounded-full' type="text" placeholder='Enter Title Here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }} />
      <input className='border-zinc-800 mx-2 my-2 border-[3px] py-2 px-4 rounded-full' type="text" placeholder='Enter Description Here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
      <button className='bg-black px-6 py-3 font-bold text-white rounded-full text-md'>Add Task</button>
    </form>
  <hr />
    <ul className='mb-6 p-12'>
      <li className=''>{renderTask}</li>
    </ul>
    </>
  )
}
export default page
