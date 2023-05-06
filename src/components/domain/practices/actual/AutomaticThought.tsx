import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select } from 'react-daisyui'
import { useState } from 'react'
import Description from '../../review/Description'

export type AutomaticThoughtProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const AutomaticThought = ({ practice, handleNext, handlePrev }: AutomaticThoughtProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [autoThought, setAutoThought] = useState<string>('')
  const [positiveAltThought, setPositiveAltThought] = useState('')

  const setNextStep = () => {
    if (step == 3) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && (autoThought == '' || autoThought == ThoughtEnum.noselect)) {
      setIsError(true)
      return
    }
    if (step == 2 && positiveAltThought == '') {
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

            {step != 0 && step != 3 && (
              <div>
                <h3 className="text-center mt-4">Automatic Thought</h3>
                <p className="text-md font-medium text-gray-500 mt-4">What automatic thoughts did you have?</p>
                <p className="text-md font-medium text-gray-500">
                  Try to record the thoughts exactly as they occurred when they first popped into your mind.
                </p>
                <div className="flex justify-center my-4">
                  <Select
                    className="text-gray-500"
                    defaultValue={ThoughtEnum.noselect}
                    borderOffset={false}
                    onChange={(value: string) => {
                      setAutoThought(value)
                    }}
                  >
                    <option value={ThoughtEnum.noselect}>Select From Existing</option>
                    {/* #TODO(rieserstern) replace contents with firebase database autothoughts values */}
                    <option value={ThoughtEnum.doingbetter}>{ThoughtEnum.doingbetter}</option>
                    <option value={ThoughtEnum.failing}>{ThoughtEnum.failing}</option>
                  </Select>
                </div>
                <p className="text-center m-4 border-b-2 border-gray-300" style={{ lineHeight: '0.5rem' }}>
                  <span className="bg-white px-6 uppercase">or</span>
                </p>
                <div className="flex justify-center mx-4">
                  <Input
                    className="w-full max-w-xs border-b-2 text-gray-600 mr-2"
                    color="ghost"
                    placeholder="Add new thought"
                    size="md"
                    onChange={(e) => {
                      setAutoThought(e.currentTarget.value)
                    }}
                  />
                </div>
              </div>
            )}

            {step == 2 && (
              <div>
                <h3 className="text-center my-4">Positive Alternative</h3>
                <p className="text-md font-medium text-gray-500 mt-4">
                  Type in a more positive thought. What is a positive thought that could work as an alternative to your
                  negative thought?
                </p>
                <div className="flex justify-center mx-4 mt-2">
                  <Input
                    className="w-full max-w-xs border-b-2 text-gray-600 mr-2"
                    color="ghost"
                    placeholder="Add positive alternative thought"
                    size="md"
                    onChange={(e) => {
                      setPositiveAltThought(e.currentTarget.value)
                    }}
                  />
                </div>
              </div>
            )}
            {step == 3 && (
              <div>
                <h3 className="text-center my-4">Summary</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Automatic Thought</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{autoThought}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Positive Alternative</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{positiveAltThought}</p>
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

export default AutomaticThought
