import Text from '@common/components/Text'
import Alert from '@/common/components/Alert'
import Button from '@/common/components/Button'
import Input from '@/common/components/Input'
import TextField from '@/common/components/TextField'
import { useAlertContext } from '@/context/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <Text typography="t1" display="block">
        t1
      </Text>
      <Text typography="t2">t1</Text>
      <Text typography="t3">t1</Text>
      <Text typography="t4">t1</Text>
      <Text typography="t5">t1</Text>
      <Input placeholder="로그인" aria-invalid={false} />
      <Input placeholder="로그아웃" aria-invalid />
      <TextField label="아이디" />
      <TextField label="아이디" isError={true} />

      {/* <Alert title="알림" open={true} onButtonClick={() => {}} /> */}
      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지',
            onButtonClick: () => {},
          })
        }}
      >
        오픈
      </Button>
    </div>
  )
}

export default App
