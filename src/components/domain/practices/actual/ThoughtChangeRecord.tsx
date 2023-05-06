import { Button, Card, Textarea } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select, Range } from 'react-daisyui'
import { useState, useRef } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import Description from '../../review/Description'
import { BiPlusCircle } from 'react-icons/bi'
import AutomaticThought from './AutomaticThought'

export type ThoughtChangeRecordProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}
export type EmotionStateType = {
  key: string
  strength: number
}

const ThoughtChangeRecord = ({ practice, handleNext, handlePrev }: ThoughtChangeRecordProps) => {
  const strengthRef = useRef<HTMLInputElement>(null)
  const [strength, setStrength] = useState(0)
  const [strength2, setStrength2] = useState(0)
  const [event, setEvent] = useState('')
  const [autoThought, setAutoThought] = useState('')
  const [isError, setIsError] = useState(false)
  const [step, setStep] = useState<number>(0)
  const [emotions, setEmotions] = useState<EmotionStateType[]>([])
  const [emotions2, setEmotions2] = useState<EmotionStateType[]>([])
  const [coginitiveErrors, setCoginitiveErrors] = useState<string[]>([])
  const [alternativeThoughts, setAlternativeThoughts] = useState([
    ['', 0], // First value is inputbox value second number is progress value.
    ['', 0],
    ['', 0],
  ])
  const [actionPlan, setActionPlan] = useState('')

  const basicEmotions = [
    'Happy',
    'Calm',
    'Joyful',
    'Sad',
    'Angry',
    'Irritated',
    'Anxious',
    'Ashamed',
    'Proud',
    'Ecstatic',
    'Pleased',
    'Guilty',
    'Disgusted',
    'Tense',
    'Other',
  ]

  const goNextStep = () => {
    if (step == 9) {
      handleNext()
    }
    setIsError(false)

    if (step == 1 && event == '') {
      setIsError(true)
      return
    }
    if (step == 2 && autoThought == '') {
      setIsError(true)
      return
    }
    if (step == 4 && emotions.length == 0) {
      setIsError(true)
      return
    }
    if (step == 5 && coginitiveErrors.length == 0) {
      setIsError(true)
      return
    }
    if (step == 6 && alternativeThoughts.filter((item) => item[0] !== '').length == 0) {
      setIsError(true)
      return
    }
    if (step == 8 && actionPlan == '') {
      setIsError(true)
      return
    }
    setStep((step) => step + 1)
  }

  const changeEventSelect = (value: string) => {
    setEvent(value)
  }

  const handleChangeEvent = (checked: boolean, title: string) => {
    if (checked) {
      setEvent('Nothing Specified')
      return
    }
    setEvent('')
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

  const toogleEmotion = (emotion: string) => {
    if (emotions.filter((item) => item.key == emotion).length != 0) {
      setEmotions((emotions) => emotions.filter((item) => item.key != emotion))
      return
    }
    setEmotions((emotions) => [...emotions, { key: emotion, strength: 0 }])
  }

  const moveSlide = (reevaluate = false) => {
    if (reevaluate == false) {
      if (strengthRef.current) {
        setStrength(parseInt(strengthRef.current.value))
      }
    }
    if (strengthRef.current) {
      setStrength2(parseInt(strengthRef.current.value))
    }
  }

  const moveEmoticSlide = (key: string, strength: any, reevaluate = false) => {
    const index = emotions.findIndex((item) => item.key == key)
    if (reevaluate == false) {
      setEmotions((emotions) => [
        ...emotions.slice(0, index),
        { key: key, strength: strength },
        ...emotions.slice(index + 1),
      ])
    }
    setEmotions2((emotions2) => [
      ...emotions2.slice(0, index),
      { key: key, strength: strength },
      ...emotions2.slice(index + 1),
    ])
  }

  const addEmptyAlternativeThoughts = () => {
    setAlternativeThoughts((alternativeThoughts) => [...alternativeThoughts, ['', 0]])
  }

  const changeRange = (index: number, value: string) => {
    setAlternativeThoughts([
      ...alternativeThoughts.slice(0, index),
      [alternativeThoughts[index][0], Number(value) / 10],
      ...alternativeThoughts.slice(index + 1),
    ])
  }

  const changeRangeLabel = (index: number, value: string) => {
    setAlternativeThoughts([
      ...alternativeThoughts.slice(0, index),
      [value, alternativeThoughts[index][1]],
      ...alternativeThoughts.slice(index + 1),
    ])
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
                  />
                </div>
                <CheckGroup
                  title="Skip this step. Nothing specific seemed to trigger my thoughts"
                  onHandleChange={handleChangeEvent}
                />
              </div>
            )}
            {step == 2 && (
              <div>
                <h3 className="text-center py-4 border-gray-200">Automatic Thought</h3>
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
            {step == 3 && (
              <div>
                <h3 className="text-center py-4 border-gray-200">Thought Strength</h3>
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
                  onChange={() => {
                    moveSlide(false)
                  }}
                  defaultValue={strength}
                />
                <div className="flex justify-between my-2">
                  <p className="text-[13px] text-gray-500">Didn't believe at all</p>
                  <p className="text-[13px] text-gray-800 ">Strength: {strength / 10}</p>
                  <p className="text-[13px] text-gray-500">Completely believed</p>
                </div>
              </div>
            )}
            {step == 4 && (
              <div>
                <h3 className="text-center mt-4">Emotions</h3>
                <p className="text-md font-medium text-gray-500">
                  Select the emotions you felt when you experienced the automatic thoughts.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {basicEmotions.map((item, index) => (
                    <Button
                      key={index}
                      className={`text-[16px] font-bold ${
                        emotions.filter((row) => row.key == item).length == 0
                          ? 'hover:bg-[#dcdafd] bg-[#dcdafd] text-gray-600'
                          : 'hover:bg-[#8e89f7] bg-[#8e89f7] text-white'
                      } normal-case`}
                      size="sm"
                      onClick={() => toogleEmotion(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
                {emotions.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mt-4">
                      <p>0</p>
                      <p className="font-medium text-gray-700">{item.key}</p>
                      <p>10</p>
                    </div>
                    <Range
                      step="5"
                      className="pure-range"
                      size="xs"
                      color="primary"
                      onChange={(e) => moveEmoticSlide(item.key, e.currentTarget.value, false)}
                      defaultValue={item.strength}
                    />
                    <div className="flex justify-center">
                      <p className="text-gray-800">Strength: {item.strength / 10}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {step == 5 && (
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
            {step == 6 && (
              <div>
                <h3 className="text-center my-4">Alternative Thoughts</h3>
                <p className="text-md font-medium text-gray-700 mt-4">
                  What are some alternative, more constructive thoughts that could replace your automatic thoughts?
                </p>
                <p className="text-md font-medium text-gray-500 mt-4">
                  After you identify realistic and rational alternatives, measure how strongly you believe these
                  alternatives, from 0-10.
                </p>
                {alternativeThoughts.map((item, index) => (
                  <div className="grid md:grid-cols-2 gap-4 mt-4 pb-4 border-b" key={index}>
                    <div className="flex items-end">
                      <Input
                        className="w-full"
                        value={item[0]}
                        defaultValue=""
                        onChange={(e) => {
                          changeRangeLabel(index, e.currentTarget.value)
                        }}
                      />
                    </div>
                    <div className="md:block flex items-center">
                      <p className="mr-3 min-w-[80px] text-center md:mb-1">Strength: {item[1]}</p>
                      <Range
                        step="10"
                        className="pure-range"
                        size="xs"
                        color="primary"
                        defaultValue={0}
                        value={Number(item[1]) * 10}
                        onChange={(e) => {
                          changeRange(index, e.currentTarget.value)
                        }}
                      />
                    </div>
                  </div>
                ))}

                <Button
                  className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none rounded-3xl normal-case pl-1 pr-2 mt-4"
                  size="sm"
                  onClick={addEmptyAlternativeThoughts}
                >
                  <BiPlusCircle size={28} /> <span className="ml-2">Add more alternative thoughts</span>
                </Button>
              </div>
            )}

            {step == 7 && (
              <div>
                <h3 className="text-center mt-4">Reevaluate</h3>
                <p className="text-md font-medium text-gray-500">
                  How strongly do you believe your original automatic thoughts now?
                </p>
                <div className="flex justify-between">
                  <p>0</p>
                  <p>10</p>
                </div>
                <Range
                  ref={strengthRef}
                  step="5"
                  className="mb-4 pure-range"
                  size="xs"
                  color="primary"
                  onChange={() => {
                    moveSlide(true)
                  }}
                  defaultValue={strength2}
                />
                <div className="flex justify-between my-2 pb-4 border-b">
                  <p className="text-[13px] text-gray-500">Didn't believe at all</p>
                  <p className="text-[13px] text-gray-800 ">Strength: {strength2 / 10}</p>
                  <p className="text-[13px] text-gray-500">Completely believed</p>
                </div>

                <p className="text-md font-medium text-gray-500">How strongly do you feel these emotions now?</p>
                {emotions2.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mt-4">
                      <p>0</p>
                      <p className="font-medium text-gray-700">{item.key}</p>
                      <p>10</p>
                    </div>
                    <Range
                      step="5"
                      className="pure-range"
                      size="xs"
                      color="primary"
                      onChange={(e) => moveEmoticSlide(item.key, e.currentTarget.value, true)}
                      defaultValue={item.strength}
                    />
                    <div className="flex justify-center">
                      <p className="text-gray-800">Strength: {item.strength / 10}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step == 8 && (
              <div>
                <h3 className="text-center mt-4">Action Plan</h3>
                <p className="text-lg font-medium text-black-500">Create Your Action Plan</p>
                <p className="text-md font-medium text-gray-500">
                  How might you act (or have acted) differently as a result of changing this automatic thought?
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
            {step == 9 && (
              <div>
                <h3 className="text-center my-4">Summary</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px]">Event</h3>
                  </div>
                  <p className="w-max text-md font-medium text-gray-500">{event}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px] purple">Automatic Thought</h3>
                  </div>

                  <div className="w-full">
                    <p className="w-max text-lg font-medium text-gray-500">{autoThought}</p>
                    <div>
                      <p className="text-md font-medium text-gray-500">Original Strength</p>
                      <div className="w-full h-[10px] bg-blue-100">
                        <div className="bg-[#800080] h-full" style={{ width: `${strength}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-md font-medium text-gray-500">Revised Strength</p>
                      <div className="w-full h-[10px] bg-blue-100">
                        <div className="bg-[#800080] h-full" style={{ width: `${strength2}%` }}></div>
                      </div>
                      <div className="grid grid-cols-5 text-gray-500">
                        <div>0</div>
                        <div>2</div>
                        <div>4</div>
                        <div>6</div>
                        <div className="flex justify-between">
                          <span>8</span> <span>10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px]">Emotions</h3>
                  </div>

                  <div className="w-full">
                    {emotions.map((item, index) => (
                      <div key={index}>
                        <p className="text-lg font-medium text-gray-500">{item.key}</p>
                        <p className="text-md font-medium text-gray-500">Original Feeling</p>

                        <div className="w-full h-[10px] bg-blue-100">
                          <div className="bg-blue-800 h-full" style={{ width: `${item.strength}%` }}></div>
                        </div>

                        <p className="text-md font-medium text-gray-500">Revised Feeling</p>
                        <div className="w-full h-[10px] bg-blue-100">
                          <div className="bg-blue-800 h-full" style={{ width: `${emotions2[index]?.strength}%` }}></div>
                        </div>
                        <div className="grid grid-cols-5">
                          <div>0</div>
                          <div>2</div>
                          <div>4</div>
                          <div>6</div>
                          <div className="flex justify-between">
                            <span>8</span> <span>10</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Cognitive Errors</h3>
                  <div>
                    {coginitiveErrors.map((error) => (
                      <p className="text-md font-medium text-gray-500" key={error}>
                        {error}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px] purple">Alternative Thought</h3>
                  </div>

                  <div className="w-full">
                    {alternativeThoughts.map((item, index) => {
                      return (
                        item[0] !== '' && (
                          <div key={index}>
                            <p className="text-md font-medium text-gray-500">{item[0]}</p>
                            <div className="w-full h-[10px] bg-blue-100">
                              <div className="bg-[#800080] h-full" style={{ width: `${Number(item[1]) * 10}%` }}></div>
                            </div>
                            <div className="grid grid-cols-5 text-gray-500">
                              <div>0</div>
                              <div>2</div>
                              <div>4</div>
                              <div>6</div>
                              <div className="flex justify-between">
                                <span>8</span> <span>10</span>
                              </div>
                            </div>
                          </div>
                        )
                      )
                    })}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px]">Action Plan</h3>
                  </div>
                  <Textarea
                    className="w-full border-none leading-4 resize-none pl-0"
                    rows={actionPlan.split(/\r?\n/).length}
                    disabled
                    style={{ background: 'white' }}
                    value={actionPlan}
                  />
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
                onClick={goNextStep}
              >
                {step == 0 ? 'Start' : step == 9 ? 'Done' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ThoughtChangeRecord
