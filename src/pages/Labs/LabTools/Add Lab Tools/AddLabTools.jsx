// @ts-nocheck
import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UseAddLabTools from "../../../../hooks/HLabs/HlabTools/UseAddLabTools";
import { UseSelectRoomTools } from "../../../../hooks/HSelect patients/UseSelectRoomTools";
const schema = yup.object().shape({
  tool_id: yup.string().required("Tool ID is required"),
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be positive")
    .required("Quantity is required"),
});
// eslint-disable-next-line react/prop-types
const AddLabTools = ({ isOpen, closeModal, title }) => {
  const StoredId = localStorage.getItem("labId");
  const labIdStored = StoredId ? JSON.parse(StoredId) : null;
  const { data } = UseSelectRoomTools();
  const { addLabTools, loading } = UseAddLabTools();
  const storageKey = "logged";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onAddHandler = async (formData) => {
    const result = await addLabTools(
      { ...formData, laboratory_id: labIdStored },
      userData
    );
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
        <form onSubmit={handleSubmit(onAddHandler)}>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="tool_id">Tool Id:</Label>
            <select
              className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
                focus:border-[#dbdbebde] focus:outline-none focus:ring-1
                rounded-md px-3 py-3 text-md text-white"
              {...register("tool_id")}
            >
              <option value="">Select Tool Id</option>
              {data &&
                data.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
            </select>
            {errors.tool_id && (
              <p className="text-red-500">{errors.tool_id.message}</p>
            )}
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="quantity">Quantity:</Label>
            <Input id="quantity" {...register("quantity")} />
            {errors.quantity && (
              <p className="text-red-500">{errors.quantity.message}</p>
            )}
          </div>
          <div className="flex justify-center items-center space-x-3">
            <SubmitButton loading={loading}>Add</SubmitButton>
            <Cancelbtn onClick={closeModal}>Cancel</Cancelbtn>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddLabTools;
