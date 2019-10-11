import React from 'react'

const PetInfo = props => {
    return(
        <div className="PetInfo">
            <div className="PetInfo-container">
                <div className="PetInfo-content">
                    <div className="PetInfo-avatar">
                        <img src={props.pet.photo} alt="props.pet.name" />
                    </div>

                    <div className="PetInfo-profile">
                        <h2>Nombre</h2>
                        <span>
                            {props.pet.type === 'dog' && '🐶'}
                            {props.pet.type === 'cat' && '🐱'}
                        </span>
                        <p>{props.pet.description}
                            <i>
                                {props.pet.gender === 'male' && '♂'}
                                {props.pet.gender === 'female' && '♀️'}
                            </i>
                        </p>
                        <div className="PetInfo-type">
                            <button>
                                Adoptar
                            </button>
                        </div>
                        <div className="PetInfo-profile-adopt">
                            <div className="PetInfo-item">
                                <h3>Datos de Contacto:</h3>
                                <span>Dueño:</span>
                                <h4>Alfredo Valbuena</h4>
                                <span>Correo:</span>
                                <h4>almavalo11@gmail.com</h4>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};
export default PetInfo;