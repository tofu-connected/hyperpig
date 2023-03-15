import { Button } from "@nextui-org/react"

export default function Go({onPress}) {


  return (
    <Button color="secondary" css={{paddingLeft: '40px', paddingRight: '40px'}} size="sm" auto rounded onPress={onPress}>GO!</Button>
  )
}
