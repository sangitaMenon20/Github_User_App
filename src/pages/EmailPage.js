import { useNavigate } from "react-router-dom";
import { MainContainer, InputContainer,Input, ButtonContainer,Button, HeadingText} from "../components/index";
import { useForm } from "react-hook-form";


const EmailPage = (props) => {

  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleBack =()=>{
    navigate("/userDetails", { replace: true });
  }
  const onSubmit = (data) => {
    navigate("/gitUserData", { replace: true });
  }
      
  return (
    <MainContainer>
       <form  onSubmit={handleSubmit(onSubmit)}> 
      <HeadingText>User Details</HeadingText>
      <br></br>
      <br></br>
        <InputContainer>
        <Input type="email"  placeholder="Email"  {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
        {errors.email && <p>Please provide a valid the Email</p>}
        <br></br>
        </InputContainer>
  <input type="checkbox" id="accept" name="accept" value="accept"/>
  <label htmlFor="agreement">Agree with terms and services</label><br></br>

  <ButtonContainer>
          <Button onClick={handleBack}>Back</Button>
          <Button >Next</Button>
        </ButtonContainer>
      </form>
      </MainContainer>
     
  );
 
};

export default EmailPage;
