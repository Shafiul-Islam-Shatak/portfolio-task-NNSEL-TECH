import Image from 'next/image'
import logo from'../../../../public/assets/Brand-logo.svg'
const Logo = () => {
    return (
        <div>
           <Image
           src={logo}
           width={125}
           height={22}
           alt='logo'
           />
        
        </div>
    );
};

export default Logo;