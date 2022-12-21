import petService from "../../services/pet";
import APIError from "../../tools/APIError";
import notifier from "../../tools/notifier";

export default {
    namespaced: true,
    state: {},
    getter: {},
    actions: {
        async create(context, { pet, userId }) {
            try {
                const petData = await petService.create(pet, userId);
                notifier.success(`Utilisateur créer`);
                return petData;
            } catch (error) {
                APIError.handle(error);
            }
        },
        async saveMedia(context, { id, petId, files }) {
            try {
                await petService.saveMedia(id, petId, files);
            } catch (error) {
                APIError.handle(error);
            }
        },
        async getPets(context, { id }) {
            try {
                let response = await petService.getPets(id);
                return response;
            } catch (error) {
                APIError.handle(error);
            }
        },
        async getMediasPets(context, { id }) {
            try {
                let response = await petService.getMediasPets(id);
                return response;
            } catch (error) {
                APIError.handle(error);
            }
        },
    },
};
