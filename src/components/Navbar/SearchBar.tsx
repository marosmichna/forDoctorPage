import { Search } from 'lucide-react';
import Input from '../ui/Input';
import LogoButton from '../ui/LogoButton';

type SearchBarProps = {
  isHamMenuOpen: boolean;
}

const SearchBar = ({ isHamMenuOpen }: SearchBarProps) => {
  return (
    <div className='flex items-center md:w-[312px] w-screen'>
        <Input
            className={`w-full rounded-tl-lg rounded-bl-lg ${isHamMenuOpen ? "rounded-lg px-14 mx-4" : ""}`}
            placeholder='Hledat...' 
        />
        <LogoButton 
            icon={<Search />}
            buttonText=""
            variant='noText'
            className={`${isHamMenuOpen ? "md:block rounded-lg text-black bg-inherit absolute left-6" : "rounded-tr-lg rounded-br-lg"}`}
        />
    </div>
  )
}

export default SearchBar;