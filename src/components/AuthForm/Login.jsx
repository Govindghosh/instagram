import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  WrapItem,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Hook/useLogin";

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { login, loading, error } = useLogin();

  const handelLogin = async () => {
    console.log("inputs", inputs);
    if (!inputs.email || !inputs.password) {
      alert("Please enter your Email and Password");
    } else {
      await login(inputs);
      navigate("/home");
    }
  };

  return (
    <>
      <Input
        label="Email"
        value={Input.email}
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
        {/* {error && (
          <Alert status="error" p={2} fontSize={13} borderRadius={4}>
            <AlertIcon fontSize={12} />
            {error.message}
          </Alert>
        )} */}
        <Button
          className="w-64"
          colorScheme="linkedin"
          isLoading={loading}
          onClick={handelLogin}
        >
          Log In
        </Button>
      </WrapItem>
    </>
  );
}

export default Login;
