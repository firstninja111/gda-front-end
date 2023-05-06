import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { Input, Textarea, Range } from 'react-daisyui'
import { useState } from 'react'
import Description from '../../review/Description'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

export type TaskProps = {
  practice: PracticeSingle
  handlePrev: () => void
  handleNext: () => void
}

export type TaskStateType = {
  task: string
  difficulty: number
  substeps: TaskStateType[]
}

const Task = ({ practice, handlePrev, handleNext }: TaskProps) => {
  const [step, setStep] = useState(0)
  const [isError, setIsError] = useState(false)
  const [taskName, setTaskName] = useState('')

  let defaultLists = []
  for (let i = 1; i <= 4; i++) {
    // Add 4 empty parent steps first
    defaultLists.push({
      task: '',
      difficulty: 0,
      substeps: [],
    })
  }

  const [lists, setLists] = useState<TaskStateType[]>(defaultLists)

  const goToNext = () => {
    setIsError(false)
    if (step == 3) {
      handleNext()
    }
    if (step == 1 && taskName == '') {
      setIsError(true)
      return
    }
    if (step == 2 && lists.filter((item) => item.task !== '').length == 0) {
      setIsError(true)
      return
    }
    setStep((step) => step + 1)
  }

  const changeList = (index: number, value: any, type: string) => {
    const changingItem = {
      task: type == 'task' ? value : lists[index].task,
      difficulty: type == 'difficulty' ? value : lists[index].difficulty,
      substeps: lists[index].substeps,
    }

    setLists([...lists.slice(0, index), changingItem, ...lists.slice(index + 1)])
  }

  const addMoreStep = () => {
    const changingItem = {
      task: '',
      difficulty: 0,
      substeps: [],
    }
    setLists([...lists, changingItem])
  }

  const onReplaceList = (index: number, direction: string) => {
    if ((direction == 'up' && index == 0) || (direction == 'down' && index == lists.length - 1)) {
      return
    }
    if (direction == 'up') {
      setLists([...lists.slice(0, index - 1), lists[index], lists[index - 1], ...lists.slice(index + 1)])
    } else {
      setLists([...lists.slice(0, index), lists[index + 1], lists[index], ...lists.slice(index + 2)])
    }
  }

  const onReplaceSubItem = (index: number, subindex: number, direction: string) => {
    if ((direction == 'up' && subindex == 0) || (direction == 'down' && subindex == lists[index].substeps.length - 1)) {
      return
    }
    if (direction == 'up') {
      setLists([
        ...lists.slice(0, index),
        {
          task: lists[index].task,
          difficulty: lists[index].difficulty,
          substeps: [
            ...lists[index].substeps.slice(0, subindex - 1),
            lists[index].substeps[subindex],
            lists[index].substeps[subindex - 1],
            ...lists[index].substeps.slice(subindex + 1),
          ],
        },
        ...lists.slice(index + 1),
      ])
    } else {
      setLists([
        ...lists.slice(0, index),
        {
          task: lists[index].task,
          difficulty: lists[index].difficulty,
          substeps: [
            ...lists[index].substeps.slice(0, subindex),
            lists[index].substeps[subindex + 1],
            lists[index].substeps[subindex],
            ...lists[index].substeps.slice(subindex + 2),
          ],
        },
        ...lists.slice(index + 1),
      ])
    }
  }

  // ====== SubSteps Management methods ======
  const generateSubSteps = (index: number) => {
    const changingItem = {
      task: lists[index].task,
      difficulty: lists[index].difficulty,
      substeps: [
        { task: '', difficulty: 0, substeps: [] },
        { task: '', difficulty: 0, substeps: [] },
        { task: '', difficulty: 0, substeps: [] },
      ],
    }
    setLists([...lists.slice(0, index), changingItem, ...lists.slice(index + 1)])
  }

  const addMoreSubStep = (index: number) => {
    const changingItem = {
      task: lists[index].task,
      difficulty: lists[index].difficulty,
      substeps: [...lists[index].substeps, { task: '', difficulty: 0, substeps: [] }],
    }
    setLists([...lists.slice(0, index), changingItem, ...lists.slice(index + 1)])
  }
  const changeSubItem = (index: number, subindex: number, value: any, type: string) => {
    const changingItem = {
      task: lists[index].task,
      difficulty: lists[index].difficulty,
      substeps: [
        ...lists[index].substeps.slice(0, subindex),
        {
          task: type == 'task' ? value : lists[index].substeps[subindex].task,
          difficulty: type == 'difficulty' ? value : lists[index].substeps[subindex].difficulty,
          substeps: [],
        },
        ...lists[index].substeps.slice(subindex + 1),
      ],
    }

    setLists([...lists.slice(0, index), changingItem, ...lists.slice(index + 1)])
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
                <h3 className="text-center mt-4">Select Task</h3>
                <p className="text-lg font-medium text-gray-500 mt-4">What task would you like to complete?</p>
                <Input
                  className="text-gray-600 w-full mt-4"
                  value={taskName}
                  onChange={(e) => {
                    setTaskName(e.currentTarget.value)
                  }}
                />
              </div>
            )}
            {step == 2 && (
              <div>
                <h3 className="text-center mt-4">List Steps</h3>
                <p className="text-lg font-medium text-gray-500 mt-4">
                  List the steps it will take to complete this task and rate the difficulty (0-10) for each.
                </p>
                <p className="text-lg font-medium text-gray-500 mt-2">
                  If a task seems difficult, consider creating sub-steps. Finally, order the steps in a way that will
                  increase your chances of success.
                </p>
                <p className="text-purple-700 font-bold text-lg mt-4 block md:hidden">
                  Please order tasks and rate difficulty.
                </p>
                <div className="grid mt-4 grid-cols-2 gap-4">
                  <div>
                    <span className="text-purple-700 font-bold text-lg hidden md:block">List & Order Tasks</span>
                  </div>
                  <div>
                    <span className="text-purple-700 font-bold text-lg hidden md:block">Rate Difficulty of Task</span>
                  </div>
                </div>
                {lists.map((item, index) => (
                  <div className="py-4" key={index}>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex">
                          <div className="flex flex-col">
                            <Button
                              className="bg-[#eee] rounded-none"
                              size="xs"
                              color="primary"
                              onClick={(e) => {
                                onReplaceList(index, 'up')
                              }}
                            >
                              <TiArrowSortedUp className="text-blue-500" size={24} />
                            </Button>
                            <Button
                              className="bg-[#eee] rounded-none"
                              size="xs"
                              color="primary"
                              onClick={(e) => {
                                onReplaceList(index, 'down')
                              }}
                            >
                              <TiArrowSortedDown className="text-red-500" size={24} />
                            </Button>
                          </div>
                          <Input
                            className="w-full ml-4"
                            value={item.task}
                            onChange={(e) => {
                              changeList(index, e.currentTarget.value, 'task')
                            }}
                          />
                        </div>
                        {item.substeps.length == 0 && (
                          <div className="mt-2">
                            <span
                              className="text-blue-500 cursor-pointer font-medium"
                              onClick={(e) => {
                                generateSubSteps(index)
                              }}
                            >
                              Break into sub-steps
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <Range
                          step="10"
                          className="pure-range w-full"
                          size="xs"
                          color="primary"
                          onChange={(e) => {
                            changeList(index, e.currentTarget.value, 'difficulty')
                          }}
                          value={item.difficulty}
                          defaultValue={item.difficulty}
                        />
                        <div className="flex justify-center">
                          <p className="text-gray-800">Difficulty: {item.difficulty / 10}</p>
                        </div>
                      </div>
                    </div>
                    {item.substeps.map((subitem, subindex) => (
                      /* Sub-steps view */
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" key={`${index}_${subindex}`}>
                        <div>
                          <div className="flex ml-8">
                            <div className="flex flex-col">
                              <Button
                                className="bg-[#eee] rounded-none"
                                size="xs"
                                color="primary"
                                onClick={(e) => {
                                  onReplaceSubItem(index, subindex, 'up')
                                }}
                              >
                                <TiArrowSortedUp className="text-blue-500" size={24} />
                              </Button>
                              <Button
                                className="bg-[#eee] rounded-none"
                                size="xs"
                                color="primary"
                                onClick={(e) => {
                                  onReplaceSubItem(index, subindex, 'down')
                                }}
                              >
                                <TiArrowSortedDown className="text-red-500" size={24} />
                              </Button>
                            </div>
                            <Input
                              className="w-full ml-4"
                              value={subitem.task}
                              onChange={(e) => {
                                changeSubItem(index, subindex, e.currentTarget.value, 'task')
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col ml-8">
                          <Range
                            step="10"
                            className="pure-range w-full"
                            size="xs"
                            color="accent"
                            onChange={(e) => {
                              changeSubItem(index, subindex, e.currentTarget.value, 'difficulty')
                            }}
                            value={subitem.difficulty}
                            defaultValue={subitem.difficulty}
                          />
                          <div className="flex justify-center">
                            <p className="text-gray-800">Difficulty: {subitem.difficulty / 10}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {item.substeps.length != 0 && (
                      <div className="mt-2">
                        <span
                          className="text-blue-500 cursor-pointer font-medium ml-8"
                          onClick={(e) => {
                            addMoreSubStep(index)
                          }}
                        >
                          Add more sub-steps
                        </span>
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4">
                  <span
                    className="text-purple-700 cursor-pointer font-medium"
                    onClick={(e) => {
                      addMoreStep()
                    }}
                  >
                    Add more steps
                  </span>
                </div>
              </div>
            )}
            {step == 3 && (
              <div>
                <h3 className="text-center my-4">Step By Step Summary</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Task</h3>
                  <p className="text-md font-medium text-gray-500 ml-4">{taskName}</p>
                </div>
                <div className="flex p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <h3 className="w-[120px]">Steps & Difficulty (0-10)</h3>
                  <div className="w-full">
                    {lists
                      .filter((item) => item.task != '')
                      .map((item, index) => (
                        <div
                          className={`${
                            index != lists.filter((item) => item.task != '').length - 1 ? 'border-b-4' : ''
                          } py-2`}
                          key={index}
                        >
                          <p className="text-md ml-0 md:ml-4">
                            <span className="font-medium text-gray-500">{item.task} </span>
                            <span className="text-sm font-light text-gray-500">
                              (Difficulty={item.difficulty / 10})
                            </span>
                          </p>
                          {item.substeps
                            .filter((subitem) => subitem.task != '')
                            .map((subitem, subindex) => (
                              <div
                                className={`${
                                  subindex != item.substeps.filter((subitem) => subitem.task != '').length - 1
                                    ? 'border-b'
                                    : ''
                                } ml-4`}
                                key={`${index}_${subindex}`}
                              >
                                <p className="text-md ml-0 md:ml-4">
                                  <span className="font-medium text-gray-500">{subitem.task} </span>
                                  <span className="text-sm font-light text-gray-500">
                                    (Difficulty={subitem.difficulty / 10})
                                  </span>
                                </p>
                              </div>
                            ))}
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
                {step == 0 ? 'Start' : step == 3 ? 'Done' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Task
