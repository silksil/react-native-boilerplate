import { Button, Spinner } from "@ui-kitten/components";
import PropTypes from "prop-types";
import React, { useMemo } from "react";

const getStatus = (status, title) =>
  ({
    idle: title,
    loading: Spinner,
    success: "success",
    error: title,
  }[status]);
// Include loading icon while loading
// see for an example this link:
// https://akveo.github.io/react-native-ui-kitten/docs/components/input/overview#input

const SubmitButton = ({ onPress, status, title, ...props }) => {
  const isDisabled = status === ("loading" || "success");

  const text = useMemo(() => getStatus(status, title), [status, title]);

  return (
    <Button disabled={isDisabled} onPress={onPress} {...props}>
      {text}
    </Button>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string,
};

SubmitButton.defaultProps = {
  title: "Submit",
};

export default SubmitButton;
