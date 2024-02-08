import Alert from '@/common/components/Alert'
import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type AlertProps = ComponentProps<typeof Alert>
type AlertOptions = Omit<AlertProps, 'open'>

interface AlertContextValue {
  open: (options: AlertOptions) => void
}

const Context = createContext<AlertContextValue | undefined>(undefined)

const initialValues: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
}
export const AlertContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [alertInitialState, setAlertInitialState] = useState(initialValues)
  const $portal_root = document.getElementById('root-portal')
  const close = useCallback(() => {
    setAlertInitialState(initialValues)
  }, [])
  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertInitialState({
        ...options,
        onButtonClick: () => {
          close()
          onButtonClick()
        },
        open: true,
      })
    },
    [close],
  )
  const values = useMemo(() => ({ open }), [open])

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Alert {...alertInitialState} />, $portal_root)
        : null}
    </Context.Provider>
  )
}
export const useAlertContext = () => {
  const values = useContext(Context)
  if (values == null) {
    throw new Error('AlertContext 내부에서 사용해주세요')
  }
  return values
}
