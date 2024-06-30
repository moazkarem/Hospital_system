// @ts-nocheck
import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import SubmitButton from "../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseAddLab from "../../../hooks/HLabs/UseAddLab";
import { useForm } from "react-hook-form";
import { resourse_form } from "../../../data/resources_data/resourse_forms";
import { labsSchema } from "../../../validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrMessage from "../../../errors/Error input message/ErrMessage";
// eslint-disable-next-line react/prop-types
const AddLab = ({ isOpen, closeModal, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(labsSchema),
  });
  const { addLabData, loading } = UseAddLab();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const onSubmit = async (data) => {
    const result = await addLabData(data, userData);
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

  //==================== RENDER FORM ==========
  const lab_render = resourse_form.map(
    ({ id, name, label, type, validation }, idx) => (
      <div key={idx} className="flex gap-2 flex-col">
        <Label htmlFor={id}>{label}:</Label>
        <Input type={type} id={id} {...register(name, validation)} />
        {errors[name] && <ErrMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {lab_render}
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}>Add</SubmitButton>
            <Cancelbtn onClick={closeModal}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddLab;
