import { useState, useEffect } from 'react';
const api = "https://us-central1-patitas-ca431.cloudfunctions.net/api";

const useGetPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setPets(data));
    }, []);

    return pets;

}

export default useGetPets;