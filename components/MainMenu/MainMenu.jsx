import { FaHouseUser, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { ButtonLink } from "components/ButtonLink";
const items = [
  { id: 1, destination: "/", label: "Home" },
  {
    id: 2,
    destination: "/selling",
    label: "Selling",
    subMenuItems: [
      { id: 4, destination: "/guide-to-selling", label: "Guide to selling" },
      { id: 5, destination: "/book-a-valuation", label: "Book a valuation" },
    ],
  },
  {
    id: 3,
    destination: "/buying",
    label: "Buying",
    subMenuItems: [
      { id: 6, destination: "/all-properties", label: "All properties" },
      { id: 7, destination: "/guide-to-buying", label: "Guide to buying" },
    ],
  },
];
export const MainMenu = ({ callToActionLabel, callToActionDestination }) => {
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
      <div className="flex flex-1 justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group"
          >
            <div>
              <Link href={item.destination} className="p-5 block">
                {item.label}
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link
                    key={subMenuItem.id}
                    href={subMenuItem.destination}
                    className="block whitespace-nowrap p-5 hover:bg-slate-700"
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink
            destination={callToActionDestination}
            label={callToActionLabel}
          />
        </div>
      </div>
    </div>
  );
};
