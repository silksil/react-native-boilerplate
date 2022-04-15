import validationRules from "./validationRules";

const validatePasswordByRules = passwordValue =>
  validationRules.map(rule => ({
    isValid: rule.method(passwordValue),
    ...rule,
  }));

export default validatePasswordByRules;
