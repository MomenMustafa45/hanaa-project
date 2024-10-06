import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import MatrixList from "./pages/Dashboard/Componants/Matrix/MatrixList";
import MatrixEditForm from "./pages/Dashboard/Componants/Matrix/MatrixEditForm";
import MatrixForm from "./pages/Dashboard/Componants/Matrix/MatrixForm";
import Form from "./pages/Login/Form";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Employee/Users";
import UserInfo from "./pages/Users/Employee/UserInfo";
import AdminUserCard from "./pages/Dashboard/Componants/users/AdminUserCard";
import AdminUsers from "./pages/Dashboard/Componants/users/AdminUsers";
import MatrixLists from "./pages/Users/Matrixs/MatrixLists";
import UserForm from "./pages/Dashboard/Componants/users/AddUserForm";
import EditUserForm from "./pages/Dashboard/Componants/users/EditeUserForm";
import SubjectEditForm from "./pages/Dashboard/Componants/Subjects/SubjectEditForm";
import SubjectList from "./pages/Users/Subjects/SubjectList";
import MatrixInfo from "./pages/Users/Matrixs/MatrixInfo";
import SubjectInfo from "./pages/Users/Subjects/SubjectInfo";
import AdminUserInfo from "./pages/Dashboard/Componants/users/userInfo";
import Proxyemployeeinfo from "./pages/Dashboard/Componants/users/proxyemployeeinfo";
import AddAccounts from "./pages/Dashboard/Componants/Addaccunts";
import EditProxyrForm from "./pages/Dashboard/Componants/users/editProxy";
import UerProxy from "./pages/Users/Employee/userProxy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Matrix" element={<MatrixLists />} />
          <Route path="/sujects" element={<SubjectList />} />
          <Route path="/MatrixInfo" element={<MatrixInfo />} />
          <Route path="/userProxy" element={<UerProxy />} />


          <Route path="/subjectInfo" element={<SubjectInfo />} />

          {/* <Route path='/subjectInfo/:id' element={<SubjectInfo/>}/> */}

          <Route path="/editproxy" element={<EditProxyrForm />} />

          <Route path="/acc" element={<AddAccounts />} />

          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/proxyemployeeinfo" element={<Proxyemployeeinfo />} />

          <Route path="/adduser" element={<UserForm />} />
          <Route path="/edituser" element={<EditUserForm />} />
          <Route path="/editsubject" element={<SubjectEditForm />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/AdminUserInfo" element={<AdminUserInfo />} />

          <Route path="/adduser" element={<UserForm />} />
          <Route path="/edituser" element={<EditUserForm />} />
          <Route path="/editsubject" element={<SubjectEditForm />} />

          <Route path="/AdminUserCard" element={<AdminUserCard />} />
          <Route path="/AdminUsers" element={<AdminUsers />} />
          <Route path="/MatrixList" element={<MatrixList />} />
          <Route path="/MatrixEditForm" element={<MatrixEditForm />} />
          <Route path="/MatrixForm" element={<MatrixForm />} />
          <Route path="/login" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
