// imports from react.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setImage,
  setContent,
  setId,
} from "../../../../store/TestimonialsStore/TestimonialsStore";
import { Link } from "react-router-dom";

// import from externals libraries.
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const UpdateButton = ({ element }) => {
  /*   const { name, content, image } = useSelector((state) => state.testimonials);
   */ const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(setId(element.id));
    dispatch(setName(element.name));
    dispatch(setImage(element.image));
    dispatch(setContent(element.content));
  };

  return (
    <Link to="/backoffice/testimonials/new-entry">
      <IconButton
        onClick={HandleClick}
        isRound="true"
        colorScheme="blue"
        size="sm"
        icon={<EditIcon />}
      />
    </Link>
  );
};

export default UpdateButton;
