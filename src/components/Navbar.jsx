import React from "react";
import Profile from "../assets/user.png";

function Navbar() {
  return (
    <>
      <div className="navbar bg-blue-300 mb-10">
        <div className="flex-1 mx-10">
          <a className="btn btn-ghost normal-case text-xl">
            To-Do List Project
          </a>
        </div>
        <div className="flex-none mx-10">
          <div className="normal-case text-xl mx-3">Yogi Hendrawan</div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={Profile} />
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="https://github.com/yogihendrawan79" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yogi-hendrawan-2a9282198/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yogihendrawan_/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
