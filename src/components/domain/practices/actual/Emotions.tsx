import { Button, Card } from 'react-daisyui'
import { PracticeSingle } from '~/types/practice'
import { Range } from 'react-daisyui'
import { useState } from 'react'

export type EmotionProps = {
  practice: PracticeSingle
  handleNext: () => void
  handlePrev: () => void
  event: string
  autoThought: string
  strength: number
}
export type EmotionStateType = {
  key: string
  strength: number
}

const Emotion = ({ practice, handleNext, handlePrev, event, autoThought, strength }: EmotionProps) => {
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
  const [emotions, setEmotions] = useState<EmotionStateType[]>([])
  const [isSummary, setIsSummary] = useState(false)

  const toogleEmotion = (emotion: string) => {
    if (emotions.filter((item) => item.key == emotion).length != 0) {
      setEmotions((emotions) => emotions.filter((item) => item.key != emotion))
      return
    }
    setEmotions((emotions) => [...emotions, { key: emotion, strength: 0 }])
  }

  const moveSlide = (key: string, strength: any) => {
    const index = emotions.findIndex((item) => item.key == key)
    setEmotions((emotions) => [
      ...emotions.slice(0, index),
      { key: key, strength: strength },
      ...emotions.slice(index + 1),
    ])
  }

  return (
    <div>
      <Card className="w-full flex justify-end my-1 border-none rounded-none">
        <div className="flex items-center border-b py-4">
          <div className="reading-content">
            {!isSummary && (
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
                      onChange={(e) => moveSlide(item.key, e.currentTarget.value)}
                      defaultValue={item.strength}
                    />
                    <div className="flex justify-center">
                      <p className="text-gray-800">Strength: {item.strength / 10}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {isSummary && (
              <div>
                <h3 className="text-center my-4">Summary</h3>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[100px]">
                    <h3 className="w-[100px]">Event</h3>
                  </div>
                  <p className="w-max text-md font-medium text-gray-500">{event}</p>
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[100px]">
                    <h3 className="w-[100px]">Automatic Thought</h3>
                  </div>
                  <div className="w-full">
                    <p className="text-md font-medium text-gray-500">{autoThought}</p>
                    <div className="w-full h-[10px] bg-[#d8bfd8]">
                      <div className="bg-[#800080] h-full" style={{ width: `${strength}%` }}></div>
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
                </div>
                <div className="flex items-center p-2 border rounded-xl border-blue-300 shadow-lg shadow-outline mt-2">
                  <div className="w-[100px]">
                    <h3 className="w-[100px]">Emotions</h3>
                  </div>

                  <div className="w-full">
                    {emotions.map((item, index) => (
                      <div key={index}>
                        <p className="text-md font-medium text-gray-500">{item.key}</p>
                        <div className="w-full h-[10px] bg-blue-100">
                          <div className="bg-blue-800 h-full" style={{ width: `${item.strength}%` }}></div>
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
              </div>
            )}

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
                onClick={() => {
                  if (!isSummary) {
                    setIsSummary(true)
                    return
                  }
                  handleNext()
                }}
              >
                {!isSummary ? 'Continue' : 'Done'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Emotion
