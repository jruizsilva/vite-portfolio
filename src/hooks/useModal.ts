import { useState } from 'react'

interface returnHook {
  isOpenModal: boolean
  openModal: (title: string, content: string) => void
  closeModal: () => void
  modalTitle: string
  modalContent: string
}

const useModal = (): returnHook => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContent, setModalContent] = useState('')

  const openModal = (title: string, content: string): void => {
    setModalTitle(title)
    setModalContent(content)
    setIsOpenModal(true)
  }
  const closeModal = (): void => {
    setIsOpenModal(false)
  }

  return { isOpenModal, openModal, closeModal, modalTitle, modalContent }
}

export default useModal
