import { Dispatch, ReactNode, SetStateAction } from "react";

const Modal = ({ setOpen, children }: { setOpen: Dispatch<SetStateAction<boolean>>, children: ReactNode }) => {
    return (
        <div id="modal">
            <div className="bg-[#000c] w-full h-screen z-40 fixed top-0 left-0 blur-md" onClick={() => setOpen(false)} />
            <div className="modal-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#34353a] p-6 max-w-200 min-w-60 z-40">
                <div className="close-btn absolute right-[-50px] top-0 border p-1 rounded-md cursor-pointer" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;