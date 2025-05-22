import React from 'react';

const MemberList = ({ members }) => {
    return (
        <ul className="space-y-2">
            {members.map((member, idx) => (
                <li key={idx} className="border p-2 rounded">{member.name}</li>
            ))}
        </ul>
    );
};

export default MemberList;

