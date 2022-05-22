import React from 'react'

export const NavBar = ({accounts, setAccounts}) => {
	const isConnected = Boolean(accounts[0]);

  async function connectAccounts() {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			})
			setAccounts(accounts);
		}
	}

	return (
		<div>
			{/* Left Side - Social Media Icons */}
			<div>Facebook</div>
			<div>Twitter</div>
			<div>Email</div>

			{/* Right Side - Sections */}
			<div>About</div>
			<div>Mint</div>
			<div>Team</div>

			{/*  Connect */}
			{ isConnected ? (
				<p>You are connected</p>
			) : (
				<button onClick={connectAccounts}>Connect</button>
			)}
		</div>
	)
}
