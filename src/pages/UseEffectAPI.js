import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import githubUserContext from "../utils/githubUserContext";
import axios from 'axios';

import Loading from '../pages/github/loading';
import Navbar from "../components/Navbar";
import GithubUsers from "./github/GithubUsers";
import Card from "./github/Card";
import {Button,ButtonContainer} from "../components/index";


 const UseEffectAPI = () =>
 {
    const context = React.useContext(githubUserContext);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    const handleBack =()=>{
        navigate("/emailPage", { replace: true });
      }

    const getUsers = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${context.gitUserId}`);
            setLoading(false);
            context.setgitHubData(await response.data);
        } catch (error) {
            console.error(error);
            setLoading(false);
        console.log("my error is "+ error); //add error page
        }
    }

    useEffect(() => {
        getUsers();
    });

    if (loading) {
        return <Loading />
    }

    return (

        <main>
        <Navbar></Navbar>
        <GithubUsers />
        <br></br>
        <br></br>
        <Card  />
        <ButtonContainer>
          <Button onClick={handleBack}>Back</Button>
        </ButtonContainer>

      </main>
        
    )
    }

//     const Wrapper = styled.div`
// 	padding-top: 2rem;
// 	display: grid;
// 	gap: 3rem 2rem;
// 	@media (min-width: 992px) {
// 		grid-template-columns: 1fr 1fr;
// 	}
// 	/* align-items: start; */
// `;

export default UseEffectAPI