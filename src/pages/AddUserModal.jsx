import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];




const AddUserModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [position, setPosition] = useState({ position: '', role: '', accessLevel: '' });
    const [personalInfo, setPersonalInfo] = useState({ lastName: '', firstName: '', middleName: '', contactNo: '', gender: '', address: '', birthdate: '' });
    const [step, setStep] = useState(1);

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
        setStep(step - 1); // move to the next step
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
                                <label htmlFor="branch">Branch</label>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Branch no.</TableCell>
                                                <TableCell align="right">Branch name</TableCell>
                                                <TableCell align="right">Address</TableCell>
                                                <TableCell align="right">Phone no.</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0.9 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>
                                                    <TableCell align="right">{row.carbs}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

                            <div>
                                <div> <label htmlFor="department">Department</label></div>

                                <label htmlFor="department">Position</label>
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

export default AddUserModal;