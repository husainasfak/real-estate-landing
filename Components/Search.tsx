
import { Home, MapPin } from "lucide-react"
import Button from "./Button"


const Search = () => {
     return (
          <div className="flex align-middle bg-[#fff] p-4 rounded-lg shadow-md">
               <div className="flex align-middle">
                    <div className="rounded-full p-2 border border-[#ccc]"><MapPin /></div>
                    <div>
                         <p>Location</p>
                         <p>New York</p>
                    </div>
               </div>
               <div className="flex align-middle">
                    <div className="rounded-full p-2 border border-[#ccc]"><Home /></div>

                    <div>
                         <p>Type</p>
                         <p>Home</p>
                    </div>
               </div>
               <div>
                    <Button>Seach</Button>
               </div>

          </div>
     )
}

export default Search