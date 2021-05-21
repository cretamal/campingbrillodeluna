import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link 
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);


export default function() {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
    };
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const closeMenu1 = (): void => {
      setOpenMenu1(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky + 300) {
          header.classList.add("sticky");
          totop.classList.add("show");
          
        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);
    return (
    <header id="myHeader" className='navbar'>
     <div className='container-fluid'>
       <div className='row m-2-hor w-100-nav'>
          <div className='logo'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                <img
                    src="./img/logo.png"
                    className="img-fluid"
                    alt="#"
                  />
                </NavLink>
              </div>
          </div>
                    
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                    <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>
                        Casa
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/works" onClick={() => btn_icon(!showmenu)}>
                        Galeria Fotos
                      </NavLink>
                    </div>
                    <div className='navbar-item'>
                      <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>
                      Visitanos
                      </NavLink>
                    </div>
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  <div className='menu'>
                    <div className='navbar-item'>
                      <NavLink to="/">Casa</NavLink>
                    </div>
                   
                    <div className='navbar-item'>
                      <NavLink to="/works">Galeria Fotos</NavLink>
                    </div>
                   
                    <div className='navbar-item'>
                      <NavLink to="/contact">Visitanos</NavLink>
                    </div>
                  </div>
                </Breakpoint>
              </BreakpointProvider>
                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
    );
}
