import React, { useRef, useState } from 'react'

function States() {

   

    let cityLabelRef = useRef();

    let onStateChange = (eo)=> {
        switch (eo.target.value) {

            case "Choose Your State":
                cityLabelRef.current.innerHTML = "";
                break;

            case "Andhra Pradesh":
                cityLabelRef.current.innerHTML = "Amaravathi";
                break;

                case "Telangana":
                cityLabelRef.current.innerHTML = "Hyderabad";
                break;

                case "Karnataka":
                cityLabelRef.current.innerHTML = "Bangalore";
                break;

                case "Kerala":
                cityLabelRef.current.innerHTML = "Thiruvananthapuram";
                break;

                case "Tamil Nadu":
                cityLabelRef.current.innerHTML = "Chennai";
                break;

                case "Maharashtra":
                cityLabelRef.current.innerHTML = "Mumbai";
                break;

                case "Gujarat":
                cityLabelRef.current.innerHTML = "Gandhi Nagar";
                break;

                case "Goa":
                cityLabelRef.current.innerHTML = "Panaji";
                break;

                case "Rajasthan":
                cityLabelRef.current.innerHTML = "Jaipur";
                break;

                case "Madhya Pradesh":
                cityLabelRef.current.innerHTML = "Bhopal";
                break;
        
            default:
                break;
        }
    };

  return (
    <div>

<nav>
    <ul>
        <li>
            <a href="#"><ion-icon name="home-outline"></ion-icon>
            <span class="nav-item">Home</span></a>
        </li>
            <li>
                <a href="#"><ion-icon name="person-outline"></ion-icon>
                <span class="nav-item">Profile</span></a>
            </li>

            <li>
                <a href="#"><ion-icon name="wallet-outline"></ion-icon>
                <span class="nav-item">Wallet</span></a>
            </li>
            <li>
                <a href="#"><ion-icon name="analytics-outline"></ion-icon>
                <span class="nav-item">Analytics</span></a>
            </li>
            <li>
                <a href="#"><ion-icon name="reorder-three-outline"></ion-icon>
                <span class="nav-item">Task</span></a>
            </li>
            <li>
                <a href="#"><ion-icon name="help-outline"></ion-icon>
                <span class="nav-item">Help</span></a>
            </li>
            <li>
                <a href="#" class="logout"><ion-icon name="log-out-outline"></ion-icon>
                <span class="nav-item">Log out</span></a>
            </li>
    </ul>
    </nav>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
  <div className='state'>
         <label>State</label>
         <select onChange={(eo)=>{
            onStateChange(eo);
         }}>
            <option>Choose Your State</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Tamil Nadu</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Goa</option>
            <option>Rajasthan</option>
            <option>Madhya Pradesh</option>
         </select>
         <label ref={cityLabelRef}></label>
         
  </div> 
    </div>
    
  );
}

export default States;