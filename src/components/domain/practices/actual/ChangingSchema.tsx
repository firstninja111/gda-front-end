import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select, Range, Textarea } from 'react-daisyui'
import { useEffect, useState } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import Description from '../../review/Description'
import { BiPlusCircle } from 'react-icons/bi'

export type ChangingSchemaProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const ChangingSchema = ({ practice, handleNext, handlePrev }: ChangingSchemaProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [schema, setSchema] = useState('')
  const [evidenceFor, setEvidenceFor] = useState(['', '', ''])
  const [evidenceAgainst, setEvidenceAgainst] = useState(['', '', ''])
  const [coginitiveErrors, setCoginitiveErrors] = useState<string[]>([])
  const [advantage, setAdvantage] = useState(['', '', ''])
  const [disadvantage, setDisadvantage] = useState(['', '', ''])
  const [alternativeSchemas, setAlternativeSchemas] = useState([
    ['', 0], // First value is inputbox value second number is progress value.
    ['', 0],
    ['', 0],
  ])
  const [actionPlan, setActionPlan] = useState('')

  const addEmptyEvidenceFor = () => {
    setEvidenceFor((evidenceFor) => [...evidenceFor, ''])
  }
  const addEmptyEvidenceAgainst = () => {
    setEvidenceAgainst((evidenceAgainst) => [...evidenceAgainst, ''])
  }

  const addEmptyAdvantage = () => {
    setAdvantage((advantage) => [...advantage, ''])
  }
  const addEmptyDisadvantage = () => {
    setDisadvantage((disadvantage) => [...disadvantage, ''])
  }

  const changeEvidenceFor = (index: number, value: string) => {
    setEvidenceFor([...evidenceFor.slice(0, index), value, ...evidenceFor.slice(index + 1)])
  }
  const changeEvidenceAgainst = (index: number, value: string) => {
    setEvidenceAgainst([...evidenceAgainst.slice(0, index), value, ...evidenceAgainst.slice(index + 1)])
  }

  const changeAdvantage = (index: number, value: string) => {
    setAdvantage([...advantage.slice(0, index), value, ...advantage.slice(index + 1)])
  }
  const changeDisadvantage = (index: number, value: string) => {
    setDisadvantage([...disadvantage.slice(0, index), value, ...disadvantage.slice(index + 1)])
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

  const addEmptyAlternativeSchemas = () => {
    setAlternativeSchemas((alternativeSchemas) => [...alternativeSchemas, ['', 0]])
  }

  const changeRange = (index: number, value: string) => {
    setAlternativeSchemas([
      ...alternativeSchemas.slice(0, index),
      [alternativeSchemas[index][0], Number(value) / 10],
      ...alternativeSchemas.slice(index + 1),
    ])
  }

  const changeRangeLabel = (index: number, value: string) => {
    setAlternativeSchemas([
      ...alternativeSchemas.slice(0, index),
      [value, alternativeSchemas[index][1]],
      ...alternativeSchemas.slice(index + 1),
    ])
  }

  const setNextStep = () => {
    if (step == 6) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && (schema == '' || schema == ThoughtEnum.noselect)) {
      setIsError(true)
      return
    }
    if (
      step == 2 &&
      ((evidenceFor.filter((item) => item.length !== 0).length == 0 &&
        evidenceAgainst.filter((item) => item.length !== 0).length == 0) ||
        coginitiveErrors.length == 0)
    ) {
      setIsError(true)
      return
    }
    if (
      step == 3 &&
      advantage.filter((item) => item.length !== 0).length == 0 &&
      disadvantage.filter((item) => item.length !== 0).length == 0
    ) {
      setIsError(true)
      return
    }
    if (step == 4 && alternativeSchemas.filter((item) => item[0] !== '').length == 0) {
      setIsError(true)
      return
    }
    if (step == 5 && actionPlan == '') {
      setIsError(true)
      return
    }
    // if (step == 3 && coginitiveErrors.length == 0) {
    //   setIsError(true)
    //   return
    // }
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
                <h3 className="text-center mt-4">Schema</h3>
                <p className="text-md font-medium text-gray-500 mt-4">
                  Choose one of your core beliefs from the list you developed earlier or record another schema you want
                  to modify.
                </p>
                <div className="flex justify-center my-4">
                  <Select
                    className="text-gray-500"
                    defaultValue={ThoughtEnum.noselect}
                    borderOffset={false}
                    onChange={(value: string) => {
                      setSchema(value)
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
                    placeholder="Add new schema"
                    size="md"
                    onChange={(e) => {
                      setSchema(e.currentTarget.value)
                    }}
                  />
                </div>
              </div>
            )}

            {step == 2 && (
              <div>
                <h3 className="text-center my-4">Schema Evidence</h3>
                <div>
                  <p className="text-md font-bold text-gray-500 mt-4">Check the Validity of Your Negative Schemas</p>
                  <p className="text-md font-medium text-gray-500">
                    Type in all the evidence you can think of that either supports the schema or tells you that it isn't
                    really true. When you examine the evidence, you should try to be as objective as possible.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <p className="text-md text-gray-500">Evidence For: These statements support the schema.</p>
                    <p className="text-md text-gray-500">Evidence Against: These statements disprove the schema.</p>
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
                      <div className="flex cursor-pointer mt-2 items-center" onClick={addEmptyEvidenceFor}>
                        <BiPlusCircle size={20} className="text-green-400" />{' '}
                        <span className="ml-2">Add more evidence</span>
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
                      <div className="flex cursor-pointer mt-2 items-center" onClick={addEmptyEvidenceAgainst}>
                        <BiPlusCircle size={20} className="text-green-400" />{' '}
                        <span className="ml-2">Add more evidence</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-md font-bold text-gray-500 mt-4">Cognitive Errors</p>
                  <p className="text-md font-medium text-gray-500 mt-4">
                    Select the Cognitive Errors you can find in the "Evidence For" this Schema. Sometimes the evidence
                    that seems to support the accuracy of the schema is actually false evidence because cognitive errors
                    are clouding your thinking.
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
              </div>
            )}
            {step == 3 && (
              <div>
                <h3 className="text-center my-4">Advantages And Disadvantages</h3>
                <div>
                  <p className="text-md font-bold text-gray-500 mt-4">
                    List the pros and cons for and against this schema.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <p className="text-md text-gray-500">Advantages: How this negative schema benefits you.</p>
                    <p className="text-md text-gray-500">Disadvantages: How this negative schema hurts you.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      {advantage.map((item, index) => (
                        <Input
                          className="w-full my-1"
                          size="sm"
                          value={item}
                          key={index}
                          onChange={(e) => {
                            changeAdvantage(index, e.currentTarget.value)
                          }}
                        />
                      ))}
                      <div className="flex cursor-pointer mt-2 items-center" onClick={addEmptyAdvantage}>
                        <BiPlusCircle size={20} className="text-green-400" />{' '}
                        <span className="ml-2">Add more advantages</span>
                      </div>
                    </div>
                    <div>
                      {disadvantage.map((item, index) => (
                        <Input
                          className="w-full my-1"
                          size="sm"
                          value={item}
                          key={index}
                          onChange={(e) => {
                            changeDisadvantage(index, e.currentTarget.value)
                          }}
                        />
                      ))}
                      <div className="flex cursor-pointer mt-2 items-center" onClick={addEmptyDisadvantage}>
                        <BiPlusCircle size={20} className="text-green-400" />{' '}
                        <span className="ml-2">Add more disadvantages</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step == 4 && (
              <div>
                <h3 className="text-center my-4">Alternative Schemas</h3>
                <p className="text-md font-bold text-gray-700 mt-4">Record rational alternative to Your schema</p>
                <p className="text-md font-medium text-gray-500 mt-4">
                  What are some rational alternative schemas to replace your negative, maladaptive schema? How strongly
                  do you believe these alternatives, from 0-10?
                </p>
                {alternativeSchemas.map((item, index) => (
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
                  onClick={addEmptyAlternativeSchemas}
                >
                  <BiPlusCircle size={28} /> <span className="ml-2">Add more alternative schemas</span>
                </Button>
              </div>
            )}
            {step == 5 && (
              <div>
                <h3 className="text-center mt-4">Schema Action Plan</h3>
                <p className="text-lg font-bold text-gray-500">Write out your action plan</p>
                <p className="text-md font-medium text-gray-500">
                  First, select one of the Rational Alternative Schemas you developed in the last step. Try to list
                  specific actions you can take to practice using the revised schema. Remember, to reap the rewards of a
                  healthier, more adaptive schema, you may need to challenge yourself to break out of old patterns of
                  behavior.
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
            {step == 6 && (
              <div>
                <h3 className="text-center my-4">Changing Schemas</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Schema</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{schema}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Evidence For</h3>
                  <div>
                    {evidenceFor.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Evidence Against</h3>
                  <div>
                    {evidenceAgainst.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Cognitive Errors</h3>
                  <div>
                    {coginitiveErrors.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Advantages</h3>
                  <div>
                    {advantage.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Disadvantages</h3>
                  <div>
                    {disadvantage.map((item, index) => (
                      <p className="text-md font-medium text-gray-500 ml-4" key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[120px]">
                    <h3 className="w-[120px]">Alternative Schemas</h3>
                  </div>
                  <div className="w-full ml-4">
                    {alternativeSchemas.map((item, index) => {
                      return (
                        item[0] !== '' && (
                          <div key={index}>
                            <p className="text-md font-medium text-gray-500">{item[0]}</p>
                            <div className="w-full h-[10px] bg-blue-100">
                              <div className="bg-blue-500 h-full" style={{ width: `${Number(item[1]) * 10}%` }}></div>
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
                  <h3 className="w-[100px] md:w-[120px]">Action Plan</h3>
                  <div className="ml-4">
                    {actionPlan.split(/\r?\n/).map((value, index) => (
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
                {step == 0 ? 'Start' : step == 6 ? 'Done' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ChangingSchema
