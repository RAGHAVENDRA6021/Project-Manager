import { useRef } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Modal from "../shared/Modal";
const NewProject = ({ onAdd ,onCancel}) => {
  const text = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef()

  const onSave = () => {
    const enteredTitle = text.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDate.trim()===''){
      modal.current.open()
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
    <Modal ref={modal}>

      <div>Hello</div>
    </Modal>


    <aside className="w-screen p-16">
      <div className="flex justify-between align-middle">
        <div className="font-extrabold text-lg text-stone-700">CREATE TASK</div>
        <div className="flex justify-end gap-2">
          <li className="list-none">
            <Button onClick={onCancel}>Cancel</Button>
          </li>
          <li className="list-none">
            <Button onClick={onSave}>Save</Button>
          </li>
        </div>
      </div>
      <div>
        <Input ref={text} label="Title" type="text"/>
        <Input ref={description} label="Description" isTextArea />
        <Input ref={date} label="Due Date" type="date"/>
      </div>
    </aside>
    </>
  );
};

export default NewProject;
