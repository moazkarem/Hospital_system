import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import { useState } from "react";

import UseAddlabManager from "../../../../hooks/HLabs/HLabManager/UseAddlabManager";
// eslint-disable-next-line react/prop-types
const AddLabManager = ({ isOpen, closeModal, title }) => {
  const [labMangData, setlabMangData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { addLabmanagerData, loading } = UseAddlabManager();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setlabMangData({
      ...labMangData,
      [name]: value,
    });
  };
  const onAddHandler = async (e) => {
    e.preventDefault();
    const result = await addLabmanagerData(labMangData, userData);
    console.log(result , 'after update labsss');
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
            <Label htmlFor="Name"> Name : </Label>
            <Input
              // @ts-ignore
              id="Name"
              value={labMangData.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Phone : </Label>
            <Input
              // @ts-ignore
              id="Phone"
              value={labMangData.phone}
              onChange={changeHandler}
              name="phone"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Email"> Email : </Label>
            <Input
              // @ts-ignore
              id="Email"
              value={labMangData.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="address"> Address : </Label>
            <Input
              // @ts-ignore
              id="address"
              value={labMangData.address}
              onChange={changeHandler}
              name="address"
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

export default AddLabManager;
