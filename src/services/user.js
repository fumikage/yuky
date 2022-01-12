import { HTTP } from "./http-common";

export default { checkMail, create };

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
