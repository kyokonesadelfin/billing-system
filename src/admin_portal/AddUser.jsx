import React, { useState } from 'react';
import Button from '@mui/material/Button';
import BranchGrid from './BranchGrid';
import DepartmentGrid from './DepartmentGrid';
import RoleGrid from './RoleGrid';



const AddUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [position, setPosition] = useState({ position: '', role: '', accessLevel: '' });
    const [personalInfo, setPersonalInfo] = useState({ lastName: '', firstName: '', middleName: '', contactNo: '', gender: '', address: '', birthdate: '' });
    const [step, setStep] = useState(1);
    const [rowSelection, setRowSelection] = React.useState(true);



    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            email,
            password,
            altEmail,
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
        setStep(step - 1); // move to the previous step
    };

    return (
        <div>

            <form onSubmit={handleSubmit} id="myForm">
            
                {step === 1 && (
                    <>
                        <h5 id='form-header'>Account Info</h5>
                        <div id='form-div'>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                            <label htmlFor="altEmail">Alternative Email Address:</label>
                            <input type="email" id="altEmail" value={altEmail} onChange={(e) => setAltEmail(e.target.value)} required />

                            <div id='branch-form'>
                                <h5>Access Info</h5>
                                <div style={{ width: '100%' }}>
                                    <Button sx={{ mb: -3 }} onClick={() => setRowSelection(!rowSelection)}>
                                        <label htmlFor="branch">Branch</label>
                                    </Button>

                                    <div style={{ float: "right" }}>
                                        <Button className='mt-4'><i className="fa fa-plus fa-lg"></i> </Button>
                                    </div>
                                    <BranchGrid/>
                                </div>

                                <div style={{ width: '100%', marginTop: "25px" }}>
                                    <Button sx={{ mb: -3 }} onClick={() => setRowSelection(!rowSelection)}>
                                        <label htmlFor="branch">Department</label>
                                    </Button>

                                    <div style={{ float: "right" }}>
                                        <Button className='mt-4'><i className="fa fa-plus fa-lg"></i> </Button>
                                    </div>
                                    <DepartmentGrid/>
                                </div>
                            </div>

                            <div>

                                <div style={{ width: '100%' }}>
                                    <Button sx={{ mb: -3 }} onClick={() => setRowSelection(!rowSelection)}>
                                        <label htmlFor="branch">Role</label>
                                    </Button>
                                    <div style={{ float: "right" }}>
                                        <Button className='mt-4'><i className="fa fa-plus fa-lg"></i> </Button>
                                    </div>
                                    <RoleGrid/>
                                </div>

                                <div id='position-form' className='mt-5'>
                                    <label htmlFor="department">Position</label>
                                    <select name="position" required value={position.position} onClick={(e) => setPosition({ ...position, position: e.target.value })}>
                                        <option value="">Position</option>
                                        <option value="branch1">Branch 1</option>
                                        <option value="branch2">Branch 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={handleNext}>Next</button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h5 id='form-header'>Personal Info</h5>
                        <div id='form-div'>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" value={personalInfo.lastName} onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })} required />

                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" value={personalInfo.firstName} onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })} required />

                            <label htmlFor="middleName">Middle Name:</label>
                            <input type="text" id="middleName" value={personalInfo.middleName} onChange={(e) => setPersonalInfo({ ...personalInfo, middleName: e.target.value })} required />

                            <label htmlFor="contactNo">Contact No.:</label>
                            <input type="text" id="contactNo" value={personalInfo.contactNo} onChange={(e) => setPersonalInfo({ ...personalInfo, contactNo: e.target.value })} required />

                            <label htmlFor="gender">Gender:</label>
                            <select name="gender" required value={personalInfo.gender} onChange={(e) => setPersonalInfo({ ...personalInfo, gender: e.target.value })} >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <label htmlFor="address" id='label-address'>Address:</label>
                                <input type="text" id="address" value={personalInfo.address} onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })} required />
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <label htmlFor="birthdate">Birthdate:</label>
                                <input type="date" id="birthdate" value={personalInfo.birthdate} onChange={(e) => setPersonalInfo({ ...personalInfo, birthdate: e.target.value })} required />
                            </div>
                        </div>
                        <button type="submit" onClick={handleBack} className='me-2'>Back</button>
                        <button type="submit" onClick={handleSubmit}>Register</button>

                    </>
                )}
            </form>

        </div>
    );
};

export default AddUser;