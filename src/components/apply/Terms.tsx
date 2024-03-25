import Agreement from '@/common/components/Agreement'
import FixedBottomButton from '@/common/components/FixedBottomButton'
import { termsList } from '@/constants/apply'
import { MouseEvent } from 'react'
import { useCallback, useState } from 'react'

const Terms = ({ onNext }: { onNext: (terms: string[]) => void }) => {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return termsList.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })
  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      console.log('checked', checked)

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
