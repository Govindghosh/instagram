import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import SignUpPage from "./Pages/SignUpPage";
import PageLayout from "./components/Layout/PageLayout";
import UserPage from "./Pages/UserPage";
import { useIdToken } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/firebaseConfig";
import AuthLayout from "./components/AuthLayout";

import { useSelector } from "react-redux";


function App() {
  // const authUser = useSelector((state) => state.auth.user);
  // const [authUser] = useIdToken(auth);
  return (
    <>
      <PageLayout>
        <Routes>
          <Route
            path="/home"
            element={<AuthLayout>
              <HomePage />
              </AuthLayout>}
          />
          <Route
            // for some reason remove /auth
            path="/"
            element={<AuthPage />}
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/:username"
            element={
               <AuthLayout>
              <UserPage />
              </AuthLayout>
            }
          />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
