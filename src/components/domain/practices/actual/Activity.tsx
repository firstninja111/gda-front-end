import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { Input, Textarea, Range } from 'react-daisyui'
import { useState } from 'react'
import Description from '../../review/Description'

export type ActivityProps = {
  practice: PracticeSingle
  handlePrev: () => void
  handleNext: () => void
}

export type ActivityStateType = {
  time: string
  activity: string
  mastery: number
  pleasure: number
  action: number // -1 : Minus, 0: Equal, 1: Plus, 2:none
}

const Activity = ({ practice, handlePrev, handleNext }: ActivityProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const getFormatHour = (hour: number) => {
    if (hour > 12) {
      return `${hour - 12}pm`
    } else if (hour == 12) {
      return '12pm'
    } else {
      return `${hour}am`
    }
  }
  let defaultActivities = []
  for (let i = 6; i <= 21; i++) {
    defaultActivities.push({
      time: `${getFormatHour(i)}-${getFormatHour(i + 1)}`,
      activity: '',
      mastery: 0,
      pleasure: 0,
      action: 2,
    })
  }

  const dateToString = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    return `${year}-${month > 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`}`
  }

  const [date, setDate] = useState(dateToString(new Date()))
  const [activities, setActivities] = useState<ActivityStateType[]>(defaultActivities)

  const goToNext = () => {
    setIsError(false)
    if (step == 5) {
      handleNext()
    }
    if (step == 2 && activities.slice(0, 5).filter((item) => item.activity !== '').length == 0) {
      setIsError(true)
      return
    }
    if (step == 3 && activities.slice(6, 11).filter((item) => item.activity !== '').length == 0) {
      setIsError(true)
      return
    }
    if (step == 4 && activities.slice(12).filter((item) => item.activity !== '').length == 0) {
      setIsError(true)
      return
    }
    setStep((step) => step + 1)
  }

  const changeActivity = (index: number, value: any, type: string) => {
    const changingItem = {
      time: activities[index].time,
      activity: type == 'activity' ? value : activities[index].activity,
      mastery: type == 'mastery' ? value : activities[index].mastery,
      pleasure: type == 'pleasure' ? value : activities[index].pleasure,
      action: type == 'action' ? value : activities[index].action,
    }
    setActivities([...activities.slice(0, index), changingItem, ...activities.slice(index + 1)])
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
                <h3 className="text-center mt-4">Select Day</h3>
                <p className="text-lg font-medium text-gray-500 mt-4">Choose a day to work with.</p>
                <p className="font-medium text-gray-500">
                  Record your activities for today, yesterday, or another day.
                </p>
                <Input
                  className="text-gray-600 mt-4"
                  value={date}
                  type="date"
                  onChange={(e) => {
                    setDate(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {(step == 2 || step == 3 || step == 4) && (
              <div>
                <h3 className="text-center mt-4">{step == 2 ? 'Morning' : step == 3 ? 'Afternoon' : 'Evening'}</h3>
                <p className="text-lg font-medium text-gray-500 mt-4">
                  Record your activities by the hour, then rate them.
                </p>
                <ul className="ml-4 list-disc text-gray-600">
                  <li>Rate your mastery (or how well you completed the activity) from 0-10.</li>
                  <li>Rate your pleasure (in completing the activity) from 0-10.</li>
                  <li>
                    Decide on the action to take: Select + to do more of this activity, - to do less, or = to do it the
                    same.
                  </li>
                </ul>
                <div className="sm:flex justify-between mt-4 font-bold text-gray-600 border-b hidden">
                  <span>Time</span>
                  <span className="w-full mx-4">Activity</span>
                  <span className="w-[450px] mx-4">Mastery & Pleasure</span>
                  <span>Action</span>
                </div>
                {(() => {
                  return Array.from({ length: step == 4 ? 4 : 6 }, (_, i) => {
                    const index = i + (step == 3 ? 6 : step == 4 ? 12 : 0)
                    return (
                      <div
                        className="flex md:flex-row flex-col justify-between my-2 border-b border-gray-400 md:border-none"
                        key={index}
                      >
                        <span className="my-1">
                          <span className="font-bold text-gray-600 md:hidden inline">Time:</span>{' '}
                          <span>{activities[index].time}</span>
                        </span>
                        <span className="font-bold text-gray-600 md:hidden inline">Activity:</span>
                        <Textarea
                          className="w-full leading-4 mx-0 md:mx-3 my-1"
                          rows={4}
                          value={activities[index].activity}
                          onChange={(e) => {
                            changeActivity(index, e.currentTarget.value, 'activity')
                          }}
                        />
                        <div className="md:mx-3 mx-0 my-1">
                          <span className="font-bold text-gray-600 md:hidden inline">Mastery & Pleasure:</span>
                          <p>Mastery</p>
                          <Range
                            step="10"
                            className="pure-range w-full md:w-[300px]"
                            size="xs"
                            color="primary"
                            onChange={(e) => changeActivity(index, e.currentTarget.value, 'mastery')}
                            defaultValue={activities[index].mastery}
                          />
                          <p>Pleasure</p>
                          <Range
                            step="10"
                            className="pure-range w-full md:w-[300px]"
                            size="xs"
                            color="primary"
                            onChange={(e) => changeActivity(index, e.currentTarget.value, 'pleasure')}
                            defaultValue={activities[index].pleasure}
                          />
                        </div>
                        <div className="flex flex-row md:flex-col my-1">
                          <span className="font-bold text-gray-600 md:hidden block mr-4">Action:</span>
                          <Button
                            className={`${
                              activities[index].action == 1 ? 'bg-[#99cc33]' : 'bg-[#ccc]'
                            } text-lg text-[#666666] mx-1 mb-1 font-bold`}
                            size="sm"
                            onClick={() => {
                              changeActivity(index, 1, 'action')
                            }}
                          >
                            +
                          </Button>
                          <Button
                            className={`${
                              activities[index].action == 0 ? 'bg-[#0099ff]' : 'bg-[#ccc]'
                            } text-lg text-[#666666] mx-1 mb-1 font-bold`}
                            size="sm"
                            onClick={() => {
                              changeActivity(index, 0, 'action')
                            }}
                          >
                            =
                          </Button>
                          <Button
                            className={`${
                              activities[index].action == -1 ? 'bg-[#cc3300]' : 'bg-[#ccc]'
                            } text-lg text-[#666666] mx-1 mb-1 font-bold`}
                            size="sm"
                            onClick={() => {
                              changeActivity(index, -1, 'action')
                            }}
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    )
                  })
                })()}
              </div>
            )}
            {step == 5 && (
              <div>
                <h3 className="text-center my-4">Activity Schedule</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Date</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{date}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Activities to do more of</h3>
                  <div>
                    {activities
                      .filter((item) => item.action == 1 && item.activity != '')
                      .map((value, index) => (
                        <div className="flex md:flex-row flex-col ml-4 my-2 items-center" key={index}>
                          <div className="bg-[#99cc33] font-bold text-white min-w-[25px] h-[25px] text-center mr-4 hidden md:block">
                            +
                          </div>
                          <div className="w-full">
                            {value.activity.split(/\r?\n/).map((value, index) => (
                              <p className="text-md text-gray-600 leading-5" key={index}>
                                {value}
                              </p>
                            ))}
                          </div>

                          <span className="text-gray-500 mx-8 min-w-[200px]">{`(Mastery: ${
                            value.mastery / 10
                          }, Pleasure: ${value.pleasure / 10})`}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Activities to do same amount</h3>
                  <div>
                    {activities
                      .filter((item) => (item.action == 0 || item.action == 2) && item.activity != '')
                      .map((value, index) => (
                        <div className="flex md:flex-row flex-col ml-4 my-2 items-center" key={index}>
                          <div className="bg-[#0099ff] font-bold text-white min-w-[25px] h-[25px] text-center mr-4 hidden md:block">
                            =
                          </div>
                          <div className="w-full">
                            {value.activity.split(/\r?\n/).map((value, index) => (
                              <p className="text-md text-gray-600 leading-5" key={index}>
                                {value}
                              </p>
                            ))}
                          </div>
                          <span className="text-gray-500 mx-8 min-w-[200px]">{`(Mastery: ${
                            value.mastery / 10
                          }, Pleasure: ${value.pleasure / 10})`}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Activities to do less of</h3>
                  <div>
                    {activities
                      .filter((item) => item.action == -1 && item.activity != '')
                      .map((value, index) => (
                        <div className="flex md:flex-row flex-col ml-4 my-2 items-center" key={index}>
                          <div className="bg-[#cc3300] font-bold text-white min-w-[25px] h-[25px] text-center mr-4 hidden md:block">
                            -
                          </div>
                          <div className="w-full">
                            {value.activity.split(/\r?\n/).map((value, index) => (
                              <p className="text-md text-gray-600 leading-5" key={index}>
                                {value}
                              </p>
                            ))}
                          </div>
                          <span className="text-gray-500 mx-8 min-w-[200px]">{`(Mastery: ${
                            value.mastery / 10
                          }, Pleasure: ${value.pleasure / 10})`}</span>
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
                {step == 0 ? 'Start' : step == 5 ? 'Done' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Activity
