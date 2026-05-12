import UserCard from "@/app/components/UserCard";

type UserProps = {
    params: Promise<{
        id: string;
    }>
}
type User = {
    name: string;
    email: string;
    company: {
        name: string;
    }
}

export default async function User({params}: UserProps) {

    let user: User | null = null; 
    let errorMessage: string | null = null;
    const { id } = await params;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error('Error');
        user = await response.json();
    }
    catch (error) {
        if (error instanceof Error) {
            errorMessage = error.message;
        }
    }

    return (
        <>
            <UserCard user={user} errorMessage={errorMessage}/>
        </>
    )
}