import React from 'react';
import { Container, Text, Grid, styled} from '@nextui-org/react'; 
import { BorderedButton } from '../Buttonsplus/BorderedButton';
const Ratio = () => {
    const MyGrid = styled(Grid, {       
        alignItems: "center",
        display: "flex",
        flexDirection: "column",  
        justify: "center",
        
    })

    return (
        <Container css={{
            '@xsMax': {
                mw: "200px",
                scale: "0.9"
            }
        }}>
            <Text css={{color:"$white", textAlign:"center"}}>Change the ratio of the transformed image!</Text>
            <Grid.Container display="flex" direction={{ '@xsMax': 'column', '@xsMin': 'row' }} color={{ '@xsMax': "red" }} css={{
                justifyContent: "center", gap: "1rem"}}>
                <MyGrid><BorderedButton width="9" height="16"/>                    
                    <Text css={{color:"$white"}}>MOBILE</Text></MyGrid>
                <MyGrid>
                    <BorderedButton width="4" height="5"/>
                    <Text css={{color:"$white"}}>PORTRAIT</Text>
                </MyGrid> 
                <MyGrid>
                    <BorderedButton width="1" height="1"/>
                    <Text css={{color:"$white"}}>SQUARE</Text>
                </MyGrid> 
                <MyGrid>
                    <BorderedButton width="16" height="9"/>
                    <Text css={{color:"$white"}}>WIDESCREEN</Text>
                </MyGrid> 
            </Grid.Container>    
        </Container>
    )
}

export default Ratio