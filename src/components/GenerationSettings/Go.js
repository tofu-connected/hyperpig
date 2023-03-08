import { Button } from "@nextui-org/react"

export default function Go({onPress}) {


  return (
    <Button color="secondary" auto rounded onPress={onPress}>GO!</Button>
  )
}
