import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

type FormCheckBoxProps = {
  name: string
  label?: string
  defaultValue?: string
}

function FormCheckBox({ name, label, defaultValue }: FormCheckBoxProps) {
  const defaultChecked = defaultValue === 'year.incr' ? true : false

  return (
    <div className='pt-4 flex justify-between self-end'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  )
}
export default FormCheckBox
