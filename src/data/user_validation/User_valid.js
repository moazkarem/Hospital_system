export const user_form = [
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
    id: "phone",
    label: "Phone",
    name: "phone",
    type: "text",
    validation: {
      require: "true",
      pattern: /^01[0-9]-[0-9]{4}-[0-9]{4}$/,
    },
  },

  {
    id: "email",
    label: "Email",
    name: "email",
    type: "email",
    validation: {
      require: "true",
      pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
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
];
