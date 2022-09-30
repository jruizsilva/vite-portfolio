import { useState } from 'react'

interface State {
  tech: {
    index: string | null
    modalTitle: string
    modalContent: string
  }
}

interface returnHook {
  tech: State['tech']
  openTechModal: (newValues: State['tech']) => void
  closeTechModal: () => void
}

const initialValues = {
  index: null,
  modalTitle: '',
  modalContent: ''
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
