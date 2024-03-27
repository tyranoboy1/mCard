import { useQuery, UseQueryOptions } from 'react-query'
import { IApplyValues } from '@models/apply'
import { getAppliedCard } from '@/remote/apply'

const useAppliedCard = ({
  userId,
  cardId,
  options,
}: {
  userId: string
  cardId: string
  options?: Pick<
    UseQueryOptions<IApplyValues | null>,
    'onSuccess' | 'onError' | 'suspense'
  >
}) => {
  return useQuery(
    ['applied', userId, cardId],
    () => getAppliedCard({ userId, cardId }),
    options,
  )
}

export default useAppliedCard
