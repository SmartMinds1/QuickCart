import React, { useState } from 'react';
import "./CategoryBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const CategoryBar = ({displayProducts}) => {
//this is the initial category list
const [openCategory, setopenCategory] = useState(null);
//this is the sub-category list
const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//This is for displaying the category bar to show all the categories
const [isOpen, setIsOpen] = useState(false);
const [isCategoryOpen, setIsCategoryOpen] = useState(false);


//function for switching the displayed product passed from the home class
const switchDisplay = (product) => {
      displayProducts(product);
      setIsOpen(false);
      setIsCategoryOpen(false);
}

//This is the entire category and their subCategories. This create multiple objects
  const categoryData = [ 
    {
      name: 'Clothing & Fashion',
      subcategories:[
        'Men, Women and Kids Apparel',
        'Shoes & Footwear',
        'Bags & Accessories',
        'Jewelry & Watches',
        'Activewear & Sportswear',
      ],
    },
    {
      name: 'Furniture & Home Decor',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Electronics & Gadgets',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Beauty & Personal Care',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Kitchen & Home Appliances',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Baby & Kids',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Books, Media & Stationery',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Groceries & Food Items',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Pet Supplies',
      subcategories: ['B1', 'B2', 'B3'],
    },
    {
      name: 'Sports & Outdoor',
      subcategories: ['B1', 'B2', 'B3'],
    },
    //Add other categories as needed just right here..
  ];


//This is the toggle for switching the main category
  const toggleA = (index) => {
    setopenCategory(index === openCategory ? null : index);
  };

//this handles the display of subCategories
  const handleDisplay = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };


