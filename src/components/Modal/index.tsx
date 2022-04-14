import type { Dispatch, MouseEvent, SetStateAction } from 'react'
import { motion } from 'framer-motion'

type Props = {
  selectedImg: string | null
  setSelectedImg: Dispatch<SetStateAction<string | null>>
}

const Modal = ({ selectedImg, setSelectedImg }: Props) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg!}
        alt="enlarged pic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default Modal
