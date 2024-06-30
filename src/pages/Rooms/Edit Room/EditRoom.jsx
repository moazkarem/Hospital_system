// @ts-nocheck
/* eslint-disable react/prop-types */
import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseEditRoom from "../../../hooks/HRooms/UseeditRoom";
// eslint-disable-next-line react/prop-types
const EditRoom = ({
  isOpenEdit,
  closeModalEdit,
  title,
  seteditRoom,
  editRoom,
}) => {
  const { editRoomData, loading } = UseEditRoom(); // Use the custom hook
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    seteditRoom({
      ...editRoom,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await editRoomData(editRoom, userData);
    if (result.success) {
      closeModalEdit();
      toast.success("Success Updated!", {
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
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={onSubmitHandler}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="room_number"> Room Number : </Label>
            <Input
              id="room_number"
              name="room_number"
              onChange={changeHandler}
              value={editRoom.room_number}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="bed_numbers"> Bed Number : </Label>
            <Input
              id="bed_numbers"
              name="bed_numbers"
              onChange={changeHandler}
              value={editRoom.bed_numbers}
            />
          </div>
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Edit </SubmitButton>
            <Cancelbtn onClick={closeModalEdit}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default EditRoom;
