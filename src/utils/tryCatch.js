const tryCatch = fn => {
  try {
    return fn();
  } catch (error) {
    console.log(error.message);
  }
};

export default tryCatch;
