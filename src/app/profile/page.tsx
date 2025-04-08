'use client'
import { useState } from 'react';

export default function ProfilePage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");

    function saveModifications() {
        setFirstName(firstName);
    }

    return (
        <div>
            <h1>My Profile</h1>
            <div id='greetings'>Hello {displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase()}</div>                <div>
                    <input 
                    id="firstName" 
                    placeholder="first name"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}/>

                    <input 
                    id="lastName" 
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>                
                    </div>

                <button type="button" id="saveButton" value={firstName} onClick={(e)=>setDisplayName(firstName)} className="button-style">Save</button>

        </div>
            
       

    );
}