import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef("");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    passwordRef.current.value = "";

    if (charAllowed) {
      str += "`~!@#$%^&*()[]{}<>,./?:;";
    }
    if (numberAllowed) {
      str += "0123456789";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.random() * str.length;
      passwordRef.current.value += str.charAt(char);
    }
  }, [length, charAllowed, numberAllowed, passwordRef]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordRef, passwordGenerator]);

  const copyToClipboard = () => {
    passwordRef.current.select();

    window.navigator.clipboard.writeText(passwordRef.current.value);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md shadow-slate-950 rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            ref={passwordRef}
            className="outline-none w-full py-1 px-3"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyToClipboard}
          >
            <MdOutlineContentCopy />
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
