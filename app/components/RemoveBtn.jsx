'use client'

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveBtn({id}) {

    const router = useRouter();
    const removeTopic = async () => {
        const cofirmed = confirm('Are you sure you want to delete this topic?');
        if (cofirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
            method: 'DELETE',
        })
        if(res.ok) {
        router.refresh()
    }
    }
    }
    return (
        <button onClick={removeTopic}className="text-red-600">

            <HiOutlineTrash size={20} />
        </button>
    );
}