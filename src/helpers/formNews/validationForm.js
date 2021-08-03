import {
  validation,
} from "../../services/Yup/yup.news";

const validateForm = async (inputData) => {
  let err = {
    name: false,
    content: false,
    image: false,
    categoryId: false,
  };
  let error;

  try {
    await validation.validate(inputData);
    error = {
      ...err,
      name: false,
      categoryId: false,
      file: false,
      content: false,
    };
  } catch (err) {
    error = { ...err, name: true, categoryId: true, file: true, content: true };
  }

  if (error.name || error.content || error.categoryId || error.file) {
    throw error;
  }

  return true;
};

export default validateForm;
