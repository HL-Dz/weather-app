const renderError = (text) => {
  const err = document.createElement('div');
  err.classList.add('error');
  err.textContent = text;
  return err;
};

export default renderError;