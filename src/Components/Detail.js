import React from 'react';
import { toast } from 'react-toastify';

const Detail = ({ n }) => {
    const { name, desc, _id } = n

    const handleDelete = (id) => {
        const prceed = window.confirm('Are you sure to delete this item?')
        if (prceed) {
            const url = `http://localhost:5000/todolist/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    //    const remaining = myItem.filter(product => product._id !== id) 
                    //    setMyItem(remaining)
                })

        }

    }

    // Completed To Do Item
    const CompletedTodo = (id) => {
        fetch(` http://localhost:5000/todolist/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ completed: 'true' }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) =>{
                console.log(json)
                toast('Task Completed')
            });
    }
    return (
        <div class="card w-3/5 mx-auto shadow-xl mb-3 bg-gradient-to-r from-secondary to-primary rounded-xl">
            <div class="card-body">
                <h2 className={`card-title ${n?.completed ? "completed" : ""}`}>{name}</h2>
                <p className=' font-medium '>{desc}</p>

                <div class="card-actions justify-center md:justify-end">
                    <button onClick={() => handleDelete(n?._id)}><img className='w-14 h-14' src="https://img.icons8.com/color/344/delete-user-data.png" alt="" /></button>
                     <button onClick={()=>CompletedTodo(n?._id)}> <img className='w-12 h-12' src="https://img.icons8.com/flat-round/344/checkmark.png" alt="" /></button>
                </div>
            </div>
        
        </div>
    );
};

export default Detail;