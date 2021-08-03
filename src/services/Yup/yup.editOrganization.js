import * as Yup from "yup";

import { REQUIRED_FIELD } from '../../consts/const.js';

const YUPEditOrganization = Yup.object().shape({
  name: Yup.string().required(REQUIRED_FIELD),
  phone: Yup.string().required(REQUIRED_FIELD),
  adress: Yup.string().required(REQUIRED_FIELD), 
});

export default YUPEditOrganization;