import { React, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './HomePage.css';  
import {Link} from 'react-router-dom';
import name from './profile.js';

function HomePage(){
    const [prompt, setPrompt] = useState("")
    const handleGenerate =()=>{

    }
    const [toggle, setToggle] = useState(false)

    
    return (
        <body>
        <div className = "home">
            <div>
                <Navbar className = "nav" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="HomePage.js"><img src = 'n.png'/></Navbar.Brand>
                        {/* <Navbar.Brand href = "profile.js">Sign-Up</Navbar.Brand> */}
                        <Link to= '/Profile' className = "sign-up">Sign-Up</Link>
                    </Container>
                </Navbar>

            </div>
            <div class="line-4">
                <hr/>
            </div>
            
            <div className="prompt">
                <h1>Prompt Generator</h1>
                <p>Click Generate to Recieve Chat GPT Prompt. Train the AI Bot with the Message</p>
                
                <div class = "g">
                <button onClick={() => setToggle(!toggle) } className = " b mb-5">
                    Generate</button>
                    {toggle && (
                        <p className = "gText">Hi! My name is Natasha. I am 22 years old and live in the greater Seattle 
                            Area. I love creating my own meals, but some times struggle with picking out what 
                            meal, having peanut and dairy allergies. I am also 2 days away from my menstruation so 
                            would like food that help my PMS symptoms to a minimum. Can you help me make a meal plan?
                        </p>
                )}
                </div>
            <p className="generator"></p>

        </div>
        </div>
        </body>
    )
    
    
}
export default HomePage

  