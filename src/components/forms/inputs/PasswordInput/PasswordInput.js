import { Icon, Input } from "@ui-kitten/components";
import { bool, string } from "prop-types";
import React, { useState, useRef } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useController } from "react-hook-form";

import FormGroup from "../FormGroup";

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const PasswordInput = ({
  name,
  label,
  helperText,
  defaultValue,
  disabled = false,
  isRequired,
  showIsRequired,
  control,
  ...props
}) => {
  const ref = useRef();
  const { field } = useController({ control, defaultValue, name });
  const [error, setError] = useState();
  const [isFocused, setFocus] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const captionMessage = error || helperText;
  const showCaptionMessage = !!(error || (isFocused && helperText));
  const labelText = `${label}${showIsRequired ? "*" : ""}`;

  // TODO: include the ability to see or not see a password
  // somehow the example of UI Kitten is not working:
  // https://akveo.github.io/react-native-ui-kitten/docs/components/input/overview#input
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon name="eye" />
    </TouchableWithoutFeedback>
  );

  return (
    <FormGroup>
      <Input
        ref={ref}
        value={field.value}
        onChangeText={field.onChange}
        label={label && labelText}
        status={error ? "danger" : "basic"}
        caption={showCaptionMessage ? captionMessage : undefined}
        captionIcon={showCaptionMessage && AlertIcon}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </FormGroup>
  );
};

PasswordInput.propTypes = {
  name: string.isRequired,
  label: string,
  defaultValue: string,
  disabled: bool,
  helperText: string,
  isRequired: bool,
  showIsRequired: bool,
};

PasswordInput.defaultProps = {
  label: null,
  defaultValue: undefined,
  disabled: false,
  helperText: null,
  isRequired: true,
  showIsRequired: true,
};

export default PasswordInput;
