import Text from '@common/components/Text'
import Input from './common/components/Input'
import TextField from './common/components/TextField'

function App() {
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
    </div>
  )
}

export default App
