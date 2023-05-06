import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { Textarea } from 'react-daisyui'
import { useState } from 'react'
import Description from '../../review/Description'

export type CopingCardsProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const CopingCards = ({ practice, handleNext, handlePrev }: CopingCardsProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [problem, setProblem] = useState('')
  const [copingPlan, setCopingPlan] = useState('')

  const setNextStep = () => {
    if (step == 3) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && problem == '') {
      setIsError(true)
      return
    }
    if (step == 2 && copingPlan == '') {
      setIsError(true)
      return
    }
    setStep((step) => step + 1)
  }
  return (
    <div>
      <Card className="w-full flex justify-end my-1 border-none rounded-none">
        <div className="flex items-center border-b py-4">
          <div className="reading-content">
            {step != 0 && <h2 className="text-center">{practice.title}</h2>}
            {step == 0 && <Description practice={practice} />}

            {step == 1 && (
              <div>
                <h3 className="text-center mt-4">Problem</h3>
                <p className="text-lg font-bold text-gray-500">
                  Identify a specific problem that you want to manage effectively.
                </p>
                <p className="text-md font-medium text-gray-500">
                  Target a problem, a situation, or a stressor that you want to manage better and write this down.
                </p>
                <Textarea
                  className="w-full mt-4 leading-4"
                  rows={6}
                  onChange={(e) => {
                    setProblem(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 2 && (
              <div>
                <h3 className="text-center mt-4">Coping Plan</h3>
                <p className="text-lg font-bold text-gray-500">
                  Identify healthier thoughts or useful behaviors that would help you cope with this situation.
                </p>
                <p className="text-md font-medium text-gray-500">
                  Coping strategies usually work best if they are specific and give you directions on how to think or
                  act.
                </p>
                <Textarea
                  className="w-full mt-4 leading-4"
                  rows={6}
                  onChange={(e) => {
                    setCopingPlan(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 3 && (
              <div>
                <h3 className="text-center my-4">Coping Cards</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Problem</h3>
                  <div className="ml-4">
                    {problem.split(/\r?\n/).map((value, index) => (
                      <p className="text-md text-gray-600 leading-5" key={index}>
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Plan</h3>
                  <div className="ml-4">
                    {copingPlan.split(/\r?\n/).map((value, index) => (
                      <p className="text-md text-gray-600 leading-5" key={index}>
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="h-[30px] pl-4">
              {isError && <p className="text-blue-600 font-bold">Please answer to proceed</p>}
            </div>
            <div className="flex  justify-around md:justify-between my-4">
              <Button
                onClick={handlePrev}
                size="sm"
                className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
              >
                Back
              </Button>
              <Button
                className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
                size="sm"
                onClick={setNextStep}
              >
                {step == 0 ? 'Start' : step == 3 ? 'Done' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CopingCards
