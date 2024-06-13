import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Logo from '../../../assets/images/logoyoutube.png';
import { IoMenu } from "react-icons/io5";
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <header>
            <div className='row'>
                <div className='col-sm-3 d-flex align-items-center'>
                    <Button><IoMenu className='text-black'/></Button>
                </div>
            </div>
        </header>
    );
}

export default Header;