import BasicInfo from '@/components/apply/BasicInfo'
import CardInfo from '@/components/apply/CardInfo'
import Terms from '@/components/apply/Terms'
import { useState } from 'react'

const ApplyPage = () => {
  const [step, setStep] = useState<number>(0)

  const handleStepChange = (pTerms: string[]) => {
    console.log('termps', pTerms)
  }

  const stepRenderPage = (pStep: number) => {
    switch (pStep) {
      case 0: {
        return <Terms onNext={handleStepChange} />
      }
      case 1: {
        return <BasicInfo />
      }
      case 2: {
        return <CardInfo />
      }
    }
  }
  return <div>{stepRenderPage(step)}</div>
}

export default ApplyPage
