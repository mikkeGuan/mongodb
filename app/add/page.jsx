'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Add() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description) {
            alert('Please enter title and description');
            return;
        }
        try {
           const res=  await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, description}),
            })

            if(res.ok) {
                router.push('/')
            }else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-300 px-8 py-3" type="text" placeholder="Title" />
            <input 
             onChange={(e) => setDescription(e.target.value)}
             value={description}
            className="border border-slate-300 px-8 py-3" type="text" placeholder="Description" />
            <button type="submit" className="bg-purple-500 text-white px-8 py-3 w-fit">Add</button>
        </form>

    );
}