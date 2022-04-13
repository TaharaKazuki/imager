import { useEffect } from 'react'
import type { Dispatch } from 'react'
import useStorage from '../../hooks/useStorage'

type Props = {
  file: File
  setFile: Dispatch<React.SetStateAction<File | null>>
}

const ProgressBar = ({ file, setFile }: Props) => {
  console.info('通過')
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>
}

export default ProgressBar
