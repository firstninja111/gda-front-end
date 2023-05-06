import { useState } from 'react'
import { Modal, Button, Range } from 'react-daisyui'

interface TrackerProps {
  visible: boolean
  onClose: () => void
  onSubmit: (anxiety: number, depression: number) => void
}

const Tracker: React.FC<TrackerProps> = ({ visible, onClose, onSubmit }) => {
  const [anxiety, setAnxiety] = useState(0)
  const [depression, setDepression] = useState(0)

  return (
    <>
      <Modal className={'modal-scroll w-11/12 max-w-xs light'} open={visible}>
        <Button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={() => {
            onClose()
            setAnxiety(0)
            setDepression(0)
          }}
        >
          ✕
        </Button>
        <Modal.Header className="font-bold">How are you feeling today?</Modal.Header>

        <Modal.Body>
          <div>
            <div>
              <p className="mb-4">
                Take a moment to share how you are feeling. Over time, mood tracking can lead to surprising and valuable
                insights.
              </p>
              <div className="mb-4 p-4">
                <h4 className="mb-2">Rate your level of anxiety</h4>
                <Range
                  className="range-background"
                  defaultValue={0}
                  value={anxiety * 10}
                  step={10}
                  size="xs"
                  onChange={(e) => setAnxiety(Number(e.currentTarget.value) / 10)}
                />
                <div className="flex justify-between">
                  <label>Not anxious</label>
                  <label>Extremely anxious</label>
                </div>
              </div>
              <div className="mb-4 p-4">
                <h4 className="mb-2">Rate your level of depression</h4>
                <Range
                  className="range-background"
                  defaultValue={0}
                  value={depression * 10}
                  step={10}
                  size="xs"
                  onChange={(e) => setDepression(Number(e.currentTarget.value) / 10)}
                />
                <div className="flex justify-between">
                  <label>Not depressed</label>
                  <label>Extremely depressed</label>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                color="info"
                onClick={async () => {
                  await onSubmit(anxiety, depression)
                  setAnxiety(0)
                  setDepression(0)
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Tracker
