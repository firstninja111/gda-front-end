import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '../../../types/practice'

export type DescriptionProps = {
  practice: PracticeSingle
}

const Description = ({ practice }: DescriptionProps) => {
  const description = practice.practice[0]

  return (
    <div className="w-full">
      <Card className="w-full flex justify-end my-1 border-none rounded-none">
        <div className="flex items-center py-4">
          <div className="reading-content">
            <h3 className="font-medium text-lg text-gray-700">{description.display_name}</h3>
            <p className="font-medium text-gray-500">{description.summary}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Description
