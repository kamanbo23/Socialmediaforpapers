import { useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'

export default function SubmitPaper() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('access_token')
      await axios.post(
        'http://localhost:8000/api/papers/',
        { title, description, link },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      // Redirect or show success message
    } catch (error) {
      console.error('Paper submission failed', error)
    }
  }

  return (
    <Layout>
      <h1 className="mt-6 text-2xl font-bold">Submit a New Paper</h1>
      <div className="flex flex-col mt-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 mt-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 mt-4 border border-gray-300 rounded"
        />
        <input
          type="url"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="p-2 mt-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 mt-6 text-white bg-blue-600 rounded"
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}
