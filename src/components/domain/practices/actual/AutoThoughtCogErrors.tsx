import { Button, Card, Checkbox, Input, Select } from 'react-daisyui'
import { useState, useEffect } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import { PracticeSingle } from '~/types/practice'
import Description from '../../review/Description'

export type AutoThoughtCogErrorsProps = {
  practice: PracticeSingle
  handlePrev: () => void
  handleNext: () => void
}

const AutoThoughtCogErrors = ({ practice, handlePrev, handleNext }: AutoThoughtCogErrorsProps) => {
  const [coginitiveErrors, setCoginitiveErrors] = useState<string[]>([])
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [newThought, setNewThought] = useState('')

  const handleChange = (checked: boolean, title: string) => {
    if (checked) {
      setCoginitiveErrors((coginitiveErrors) => [...coginitiveErrors, title])
      return
    }

    const index = coginitiveErrors.indexOf(title)
    if (index !== -1) {
      setCoginitiveErrors([...coginitiveErrors.slice(0, index), ...coginitiveErrors.slice(index + 1)])
    }
  }

  const continueCognitiveError = () => {
    if (step == 3) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && (newThought == '' || newThought == 'Select From Existing')) {
      setIsError(true)
      return
    }
    if (step == 2 && coginitiveErrors.length == 0) {
      setIsError(true)
      return
    }
    setStep((step) => step + 1)
  }

  const selectChange = (value: string) => {
    setNewThought(value)
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
                <h3 className="text-center mt-4">Automatic Thought</h3>
                <p className="text-md font-medium text-gray-500 mt-4">What automatic thoughts did you have?</p>
                <p className="text-md font-medium text-gray-500">
                  Try to record the thoughts exactly as they occurred when they first popped into your mind.
                </p>
                <div className="flex justify-center my-4">
                  <Select
                    className="text-gray-500"
                    defaultValue={undefined}
                    borderOffset={false}
                    onChange={selectChange}
                  >
                    <option value={undefined}>Select From Existing</option>
                    <option value={'I should be doing better in life'}>I should be doing better in life</option>
                    <option value={'I am failing'}>I am failing.</option>
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
                    onChange={(e: any) => {
                      setNewThought(e.currentTarget.value)
                    }}
                  />
                </div>
              </div>
            )}
            {(step == 2 || step == 3) && (
              <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                <h3 className="w-[100px]">Automatic Thought</h3>
                <p className="text-md font-medium text-gray-500 ml-4">{newThought}</p>
              </div>
            )}
            {step == 3 && (
              <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                <h3 className="w-[100px]">Cognitive Errors</h3>
                <div>
                  {coginitiveErrors.map((error) => (
                    <p className="text-md font-medium text-gray-500 ml-4" key={error}>
                      {error}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {step == 2 && (
              <div>
                <p className="text-md font-medium text-gray-500 mt-4">
                  Select the cognitive errors that may apply to your automatic thoughts.
                </p>
                <CheckGroup
                  title="Ignoring the Evidence"
                  content="When someone Ignores the Evidence ('the mental filter'), they make a judgment (usually about their
                      shortcomings or about something they think they can't do) without looking at all the information."
                  onHandleChange={handleChange}
                />
                <CheckGroup
                  title="Jumping to Conclusions"
                  content="When someone Jumps to Conclusions, they immediately think of the worst interpretations of situations. Once these negative images come into their mind, they become certain that bad things will happen or think that others see them in a negative light."
                  onHandleChange={handleChange}
                />
                <CheckGroup
                  title="Overgeneralizing"
                  content="When someone Overgeneralizes, they can give a small difficulty or flaw so much significance that it seems to define the entire picture. Sometimes people can let a single problem mean so much to them that it colors our view of everything in their lives."
                  onHandleChange={handleChange}
                />
                <CheckGroup
                  title="Magnifying or Minimizing"
                  content="When someone is Magnifying, they might be magnifying their faults the risks or difficulties in situations. If they are Minimizing, they might be minimizing their strengths or the options or resources that they have to manage the problem."
                  onHandleChange={handleChange}
                />
                <CheckGroup
                  title="Personalizing"
                  content="When someone is Personalizing, they accept full responsibility for a troubling situation or problem even when there isn't good evidence to back up their conclusion. Personalizing can cause someone to get caught up in taking personal blame for everything."
                  onHandleChange={handleChange}
                />
                <CheckGroup
                  title="All or None Thinking"
                  content="When someone lets All or None Thinking go unchecked, they see the world in absolute terms. Everything is completely black or white - all good or all bad. They believe that others are doing great and they are doing just the opposite."
                  onHandleChange={handleChange}
                />
              </div>
            )}

            <div className="mt-4">
              <div className="h-[30px] pl-4">
                {isError && <p className="text-blue-600 font-bold">Please answer to proceed</p>}
              </div>
            </div>
            <div className="flex justify-around md:justify-between">
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
                onClick={continueCognitiveError}
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

export default AutoThoughtCogErrors
