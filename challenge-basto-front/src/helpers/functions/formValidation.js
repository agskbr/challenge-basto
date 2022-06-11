const formValidation = (input) => {
  let errors = {};
  if (!input.senasaId) {
    errors.senasaId = "El Id de senasa es obligatorio";
  } else if (!/^[a-zA-Z0-9]+$/.test(input.senasaId)) {
    errors.senasaId = "El id de senasa debe ser alfanumerico";
  } else if (input.senasaId.length !== 16) {
    errors.senasaId = "Debe contener 16 carácteres";
  }
  if (!input.type) {
    errors.type = "Debe seleccionar el tipo de animal";
  }
  if (!input.weight) {
    errors.weight = "Debe especificar el peso del animal";
  }
  if (!input.deviceType) {
    errors.deviceType = "Debe seleccionar un tipo de dispositivo";
  }
  if (!input.deviceNum) {
    errors.deviceNum = "Debe ingresar un número correspondiente al dispositivo";
  } else if (!/^[a-zA-Z0-9]+$/.test(input.deviceNum)) {
    errors.deviceNum = "Solo se permiten letras y numeros";
  } else if (input.deviceNum.length !== 8) {
    errors.deviceNum = "Debe contener 8 carácteres";
  }
  return errors;
};

export default formValidation;
