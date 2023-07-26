import { Grid, Button } from "@nextui-org/react";
import Sprite from "../../img/icons/social/forsprite3232/socialicons.png";

export const Share = () => {
    const list = [
        {
            alt: "Instagram share icon",
            css: { backgroundPosition: '-10px -42px', width: '32px', height: '32px', }
        },
        {
            alt: "Twitter share icon",
            css: { backgroundPosition: '-10px -126px', width: '32px', height: '32px', }
        },
        {
            alt: "Facebook share icon",
            css: { backgroundPosition: '-52px -0px', width: '32px', height: '32px', }
        },
        {
            alt: "Discord share icon",
            css: { backgroundPosition: '-10px -0px', width: '32px', height: '32px', }
        },
        {
            alt: "Telegram share icon",
            css: { backgroundPosition: '-10px -84px', width: '32px', height: '32px', }
        },
        {
            alt: "Pinterest share icon",
            css: { backgroundPosition: '-52px -42px', width: '32px', height: '32px', }
        },
        {
            alt: "Tumblr share icon",
            css: {
                backgroundPosition: '-52px -84px', width: '32px', height: '32px',
            }
        },
        {
            alt: "Vk share icon",
            css: { backgroundPosition: '-52px -126px', width: '32px', height: '32px', }
        },
    ];
    const sprite = {
        display: "inline-block",
        backgroundImage: "url(" + Sprite + ")",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        textIndent: "-9999px",
        textAlign: "left",
        backgroundColor: "transparent",
        width: "42px",
        height: "42px",
    }
    return (
        <Grid.Container justify="space-evenly" css={{flexWrap: "wrap", alignItems: "center", justifyItems: "center", flexDirection:"column",justifyContent:"space-evenly", alignContent: "space-evenly", padding: "8px",}}>
            {list.map((item, index) => {
                const obj = Object.assign({}, sprite)
                Object.keys(item.css).forEach(key => {
                    obj[key] = item.css[key];
                });
                return (
                    <Grid css={{display: "flex", padding: "5px", alignContent:"center", maxWidth: "50px", }} key={index}>
                        <Button key={"b" + index} auto css={obj} />
                    </Grid>)
            }
            )}
        </Grid.Container>
    );
}