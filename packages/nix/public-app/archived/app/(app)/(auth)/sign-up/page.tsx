import Link from 'next/link'

export default function Page () {
  return (
    <div className="max-w-7xl m-auto bg-base-300 h-screen flex flex-col justify-center items-center p-4">
      <div className="bg-white p-12 rounded-lg drop-shadow-md max-w-4xl">
        <h1 className="text-primary text-2xl md:text-4xl font-semibold">
          Panfactum is currently in an invite-only alpha
        </h1>
        <p className="text-lg md:text-xl my-8">
          To get access email &quot;jack&quot; at the domain: panfactum.com.
        </p>
        <Link
          className="btn"
          href="/"
        >
          {' '}
          Back to main site
        </Link>
      </div>
    </div>
  )
}
