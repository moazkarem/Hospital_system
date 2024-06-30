/* eslint-disable react/prop-types */
import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseEditLabManger from "../../../../hooks/HLabs/HLabManager/UseeditLabManager";
// eslint-disable-next-line react/prop-types
const EditLabManager = ({ isOpenEdit, closeModalEdit, title , seteditlabmanager , editlabmanager }) => {
  const { editlabmanagerData, loading } = UseEditLabManger(); // Use the custom hook
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const changeHandler = (e) => {
    const { value, name } = e.target;
    seteditlabmanager({
      ...editlabmanager,
      [name]: value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await editlabmanagerData(editlabmanager, userData);
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
            <Label htmlFor="Name"> Name : </Label>
            <Input
              // @ts-ignore
              id="Name"
              value={editlabmanager.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Phone : </Label>
            <Input
              // @ts-ignore
              id="Phone"
              value={editlabmanager.phone}
              onChange={changeHandler}
              name="phone"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Email"> Email : </Label>
            <Input
              // @ts-ignore
              id="Email"
              value={editlabmanager.email}
              onChange={changeHandler}
              name="email"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="address"> Address : </Label>
            <Input
              // @ts-ignore
              id="address"
              value={editlabmanager.address}
              onChange={changeHandler}
              name="address"
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

export default EditLabManager;
