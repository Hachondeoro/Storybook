import React, { useRef, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Editable from "./Editable";
import usePersistedState from './usePersistedState';

const ModalExample = (props) => {

    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);
    const inputRef = useRef();
    const textareaRef = useRef();
    const [task8, setTask8] = usePersistedState('task8', '');
    const [description8, setDescription8] = usePersistedState('description8', '');

    return (
        <div>
            {/* <Button color="danger" onClick={toggle}></Button> */}
            <Modal isOpen={props.isModalOpen}>
                <ModalHeader>{props.item.name}</ModalHeader>
                <ModalBody>
                    <Editable
                        text={task8}
                        placeholder={props.item.name}
                        className={"Question"}
                        childRef={inputRef}
                        type="input"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            name="task8"
                            placeholder={props.item.name}
                            value={task8}
                            onChange={e => setTask8(e.target.value)}
                        />
                    </Editable>
                    {props.item.details}
                </ModalBody>
                <img src={require(`${props.item.source}`)}
                // onMouseOut={props.hideModal}
                />
            </Modal>
        </div>
    );
}


export default ModalExample;