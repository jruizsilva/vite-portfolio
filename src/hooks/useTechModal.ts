import { useState } from 'react'

interface State {
  tech: {
    index: string | null
    isOpen: boolean
    modalTitle: string
    modalDescription: string
  }
}

interface returnHook {
  tech: State['tech']
  openTechModal: (newValues: State['tech']) => void
  closeTechModal: () => void
}

const initialValues = {
  index: null,
  isOpen: false,
  modalTitle: '',
  modalDescription: ''
}

const useTechModal = (): returnHook => {
  const [tech, setTech] =
    useState<State['tech']>(initialValues)

  const openTechModal = (
    newValues: State['tech']
  ): void => {
    setTech(newValues)
  }
  const closeTechModal = (): void => {
    setTech(initialValues)
  }

  return {
    tech,
    openTechModal,
    closeTechModal
  }
}

export default useTechModal
