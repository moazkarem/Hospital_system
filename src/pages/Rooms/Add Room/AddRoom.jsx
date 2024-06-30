// @ts-nocheck
import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import { useState } from "react";
import UseAddRoom from "../../../hooks/HRooms/UseAddRoom";

// eslint-disable-next-line react/prop-types
const AddRoom = ({ isOpen, closeModal, title }) => {
  const [roomData, setroomData] = useState({
    room_number: "",
    bed_numbers: "",
  });
  const { addRoomData, loading } = UseAddRoom();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setroomData({
      ...roomData,
      [name]: value,
    });
  };
  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addRoomData(roomData, userData);
    console.log(result, "ad rommm");
    if (result.success) {
      closeModal();
      toast.success("Success Adding!", {
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
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={onAddHandler}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="room_number"> Room Number : </Label>
            <Input
              id="room_number"
              name="room_number"
              onChange={changeHandler}
              value={roomData.room_number}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="bed_numbers"> Bed Number : </Label>
            <Input
              id="bed_numbers"
              name="bed_numbers"
              onChange={changeHandler}
              value={roomData.bed_numbers}
            />
          </div>
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Add </SubmitButton>
            <Cancelbtn onClick={closeModal}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddRoom;
