export function IndividualComment({ data }) {
   const { name, comments } = data;

   return (
      <div className="flex shadow-sm bg-gray-200 p-2 mt-2 rounded-lg">
         <img
            className="h-10 "
            src="/assets/profilelogo.png"
            alt="profile pic"
         />
         <div className="px-3 text-sm">
            <p className="font-bold">{name}</p>
            <p>{comments}</p>
         </div>
      </div>
   );
}
