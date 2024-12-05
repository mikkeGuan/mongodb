'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditForm({id, title, description}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newTitle,
                    newDescription
                })
            })

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }
            router.push("/")
            console.log(error)
        } catch (error) {
            
        }
    }
    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input 
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle}
    className="border border-slate-300 px-8 py-3" type="text" placeholder="Title" />

    <input 
    onChange={(e) => setNewDescription(e.target.value)}
    value={newDescription}
    className="border border-slate-300 px-8 py-3" type="text" placeholder="Description" />

    <button type="submit" className="bg-purple-500 text-white px-8 py-3 w-fit">Update</button>
</form>)
}