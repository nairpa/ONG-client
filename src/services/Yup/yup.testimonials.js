import * as yup from "yup";

export const nameValidation = yup.object().shape({
  name: yup.string().required(),
});
export const imageValidation = yup.object().shape({
  image: yup.mixed().required(),
});
export const contentValidation = yup.object().shape({
  content: yup.string().required()
});