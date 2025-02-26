import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {cache: 'no-store'});
        if(!res.ok){
            throw new Error('Failed to fetch topics');
        }
        return res.json();
    } catch (error) {
        console.log("Error fetching topics:", error);
        
    }
}
export default async function Topics() {

    const {topics} = await getTopics();
    return (
       <>
        {topics.map((t) => (
<div key={t._id} className="p-4 border border-slate-300 my-3 justify-between gap-5">
        <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`/edit/${t._id}`}>
                <HiPencilAlt size={20}/>
                </Link>
            </div>
       </div>
    ))}
       </>
    );
}