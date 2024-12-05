import EditForm from "@/app/components/EditForm"

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, 
            {cache: 'no-store'});

        if (!res.ok) {
            throw new Error('Failed to fetch topic');
        }
        return res.json();
    } catch (error) {
        console.log(error)
        
    }
}
export default async function Edit({params}) {
    const {id} = params;
    const {topic} = await getTopicById(id);
    const {title, description} = topic;
    return<EditForm id={id} title={title} description={description} />
     }