import PropTypes  from "prop-types";


export const Person = (props)=>{
    return(
        <div>
            <h4>Name : {props.name}</h4>
            <h4>Email : {props.email}</h4>
            <h4>Age : {props.age}</h4>
            <h4>{props.name} {props.isMarried ? 'is' : 'is not'} Married</h4>
            {props.friends.map((friend) => (
                <h4>{friend}</h4>
            ))}
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool.isRequired,
    friends: PropTypes.arrayOf(PropTypes.string).isRequired
}