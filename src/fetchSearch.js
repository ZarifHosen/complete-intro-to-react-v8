async function fetchPets({ queryKey }) {
    const { animal, location, breed } = queryKey[1];
    const res = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    if (!res.ok) {
        throw new Error(`Could not fetch ${animal}, ${location}, ${breed}`);
    }

    return res.json();
}

export default fetchPets;