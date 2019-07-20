import Swal from 'sweetalert2';

export class Toaster {

    /**
     * Display an error popup
     * @param p_message Message to display
     * @param p_title Title of the popup
     */
    static error(p_message: string, p_title: string) {
        Swal.fire({
            type: 'error',
            text: p_message,
            title: p_title
        });
    }

    static showSuccessPopup(p_message: string, p_title: string) {
        Swal.fire({
            position: 'top-right',
            type: 'success',
            title: p_title,
            text: p_message,
            showConfirmButton: false,
            timer: 1800
          });
    }
}
