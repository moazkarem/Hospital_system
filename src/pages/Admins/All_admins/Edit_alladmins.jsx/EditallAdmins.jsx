// @ts-nocheck
/* eslint-disable react/prop-types */
import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import UseEditAlladmins from "../../../../hooks/HAdmins/Alladmins/UseEditAlladmin";
import { useForm } from "react-hook-form";

import { user_form } from "../../../../data/user_validation/User_valid";
import { userSchema } from "../../../../validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrMessage from "../../../../errors/Error input message/ErrMessage";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const EditAlladmins = ({
  isOpenEdit,
  closeModalEdit,
  title,

  alladmin,
}) => {
  const { editAlladmins, loading } = UseEditAlladmins(); // Use the custom hook
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: alladmin,
  });
  // Populate the form with the current values of editDoctor
  useEffect(() => {
    for (const key in alladmin) {
      setValue(key, alladmin[key]);
    }
  }, [alladmin, setValue]);
  const onSubmit = async (data) => {
    const result = await editAlladmins(data, userData);
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
  //==================== RENDER FORM ==========
  const render_admin = user_form.map(
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
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {render_admin}
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}> Edit </SubmitButton>
            <Cancelbtn onClick={closeModalEdit}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default EditAlladmins;
