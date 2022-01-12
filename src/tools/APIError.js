import notifier from "./notifier";
import { env } from "../config/";

class APIError extends Error {
  static handle(error, other = APIError.UNKNOWN) {
    let message;
    if (error instanceof APIError) {
      message = error.toString();
    } else {
      if (env === "development") {
        message = `DEBUG: ${error.message || error}`;
        console.error(error);
      } else {
        message = other;
      }
    }
    notifier.error(message);
  }

  constructor(status, code, details) {
    super(code);
    this.name = "APIError";
    this.status = status;
    this.code = code;
    this.details = details || {};
  }

  toString() {
    const translator = CODES[this.code];
    if (translator) {
      if (typeof translator === "string") {
        return translator;
      } else {
        return translator(this);
      }
    }
    return `${APIError.KNOWN} (${this.status}:${this.code})`;
  }
}

function _translateParams(params = []) {
  return params.map((param) => PARAMS[param] || param);
}

// Erreurs statiques
APIError.UNKNOWN = "Une erreur inconnue est survenue";
APIError.KNOWN = "Une erreur est survenue";
APIError.NO_DETAIL = "Pas de détail";

// Codes d'erreur
const CODES = {
  action_forbidden: (error) =>
    `Action non autorisée<br/>(${error.details.action || APIError.NO_DETAIL})`,
  api_down: "Service non disponible<br/>Veuillez essayer plus tard",
  create_failed: "La création de la ressource a échoué",
  credentials_too_low: "Droits d'accès insuffisants pour la ressource demandée",
  delete_failed: "La suppression de la ressource a échoué",
  expired_token: "La session a expiré<br/>Veuillez vous reconnecter",
  installation_not_defined: "Erreur interne<br/>Installation non définie",
  internal_error: "Erreur interne",
  invalid_installation: "Clé d'installation non valide",
  invalid_param: "Un des paramètres de la requête est invalide",
  invalid_token: "Jeton invalide<br/>Veuillez vous reconnecter",
  login_failed: "Échec de la connexion<br/>Email et/ou mot de passe invalide",
  validation_failed: (error) =>
    `Au moins un champ du formulaire est vide ou invalide<br/><i>${_translateParams(
      Object.keys(error.details)
    ).join("<br/>")}</i>`,
  missing_header: "Erreur interne<br/>En-tête requête incomplet",
  not_implemented: "Erreur interne<br/>Ressource non implémentée",
  reset_password_failed:
    "Échec de la réinitialisation du mot de passe<br/>" +
    "Utilisateur non trouvé ou jeton invalide",
  ressource_exists: (error) =>
    `La ressource existe déjà<br/>(${
      error.details.type || APIError.NO_DETAIL
    })`,
  ressource_not_found: (error) =>
    `Ressource non trouvée<br/>(${error.details.type || APIError.NO_DETAIL})`,
  select_failed: "La récupération de la ressource a échoué",
  service_error: (error) =>
    `Service non disponible<br/>(${error.details.action}@${error.details.serviceName}.${error.details.endpointName})`,
  update_failed: "La modification de la ressource a échoué",
};

const PARAMS = {
  oldPassword: "Ancien mot de passe",
  password: "Mot de passe",
  token: "Jeton",
  mail: "Adresse email",
  firstName: "Prénom",
  lastName: "Nom",
  phone: "Téléphone",
  name: "Nom",
};

export default APIError;
