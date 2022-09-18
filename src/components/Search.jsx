import React, { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './style.css'
import {Link} from 'react-router-dom';

function Search() {
    const [inpVal, setInpVal] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if(inpVal===""){
            navigate("/")
        }else{

            navigate("/searched/" + inpVal)
        }
    }
    return (

        <div className='navbar'>
            <div className='navbar-logo'><Link to="/" style={{color:"white"}}>RECIPE STORE</Link></div>
            <div className='form-container'>
                <form onSubmit={submitHandler}>

                    <input
                        type='text'
                        placeholder='Search Recipe'
                        value={inpVal}
                        onChange={(e) => setInpVal(e.target.value)}
                    >
                    </input>
                    <button className='search-btn' onClick={submitHandler}><i class="fa fa-search"></i></button>

                </form>
            </div>
        </div>


        
    )
}

export default Search