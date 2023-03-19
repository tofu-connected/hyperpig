import { Button, Loading } from "@nextui-org/react"

export default function Go({onPress, showLoading, allRequirements}) {

  return (
    <Button disabled={showLoading || !allRequirements}  color="secondary" css={{ paddingLeft: '40px', paddingRight: '40px' }} size="sm" auto rounded onPress={onPress} >{!showLoading ? "GO!" : <Loading color="currentColor" size="sm" />}</Button>
  )
}
