import Link from "next/link";

type User = {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    }
}

export default async function Users() {

    let users: User[] = [];
    let errorMessage: string | null = null;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) throw new Error('Error');
        users = await response.json();
    }
    catch (error) {
        if (error instanceof Error) {
            errorMessage = error.message;
        }
    }

    return (
        <>
            <h1 className="text-xl font-bold ml-6 mt-4">Users</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <div className="grid grid-cols-2 p-6 gap-4">
                {users.map((user) => 
                    <div key={user.id} className="bg-gray-200 p-4 rounded-md shadow-md hover:bg-gray-300">
                        <Link href={`/users/${user.id}`} className="text-blue-600 font-bold text-lg">{user.name}</Link><br/>
                        <p className="text-gray-600 text-sm">{user.email}</p>
                        <p className="text-gray-600 text-sm">Company: {user.company.name}</p>
                    </div>
                )}
            </div>
        </>
    )
}