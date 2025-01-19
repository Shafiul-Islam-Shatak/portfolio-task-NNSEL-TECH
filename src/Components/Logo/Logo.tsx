import logo from'../../../public/assets/Brand-logo.svg'
import Image from 'next/image'

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