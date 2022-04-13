import { useState } from 'react'
import type { ChangeEvent } from 'react'

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const types = ['image/png', 'image/jpeg']

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let selected = e.target.files![0]

    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpg)')
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  )
}

export default UploadForm
