import { useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import githubUserContext from "../utils/githubUserContext";
import { MainContainer, InputContainer,Input, ButtonContainer,Button, HeadingText} from "../components/index";


const UserDetails = (props) => {

  const context = useContext(githubUserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate();

  const handleBack =()=>{
    navigate("/", { replace: true });
  }

  const onSubmit = (data) => {
    context.setGitUserId(data.gitUser);
    navigate("/emailPage", { replace: true });
  }
      
  return ( 
       <MainContainer>
        <form onSubmit={handleSubmit(onSubmit)}>  
      <HeadingText>User Details</HeadingText>
      <br></br>
      <br></br>
        <InputContainer>
        <Input type="text"  placeholder="First Name"    {...register("firstName", { required: true })}/>
        {errors.firstName && <p>Please provide the First Name</p>}
        <br></br>

         <Input type="text"  placeholder="Last Name"   {...register("lastName", { required: true })}/>
         {errors.lastName && <p>Please provide the Last Name</p>}
        <br></br>
        <Input type="text"  placeholder="GIT User name"   {...register("gitUser", { required: true })}/>
        {errors.gitUser && <p>Please provide the  GitHub Username</p>}
        <br></br> 
        </InputContainer>
        <br></br>
        <br></br>
        <ButtonContainer>
          <Button onClick={handleBack}>Back</Button>
          <Button >Next</Button>
        </ButtonContainer>
 </form>  
       </MainContainer>
  );
};

export default UserDetails;
