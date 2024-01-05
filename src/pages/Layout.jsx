import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Outlet, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  return (
    <>
      <Disclosure as="nav" className="dark:bg-gray-800 bg-white">
        {({ open }) => (
          <>
            <div className="dark:bg-gray-800 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between dark:text-white">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <span
                      onClick={() => {
                        navigate("/");
                      }}
                      className="text-2xl font-semibold cursor-pointer"
                    >
                      <img className="w-10 hidden dark:block" src="/toace-temp-logo-light.png" alt="" />
                      <img className="w-10 dark:hidden" src="/toace-temp-logo.png" alt="" />
                    </span>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-default text-white"
                            : "text-gray-600 dark:text-white transition-colors duration-200 hover:bg-gray-100 dark:hover:text-gray-600",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-default text-white"
                        : "text-gray-600 dark:text-white transition-colors duration-200 hover:bg-gray-100 dark:hover:text-gray-600",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet></Outlet>
      <div className=" dark:bg-gray-800 bg-white dark:text-white ">
        <div className="max-w-7xl mx-auto p-2 sm:p-4 md:pt-8 dark:bg-gray-800 bg-white">
          <div className="sm:w-2/5 mx-auto flex flex-col md:flex-row justify-center md:justify-around lg:my-4 text-sm sm:text-md">
            <div className="flex flex-col gap-1 md:gap-2 justify-center text-center py-2 md:py-0">
              <span>
                <PhoneIcon className="w-5 inline-block me-3" />
                <span> Let's talk</span>
              </span>
              <span className="text-default">+91 9876543210</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center text-center py-2 md:py-0">
              <span>
                <EnvelopeIcon className="w-5 inline-block me-3" />
                General Support
              </span>
              <span className="text-default">+91 9876543210</span>
            </div>
          </div>
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400 my-2">
            © 2024 toace . All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
}
