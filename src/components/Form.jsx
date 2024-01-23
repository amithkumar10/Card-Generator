import React, { useRef, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { motion } from "framer-motion";

function Form() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState([]);
  const inputRef = useRef(null);
  const [img, setImg] = useState("");

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const imgClick = () => {
    inputRef.current.click();
  };

  const imgChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setImg(file);
    }
  };

  const clearText = () => {
    setInput(" ");
  };

  const handleSubmit = () => {
    // Check if the input is not empty before creating a new card
    if (input.trim() !== "") {
      const newCard = {
        id: new Date().getTime(), // Using timestamp as a unique id
        content: input,
        image: img,
      };

      setCards((prevCards) => [...prevCards, newCard]);
      setInput(""); // Clear the input after creating a card
      setImg("");
    }
  };

  return (
    <div>
      <motion.form
        drag
        dragConstraints={{ left: 0, top: 0, right: 1050, bottom: 150 }}
        whileDrag={{ scale: 1.2 }}
        className="relative w-60 h-[45vh] rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden "
      >
        <div className="flex justify-between">
          <FaRegFileAlt />
          <MdDelete
            className="size-5 cursor-pointer"
            onClick={clearText}
          ></MdDelete>
        </div>

        <div
          className="mt-2   w-full h-24 bg-zinc-800 cursor-pointer"
          onClick={imgClick}
        >
          {img ? (
            <img
              src={URL.createObjectURL(img)}
              alt=""
              className="absolute w-52 p-0.5 h-24 "
            />
          ) : (
            <BiSolidImageAdd className="size-20 ml-16 " />
          )}

          <input
            type="file"
            ref={inputRef}
            onChange={imgChange}
            className="hidden"
          />
        </div>

        <div className="absolute flex justify-between bottom-16">
          <label> Text: </label>
          <textarea
            placeholder="Type Something"
            value={input}
            cols="30"
            rows="10"
            onChange={(event) => setInput(event.target.value)}
            className="h-10 w-40 bg-zinc-800 p-2 m-1"
          ></textarea>
        </div>

        <button
          type="button" // Prevents the form from being submitted (default behavior)
          className="absolute left-0 h-[3rem] bg-green-500 w-full  bottom-0  items-center justify-center text-white font-semibold"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </motion.form>

      <div className="absolute h-screen w-full flex m-3">
        {/* Render cards */}
        {cards.map((card) => (
          <motion.div
            drag
            whileDrag={{ scale: 1.2 }}
            key={card.id}
            className="relative w-60  h-72 rounded-[40px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden m-3"
          >
            <div className="flex justify-between">
              <FaRegFileAlt />
              <IoMdCloseCircle
                className="cursor-pointer size-6"
                onClick={() => handleDelete(card.id)}
              ></IoMdCloseCircle>
            </div>

            <div className="mt-1 mx-3"> {card.content}</div>
            <div>
              {card.img && (
                <img src={URL.createObjectURL(card.img)} alt="NOT FOUND" />
              )}
            </div>

            <div className="absolute left-0 bottom-0 h-16 w-full bg-green-700">
              <h3 className="font-semibold text-[25px] ml-24 mt-3 text-green-950">
                Docs
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Form;
