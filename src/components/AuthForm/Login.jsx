import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  WrapItem,
} from "@chakra-ui/react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import useLogin from "../../Hook/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { login, loading } = useLogin();
  const handleLogin = async (inputs) => {
    await login(inputs);
    navigate("/home");
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
          isLoading={loading}
          onClick={() => handleLogin(inputs)}
        >
          Log In
        </Button>
      </WrapItem>
    </>
  );
}

export default Login;
