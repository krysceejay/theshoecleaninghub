import {FC} from 'react'

interface Props {
 modalVisible: boolean
 closeModal: () => void
}

const Logout: FC<Props> = ({modalVisible, closeModal}) => {
  return (
    <div className={`${modalVisible ? "flex" : "hidden"} bg-modal-overlay fixed inset-0 z-50 items-center justify-center`}>
      <div className="bg-white py-5 px-6 text-center rounded-lg w-11/12 sm:w-1/2">
        <h3 className="font-semibold text-base">Logout?</h3>
        <p className="mt-3">Are you sure you want to logout?</p>
        <div className="flex items-center space-x-6 mt-3">
            <button
            onClick={() => closeModal()}
            type="button"
            className="bg-[#EFEFEF] font-medium py-3 rounded border-0 text-center flex-1 mt-3">
            Cancel
            </button>
            <button
            onClick={() => {}}
            type="button"
            className="bg-[#D75D47] text-white font-medium py-3 rounded border-0 text-center flex-1 mt-3">
            Logout
            </button>
        </div>
      </div>
    </div>
  )
}

export default Logout
