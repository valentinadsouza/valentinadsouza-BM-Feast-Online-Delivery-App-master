import React, { useRef, useState, useEffect } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

export const ExploreMenu = ({ category, setCategory }) => {
  const scrollRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  const handleCategoryClick = (menuName) => {
    const normalizedCategory = category?.toLowerCase().trim();
    const normalizedMenuName = menuName.toLowerCase().trim();
    setCategory(normalizedCategory === normalizedMenuName ? "All" : menuName);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

   const filteredMenu = menu_list.filter(item =>
    item.menu_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   // Check if scrolling is needed
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      setShowScroll(el.scrollWidth > el.clientWidth);
    }
  }, [filteredMenu]);


  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose a category to filter food items or select "All" to view everything.
      </p>

      <input
        type="text"
        placeholder="Search menu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="menu-search"
      />
      
      <div className="menu-container">
        {showScroll && filteredMenu.length > 0 && (
          <button className="scroll-btn left-btn" onClick={scrollLeft}>
            &#8249;
          </button>
        )}
        
        <div className="explore-menu-list" ref={scrollRef}>
          {filteredMenu.length > 0 ?(
          filteredMenu.map((item, index) => {
            const isActive =
              category?.toLowerCase().trim() === item.menu_name.toLowerCase().trim();

            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(item.menu_name)}
                className={`explore-menu-list-item ${isActive ? "active" : ""}`} 
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })
        ):(
          <p className="no-results">No menu items found</p>
        )}
        </div>
        
        {showScroll && filteredMenu.length > 0 && (
          <button className="scroll-btn right-btn" onClick={scrollRight}>
            &#8250;
          </button>
        )}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;


// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({category,setCategory}) => {

//     return (
//         <div className='explore-menu' id='explore-menu'>
//             <h1>Feast Your Eyes on Our Menu</h1>
//             <p className='explore-menu-text'>Dive into a culinary adventure with our diverse menu, offering an exquisite selection of dishes meticulously prepared using premium ingredients and culinary mastery. Our goal is to tantalize your taste buds and enhance your dining journey, ensuring each bite is a delightful experience crafted just for you.</p>
//             <div className='explore-menu-list'>
//                 {menu_list.map((item,index) => {
//                     return (
                       
//                     //    onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'
//                        <div >
//                             <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
//                             <p>{item.menu_name}</p>
//                         </div>
//                      )
//                 })}
//             </div>
//             <hr/>
//         </div>
//     )
// }

// export default ExploreMenu

