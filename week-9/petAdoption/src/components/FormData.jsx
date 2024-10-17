const FormData = (props) => {
    
    console.log(props)
  return (
    <>
    
    <div className="m-20 mr-40 ml-40 shadow-lg ">
        Form Details
        <h1>Username :{props.value.username}</h1>
        <h1>petType :{props.value.petType}</h1>
        <h1>breed :{props.value.Breed}</h1>
        <h1>Your Name :{props.value.yourName}</h1>
        <h1>Email :{props.value.email}</h1>
        <h1>Phone :{props.value.phone}</h1>
    </div>
    
    </>
  );
};

export default FormData;