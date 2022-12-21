import petsitterService from "../../services/petsitter";
import APIError from "../../tools/APIError";

export default {
    namespaced: true,
    state: {},
    getter: {},
    actions: {
        async updatePetsitter(context, { userId, petAccepted, other }) {
            try {
                const petsitterData = await petsitterService.updatePetsitter(
                    userId,
                    petAccepted,
                    other
                );

                return petsitterData;
            } catch (error) {
                APIError.handle(error);
            }
        },

        async getPetsitter(context, { userId }) {
            try {
                let response = await petsitterService.getPetsitter(userId);
                return response;
            } catch (error) {
                APIError.handle(error);
            }
        },
    },
};
