import './Developer.css';

const Developer = ({name, age, country}) => {
    return (
        <div className='Dev_card'>
            <h4>Dev: {name}</h4>
            <h5>Idade: {age}</h5>
            <h5>País: {country}</h5>
        </div>
    )
}


export default Developer;