/* eslint-disable react/prop-types */
import Modal from "../../../../Ui/Modal";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseDeleteAlladmin from "../../../../hooks/HAdmins/Alladmins/UseDelAlladmins";

// eslint-disable-next-line react/prop-types
const DelAllAdmins = ({ isOpen, closeModal, alladmin }) => {
  const { deleteAlladminData, loading } = UseDeleteAlladmin(); // Use the custom hook

  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const onsubmitDeleteHandeler = async (e) => {
    e.preventDefault();

    const result = await deleteAlladminData(alladmin.id, userData);

    if (result.success) {
      closeModal();
      toast.success("Success Deleted!", {
        duration: 1000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      toast.error(result.error, {
        duration: 1000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div>
      <Modal
        title={`Are You Sure You Want To Delete Manager -  ${alladmin.name}`}
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <form onSubmit={onsubmitDeleteHandeler}>
          <div className="flex justify-center items-center space-x-3 ">
            <SubmitButton loading={loading}>Delete</SubmitButton>
            <Cancelbtn onClick={closeModal}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DelAllAdmins;
