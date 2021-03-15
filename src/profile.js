import React, { useState } from 'react';

export default function EditProfile() {
    const [profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProfile(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            value={profile.firstName || ''}
            name='firstName'
            type='text'
            placeholder='First Name'
            onchange={handleChange}
            />
            <input
            value={profile.bday || ''}
            type='date'
            onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}