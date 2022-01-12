const Swal = require("sweetalert2");

const AlertFactory = {
  error: Swal.mixin({
    title: "Erreur",
    icon: "error",
    backdrop: true,
    allowOutsideClick: false,
    confirmButtonText: "OK",
  }),
  success: Swal.mixin({
    icon: "success",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }),
};

export default (store) => {
  store.subscribe((mutation) => {
    if (mutation.type === "notify/newMessage" && mutation.payload) {
      const alert = AlertFactory[mutation.payload.type];
      const html = `${mutation.payload.message}`;
      if (alert) {
        alert.fire({ html }).then(() => {
          store.dispatch("notify/ackMessage");
        });
      } else {
        store.dispatch("notify/ackMessage");
      }
    }
  });
};
