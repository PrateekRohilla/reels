import React from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import reelslogo from "../../assets/reels.jpg";
import { Button } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import ab from '../../assets/ab.jpg';
import bc from '../../assets/bc.jpg';
import cd from '../../assets/cd.jpg';


function index() {
  return (
    <div className="login-container">
      <div className="carbg">
        <div className="car">
            <Carousel showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop={true} interval={2000} autoPlay={true} showArrows={false} >
                <Image src={ab} ></Image>
                <Image src={bc} ></Image>
                <Image src={cd} ></Image>
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
          />
          <TextField
            id="outlined-basic"
            fullWidth
            size="small"
            margin="dense"
            label="Password"
            type="password"
            variant="outlined"
          />
          <div style={{ color: "red" }}>error here</div>
          <Button
            variant="contained"
            fullWidth
            component="span"
            style={{ marginTop: "1rem" }}
          >
            Login
          </Button>
          <div style={{ color: "blue", marginTop: "0.5rem" }}>
            Forgot Password ?
          </div>
        </div>
        <div className="bottom-card">
          Don't have an account?
          <span style={{ color: "blue" }}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default index;
