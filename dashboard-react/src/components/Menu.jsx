import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/LogoNegro.jpeg';
function Menu() {
  const [dropdown, setDropdown]=useState(false);
  const abrirCerrar=()=>{
    setDropdown(!dropdown);
  }
  return (
    <div className='menu'>
      <Dropdown className='botonera' isOpen={dropdown} toggle={abrirCerrar} direction='down'>
        <DropdownToggle id='botonM'>
        MENU <i className='fas fa-sort-down'></i>
        </DropdownToggle>
        <DropdownMenu>
        <Link to={'/About'} className='nav-link centrar'> About Me </Link>
        <Link to={'/Galery'} className='nav-link centrar'> Galery </Link>
        <Link to={'/Contact'} className='nav-link centrar'> Contact </Link>
        <Link to={'/'} className='nav-link negrita colorR centrar'> Home </Link>
        </DropdownMenu>
      </Dropdown>
      <img width='100%' className='logo' src={logo} alt='logo' />
    </div>
  );
}

export default Menu;