import Modal from "../../../../Ui/Modal";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
// eslint-disable-next-line react/prop-types
const DelInvPharmacy = ({ isOpen, closeModal, title }) => {
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form>
          <div className="flex justify-center items-center space-x-3 ">
            <SubmitButton title={"Delete"} add={""} />
            <Cancelbtn title={"Cancel"} add={""} />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DelInvPharmacy;
