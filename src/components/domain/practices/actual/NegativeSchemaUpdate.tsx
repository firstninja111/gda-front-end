import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { ThoughtEnum } from '~/types/enum'
import { Input, Select, Range, Textarea } from 'react-daisyui'
import { useEffect, useState } from 'react'
import CheckGroup from '~/components/common/CheckGroup'
import Description from '../../review/Description'
import { BiPlusCircle } from 'react-icons/bi'

export type NegativeSchemaUpdateProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
}

const NegativeSchemaUpdate = ({ practice, handleNext, handlePrev }: NegativeSchemaUpdateProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [schema, setSchema] = useState('')
  const [schemaUpdate, setSchemaUpdate] = useState('')

  const setNextStep = () => {
    if (step == 3) {
      handleNext()
    }
    setIsError(false)
    if (step == 1 && (schema == '' || schema == ThoughtEnum.noselect)) {
      setIsError(true)
      return
    }

    if (step == 2 && schemaUpdate == '') {
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
                <h3 className="text-center mt-4">Review And Record</h3>
                <p className="text-lg font-bold text-gray-500">
                  Review your work and share any additional progress in changing this schema
                </p>
                <p className="text-md font-medium text-gray-500">
                  It looks like you haven't had a chance to complete the Changing Schemas exercise for this schema yet.
                  You can record any progress you've made below, and go back and work on the Changing Schemas exercise
                  later.
                </p>
                <Textarea
                  className="w-full mt-4 leading-4"
                  rows={6}
                  onChange={(e) => {
                    setSchemaUpdate(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 3 && (
              <div>
                <h3 className="text-center my-4">Summary: Negative Schema Update</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Schema</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{schema}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[100px] md:w-[120px]">Schema Update</h3>
                  <div className="ml-4">
                    {schemaUpdate.split(/\r?\n/).map((value, index) => (
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

export default NegativeSchemaUpdate
