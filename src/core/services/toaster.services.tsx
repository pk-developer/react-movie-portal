import { toast } from 'react-toastify';


class Toast {

    public success(txt: string) {
            toast.success(txt, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
    }
    public info(txt: string) {
        toast.info(txt, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000
        });
    }
    public error(txt: string) {
        toast.error(txt, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
    }

    public errorToasterWith30S(txt: string) {
        toast.error(txt, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        });
    }
}

export default new Toast();