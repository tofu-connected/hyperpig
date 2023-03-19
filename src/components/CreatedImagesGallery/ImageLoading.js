import { Loading } from "@nextui-org/react"

export default function ImageLoading() {
  return (
    <div className="loading-wrapper">
      <Loading size="xl" css={{ color:'$purple900'}} loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "8px" }} />      
    </div>
  )
}
