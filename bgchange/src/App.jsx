import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl font-serif text-gray-600 font-bold">Background Changer</h1>
        <h1 className="text-3xl italic font-medium font-mono text-gray-600">Using React</h1>  
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "red" }}
          >Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "green" }}
          >Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "blue" }}
          >Blue</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "purple" }}
          >Purple</button>
          <button onClick={() => setColor("Cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "Cyan" }}
          >Cyan</button>
          <button onClick={() => setColor("chocolate")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "chocolate" }}
          >Chocolate</button>
          <button onClick={() => setColor("Salmon")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "Salmon" }}
          >Salmon</button>
          <button onClick={() => setColor("Gold")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "Gold" }}
          >Gold</button>
          <button onClick={() => setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "Black" }}
          >Black</button>
          <button onClick={() => setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "Pink" }}
          >Pink</button>
          <button onClick={() => setColor("Navy")} className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ background: "Navy" }}
          >Navy</button>
        </div>
      </div>
    </div>
  )
}

export default App
