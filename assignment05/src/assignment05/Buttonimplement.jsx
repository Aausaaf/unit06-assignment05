import React from 'react'
import { Button, Navbar } from './Button'






const Buttonimplement = () => {
  return (
    <div>
        <Navbar>
            <h1>Styled Components Pratice</h1>
        </Navbar>
    <Button>Primary Button</Button>
    <Button theme={"white"} border={"yes"} margin={'less'} color={"black"}>Default Button</Button>
    <Button theme={"white"} border={"dot"} margin={'less'} color={"black"}>Default Button</Button>
    <br />
    <Button theme={"white"} border={"no"} margintop={'less'} color={"black"}>Text Button</Button>
    <a href="#"><Button theme={"white"} margin={'less'} border={"no"} margintop={'less'} color={"blue"}>Link Button</Button></a>
    </div>
  )
}

export default Buttonimplement