//data block to be displayed on selecting a particular subCategory  
  const renderMessage = () => {
    switch (selectedSubcategory){


      /*1ST case senarials for clothing & Fashion */
      case 'Men, Women and Kids Apparel':
        return(
                <div className='grid-container'>
                 <div className='gridListBox'>
                      <h4>Men's Apparel</h4> 
                      <ul className='gridList'>
                        <li>T-Shirts & Polos</li>
                        <li>Shirts (Formal/Casual)</li>
                        <li>Jeans & Trousers</li>
                        <li>Jackets & Coats</li>
                        <li>Hoodies & Sweatshirts</li>  
                        <li>Shorts & Swimwear</li>
                        <li>Traditional/Local Wear</li>
                      </ul>
                  </div>
                 <div className='gridListBox'>
                      <h4>Women's Apparel</h4> 
                      <ul className='gridList'>
                          <li>Tops & Blouses</li>
                          <li>Dresses & Gowns</li>
                          <li>Skirts & Pants</li>
                          <li>Jeans & Trousers</li>
                          <li>Jackets & Blazers</li>
                          <li>Ethnic Wear (e.g., Kitenge, Sarees)</li>
                          <li>Lingerie & Sleepwear</li>
                      </ul>
                  </div>
                 <div className='gridListBox'>
                      <h4>Kid's Apparel</h4> 
                      <ul className='gridList'>
                        <li>Baby Clothing (Onesies, Rompers)</li>
                        <li>Boys' T-Shirts & Shorts</li>
                        <li>Girls' Dresses & Skirts</li>
                        <li>School Uniforms</li>
                        <li>Seasonal Wear (Winter/Summer)</li>
                        <li>Cartoon/Character-themed Outfits</li>
                      </ul>
                  </div>
                </div>
              );

      case 'Shoes & Footwear':
        return(
            <div className='grid-container'>
                 <div className='gridListBox'>
                      <h4>Men’s Footwear</h4> 
                      <ul className='gridList'>
                        <li onClick={()=>switchDisplay("official")}>Formal Shoes</li>
                        <li onClick={()=>switchDisplay("sneakers")}>Casual Sneakers</li>
                        <li>Sports Shoes</li>
                        <li>Sandals & Slippers</li>
                        <li>Boots</li>  
                      </ul>
                  </div>
                 <div className='gridListBox'>
                      <h4>Women’s Footwear</h4> 
                      <ul className='gridList'>
                        <li>Flats</li>
                        <li>Heels</li>
                        <li>Sandals & Flip-Flops</li>
                        <li>Sneakers</li>
                        <li>Boots</li>
                      </ul>
                  </div>
                 <div className='gridListBox'>
                      <h4>Kids' Footwear</h4> 
                      <ul className='gridList'>
                        <li>School Shoes</li>
                        <li>Velcro Sneakers</li>
                        <li>Sandals</li> 
                        <li>Soft-Soled Shoes for Toddlers</li>
                      </ul>
                  </div>
                </div>
        );
      case 'Bags & Accessories':
        return(
            <div className='grid-container'>
                 <div className='gridListBox'>
                      <h4>Bags</h4> 
                      <ul className='gridList'>
                        <li>Handbags</li>
                        <li>Backpacks</li>
                        <li>Laptop Bags</li>
                        <li>Clutches & Evening Bags</li>
                        <li>Travel Bags & Duffles</li>  
                        <li>Waist Bags & Sling Bags</li>
                      </ul>
                  </div>
                 <div className='gridListBox'>
                      <h4>Accessories</h4> 
                      <ul className='gridList'>
                        <li>Belts</li>
                        <li>Sunglasses</li>
                        <li>Hats & Caps</li>
                        <li>Scarves & Shawls</li>
                        <li>Wallets & Purses</li>
                        <li>Hair Accessories</li>
                      </ul>
                  </div>
                </div> 
        );
      case 'Jewelry & Watches':
        return(
                <div className='grid-container'>
                 <div className='gridListBox'>
                      <h4>Jewelry</h4> 
                      <ul className='gridList'>
                        <li>Necklaces</li>
                        <li>Earrings</li>
                        <li>Bracelets & Bangles</li>
                        <li>Rings</li>
                        <li>Anklets</li> 
                        <li>Brooches & Pins</li> 
                        <li>Sets (Necklace + Earring)</li>
                      </ul>
                  </div>
                 <div className='gridListBox'>
                      <h4>Watches</h4> 
                      <ul className='gridList'>
                        <li>Analog Watches</li>
                        <li>Digital Watches</li>
                        <li>Smartwatches</li>
                        <li>Leather Strap Watches</li>
                        <li>Metallic Strap Watches</li>
                      </ul>
                  </div>
                </div>
        );
      case 'Activewear & Sportswear':
        return(
                <div className='grid-container'>
                  <div className='gridListBox'>
                      <h4> Men’s & Women’s Activewear</h4> 
                      <ul className='gridList'>
                        <li>Gym T-Shirts & Tanks</li>
                        <li>Track Pants & Joggers</li>
                        <li>Sports Bras (Women)</li>
                        <li>Compression Wear</li>
                        <li>Workout Shorts</li>  
                      </ul>
                  </div>
                  <div className='gridListBox'>
                      <h4>Sports-Specific Wear</h4> 
                      <ul className='gridList'>
                        <li>Football Jerseys</li>
                        <li>Yoga Wear</li>
                        <li>Running Gear</li>
                        <li>Cycling Kits</li>
                        <li>Swimwear</li>
                        <li>Hiking Apparel</li>
                      </ul>
                  </div>
                </div>
        );


      /*2ND: Furniture & Home Decor*/

      /*3RD: Electronics & Gadgets*/

      /*4TH: Beauty & Personal Care*/

      /*5Th: Kitchen & Home Appliances*/

      /*7TH: Baby & Kids*/

      /*8TH: Books Media & Stationery*/

      /*9TH: Groceries & Food Items*/

      /*10TH: Pet Supplies*/

      /*11TH: Sports and Outdoor*/

      default:
        return null;
    }
  };

  return (
    <>
    <div className="categoryBody">

      {/* Side bar */}
      { isOpen &&
          <div className="categorybar">
                {categoryData.map((aItem, aIndex) => (
                  <div key={aItem.name}>
                    <button onClick={() => toggleA(aIndex)}>{aItem.name}</button>

                    {/* subCategory List */}
                    {openCategory === aIndex && (
                      <div className='subcategoryList'>
                        <ul>
                          {aItem.subcategories.map((bItem, bIndex) => (
                            <li key={bIndex} onClick={() => { handleDisplay(bItem); setIsCategoryOpen(true); }}>
                                  {bItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
          </div>
  } 
  {/* Category menu button */}
        <div>
          { <button onClick={() => setIsOpen(!isOpen)} className='iconBtn'>
              {isOpen ? <FontAwesomeIcon icon={faTimes}  className="icon" /> : <FontAwesomeIcon icon={faBars}  className="icon"/> }
            </button>}
        </div> 
    </div>


  {/* This is the category description tab to display more infor under each category */}
      { isOpen && isCategoryOpen &&
          <div className="categoryDesc">
              {renderMessage()}
          </div>
      }

  </>
  );
};

export default CategoryBar;




