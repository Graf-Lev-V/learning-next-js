import Link from 'next/link'

export default function Home() {
  return (
   <div className='max-w-2x1 mx-auto px-6 py-16'>
    <h1 className="mx-auto font-bold mb-4">Learning Next.js</h1>
    <p className='text-gray-600 mb-8'>A simple app to explore users and their details.</p>
    <Link href='/users' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>Users</Link>
   </div>
  )
}
