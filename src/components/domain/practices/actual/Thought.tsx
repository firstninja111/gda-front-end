import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { Input } from 'react-daisyui'
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi'
import { useState } from 'react'
import Description from '../../review/Description'

export type ThoughtProps = {
  practice: PracticeSingle
  handlePrev: () => void
  handleNext: () => void
}
export type ThoughtInputGroupProps = {
  id: number
  isMinus?: boolean
  value?: string
  removeThought: (index: number) => void
  changeThought: (index: number, value: string) => void
}

const ThoughtInputGroup = ({
  id,
  isMinus = true,
  value = '',
  removeThought,
  changeThought,
}: ThoughtInputGroupProps) => {
  return (
    <div className="flex my-2 items-center">
      <label className="mr-2">{id}.</label>
      <Input
        className="w-full max-w-xs border-b-2 text-lg text-gray-800 mr-2"
        color="ghost"
        placeholder=""
        size="sm"
        value={value}
        onChange={(e) => {
          changeThought(id - 1, e.currentTarget.value)
        }}
      />
      <div className="w-10">
        {isMinus && (
          <Button
            className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none"
            shape="circle"
            size="xs"
            onClick={() => {
              removeThought(id - 1)
            }}
          >
            <BiMinusCircle size={24} />
          </Button>
        )}
      </div>
    </div>
  )
}
const Thought = ({ practice, handlePrev, handleNext }: ThoughtProps) => {
  const [thoughts, setThoughts] = useState(['', ''])
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)

  const today = new Date()
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // header text based on type
  const getHeader = () => {
    switch (practice?.practice[1]?.type) {
      case 'positive-thought':
        return 'Record Your Positive Thoughts'
      case 'negative-thought':
        return 'Record Your Negative Thoughts'
      case 'negative-schema':
        return 'Record Your Negative Schema'
      case 'positive-schema':
        return 'Record Your Positive Schema'
    }
  }

  // summary header text based on type
  const getSummaryHeader = () => {
    switch (practice?.practice[1]?.type) {
      case 'positive-thought':
        return 'Positive Thoughts'
      case 'negative-thought':
        return 'Negative Thoughts'
      case 'negative-schema':
        return 'Negative Schemas'
      case 'positive-schema':
        return 'Positive Schemas'
    }
  }

  const addThought = (item: string) => {
    setThoughts((thoughts) => [...thoughts, item])
  }
  const removeThought = (index: number) => {
    setThoughts([...thoughts.slice(0, index), ...thoughts.slice(index + 1)])
  }
  const changeThought = (index: number, value: string) => {
    setThoughts([...thoughts.slice(0, index), value, ...thoughts.slice(index + 1)])
  }

  const goToNext = () => {
    setIsError(false)
    if (step == 2) {
      handleNext()
      setStep(0)
      setThoughts(['', ''])
    }
    if (step == 1 && thoughts.filter((item) => item.length !== 0).length === 0) {
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
                <h3 className="text-center mt-4">{getHeader()}</h3>
                <p className="font-medium text-gray-500 mt-4">{practice.practice[0].summary}</p>
                {thoughts.map((item, index) => (
                  <ThoughtInputGroup
                    id={index + 1}
                    isMinus={index !== 0}
                    value={item}
                    removeThought={removeThought}
                    changeThought={changeThought}
                    key={index}
                  />
                ))}
                <div className="my-2">
                  <Button
                    className="bg-gradient-to-tr from-[#762477] to-[#9794f9] border-none rounded-3xl normal-case pl-1 pr-2"
                    size="sm"
                    onClick={() => {
                      addThought('')
                    }}
                  >
                    <BiPlusCircle size={28} /> <span className="ml-2">Add more thoughts</span>
                  </Button>
                </div>
              </div>
            )}
            {step == 2 && (
              <div>
                <h3 className="text-center mt-4">{getSummaryHeader()}</h3>
                <div className="flex items-center text-gray-600 border-t">
                  <div className="w-20">{`${weekday[today.getDay()]} ${today.getMonth() + 1}/${today.getDate()}`}</div>
                  <div className="w-full ml-4">
                    {thoughts
                      .filter((item) => item.length !== 0)
                      .map((item, index) => (
                        <div className={index !== 0 ? 'border-t' : ''} key={index}>
                          {item}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            <div className="h-[30px] pl-4">
              {isError && <p className="text-blue-600 font-bold">Please answer to proceed</p>}
            </div>
            <div className="flex justify-between my-4">
              <Button
                onClick={() => {
                  setThoughts(['', ''])
                  setStep(0)
                  handlePrev()
                }}
                size="sm"
                className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
              >
                Back
              </Button>
              <Button
                className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
                size="sm"
                onClick={goToNext}
              >
                {step == 0 ? 'Start' : step == 2 ? 'Done' : 'Continue'}
              </Button>
            </div>
            {step == 1 && (
              <div>
                <div className="my-2">
                  <p className="text-gray-500 font-medium">Need Suggestions? List of common positive thoughts.</p>
                </div>
                <div className="my-2">
                  {practice.practice[1].fields?.map((item) => (
                    <div
                      className="flex justify-between text-gray-500 border-t border-gray-300 py-1"
                      key={item}
                      onClick={(e) => {
                        e.currentTarget.style.display = 'none'
                        addThought(item)
                      }}
                    >
                      <p className="mr-2">{item}</p>
                      <div className="w-10">
                        <Button
                          className="bg-gradient-to-tr from-[#762477] to-[#b881f2] border-none"
                          shape="circle"
                          size="xs"
                        >
                          <BiPlusCircle size={24} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Thought
