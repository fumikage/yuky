import { HTTP } from "./http-common";

export default { updatePetsitter, getPetsitter };

async function updatePetsitter(userId, petAccepted, other) {
    const response = await HTTP({
        method: "PUT",
        url: `/petsitter/${userId}/user`,
        data: {
            petAccepted: petAccepted,
            other: other,
        },
    });

    return response.data.data;
}

async function getPetsitter(userId) {
    const response = await HTTP({
        method: "GET",
        url: `/petsitter/${userId}/user`,
    });

    return response.data.data;
}
