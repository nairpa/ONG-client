import { imageValidation,contentValidation, nameValidation } from '../../services/Yup/yup.testimonials';

const validateForm = async (inputData) => {
  let error = {
    name: false,
    image:false,
    content: false
  };
    
  // Name Validation.
  try {
    await nameValidation.validate(inputData);
    error.name = false;
  } catch (err) {
    error.name = true;
  }
// image Validation.

  try {
    await imageValidation.validate(inputData);
    error.image = false;
  } catch (err) {
    error.image = true;
  }
  // Content Validation.
  try {
    await contentValidation.validate(inputData);
    error.content = false;
  } catch (err) {
    error.content = true;
  }
    
  if (error.name || error.image || error.content){
    throw error;
  }

  return true;
}

export default validateForm;