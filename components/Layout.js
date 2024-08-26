import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
            <Link href="/submit-paper">
              <a className="hover:underline">Submit Paper</a>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <a className="hover:underline">Login</a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
}
