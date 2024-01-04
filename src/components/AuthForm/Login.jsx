import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  WrapItem,
} from "@chakra-ui/react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import React, { useState } from "react";
import { login, selectLoading, selectError } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = async () => {
    try {
      await dispatch(login({ userData: inputs.email }));
      navigate("/home");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <>
      <Input
        label="Email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        placeholder="Mobile Number or Email"
        fontSize={14}
      />

      <InputGroup>
        <Input
          label="Password"
          placeholder="Password"
          type={show ? "text" : "password"}
          fontSize={14}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />

        <InputRightElement>
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <IoIosEyeOff /> : <IoMdEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <WrapItem>
        <Button
          className="w-64"
          colorScheme="linkedin"
          onClick={handleLogin}
          isLoading={loading}
        >
          Log In
        </Button>
      </WrapItem>
      {error && <p>{error}</p>}
    </>
  );
}

export default Login;
