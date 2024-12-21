import React from 'react';
import './userCard.css';

function UserCard({ fullName, bio, url }) {
	console.log('Props', fullName);
	const data = {
		response: 'String',
	};

	const { response } = data;

	console.log(response);
	return <div>UserCard</div>;
}

export default UserCard;
