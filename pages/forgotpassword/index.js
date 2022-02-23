import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import reels from '../../assets/reels.jpg';
import { CarouselProvider, Slider, Slide, Image as Img } from 'pure-react-carousel';
import ab from '../../assets/ab.jpg'
import bc from '../../assets/bc.jpg'
import cd from '../../assets/cd.jpg'
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from '../../../context/auth';
import { useRouter } from 'next/router';
function index() {

    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { forgot,user } = useContext(AuthContext)


    const handleClick = async() => {
        try{
            setLoading(true)
            setError('')
            await forgot(email)
            console.log("Email Sent")
            router.push('/login')
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
        if(user){
            router.push('/')
        }
        else{
            console.log("Not logged in");
        }
    },[user])

    return (
        <div className="login-container">
            <div className="carbg">
                <div className='car'>
                    <Carousel showIndicators={false}
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
                <div className='login-card'>
                    <Image src={reels} />

                    <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                        label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                        label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} /> */}

                    {
                        error != '' &&
                        <div style={{ color: 'red' }}>{error}</div>
                    }

                    <Button variant="contained" fullWidth
                        style={{ marginTop: '1rem' }} onClick={handleClick} disabled={loading}>
                        Send Email
                    </Button>
                    {/* <div style={{ color: 'blue', marginTop: '0.5rem' }}>Forgot Password ?</div> */}

                </div>
                <div className='bottom-card'>
                    Don't Have an Account? <span style={{ color: 'blue' }}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}

export default index
