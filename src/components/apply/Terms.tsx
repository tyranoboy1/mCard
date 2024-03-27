import Agreement from '@/common/components/Agreement'
import FixedBottomButton from '@/common/components/FixedBottomButton'
import { termsList } from '@/constants/apply'
import { IApplyValues } from '@/models/apply'
import { MouseEvent } from 'react'
import { useCallback, useState } from 'react'

const Terms = ({
  onNext,
}: {
  onNext: (terms: IApplyValues['terms']) => void
}) => {
  // 각 약관에 대한 동의 여부 상태
  // 초기 상태는 false로 설정
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return termsList.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })
  /** 전체 약관 동의 클릭 버튼 함수 */
  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreements((prev) => {
        return Object.keys(prev).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  /** 모든 요소를 만족할때를 검사 */
  const allAgree = Object.values(termsAgreements).every((agree) => agree)
  return (
    <div>
      <Agreement>
        <Agreement.Title checked={allAgree} onChange={handleAllAgreement}>
          약관에 모두 동의
        </Agreement.Title>
        {termsList.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            link={link}
            checked={termsAgreements[id]}
            onChange={(_, checked) => {
              setTermsAgreements((prev) => ({
                ...prev,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={allAgree === false}
        onClick={() => {
          onNext(Object.keys(termsAgreements))
        }}
      />
    </div>
  )
}

export default Terms
