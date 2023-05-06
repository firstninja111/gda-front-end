import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select } from 'react-daisyui'
import { useEffect, useState } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import Description from '../../review/Description'
import { BiPlusCircle } from 'react-icons/bi'

export type ExamineEvidenceProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const ExamineEvidence = ({ practice, handleNext, handlePrev }: ExamineEvidenceProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [autoThought, setAutoThought] = useState<string>('')
  const [evidenceFor, setEvidenceFor] = useState(['', '', ''])
  const [evidenceAgainst, setEvidenceAgainst] = useState(['', '', ''])
  const [coginitiveErrors, setCoginitiveErrors] = useState<string[]>([])

  const addEmptyEvidenceFor = () => {
    setEvidenceFor((evidenceFor) => [...evidenceFor, ''])
  }
  const addEmptyEvidenceAgainst = () => {
    setEvidenceAgainst((evidenceAgainst) => [...evidenceAgainst, ''])
  }

  const changeEvidenceFor = (index: number, value: string) => {
    setEvidenceFor([...evidenceFor.slice(0, index), value, ...evidenceFor.slice(index + 1)])
  }
  const changeEvidenceAgainst = (index: number, value: string) => {
    setEvidenceAgainst([...evidenceAgainst.slice(0, index), value, ...evidenceAgainst.slice(index + 1)])
  }

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

  const setNextStep = () => {
    if (step == 4) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && (autoThought == '' || autoThought == ThoughtEnum.noselect)) {
      setIsError(true)
      return
    }
    if (
      step == 2 &&
      evidenceFor.filter((item) => item.length !== 0).length == 0 &&
      evidenceAgainst.filter((item) => item.length !== 0).length == 0
    ) {
      setIsError(true)
      return
    }
    if (step == 3 && coginitiveErrors.length == 0) {
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
                <h3 className="text-center my-4">Evidences</h3>
                <p className="text-md font-medium text-gray-500 mt-4">
                  Examine The Evidence For and Against These Thoughts
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <p className="text-md text-gray-500">
                    Evidence For: These statements should support your negative thought.
                  </p>
                  <p className="text-md text-gray-500">
                    Evidence Against: These statements should disprove your negative thought.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {evidenceFor.map((item, index) => (
                      <Input
                        className="w-full my-1"
                        size="sm"
                        value={item}
                        key={index}
                        onChange={(e) => {
                          changeEvidenceFor(index, e.currentTarget.value)
                        }}
                      />
                    ))}
                    <div className="flex cursor-pointer mt-2" onClick={addEmptyEvidenceFor}>
                      <BiPlusCircle size={24} /> <span className="ml-2">Add more evidence</span>
                    </div>
                  </div>
                  <div>
                    {evidenceAgainst.map((item, index) => (
                      <Input
                        className="w-full my-1"
                        size="sm"
                        value={item}
                        key={index}
                        onChange={(e) => {
                          changeEvidenceAgainst(index, e.currentTarget.value)
                        }}
                      />
                    ))}
                    <div className="flex cursor-pointer mt-2" onClick={addEmptyEvidenceAgainst}>
                      <BiPlusCircle size={24} /> <span className="ml-2">Add more evidence</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step == 3 && (
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
            {step == 4 && (
              <div>
                <h3 className="text-center my-4">Summary</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Automatic Thought</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{autoThought}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Evidence For</h3>
                  <div>
                    {evidenceFor.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Evidence Against</h3>
                  <div>
                    {evidenceAgainst.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px]">Cognitive Errors</h3>
                  <div>
                    {coginitiveErrors.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
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

export default ExamineEvidence
