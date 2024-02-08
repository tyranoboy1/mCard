import { FocusEventHandler, forwardRef, useState } from 'react'
import { ITextFieldProps } from '../interface/common.interface'
import Input from './Input'
import Text from './Text'

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ label, isError, onFocus, onBlur, helpMessage, ...props }, ref) => {
    /** 포커스 상태를 관리하는 상태 변수 */
    const [focused, setFocused] = useState<boolean>(false)

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true)
      onFocus?.(e)
    }
    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false)
      onBlur?.(e)
    }

    const labelColor = isError ? 'red' : focused ? 'blue' : undefined
    return (
      <div>
        {label ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        ) : null}
        <Input
          ref={ref}
          aria-invalid={isError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        ) : null}
      </div>
    )
  },
)

export default TextField
