import { Icon, Input } from "@ui-kitten/components";
import { bool, string } from "prop-types";
import React, { useState, useRef } from "react";
import { useController } from "react-hook-form";

import FormGroup from "./FormGroup";

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const TextInput = ({
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
  const captionMessage = error || helperText;
  const showCaptionMessage = !!(error || (isFocused && helperText));

  const labelText = `${label}${showIsRequired ? "*" : ""}`;

  return (
    <FormGroup>
      <Input
        ref={ref}
        value={field.value}
        onChangeText={field.onChange}
        label={label && labelText}
        status={error ? "danger" : "basic"}
        caption={showCaptionMessage ? captionMessage : undefined}
        captionIcon={showCaptionMessage ? AlertIcon : undefined}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
    </FormGroup>
  );
};

TextInput.propTypes = {
  name: string.isRequired,
  label: string,
  defaultValue: string,
  disabled: bool,
  helperText: string,
  isRequired: bool,
  showIsRequired: bool,
};

TextInput.defaultProps = {
  label: null,
  defaultValue: undefined,
  disabled: false,
  helperText: null,
  isRequired: false,
  showIsRequired: false,
};

export default TextInput;
