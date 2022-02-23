import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import reelslogo from "../../assets/reels.jpg";
import { Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import ab from "../../assets/ab.jpg";
import bc from "../../assets/bc.jpg";
import cd from "../../assets/cd.jpg";
import { AuthContext } from '../../context/auth';
import { useRouter } from "next/router";
import Link from 'next/link';

function index() {

  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const { login,user } = useContext(AuthContext)

  const handleClick = async() => {
    try{
        setLoading(true)
        setError('')
        await login(email, password)
        console.log("Logged in!")
    }catch(err){
        console.log(err)
        setError(err.message)
        setTimeout(()=>{
            setError('')
        },2000)
    }
    setLoading(false)
  }

  useEffect(()=>{
    console.log("login aaya")
    if(user?.uid){
        console.log(user)
        console.log(user=="")
        console.log(user==null)
        console.log("user not equal to null")
        router.push('/')
    }
    else{
        console.log("Not logged in");
    }
  },[user])

  return (
    <div className="login-container">
      <div className="carbg">
        <div className="car">
          <Carousel
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            interval={2000}
            autoPlay={true}
            showArrows={false}
          >
            <Image src={ab}></Image>
            <Image src={bc}></Image>
            <Image src={cd}></Image>
          </Carousel>
        </div>
      </div>
      <div>
        <div className="login-card">
          <Image src={reelslogo} />
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            margin="dense"
            label="Email"
            variant="outlined"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            margin="dense"
            label="Password"
            type="password"
            variant="outlined"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          {
             error != '' &&
            <div style={{ color: 'red' }}>{error}</div>
          }
          <Button
            variant="contained"
            fullWidth
            component="span"
            style={{ marginTop: "1rem" }}
            onClick={handleClick}
            disabled={loading}
          >
            Login
          </Button>
          <div style={{ color: "blue", marginTop: "0.5rem" }}>
            Forgot Password ?
          </div>
        </div>
        <div className="bottom-card">
          Don't have an account?
          <Link href="/signup"><span style={{ color: 'blue' }}>Sign Up</span></Link>
        </div>
      </div>
    </div>
  );
}

export default index;
