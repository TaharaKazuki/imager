import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<Array<{ id: string; url: string }>>([])

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents: Array<{ id: string; url: string }> = []
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id, url: doc.data().url })
        })
        setDocs(documents)
      })
    return () => unsub()
  }, [collection])

  return { docs }
}

export default useFirestore
