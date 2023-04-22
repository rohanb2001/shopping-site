import "./sidebar.module.css";
import Image from "next/image";

import { AiOutlineRight } from "react-icons/ai";

function Sidebar(props) {
  const { sidebar } = props;

  return (
    <>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="top">
          <div>
            <AiOutlineRight size="27px" />
          </div>
          <div className="heading">Cart</div>
        </div>
        <div className="cartContent">
          <ul>
            <li>
              <div>
                {/* <div className={classes.image}>
                  <Image
                    src={imagePath}
                    alt="image"
                    width={300}
                    height={200}
                    layout="responsive"
                    priority
                  />
                </div> */}
                <div>
                  <h3>Tartan</h3>
                  <p>$999</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
