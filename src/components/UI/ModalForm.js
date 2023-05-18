import { Modal } from "@nextui-org/react"


export default function ModalForm(props) {
    return (
        <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={props.visible}
            onClose={props.closeHandler}
            noPadding
            width="300px"
            css={{
                padding: "10px",
                border: "3px solid $purple900",
                backgroundColor: "$backgroundColor"
            }}
        >
            {props.children}
        </Modal>
    )
}
