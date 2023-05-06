import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { Textarea } from 'react-daisyui'
import { useState } from 'react'
import Description from '../../review/Description'

export type BehaviorChangeProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const BehaviorChange = ({ practice, handleNext, handlePrev }: BehaviorChangeProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [behavior, setBehavior] = useState('')
  const [actionPlan, setActionPlan] = useState('')
  const [recordResult, setRecrodResult] = useState('')

  const setNextStep = () => {
    if (step == 4) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && behavior == '') {
      setIsError(true)
      return
    }
    if (step == 2 && actionPlan == '') {
      setIsError(true)
      return
    }
    if (step == 3 && recordResult == '') {
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
                <h3 className="text-center mt-4">Select Behavior</h3>
                <p className="text-lg font-bold text-gray-500">List one behavior you would like to change.</p>
                <p className="text-md font-medium text-gray-500">
                  Monitor your behaviors and select a specific target for making positive changes.
                </p>
                <Textarea
                  className="w-full mt-4 leading-4"
                  rows={6}
                  onChange={(e) => {
                    setBehavior(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 2 && (
              <div>
                <h3 className="text-center mt-4">Plan</h3>
                <p className="text-lg font-bold text-gray-500">Write out your action plan.</p>
                <p className="text-md font-medium text-gray-500">
                  List 1-5 specific things you will do to change this behavior. Try to identify small, practical actions
                  you can take.
                </p>
                <Textarea
                  className="w-full mt-4 leading-4"
                  rows={6}
                  onChange={(e) => {
                    setActionPlan(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 3 && (
              <div>
                <h3 className="text-center mt-4">Record Result</h3>
                <p className="text-lg font-bold text-gray-500">Put your plan into action and record the results.</p>
                <p className="text-md font-medium text-gray-500">
                  Record the changes you actually make. Since you just identified your plan, you may want to print this
                  page and carry it with you. Review your progress and revise the plan if necessary so that you can
                  reach your goals.
                </p>
                <Textarea
                  className="w-full mt-4 leading-4"
                  rows={6}
                  onChange={(e) => {
                    setRecrodResult(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 4 && (
              <div>
                <h3 className="text-center my-4">Coping Cards</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Behavior</h3>
                  <div className="ml-4">
                    {behavior.split(/\r?\n/).map((value, index) => (
                      <p className="text-md text-gray-600 leading-5" key={index}>
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Plan</h3>
                  <div className="ml-4">
                    {actionPlan.split(/\r?\n/).map((value, index) => (
                      <p className="text-md text-gray-600 leading-5" key={index}>
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Result</h3>
                  <div className="ml-4">
                    {recordResult.split(/\r?\n/).map((value, index) => (
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
                {step == 0 ? 'Start' : step == 4 ? 'Done' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default BehaviorChange
