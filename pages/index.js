import { useRef, useState } from "react";
import Image from "next/image";
import Pacar from "../public/sat.jpeg";
export default function Home() {
  const [jawaban, setJawaban] = useState(false);
  const passRef = useRef();
  const userRef = useRef();

  const AlertJawaban = () => {
    Promise.all([setJawaban(true), alert("Jawaban ada di pojok bawah kiri")]);
  };

  const InputValue = () => {
    if (passRef.current.value === "calla" || passRef.current.value === "Calla")
      return alert("Aku sayang kamu ❤️❤️❤️❤️❤️❤️");
    return alert("Benerin ne BLOG!");
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <p
        className={`absolute bottom-2 z-10 p-2 rounded-full left-2 text-xs bg-white ${
          jawaban ? "" : "hidden"
        }`}
      >
        Passwordnya tempat first date kita
      </p>
      <Image src={Pacar} className="absolute z-0" />
      <div className="bg-white/20 backdrop-blur-md w-fit h-fit p-4 rounded-md absolute border-2 border-white">
        <div className="py-2">
          <p className="text-white">Namamu</p>
          <input ref={userRef} className="w-64 p-2 rounded-xl" />
        </div>
        <div className="py-2">
          <p className="text-white">Password</p>
          <input ref={passRef} className="w-64 p-2 rounded-xl" />
        </div>
        <div className="flex-col gap-y-2">
          <div className="pb-2">
            <button
              onClick={AlertJawaban}
              className="bg-red-500 text-white px-6 py-2 rounded-xl"
            >
              <p>Click ini buat dapetin clue password</p>
            </button>
          </div>
          <div>
            <button
              onClick={InputValue}
              className="bg-red-500 text-white px-6 py-2 rounded-xl"
            >
              <p>Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
