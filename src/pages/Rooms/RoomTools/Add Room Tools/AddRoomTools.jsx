import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import { useState } from "react";
import UseAddRoomTools from "../../../../hooks/RoomTools/UseAddroomTools";
import { UseSelectRoomTools } from "../../../../hooks/HSelect patients/UseSelectRoomTools";
// eslint-disable-next-line react/prop-types
const AddRoomTools = ({ isOpen, closeModal, title }) => {
  const StoredId = localStorage.getItem("roomId");
  const roomIdStored = StoredId ? JSON.parse(StoredId) : null;
  const { data } = UseSelectRoomTools();
  const [roomToolsData, setroomToolsData] = useState({
    tool_id: "",
    room_id: roomIdStored,
    type: "test type",
    quantity: "",
  });
  const { addRoomTools, loading } = UseAddRoomTools();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setroomToolsData({
      ...roomToolsData,
      [name]: value,
    });
  };
  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addRoomTools(roomToolsData, userData);
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
            <Label htmlFor="patient_id"> Tool Id : </Label>
            <select
              className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
               focus:border-[#dbdbebde] focus:outline-none focus:ring-1
                 rounded-md px-3 py-3 text-md text-white"
              value={roomToolsData.tool_id}
              name="tool_id"
              onChange={changeHandler}
            >
              {data &&
                data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Quantity : </Label>
            <Input
              // @ts-ignore
              id="quantity"
              value={roomToolsData.quantity}
              name="quantity"
              onChange={changeHandler}
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

export default AddRoomTools;
