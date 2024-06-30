import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import { useState } from "react";
import { UseSelectPatientsRoom } from "../../../../hooks/HSelect patients/UseSelectPatientsRoom";
import UseAddLabpatients from "../../../../hooks/HLabs/LabPatients/UseAddLabpatients";
// eslint-disable-next-line react/prop-types
const AddLabPatients = ({ isOpen, closeModal, title }) => {
  const StoredId = localStorage.getItem("labId");
  const labIdStored = StoredId ? JSON.parse(StoredId) : null;

  const { data } = UseSelectPatientsRoom();
  const [labPatientData, setlabPatientData] = useState({
    patient_id: "",
    laboratory_id: labIdStored,
    appointment: "",
    title: "",
    description: "",
  });
  const { addLabPatients, loading } = UseAddLabpatients();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setlabPatientData({
      ...labPatientData,
      [name]: value,
    });
  };
  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addLabPatients(labPatientData, userData);
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
              value={labPatientData.patient_id}
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

          <div className="flex gap-2 flex-col">
            <Label htmlFor="laboratory_id"> Appointment : </Label>
            <Input
              // @ts-ignore
              type='date'
              id="appointment"
              value={labPatientData.appointment}
              name="appointment"
              onChange={changeHandler}
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="title"> Title: </Label>
            <Input
              // @ts-ignore
              id="title"
              type="text"
              value={labPatientData.title}
              name="title"
              onChange={changeHandler}
            />
          </div>

          <div className="flex gap-2 flex-col">
            <Label htmlFor="description"> description: </Label>
            <Input
              // @ts-ignore
              id="description"
              type="text"
              value={labPatientData.description}
              name="description"
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

export default AddLabPatients;
