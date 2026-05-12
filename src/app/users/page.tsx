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
            <hr/>
            <h1 className="mx-auto">Users</h1>
            {errorMessage && <p>{errorMessage}</p>}
            {users.map((user) => 
                <div key={user.id}>
                    <hr/>
                    <p>
                        <Link href={`/users/${user.id}`}>{user.name}</Link><br/>
                        {user.email}<br/>
                        Company: {user.company.name}
                    </p>
                </div>
            )}
        </>
    )
}