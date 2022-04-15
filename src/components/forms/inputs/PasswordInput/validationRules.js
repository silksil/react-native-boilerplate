const validationRules = [
  {
    description: "Minimaal 8 tekens",
    method: val => val.length > 8,
  },
  {
    description: "Minimaal één hoofdletter",
    method: val => RegExp("[A-Z]").test(val),
  },
  {
    description: "Minimaal één kleine letter",
    method: val => RegExp("[a-z]").test(val),
  },
  {
    description: "Minimaal één cijfer",
    method: val => RegExp("[0-9]").test(val),
  },
];

export default validationRules;
