import { HTTP } from "./http-common";

export default { create, saveMedia, getPets, getMediasPets };

async function create(pet, userId) {
    const response = await HTTP({
        method: "POST",
        url: `/pet`,
        data: {
            pet: pet,
            userId: userId,
        },
    });

    return response.data.data;
}

async function getPets(id) {
    const response = await HTTP({
        method: "GET",
        url: `/pets/${id}/user`,
    });

    return response.data.data;
}

async function getMediasPets(id) {
    const response = await HTTP({
        method: "GET",
        url: `/pets/${id}/user/media`,
    });

    return response.data.data;
}

async function saveMedia(id, petId, files) {
    let bodyFormData = new FormData();
    bodyFormData.set("id", id);
    bodyFormData.append("petId", petId);
    bodyFormData.append("file", files);

    const response = await HTTP({
        method: "POST",
        url: `pet/${petId}/user/${id}`,
        data: bodyFormData,
        headers: { "Content-type": "multipart/form-data" },
    });
    return response.data.data;
}
