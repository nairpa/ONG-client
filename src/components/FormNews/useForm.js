import { useState } from "react";
import { addNew, modifyNew } from "../../services/Axios/NewsForm";
import validateForm from "../../helpers/formNews/validationForm";

export const useForm = (data) => {
  const [contentError, setContentError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [dataForm, setDataForm] = useState({
    id: data ? data[0].id : "",
    name: data ? data[0].name : "",
    categoryId: data ? data[0].categoryId : "",
    content: data ? data[0].content : "",
    file: data? data[0].image : "",
  });
  
  //insertar imagen
  const handleFile = (e) => {
    setFiles(e);
  };

  const insertFile = async () => {
    const f = new FormData();
    if (files) {
        f.append("file", files);
        setDataForm({ ...dataForm, file: f });
      }; 
  };

  const handleInput = (e) => {
    setDataForm({ ...dataForm, name: e.target.value });
  };
  const handleInputCategory = (e) => {
    setDataForm({ ...dataForm, categoryId: e.target.value });
  };
  const handleEditorData = (e) => {
    setDataForm({ ...dataForm, content: e.editor.getData() });
  };

  const handleSubmit = () => {
    insertFile();
    validateForm(dataForm)
      .then(async () => {
        setLoading(true);
        setNameError(false);
        setContentError(false);
        setImageError(false);
        setCategoryError(false);
        if (data) {
          await modifyNew(dataForm);
        } else {
          await addNew(dataForm);
        }
        setLoading(false);
      })
      .catch((error) => {
        setNameError(error.name);
        setContentError(error.content);
        setImageError(error.file);
        setCategoryError(error.category);
      });
  };

  return {
    handleInput,
    handleEditorData,
    handleFile,
    handleInputCategory,
    handleSubmit,
    contentError,
    nameError,
    imageError,
    categoryError,
    loading,
    files,
    dataForm,    
  };
};
export default useForm;
