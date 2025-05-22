import React from 'react';

const ProfileCard = ({ name, email }) => {
    return (
        <div className="p-4 border rounded bg-white shadow">
            <p><strong>名前:</strong> {name}</p>
            <p><strong>メール:</strong> {email}</p>
        </div>
    );
};

export default ProfileCard;