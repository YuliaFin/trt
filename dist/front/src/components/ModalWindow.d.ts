interface IModal {
    active: boolean;
    setActive: (flag: boolean) => void;
    url: string;
    setUrl: (url: string) => void;
}
declare function ModalWindow(props: IModal): any;
export default ModalWindow;
