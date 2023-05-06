import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select, Range } from 'react-daisyui'
import { useState, useRef } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import Emotion from './Emotions'
import Description from '../../review/Description'

export type EventProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const Event = ({ practice, handleNext, handlePrev }: EventProps) => {
  const strengthRef = useRef<HTMLInputElement>(null)
  const [strength, setStrength] = useState(0)
  const [event, setEvent] = useState('')
  const [autoThought, setAutoThought] = useState('')

  const [isDisabled, setIsDisabled] = useState(false)
  const [step, setStep] = useState<number>(0)

  const moveSlide = () => {
    if (strengthRef.current) {
      setStrength(parseInt(strengthRef.current.value))
    }
  }

  const goNextStep = () => {
    setStep((step) => step + 1)
  }

  const changeEventSelect = (value: string) => {
    setEvent(value)
    if (value == ThoughtEnum.noselect) {
      setIsDisabled(false)
      return
    }
    setIsDisabled(true)
  }

  const handleChange = (checked: boolean, title: string) => {
    if (checked) {
      setEvent('Nothing Specified')
      return
    }
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
                <h3 className="text-center mt-4">Event</h3>
                <p className="text-md font-medium text-gray-500 mt-4">
                  What event triggered your thoughts and emotions?
                </p>
                <p className="text-md font-medium text-gray-500">
                  Briefly describe an event or memory of an event that sparked your automatic thoughts.
                </p>
                <div className="flex justify-center my-4">
                  <Select
                    className="text-gray-500"
                    defaultValue={ThoughtEnum.noselect}
                    borderOffset={false}
                    id="eventSelect"
                    onChange={(value: string) => {
                      changeEventSelect(value)
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
                    placeholder="Add new event"
                    size="md"
                    onChange={(e) => {
                      setEvent(e.currentTarget.value)
                    }}
                    disabled={isDisabled}
                  />
                </div>
                <CheckGroup
                  title="Skip this step. Nothing specific seemed to trigger my thoughts"
                  onHandleChange={handleChange}
                />
              </div>
            )}
            {step == 1 && event != '' && event != ThoughtEnum.noselect && (
              <div>
                <h3 className="text-center py-4 border-t border-gray-200">Automatic Thought</h3>
                <p className="text-md font-medium text-gray-500 mt-4">What automatic thoughts did you have?</p>
                <p className="text-md font-medium text-gray-500">
                  Try to record the thoughts exactly as they occurred when they first popped into your mind.
                </p>
                <div className="flex justify-center my-4">
                  <Select
                    className="text-gray-500"
                    defaultValue={ThoughtEnum.noselect}
                    borderOffset={false}
                    id="autoThoughtSelect"
                    onChange={(value: string) => setAutoThought(value)}
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
                <div className="flex justify-center mx-4 mb-4">
                  <Input
                    className="w-full max-w-xs border-b-2 text-gray-600 mr-2"
                    color="ghost"
                    placeholder="Add new thought"
                    size="md"
                    onChange={(e) => setAutoThought(e.currentTarget.value)}
                  />
                </div>
              </div>
            )}
            {step == 1 && autoThought != '' && autoThought != ThoughtEnum.noselect && (
              <div>
                <h3 className="text-center py-4 border-t border-gray-200">Thought Strength</h3>
                <p className="text-md font-medium text-gray-500 mt-4">
                  How strongly did you believe these automatic thoughts when they occurred?
                </p>
                <div className="flex justify-between my-4">
                  <p>0</p>
                  <p className="font-medium text-gray-700">{autoThought}</p>
                  <p>10</p>
                </div>
                <Range
                  ref={strengthRef}
                  step="5"
                  className="mb-4 pure-range"
                  size="xs"
                  color="primary"
                  onChange={moveSlide}
                  defaultValue={strength}
                />
                <div className="flex justify-between my-2">
                  <p className="text-[13px] text-gray-500">Didn't believe at all</p>
                  <p className="text-[13px] text-gray-800 ">Strength:</p>
                  <p className="text-[13px] text-gray-800 w-[20px]">{strength / 10}</p>
                  <p className="text-[13px] text-gray-500">Completely believed</p>
                </div>
              </div>
            )}
            {step == 2 && (
              <Emotion
                practice={practice}
                handleNext={handleNext}
                handlePrev={handlePrev}
                event={event}
                autoThought={autoThought}
                strength={strength}
              />
            )}
            {(step == 0 || step == 1) && (
              <div
                className={`flex ${
                  autoThought != '' && autoThought != ThoughtEnum.noselect
                    ? 'justify-around md:justify-between'
                    : 'justify-between'
                } my-4`}
              >
                <Button
                  onClick={handlePrev}
                  size="sm"
                  className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
                >
                  Back
                </Button>

                {(step == 0 || (autoThought != '' && autoThought != ThoughtEnum.noselect)) && (
                  <Button
                    className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
                    size="sm"
                    onClick={goNextStep}
                  >
                    {step == 0 ? 'Start' : 'Continue'}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Event
