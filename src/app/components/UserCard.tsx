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
        <>
            <hr/>
            {errorMessage && <p>{errorMessage}</p>}
            <p>{user?.name}<br/>{user?.email}<br/>Company: {user?.company?.name}</p>
        </>
    )
}