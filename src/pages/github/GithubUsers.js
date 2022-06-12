import { useContext} from "react";
import githubUserContext from "../../utils/githubUserContext";
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const GithubUsers = () => {
	const context = useContext(githubUserContext);
    const userInfo=context.gitHubData;
	const items = [
		{
			id: 1,
			icon: <GoRepo className='icon'></GoRepo>,
			label: 'repos',
			value: userInfo.public_repos,
			color: 'purple',
		},
		{
			id: 2,
			icon: <FiUsers className='icon'></FiUsers>,
			label: 'followers',
			value: userInfo.followers,
			color: 'yellow',
		},
		{
			id: 3,
			icon: <FiUserPlus className='icon'></FiUserPlus>,
			label: 'following',
			value: userInfo.following,
			color: 'purple',
		},
		{
			id: 4,
			icon: <GoGist className='icon'></GoGist>,
			label: 'gists',
			value: userInfo.public_gists,
			color: 'yellow',
		},
	];

	return (
		<section className='section'>
			<Wrapper className='section-center'>
				{items.map((item) => {
					return <Item key={item.id} {...item}></Item>;
				})}
			</Wrapper>
		</section>
	);
};

const Item = ({ icon, label, value, color }) => {
	return (
		<article className='item'>
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	);
};

const Wrapper = styled.section`
	display: flex;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	//gap: 1rem 2rem;
	@media (min-width: 640px) {
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	}
	.item {
        display: "flex", justifyContent: "space-around" 
		border-radius: var(--radius);
		padding: 1rem 2rem;
		background: #202A44;
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 3rem;
		align-items: center;
		span {
			width: 3rem;
			height: 3rem;
			display: grid;
			place-items: center;
			border-radius: 50%;
		}
		.icon {
			font-size: 1.5rem;
		}
		h3 {
            color: #FFFFFF;
			margin-bottom: 0;
			letter-spacing: 0;
            
		}
		p {
            color: #FFFFFF;
			margin-bottom: 0;
			text-transform: capitalize;
		}
		.pink {
			background: #0504aa;
			color: #ccff00;
		}
		.green {
			background: var(--clr-primary-10);
			color: var(--clr-primary-5);
		}
		.purple {
			background: #e6e6ff;
			color: #5d55fa;
		}
		.yellow {
			background: #fffbea;
			color: #0ffff;
		}
	}
`;

export default GithubUsers;