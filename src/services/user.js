import { HTTP } from "./http-common";

export default { checkMail, create, saveProfilPicture, getProfilPicture };

async function checkMail(mail) {
    const response = await HTTP({
        method: "POST",
        url: `/user/checkmail`,
        data: {
            mail: mail,
        },
    });

    return response.data.data;
}

async function create(
    mail,
    password,
    phone,
    lastName,
    firstName,
    birthday,
    sex
) {
    const response = await HTTP({
        method: "POST",
        url: `/user`,
        data: {
            mail: mail,
            password: password,
            phone: phone,
            lastName: lastName,
            firstName: firstName,
            birthday: birthday,
            sex: sex,
        },
    });
    return response.data;
}

async function saveProfilPicture(id, files) {
    let bodyFormData = new FormData();
    bodyFormData.set("id", id);
    bodyFormData.append("file", files);

    const response = await HTTP({
        method: "POST",
        url: `/user/${id}/profilpicture`,
        data: bodyFormData,
        headers: { "Content-type": "multipart/form-data" },
    });
    return response.data.data;
}

async function getProfilPicture(id) {
    const response = await HTTP({
        method: "GET",
        url: `/user/${id}/profilpicture`,
    });
    return response.data.data;
}
