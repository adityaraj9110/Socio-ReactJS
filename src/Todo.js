import React, { useState } from 'react'

const Todo = () => {
  const [inputItem,setInputItem]=useState('')
  const [data,setData]=useState([])
  const handleAdd=()=>{

    if (!inputItem){

    }else{
      setData([...data,inputItem])
      setInputItem("")
      
    }
  }

  const handleDel=(id)=>{
    console.log(id)
    const updatedData=data.filter((d,ind)=>{
      return ind!==id;
    })
    setData(updatedData)

  }

  const handleAll=()=>{
    setData([])
  }

  




  return (
    <>
    <div className='main-div'>
      <div className='child-div'>
        <h1 style={{color:'white'}}>Add Your To-do 👇</h1>

        <div className='addItems'>
          <input type='text' placeholder='Add Items ✍️'  value={inputItem} onChange={(e)=>{setInputItem(e.target.value)}} />
          <i className="fa fa-plus add-btn" title='Add Item' onClick={handleAdd} ></i>
        </div>

        <div className='showItems'>
          {data.map((ele,id)=>{
            return(
              <div className='eachItem' key={id}>
                <h3>{ele}</h3>
                <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={()=>handleDel(id)}></i>
              </div>
            )
          })}
        </div>


        <div className='showItems'>
          <button className='btn effect04' data-sm-link-text="Remove All" onClick={handleAll}><span>Check List</span></button>
        </div> 
      </div>
    </div>
      
    </>
  )
}

export default Todo
