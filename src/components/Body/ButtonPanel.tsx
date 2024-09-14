import { BookmarkPlus, Calendar, Mail, Share2 } from "lucide-react";
import LogoButton from "../ui/LogoButton";

const ButtonPanel = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center items-start justify-between mt-8">
        <div>
        <LogoButton 
            icon={<Mail />}
            buttonText="Do Outlook kalendáře"
            className="mr-3 mb-2 md:mb-0"
        />
        <LogoButton 
            icon={<Calendar />}
            buttonText="Do Google kalendáře"
        />
        </div>
        <div className="mt-2 md:mt-0 mb-8 md:mb-0">
            <LogoButton 
                icon={<Share2 />}
                buttonText=""
                className="mr-3"
            />
            <LogoButton 
                icon={<BookmarkPlus />}
                buttonText=""
            />
        </div>
    </div>
  )
}

export default ButtonPanel;