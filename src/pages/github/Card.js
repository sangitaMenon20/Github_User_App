import React from 'react';
import githubUserContext from "../../utils/githubUserContext";
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink,MdOutlineEmail } from 'react-icons/md';
import {FaTwitter } from 'react-icons/fa';


const Card = () => {
	const context = React.useContext(githubUserContext);
    const userInfo=context.gitHubData;
	return (
		<Wrapper>
			<header>
				<img src={userInfo.avatar_url} alt={userInfo.name}></img>
				<div>
					<h4>{userInfo.name}</h4>
                    <p>
                   <MdOutlineEmail></MdOutlineEmail>
                    {userInfo.email?userInfo.email:'NA'}
                   </p>
                   <p>
                   <FaTwitter></FaTwitter>
                   @{userInfo.twitter_username || userInfo.name }
                   </p>	
				</div>
				<a href={userInfo.html_url} target='_blank' rel="noreferrer">follow</a>
			</header>
			<p className='bio'>{userInfo.bio}</p>
			<div className='links'>
				<p>
					<MdBusiness></MdBusiness>
					{userInfo.company?userInfo.company:'NA'}
				</p>
				<p>
					<MdLocationOn></MdLocationOn>
					{userInfo.location || 'earth'}
				</p>
				<a href={`https://${userInfo.blog}`}>
					<MdLink></MdLink>
					{userInfo.blog}
				</a>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.article`
	background: #202A44;
	padding: 1.5rem 2rem;
	border-top-right-radius: var(--radius);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	position: relative;
    color:orange;
	&::before {
		content: 'User';
		position: absolute;
		top: 3px;
		left: 0;
		transform: translateY(-100%);
		background: #202A44 ;
		color: white;
		border-top-right-radius: var(--radius);
		border-top-left-radius: var(--radius);
		text-transform: capitalize;
		padding: 0.5rem 1rem 0 1rem;
		letter-spacing: var(--spacing);
		font-size: 1rem;
	}
	header {
		display: flex;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		column-gap: 1rem;
		margin-bottom: 1rem;
		img {
			width: 85px;
			height: 85px;
			border-radius: 50%;
		}
		h4 {
			margin-bottom: 0.25rem;
		}
		p {
			margin-bottom: 0;
		}
		a {
			color: orange;
			border: 1px solid ;
			padding: 0.25rem 0.75rem;
			border-radius: 1rem;
			text-transform: capitalize;
            text-decoration: none;
            margin-left: 60px;
			letter-spacing: var(--spacing);
			transition: var(--transition);
			cursor: pointer;
			&:hover {
				background: var(--clr-primary-5);
				color: var(--clr-white);
			}
		}
	}
	.bio {
		color: var(--clr-grey-3);
	}
	.links {
		p,
		a {
			margin-bottom: 0.25rem;
			display: flex;
			align-items: center;
			svg {
				margin-right: 0.5rem;
				font-size: 1.3rem;
			}
		}
		a {
			color: var(--clr-primary-5);
			transition: var(--transition);
			svg {
				color: var(--clr-grey-5);
			}
			&:hover {
				color: var(--clr-primary-3);
			}
		}
	}
`;
export default Card;