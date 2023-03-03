import { Text, Image, Grid } from "@nextui-org/react";

export const UploadImage = ({mysrc}) => {
    return (
        <Grid.Container display="flex" direction="column" justify="center" alignContent="center" alignItems="center" css={{
            mw: "250px"
        }}>
            <Grid><Image height={"30%"}
                width={"auto"} src={mysrc} /></Grid>
            <Grid><Text>upload or drag’n’drop a picture to transform!</Text></Grid>
        </Grid.Container>
    )
}