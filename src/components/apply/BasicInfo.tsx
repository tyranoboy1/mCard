import FixedBottomButton from '@/common/components/FixedBottomButton'
import Select from '@/common/components/Select'
import {
  annualIncomeOption,
  creditScoreOptions,
  paymentDateOptions,
} from '@/constants/apply'
import { IApplyValues } from '@/models/apply'
import { ChangeEvent, useCallback, useState } from 'react'

// 특정 인터페이스에서 타입 빼오기
type InfoValues = Pick<IApplyValues, 'salary' | 'creditScore' | 'payDate'>

const BasicInfo = ({
  onNext,
}: {
  onNext: (infoValues: InfoValues) => void
}) => {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setInfoValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])
  /** 모든 박스가 선택되었는지 확인하는 변수 */
  const isAllSelect = Object.values(infoValues).every((value) => value)
  return (
    <div>
      <Select
        name="salary"
        label="연소득"
        options={annualIncomeOption}
        placeholder={annualIncomeOption[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
      />
      <Select
        name="creditScore"
        label="신용점수"
        options={creditScoreOptions}
        placeholder={creditScoreOptions[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />
      <Select
        name="payDate"
        label="결제일"
        options={paymentDateOptions}
        placeholder={paymentDateOptions[0].label}
        value={infoValues.payDate}
        onChange={handleInfoChange}
      />
      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues)
        }}
        disabled={isAllSelect === false}
      />
    </div>
  )
}

export default BasicInfo
