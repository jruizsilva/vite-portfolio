import { useState } from 'react'

interface returnHook {
  isOpenTechModal: boolean
  openTechModal: (title: string, content: string) => void
  closeTechModal: () => void
  modalTitle: string
  modalContent: string
}

const useTechModal = (): returnHook => {
  const [isOpenTechModal, setIsOpenTechModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')

  const openTechModal = (title: string, content: string): void => {
    setModalTitle(title)
    setModalContent(content)
    setIsOpenTechModal(true)
  }
  const closeTechModal = (): void => {
    setIsOpenTechModal(false)
  }

  return {
    isOpenTechModal,
    openTechModal,
    closeTechModal,
    modalTitle,
    modalContent
  }
}

export default useTechModal
