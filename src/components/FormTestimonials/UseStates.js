import { useState } from "react";
import { useSelector } from "react-redux";
import {
  addTestimony,
  modifyTestimony,
} from "../../services/Axios/TestimonialsForm";
import validateForm from "../../helpers/formTestimony/validationForm";

export const States = (data) => {
  const { name, content, image, id } = useSelector(
    (state) => state.testimonials
  );

  const [contentError, setContentError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [dataForm, setDataForm] = useState({
    name: name,
    image: image,
    content: content,
    id: id,
  });
  const handleInput = (e) => {
    setDataForm({ ...dataForm, name: e.target.value });
  };
  console.log(name);

  //insertar imagen
  const handleFile = (e) => {
    setFiles(e);
  };
  const insertFile = async () => {
    const f = new FormData();
    if (files) {
      files.forEach((element) => {
        f.append("image", element);
        setDataForm({ ...dataForm, image: f });
      });
    }
  };

  const handleEditorData = (e) => {
    setDataForm({ ...dataForm, content: e.editor.getData() });
  };
  console.log();

  const handleSubmit = () => {
    console.log(dataForm);
    insertFile();
    validateForm(dataForm)
      .then(async () => {
        setLoading(true);
        setNameError(false);
        setContentError(false);
        setImageError(false);
        console.log(id);
        if (id) {
          await modifyTestimony(dataForm);
        } else {
          await addTestimony(dataForm);
        }
        setLoading(false);
      })
      .catch((error) => {
        setNameError(error.name);
        setContentError(error.content);
        setImageError(error.image);
      });
  };

  return {
    handleInput,
    handleEditorData,
    handleFile,
    handleSubmit,
    contentError,
    nameError,
    imageError,
    loading,
    files,
    dataForm,
  };
};

export default States;
