import {FC} from 'react'

interface Props {
 modalVisible: boolean
 closeModal: () => void
}

const Modal: FC<Props> = ({modalVisible, closeModal}) => {
  return (
      <div className={`${modalVisible ? "flex" : "hidden"} bg-modal-overlay fixed inset-0 z-50 items-center justify-center`}>
        <div className="bg-white py-5 px-6 text-center rounded-lg w-11/12 sm:w-1/2">
          <h3 className="font-semibold">Order Confirmed!</h3>
          <p>Your order has been confirmed successfully.</p>
          <button
            onClick={() => closeModal()}
            type="button"
            className="bg-dark-yellow text-white py-3 rounded border-0 text-center w-[100px] mt-3">
            Okay
          </button>
        </div>
      </div>
  )
}

export default Modal
