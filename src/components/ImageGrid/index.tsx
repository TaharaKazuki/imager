import type { Dispatch, SetStateAction } from 'react'
import useFirestore from '../../hooks/useFirestore'

type Props = {
  setSelectedImg: Dispatch<SetStateAction<string | null>>
}

const ImageGrid = ({ setSelectedImg }: Props) => {
  const { docs } = useFirestore('images')

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="upload pic" />
          </div>
        ))}
    </div>
  )
}

export default ImageGrid
