import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default function Home() {
  const [papers, setPapers] = useState([])

  useEffect(() => {
    const fetchPapers = async () => {
      const response = await axios.get('http://localhost:8000/api/papers/')
      setPapers(response.data)
    }

    fetchPapers()
  }, [])

  return (
    <Layout>
      <h1 className="mt-6 text-2xl font-bold">Recent Papers</h1>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
        {papers.map((paper) => (
          <div key={paper.id} className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-bold">{paper.title}</h2>
            <p>{paper.description}</p>
            <a href={paper.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              View Paper
            </a>
          </div>
        ))}
      </div>
    </Layout>
  )
}
