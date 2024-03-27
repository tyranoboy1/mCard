import { IOption, ITerm } from '@models/apply'

export const termsList = [
  {
    id: '01',
    title: '카드신청 관련 안내 및 필수 동의',
  },
  {
    id: '02',
    title: '(필수) 개인정보 요약동의서',
    link: 'https://www.google.com',
  },
] as ITerm[]

export const annualIncomeOption = [
  { label: '600만원 ~ 5,000만원', value: '600만원 ~ 5,000만원' },
  { label: '5,000만원 ~ 1억원', value: '5,000만원 ~ 1억원' },
  { label: '1억원 초과', value: '1억원 초과' },
] as IOption[]

export const creditScoreOptions = [
  { label: '600점 이상', value: '600점 이상' },
  { label: '600점 미만', value: '600점 미만' },
] as IOption[]

export const paymentDateOptions = [
  { label: '1일', value: '1일' },
  { label: '25일', value: '25일' },
] as IOption[]
