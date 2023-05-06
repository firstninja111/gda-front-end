import { Modal } from 'react-daisyui'
import { RotatingLines } from 'react-loader-spinner'

interface LoadingProps {
  visible: boolean
}

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  return (
    <>
      <Modal className={'modal-scroll w-11/12 max-w-xs light'} open={visible}>
        <Modal.Header className="font-bold flex items-center justify-center">
          <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="48" visible />
          <span className="ml-4 text-gray-500">Loading...</span>
        </Modal.Header>

        <Modal.Body></Modal.Body>
      </Modal>
    </>
  )
}

export default Loading
