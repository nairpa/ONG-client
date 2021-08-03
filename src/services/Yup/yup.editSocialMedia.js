import * as Yup from "yup";

import { REQUIRED_FIELD } from '../../consts/const.js';

const YUPEditSocialMedia = Yup.object().shape({
  facebook: Yup.string().required(REQUIRED_FIELD),
  instagram: Yup.string().required(REQUIRED_FIELD),
  linkedin: Yup.string().required(REQUIRED_FIELD), 
});

export default YUPEditSocialMedia;