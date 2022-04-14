import type { Dispatch, MouseEvent, SetStateAction } from 'react'

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
    <button className="backdrop" onClick={handleClick}>
      <img src={selectedImg!} alt="enlarged pic" />
    </button>
  )
}

export default Modal
