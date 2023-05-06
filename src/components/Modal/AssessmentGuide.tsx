import { Modal, Button } from 'react-daisyui'
import { Link } from 'react-router-dom'

interface AssessmentGuideProps {
  visible: boolean
  onClose: () => void
}

const AssessmentGuide: React.FC<AssessmentGuideProps> = ({ visible, onClose }) => {
  return (
    <>
      <Modal className={'modal-scroll w-11/12 max-w-xs light'} open={visible}>
        <Button size="sm" shape="circle" className="absolute right-2 top-2" onClick={onClose}>
          ✕
        </Button>
        <Modal.Header className="font-bold">Assessment Offer</Modal.Header>

        <Modal.Body>
          <div>
            <div>
              <p className="mb-4">Please complete the GAD-7 and PHQ-9 assessments before you begin the program.</p>
            </div>

            <div className="flex justify-end">
              <Link to="/assessments">
                <Button color="info" onClick={onClose}>
                  Start
                </Button>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AssessmentGuide
