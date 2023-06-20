"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import Button from "../Button";

export default function Modal(props) {
 let [isOpen, setIsOpen] = useState(true);
 const router = useRouter();

 function closeModal() {
  router.push("/photography/");
  setIsOpen(false);
 }

 return (
  <Transition appear show={isOpen} as={Fragment}>
   <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
     <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur firefox:bg-opacity-50" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
     <div className="flex min-h-full items-center justify-center p-4 text-center">
      <Transition.Child as={Fragment} enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:duration-[1ms]" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
       <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle transition-all" onClick={() => closeModal()}>
        {props.children}

        <div className="mt-4 flex w-full justify-center">
         <Button className="ml-4">Close</Button>
        </div>
       </Dialog.Panel>
      </Transition.Child>
     </div>
    </div>
   </Dialog>
  </Transition>
 );
}
