import { HTTP } from "./http-common";

export default { get, getMedia, updateHabitation };

async function get(id) {
    const response = await HTTP({
        method: "GET",
        url: `/habitation/${id}/user`,
    });

    return response.data.data;
}
async function getMedia(id) {
    const response = await HTTP({
        method: "GET",
        url: `/habitation/${id}/media`,
    });

    return response.data.data;
}

async function updateHabitation(
    id,
    address,
    surface,
    type,
    files,
    deleteFiles,
    userId
) {
    let bodyFormData = new FormData();
    bodyFormData.set("id", id);
    bodyFormData.append("address", address);
    bodyFormData.append("surface", surface);
    bodyFormData.append("type", type);
    bodyFormData.append("deleteFiles", deleteFiles);
    bodyFormData.append("userId", userId);
    for (let i = 0; i < files.length; i++) {
        console.log("test", files[i]);
        bodyFormData.append("files", files[i]);
    }
    const response = await HTTP({
        method: "POST",
        url: `/habitation/${id}/user`,
        data: bodyFormData,
        headers: { "Content-type": "multipart/form-data" },
    });
    return response.data.data;
}
