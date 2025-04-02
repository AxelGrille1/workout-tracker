'use client'
import { useState } from 'react';



export default function ProfilePage() {

/*     document.addEventListener('DOMContentLoaded', () => {
        const [firstNameInput, setFirstNameInput] = useState("John") //.getElementById('firstName') as HTMLInputElement;
        const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
        const displayElement = document.getElementById('greetings') as HTMLDivElement;
        const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
    
        saveButton.addEventListener('click', () => {
            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;

            if (firstName.trim() === '' && lastName.trim() === '') {
                alert('Please enter a name')
                return;
            }

            displayElement.textContent = `Hello ${firstName} ${lastName}`
        });
    }); */

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function saveModifications() {
        setFirstName(firstName);
    }

    return (
        <div>
            <h1>My Profile</h1>
                <div id='greetings'>Hello {firstName}</div>
                <div>
                    <input 
                    id="firstName" 
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>

                    <input 
                    id="lastName" 
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>                </div>

                <button type="button" id="saveButton" onClick={saveModifications} className="button-style">Save</button>

        </div>
            
       

    );
}