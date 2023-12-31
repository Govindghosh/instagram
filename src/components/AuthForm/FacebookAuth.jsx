import { Flex, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { auth, firestore } from "../../Firebase/firebaseConfig";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { Firestore, doc, getDoc, setDoc } from "firebase/firestore";

function FacebookAuth() {
  const [signInWithFacebook, error] = useSignInWithFacebook(auth);
  const showToast = useToast();
  const loginUser = useSelector((state) => state.auth.login);
  const handleFacebookAuth = async () => {
    try {
      const newUser = await signInWithFacebook();
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      const docRef = doc(Firestore, "users", newUser.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      } else {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getFullYear()}`;
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullName: newUser.user.fullName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: formattedDate,
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return (
    <>
      <Flex
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={handleFacebookAuth}
      >
        <Image src="/facebook.png" alt="Facebook-icon" h={"20px"} />
        <Text className="text-sm text-sky-700 font-semibold">
          Log in with Facebook
        </Text>
      </Flex>
    </>
  );
}

export default FacebookAuth;
