import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Layout() {
    return (
        <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}


const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];

  function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
  }
  
  function NavBar() {
      const navigate = useNavigate()
    return (
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto p-2 sm:p-6 lg:p-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                      </Disclosure.Button>
                    </div> */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                     onClick={()=>navigate('/')}
                      className="h-8 w-auto cursor-pointer "
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
  
              {/* <Disclosure.Panel>
              <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-default text-white' : 'text-gray-600 hover:bg-gray-300',
                  'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  {item.name}
                  </Disclosure.Button>
                  ))}
                  </div>
                </Disclosure.Panel> */}
            </div>
          </>
        )}
      </Disclosure>
    );
  }
  
  const footerBtns = [
    { name: "Contact Us" },
    { name: "FAQs" },
    { name: "Terms" },
    { name: "Privacy" },
  ];
  
  function Footer() {
    return (
      <>
        <div className="w-full bottom-0 flex justify-center p-10 mt-10">
        </div>
        <div className="fixed w-full bottom-0 flex justify-center bg-gray-700 p-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
              {footerBtns.map((btn) => {
                return (
                  <div className="text-white font-bold text-md inline-block">
                    {btn.name}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-5">
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Layout;
