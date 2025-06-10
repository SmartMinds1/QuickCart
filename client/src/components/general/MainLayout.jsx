import React, {useState} from "react";
import "./MainLayout.css";
import NavBar from "../Home/NavBar";
import { Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import CategoryBar from "./CategoryBar";
import Sneakers from "../../products/shoes/Sneakers";
import Official from "../../products/shoes/Official";

const MainLoyout = ()=>{
//products to be displayed
const [productsToDisplay, setProductsToDisplay] = useState("");

//funtion to set the products to be displayed  
    const displayProducts = (value)=>{
          setProductsToDisplay(value);
    }

//hiding the products to be displayed on navigating to the next page
    const hideProducts = ()=> {
        setProductsToDisplay("");
    }

    return(
        <div className="layout">
            <header>
                <NavBar hideProducts={hideProducts}/>
                <div className='pCategory'>
                    <p> Products <span>Category</span> </p>
                </div>
            
                <div className='pageSideBar'>
                    {/*------------ category bar-------------- */}
                    <div className="categorySection"> 
                        {/* passing the display products as a prop to be triggered inside the CategoryBar */}
                        <CategoryBar displayProducts={displayProducts}/>
                    </div>

                    {/*--------- This section holds all the products--------- */}
                    <div className="itemSection">
                            {/* SECTION 1 SHOES */}
                                { productsToDisplay === "sneakers" && <Sneakers/>} 
                                { productsToDisplay === "official" && <Official/> }

                            {/* The next sections follows right here i.e shoe Section*/}
                    </div>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>  
                <Footer/>
            </footer>
        
        </div>
    )
}

export default MainLoyout;