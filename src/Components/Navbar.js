import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../hooks/Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    //logout
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div class="navbar bg-gradient-to-r from-secondary to-primary">
        <div class="flex-1">
          {
              user &&  <li className='ml-14'>
              <img className='rounded-full md:w-[40px] md:h-[40px] mr-3 w-[30px] h-[30px]' src={user?.photoURL? user?.photoURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEXk5ueutLfn6eqrsbTZ3N2/xMbN0dO0ubzW2drGysy7wMLc3+DS1dfKztDh4+Tq7O3d3uCKAAAC+0lEQVR4nO2a2XLkIAxFjQCzeOH//3bwkkwn7cYSLdFTNdynrrxwcpEESB6Grq6urq6urq6urq6u/01w6FPLp8HMi80K4zx9AANWH5XSX1IumKEpBazB5XUfpbWbG0JA+LX+SeF8agRg1BXADhHXJkaEVwAbg/LyDGALBBvELM0ArkzQgCHeEWSGUZLhbhdOBsF4gBlDkBlWMYQJR6CUk7IBIpJALByw27BLaCscnkAHCRtgJJggYwMQTMg2LAI2GApBFv+hCaXT6coGw46QiCYIBCS6LH3JcRMQ82GzgR2BGAoSwYAuzt8I7EWaVBV2BPZ4pBIoZbkRqKGgVOwIEghkAv5YIBPwZwS9LrAf15aMwP2kgYVcoNnvTZ6cEtwE9Ky07ASJeEhIPCWIFwb260LWSiNgr40D9lX9jeD5CfLtkeKCzMOWYoOMCTka0Aia/Yg6ha+Qcj2O+17XSSDYbcIlpraCTVjAvG11lAPYGBCnlZNrdh0M5oZBs78lLxiKMSm8CyfDWujA6qUBQVYaL8cRWx9+ajUUAQgXIwnt5kYTkQNiXZx68CL/jL7tcCpDDNNoj8VzHlq/fmRUCCkN62SmFdInZoR5zby68btMxhgacmxr+8U6d8TAPqXc9sLFMJtMIsyR/3kfotPXSbn9OdpZkAKSWeKL1X+AuGBEKGBafg9oCxSKfX4Mg48v56OvvBgZx6aQRuR16SeFCkz7AcOrIwFhheVwAuYaBx6ceDcmYELMRssQ7r1WR1pq9+ARItaHBEzv7MEjRO34FmaW9XeGuu4bvbtUYqh569MHEGUGR8+MdzPhSY54rwR2AuoTJ5E6KmgGigeckVjFQBrRU4TvfJCaSjQGZLFOTDXxkgG3DUKBcAhVovBNrRphjgvmqvgkRFbQ+rx03UektAmYvix5MEzWXWNWqir91V19orXbKxnKjZAkT3D3YQP5c5EahOIAk/65SI2KgzP5lNxUrk4Cl6Vnlc8q8mS6SsUbHDRR0YWurq6urn9FfwCAMR/QMmgl9QAAAABJRU5ErkJggg=='} alt="" />
           </li>
          }
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 mr-24">
            <li><Link className="nav-link font-semibold text-xl ml-4 p-0 text-white" to='/todolist'>Todo List</Link></li>

             
              {
                                user ?
                                    <button className='text-xl ml-4 text-white' onClick={() => handleLogout()}>Singout</button>
                                    :

                                    <li className="nav-item pr-2">
                                        <Link className="nav-link font-semibold text-xl ml-4 p-0 text-white" to='/login'>Login</Link>
                                    </li>

                            }

          </ul>
        </div>
      </div>
    );
};

export default Navbar;