import { HTTP } from "./http-common";

export default {
  async login(mail, password) {
    console.log("test");
    const response = await HTTP({
      method: "POST",
      url: `/login`,
      data: { mail, password },
    });
    return response.data.data;
  },
};
