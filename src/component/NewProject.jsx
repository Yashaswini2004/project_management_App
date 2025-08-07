import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDecription = description.current.value;
    const enteredDueDate = duedate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDecription.trim() == "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDecription,
      duedate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} label="Close">
        <h2>Invalid Input</h2>
        <p>Ooops .... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
          <li>
            <button className="mt-2 text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
