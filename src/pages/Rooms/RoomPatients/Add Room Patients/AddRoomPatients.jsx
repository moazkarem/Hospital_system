import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import { UseSelectPatientsRoom } from "../../../../hooks/HSelect patients/UseSelectPatientsRoom";
// eslint-disable-next-line react/prop-types
import toast from "react-hot-toast";
import { useState } from "react";
import UseAddRoomPatients from "../../../../hooks/HRoom Patients/UseAddRoomPatients";
// eslint-disable-next-line react/prop-types
const AddRoomPatients = ({ isOpen, closeModal, title }) => {
  const StoredId = localStorage.getItem("roomId");
  const roomIdStored = StoredId ? JSON.parse(StoredId) : null;
  const { data } = UseSelectPatientsRoom();
  const [roomPatientData, setroomPatientData] = useState({
    patient_id: "",
    room_id: roomIdStored,
    bed_number: "",
    date_in: "",
  });
  const { addRoomPatients, loading } = UseAddRoomPatients();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setroomPatientData({
      ...roomPatientData,
      [name]: value,
    });
  };
  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addRoomPatients(roomPatientData, userData);
    console.log(result);
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
            <Label htmlFor="patient_id"> Patients Id : </Label>
            <select
              className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
               focus:border-[#dbdbebde] focus:outline-none focus:ring-1
                 rounded-md px-3 py-3 text-md text-white"
             value={roomPatientData.patient_id}
             name="patient_id"
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
          {/* <div className="flex gap-2 flex-col">
            <Label htmlFor="room_id"> Room Id : </Label>
            <Input 
// @ts-ignore
            id="room_id" value={roomPatientData.room_id}
             name="room_id"
             onChange={changeHandler} />
          </div> */}
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Bed Number : </Label>
            <Input 
// @ts-ignore
            id="bed_number" value={roomPatientData.bed_number}
             name="bed_number"
             onChange={changeHandler} />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="date_in"> Date In: </Label>
            <Input 
// @ts-ignore
            id="date_in" type="date" value={roomPatientData.date_in} name="date_in" onChange={changeHandler}/>
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

export default AddRoomPatients;