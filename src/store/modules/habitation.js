import habitationService from "../../services/habitation";
import APIError from "../../tools/APIError";
import notifier from "../../tools/notifier";

export default {
  namespaced: true,
  state: {},
  getter: {},
  actions: {
    async updateHabitation(
      context,
      { id, address, surface, type, files, deleteFiles, userId }
    ) {
      try {
        await habitationService.updateHabitation(
          id,
          address,
          surface,
          type,
          files,
          deleteFiles,
          userId
        );
      } catch (error) {
        APIError.handle(error);
      }
    },
    async get(context, { id }) {
      try {
        let habitation = await habitationService.get(id);
        return habitation;
      } catch (error) {
        APIError.handle(error);
      }
    },
    async getMedia(context, { id }) {
      try {
        let habitation = await habitationService.getMedia(id);
        return habitation;
      } catch (error) {
        APIError.handle(error);
      }
    },

    async create(
      context,
      { mail, password, phone, lastName, firstName, birthday, sex }
    ) {
      try {
        const userdata = await habitationService.create(
          mail,
          password,
          phone,
          lastName,
          firstName,
          birthday,
          sex
        );
        notifier.success(`Utilisateur créer`);
        return userdata;
      } catch (error) {
        APIError.handle(error);
      }
    },
  },
};
