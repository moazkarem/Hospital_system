export const resourse_form = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
];

//========================= PATIENTS DATA ==========

export const patient_form = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "gender",
    label: "Gender",
    name: "gender",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "address",
    label: "Address",
    name: "address",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },

  {
    id: "disease",
    label: "Disease",
    name: "disease",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
];

//========================= ROOMS DATA ==========
export const rooms_form = [
  {
    id: "roomnumber",
    label: "Room Number",
    name: "room_number",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "bednumber",
    label: "Bed Number",
    name: "bed_numbers",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
];
//========================= ROOMS PATIENTS  DATA ==========
export const rooms_patients_form = [
  {
    id: "patients_id",
    label: "Patient Id",
    name: "patients_id",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "bednumber",
    label: "Bed Number",
    name: "bed_number",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "date_in",
    label: "Date In",
    name: "date_in",
    type: "text",
    validation: {
      require: "true",

    },
  },
];

//========================= TOOLS  DATA ==========

export const tools_form = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "type",
    label: "Type",
    name: "type",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
 
];

//========================= PHARMACY  DATA ==========
export const pharmacy_form = [
  {
    id: "name",
    label: "Name",
    name: "name",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "type",
    label: "Type",
    name: "type",
    type: "text",
    validation: {
      require: "true",
      minLength: 3,
    },
  },
  {
    id: "description",
    label: "description",
    name: "description",
    type: "text",
    validation: {
      require: "true",
      minLength: 8,
    },
  },
  {
    id: "price",
    label: "Price",
    name: "price",
    type: "text",
    validation: {
      require: "true",
      minLength: 1,
    },
  },
 
];