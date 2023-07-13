import React from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// import Add from "../img/add.png";
// import {  Link } from "react-router-dom";

const Register = () => {

  const [err, setErr] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];
    
    try{

      const res = await createUserWithEmailAndPassword(auth, email, password);
    //Create a unique image name
    const date = new Date().getTime();
    const storageRef = ref(storage, `${displayName + date}`);

    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          //Update profile
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          //create user on firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          //create empty user chats on firestore
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        } catch (err) {
          console.log(err);
          setErr(true);
          setLoading(false);
        }
      });
    });
  } catch (err) {
    setErr(true);
    setLoading(false);
  }
};

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatroom</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input  type="text" placeholder="display name"  />
          <input  type="email" placeholder="email" />
          <input  type="password" placeholder="password" />
          <input  style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="./img/add.png" alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>
          {/* You do have an account? <Link to="">Login</Link> */}
        </p>
      </div>
    </div>
  );
};

export default Register;