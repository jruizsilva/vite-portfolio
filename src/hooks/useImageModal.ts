import { useState } from 'react'

interface returnHook {
  isOpenImageModal: boolean
  openImageModal: () => void
  closeImageModal: () => void
}

const useImageModal = (): returnHook => {
  const [isOpenImageModal, setIsOpenImageModal] = useState(false)

  const openImageModal = (): void => {
    setIsOpenImageModal(true)
  }
  const closeImageModal = (): void => {
    setIsOpenImageModal(false)
  }

  return {
    isOpenImageModal,
    openImageModal,
    closeImageModal
  }
}

export default useImageModal
