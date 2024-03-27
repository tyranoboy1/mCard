import { useMutation } from 'react-query'

import { applyCard } from '@remote/apply'
import { IApplyValues } from '@models/apply'
import { useAlertContext } from '@/context/AlertContext'

interface useApplyCardMutationProps {
  onSuccess: () => void
  onError: () => void
}

const useApplyCardMutation = ({
  onSuccess,
  onError,
}: useApplyCardMutationProps) => {
  const { open } = useAlertContext()

  return useMutation((applyValues: IApplyValues) => applyCard(applyValues), {
    onSuccess: () => {
      onSuccess()
    },
    onError: () => {
      open({
        title: '카드를 신청하지 못했어요. 나중에 다시 시도해주세요.',
        onButtonClick: () => {
          onError()
        },
      })
    },
  })
}

export default useApplyCardMutation
