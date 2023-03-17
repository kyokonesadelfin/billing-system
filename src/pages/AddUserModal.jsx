import React, { useState } from 'react';

const AddUserModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [accessInfo, setAccessInfo] = useState({ branch: '', branchNo: '', branchName: '', address: '', phoneNo: '', department: '', departmentNo: '', departmentName: '' });
      const [position, setPosition] = useState({position: '', role: '', accessLevel: '' });
      const [personalInfo, setPersonalInfo] = useState({ lastName: '', firstName: '', middleName: '', contactNo: '', gender: '', address: '', birthdate: '' });
    const [step, setStep] = useState(1);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            email,
            password,
            altEmail,
            ...accessInfo,
            ...position,
            ...personalInfo,
        };
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                // handle successful form submission here
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error(error);
            // handle error here
        }
    };

    const handleNext = (event) => {
        event.preventDefault();
        setStep(step + 1); // move to the next step
    };

    const handleBack = (event) => {
        event.preventDefault();
        setStep(step - 1); // move to the next step
    };

    return (
        <div>
      
            <form onSubmit={handleSubmit} id="myForm">
            {step === 1 && (
                <>
                <h5>Account Info</h5>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label htmlFor="altEmail">Alternative Email Address:</label>
                <input type="email" id="altEmail" value={altEmail} onChange={(e) => setAltEmail(e.target.value)} required />

                <label htmlFor="branch">Branch:</label>

                <select name="branch" required  value={accessInfo.branch} onClick={(e) => setAccessInfo({ ...accessInfo, branch: e.target.value })}>
                    <option value="">Select Branch</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                <select name="branchNo" required  value={accessInfo.branchNo} onClick={(e) => setAccessInfo({ ...accessInfo, branchNo: e.target.value })}>
                    <option value="">Select Branch Number</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                <select name="address" required value={accessInfo.address} onClick={(e) => setAccessInfo({ ...accessInfo, address: e.target.value })} >
                    <option value="">Select Branch Address</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                
                <select name="phoneNo" required value={accessInfo.phoneNo} onClick={(e) => setAccessInfo({ ...accessInfo, phoneNo: e.target.value })}>
                    <option value="">Select Branch Phone No.</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>


                <label htmlFor="department">Department:</label>
                
                <select name="department" required value={accessInfo.department} onClick={(e) => setAccessInfo({ ...accessInfo, department: e.target.value })}>
                    <option value="">Select Department No.</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>


                <select name="departmentNo" required value={accessInfo.departmentNo} onClick={(e) => setAccessInfo({ ...accessInfo, departmentNo: e.target.value })}>
                    <option value="">Select Department Name</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                <select name="departmentName" required value={accessInfo.departmentName} onClick={(e) => setAccessInfo({ ...accessInfo, departmentName: e.target.value })}>
                    <option value="">Select Branch Name</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                
                <select name="position" required value={position.position} onClick={(e) => setPosition({ ...position, position: e.target.value })}>
                    <option value="">Position</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                <select name="role" required value={position.role} onClick={(e) => setPosition({ ...position, role: e.target.value })}>
                    <option value="">Role</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                <select name="branch" required>
                    <option value="">Access Level</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                </select>

                <button type="submit" onClick={handleNext}>Next</button>
                </>
                )}

                {step === 2 && (
                    <>
                    <h5>Personal Info</h5>
                    <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={personalInfo.lastName} onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })} required />

            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={personalInfo.firstName} onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })} required />

            <label htmlFor="middleName">Middle Name:</label>
            <input type="text" id="middleName" value={personalInfo.middleName} onChange={(e) => setPersonalInfo({ ...personalInfo, middleName: e.target.value })} required />

            <label htmlFor="contactNo">Contact No.:</label>
            <input type="text" id="contactNo" value={personalInfo.contactNo} onChange={(e) => setPersonalInfo({ ...personalInfo, contactNo: e.target.value })} required />

            <label htmlFor="gender">Gender:</label>
            <select name="gender" required value={personalInfo.gender} onChange={(e) => setPersonalInfo({ ...personalInfo, gender: e.target.value })}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" value={personalInfo.address} onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })} required />

            <label htmlFor="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" value={personalInfo.birthdate} onChange={(e) => setPersonalInfo({ ...personalInfo, birthdate: e.target.value })} required />
            <button type="submit" onClick={handleBack}>Back</button>
            <button type="submit" onClick={handleSubmit}>Register</button>
                    </>
                )}
            </form>

        </div>
    );
};

export default AddUserModal;