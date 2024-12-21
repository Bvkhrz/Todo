import React, { useState } from 'react';
import './userScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function UserScreen() {
	const userData = {
		fullName: 'Bexruzbek',
		bio: 'Senior dasturchi !',
		url: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
	};

	const [usersList, setUsersList] = useState([userData]);
	const [fullName, setFullName] = useState('');
	const [bio, setBio] = useState('');

	const addUserToList = () => {
		if (fullName === '' || bio === '') {
			return alert('Inputlar Bosh Bolmasligi Kerak');
		}

		const currentUsers = usersList;

		currentUsers.push({
			fullName: fullName,
			bio: bio,
			url: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
		});

		setUsersList(currentUsers);
		setFullName('');
		setBio('');
	};

	const deleteUser = (index) => {
		console.log(index);
		const filteredUserList = usersList.filter((_, i) => i !== index);
		setUsersList(filteredUserList);
	};

	return (
		// Container
		<div className='container'>
			{/* Header */}
			<div className='wrapper'>
				<input
					type='text'
					value={fullName}
					onInput={(e) => {
						setFullName(e.target.value);
					}}
					placeholder='Write Full Name '
				/>
				<input
					type='text'
					value={bio}
					onInput={(e) => {
						setBio(e.target.value);
					}}
					placeholder='Write Bio'
				/>
				<button onClick={addUserToList}>Add user</button>
			</div>

			<div className='box'>
				{usersList?.map((item, indx) => (
					<div className='card-wrapper' key={indx}>
						<img
							src={item?.url}
							alt='Image'
							width={200}
							height={200}
						/>
						<div className='fullname'>
							<p>{item.fullName}</p>
							<p>{item.bio}</p>
							<button onClick={() => deleteUser(indx)}>
								<FontAwesomeIcon
									icon={faTrash}
									className='fa-fw'
								/>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default UserScreen;
