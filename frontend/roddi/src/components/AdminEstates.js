import React, {useState} from 'react';
import Estate from './Estate';
import tempImage from '../images/-wide.jpg'

// gets Estate JSON objects from DB and sets initial Estate List
function getEstatesFromDB() {
    
    // temporary example objects
    let x = new Estate();
    x.state.name="Andersen";
    let y = new Estate();
    y.state.name="Solvang";
    // return Objects
    return [x,y];
}


function AdminEstates() {
    const [nameInput, setNameInput] = useState("");
    
    // get list of Estates from database and put in this array
    const [estates, setEstates] = useState(getEstatesFromDB());
    
    const handleChange = (e) => {
       setNameInput(e.target.value);
    }

    function addToEstateList() {
        let est = new Estate();
        est.state.name=nameInput;
        let newEstates = estates.concat([est]);
        setEstates(newEstates);
    }

    function submitEstate() {
        document.getElementById('confirmName').innerHTML = '';
        if (document.getElementById('nameInput').value != '') {
            addToEstateList();
            setNameInput("");
        }
        else {
            document.getElementById('confirmName').innerHTML = 'Vennligst fyll inn et navn på dødsboet!';
            document.getElementById('confirmName').style.color = 'red';
        }
    }
    
    
    return(
        <div>
            <div className="createEstate">
                <form className="form">
                    <div className ="form-group text-left" >
                    <label htmlFor="exampleUserName">Opprett Dødsbo</label>
                    <input type="text" 
                        className="form-control" 
                        id="nameInput" 
                        required
                        placeholder="Skriv inn navn på dødsbo" 
                        value={nameInput} 
                        onChange={handleChange}
                    />
                    </div>
                    <small id="confirmName" 
                        className="form-text"> 
                    </small>
                </form>
                <button type="submit" className="btn btn-secondary" onClick={submitEstate}>
                    Opprett Dødsbo
                </button>
            </div>

            <div className="estates">
                <ul className="estateList">
                    {estates.map((item, index) => (
                        <div key={"estate"+index} id={"e"+index}>
                            <h1>Dødsbo {item.state.name}</h1>
                            <img style={{height: "200px", width: "360px"}} src={tempImage} alt="temporary pic"/>
                            {/* img med src=item.state.image */}
                        </div>
                    ))}
                </ul>
            </div>
        </div>

    )
}
export default AdminEstates;