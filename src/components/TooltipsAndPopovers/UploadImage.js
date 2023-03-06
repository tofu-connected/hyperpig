import { Text, Image, Grid } from "@nextui-org/react";
import MyImage from '../../img/1.png'

export const UploadImage = () => {
    return (
        <Grid.Container display="flex" direction="column" justify="center" alignContent="center" alignItems="center" css={{
            mw: "250px"
        }}>
            <Grid><Image height={"30%"}
                width={"auto"} src={MyImage} /></Grid>
            <Grid><Text>upload or drag’n’drop a picture to transform!</Text></Grid>
        </Grid.Container>
    )
}