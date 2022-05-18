import React, { useEffect, useState } from 'react';
import Detail from './Detail';

const TodoList = () => {
    const [name, setName] = useState([])
    const addItem =(event)=>{
        event.preventDefault()
        const item ={
            name: event.target.name.value ,
            desc: event.target.desc.value
        }

        const url = `http://localhost:5000/todolist`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            event.target.reset()
        })

       
    }

    useEffect(()=>{
            fetch('http://localhost:5000/todolist')
            .then(res=> res.json())
            .then(data=> {
                setName(data)
            })
    } ,[name])
    return (
       <div>
             <h1 className='text-2xl fon-bold text-primary yext-center'>WELCOME TO TODO LIST</h1>
            <div class="card w-96 bg-gradient-to-r from-secondary to-primary shadow-xl mx-auto mt-8">
            <div class="card-body text-center">
                <h2 class="card-title text-xl font-bold text-white">TO DO LIST</h2>
                  <form onSubmit={addItem}>
                  <input required type="text" name='name' placeholder="Name" class="input w-full max-w-xs mb-2" />
                  <textarea required name='desc' class="textarea textarea-error w-full" placeholder="Description"></textarea>
                  <button class="btn btn-outline btn-accent w-full">ADD</button>
                  </form>
            </div>
        </div>

      
           <div className='mt-16'>
                
                 {
                     name?.map(n=> <Detail key={n._id} n={n} ></Detail>)
                 }
           </div>

       </div>
    );
};

export default TodoList;