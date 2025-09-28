function Button({ name }) {
   return (
      <div>
         <button className="bg-gray-200 hover:bg-gray-400 px-3 p-1 m-3 rounded-lg">
            {name}
         </button>
      </div>
   );
}

export function ButtonList() {
   const listOfButtons = [
      "All",
      "Music",
      "Live",
      "React",
      "Redux",
      "Javascript",
      "Python",
      "Django",
      "Flask",
      "Node",
      "Express",
      "MongoDB",
      "PostgreSQL",
   ];

   return (
      <div className="flex ">
         {listOfButtons.map((button, index) => (
            <Button key={index} name={button} />
         ))}
      </div>
   );
}
