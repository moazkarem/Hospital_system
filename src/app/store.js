import { configureStore } from "@reduxjs/toolkit";
import getdoctorSlice from "./features/doctors/GetdoctorSlice";
import getnursingSlice from "./features/nursing/GetNursingSlice";
import getSuplierSlice from "./features/Supliers/GerSuplierSlice";
import loginSlice from "./features/login/login";
import getPatientsSlice from "./features/patients/GetpatientsSlice";
import getSelectedPatients from "./features/select room patients/GetroompSelectpatientsSlice";
import getroomsSlice from "./features/Rooms/GetRoomsSlice";
import getRoomPatients from "./features/Room patients/GetRoompatientsslice";
import getlabsSlice from "./features/labs/GetLabsSlice";
import getToolsSlice from "./features/AllTools/GetAllToolsSlice";
import getRoomTools from "./features/RoomTools/GetRoomToolsSlice";
import getLabTools from "./features/labs/GetLabToolsSlice";
import getlabmanagerSlice from "./features/labs/LabManager/GetLabManagerSlice";
import getintoolSlice from "./features/inventory/GetinvToolslice";
import getlab_adminsSlice from "./features/admins/GetLabadmins_slice";
import getroomAdminsSlice from "./features/admins/Getroomslice";
import getalladminSlice from "./features/admins/GetAlladminsSlice";
const store = configureStore({
  reducer: {
    getdoctor: getdoctorSlice,
    getnursing: getnursingSlice,
    getsupliers: getSuplierSlice,
    getpatients: getPatientsSlice,
    getselcetedpatients: getSelectedPatients,
    getrooms: getroomsSlice,
    getroompatients: getRoomPatients,
    getlabs: getlabsSlice,
    gettools: getToolsSlice,
    getroomtools: getRoomTools,
    getLabtools: getLabTools,
    mytokens: loginSlice,
    getlabmanager: getlabmanagerSlice,
    getinvtools: getintoolSlice,
    getlab_admins: getlab_adminsSlice,
    getroomAdmins: getroomAdminsSlice,
    getalladmin: getalladminSlice,
  },
});

export default store;
