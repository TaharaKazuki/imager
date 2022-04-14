import { useEffect } from 'react'
import type { Dispatch } from 'react'
import useStorage from '../../hooks/useStorage'
import { motion } from 'framer-motion'

type Props = {
  file: File
  setFile: Dispatch<React.SetStateAction<File | null>>
}

const ProgressBar = ({ file, setFile }: Props) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar
