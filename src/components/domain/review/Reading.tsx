import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '../../../types/practice'

export type ReadingProps = {
  practice: PracticeSingle
  handlePrev: () => void
  handleNext: () => void
  isLastPractice: boolean
  isLastLesson: boolean
}

const Reading = ({ practice, handlePrev, handleNext, isLastPractice, isLastLesson }: ReadingProps) => {
  return (
    <div>
      <Card className="w-full flex justify-end my-1 border-none rounded-none">
        <div className="flex items-center border-b py-4">
          <div>
            <div className="reading-content tips">
              <h2 className="text-center">{practice.practice[0].display_name}</h2>
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: practice.practice[1].html! }}></div>
            </div>

            <div className="flex mt-4 justify-around md:justify-between">
              <Button
                onClick={handlePrev}
                size="sm"
                className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                size="sm"
                className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
              >
                {!isLastPractice ? 'Next' : isLastLesson ? 'Go Homepage' : 'Next Lesson'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Reading
