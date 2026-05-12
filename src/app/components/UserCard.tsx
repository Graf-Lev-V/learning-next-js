import Link from "next/link"

type UserCardProps = {
    user: {
        name: string;
        email: string;
        company: {
            name: string;
        }
    } | null;
    errorMessage: string | null;
}

export default function UserCard({user, errorMessage}: UserCardProps) {
    return (
        <div className="mx-auto max-w-md bg-gray-200 p-8 rounded-md shadow-md mt-4">
            {errorMessage && <p>{errorMessage}</p>}
            <p className="text-lg font-bold text-gray-800 pb-6">{user?.name}</p>
            <p className="text-gray-600 text-sm pb-4">{user?.email}</p>
            <p className="text-gray-600 text-sm pb-8">Company: {user?.company?.name}</p>
            <Link href='/users' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>Users</Link>
        </div>
    )
}