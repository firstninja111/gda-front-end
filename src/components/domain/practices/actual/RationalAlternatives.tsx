import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select } from 'react-daisyui'
import { useEffect, useState } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import Description from '../../review/Description'
import { BiPlusCircle } from 'react-icons/bi'
import { Progress, Range } from 'react-daisyui'

export type RationalAlternativesProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const RationalAlternatives = ({ practice, handleNext, handlePrev }: RationalAlternativesProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [autoThought, setAutoThought] = useState<string>('')
  const [alternativeThoughts, setAlternativeThoughts] = useState([
    ['', 0], // First value is inputbox value second number is progress value.
    ['', 0],
    ['', 0],
  ])

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

  const setNextStep = () => {
    if (step == 3) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && (autoThought == '' || autoThought == ThoughtEnum.noselect)) {
      setIsError(true)
      return
    }
    if (step == 2 && alternativeThoughts.filter((item) => item[0] !== '').length == 0) {
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
            {step == 3 && (
              <div>
                <h3 className="text-center my-4">Summary</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px]">Automatic Thought</h3>
                  </div>
                  <p className="w-max text-md font-medium text-gray-500">{autoThought}</p>
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

export default RationalAlternatives
