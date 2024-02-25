import SearchBar from "./SearchBar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { IoMdSettings } from "react-icons/io";
import { useSettings } from "../store/use-settings";

const Settings = () => {
  const settings = useSettings();
  return (
    <>
      <div className="absolute right-0 top-0 m-10 text-gray-600 hover:text-gray-400 transition-all ease-linear">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <span
                onClick={() => {
                  settings.onOpen();
                  console.log("settings");
                  console.log(settings.isOpen);
                }}
              >
                <IoMdSettings size={30} className="my-2" />
              </span>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <SearchBar />
    </>
  );
};

export default Settings;
