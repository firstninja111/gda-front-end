import { Checkbox } from 'react-daisyui'
import { useRef } from 'react'

export type CheckGroupProps = {
  title: string
  content?: string
  value?: boolean
  onHandleChange?: (checked: boolean, title: string) => void
}

const CheckGroup = ({ title = '', content = '', value = false, onHandleChange }: CheckGroupProps) => {
  const checkbox = useRef<any>(null)
  const toogleCheck = () => {
    checkbox.current.checked = checkbox.current.checked ? false : true
    if (onHandleChange) {
      onHandleChange(checkbox.current.checked, title)
    }
  }
  return (
    <div className="check-group">
      <div className="flex items-center mt-4 mb-2">
        <Checkbox ref={checkbox} defaultChecked={value} />
        <div className="ml-2">
          <div>
            <p className="text-gray-700" onClick={toogleCheck}>
              {title}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500" onClick={toogleCheck}>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckGroup
