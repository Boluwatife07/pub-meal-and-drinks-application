import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Menugrid from "./menugrid";
import Filter from "./filter";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative min-h-[250px]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/header.png')] bg-cover bg-no-repeat bg-center p-5">
          <div className="flex justify-end gap-5 pr-5 text-white">
            <button className="border p-1 rounded-full flex justify-center items-center" aria-label="Search">
              <CiSearch size={20} />
            </button>
            <button className="border p-1 rounded-full flex justify-center items-center" aria-label="Notifications">
              <IoIosNotificationsOutline size={20} />
            </button>
          </div>

          <div className="absolute bottom-10 text-3xl text-white font-semibold">
            Provide the best <br /> food for you
          </div>
        </div>
      </div>

      <div className="flex justify-between p-5">
        <h1>Find by Category</h1>
        <h1 className="text-red-800">See all</h1>
      </div>
      <Filter />

      <Menugrid />
    </div>
  );
}
