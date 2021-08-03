import * as yup from "yup";

export const validation = yup.object().shape({
  name: yup.string().required(),
  categoryId: yup.number().required(),
  file: yup.mixed().required(),
  content: yup.string().required()

});



export const nameValidation = yup.object().shape({
  name: yup.string().required(),
});
export const categoryIdValidation = yup.object().shape({
  categoryId: yup.number().required(),
});
export const imageValidation = yup.object().shape({
  file: yup.mixed().required(),
});
export const contentValidation = yup.object().shape({
  content: yup.string().required()
});