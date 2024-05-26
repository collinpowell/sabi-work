import { Button, ButtonProps } from "theme-ui"
import { useState } from "react";
import WaitlistModal from "../Modal";


const ButtonM = (props: ButtonProps | any) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");

    function openModal() {
        setIsOpen(true);
    }

    return props.modal ? (
        <>
            <WaitlistModal
                header={modalHeader}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                phone={props?.phone}
            />
            <Button {...props} onClick={() => {
                setModalHeader("Join the waitlist");
                openModal();
            }}></Button>
        </>

    ) : (
        <Button {...props}></Button>
    )
}

export default ButtonM