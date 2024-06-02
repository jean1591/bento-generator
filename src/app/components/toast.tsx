import { useDispatch, useSelector } from "react-redux";

import { PiX } from "react-icons/pi";
import { RootState } from "../lib/store/store";
import { Transition } from "@headlessui/react";
import { setDisplayToast } from "../lib/store/features/bentoSettings/slice";

export const Toast = () => {
  const dispatch = useDispatch();
  const { displayToast, errorMessage } = useSelector(
    (state: RootState) => state.bentoSettings
  );

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={displayToast}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-red-100 border border-red-300 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-base-content-500">
                      An error occured 😱
                    </p>
                    <p className="mt-1 text-sm text-base-content-300">
                      {errorMessage}
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-red-100 text-base-content-300 hover:text-base-content-500"
                      onClick={() => {
                        dispatch(setDisplayToast(false));
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <PiX className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
