import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ninetyLogo from "../../assets/ninety_logo.png";
import { dromdown, navigation, user } from "@/utils/constants";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({ scrollDirection }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleDisclosureChange = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (window.innerWidth < 768 && open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleResize = (e) => {
      if (e.target.innerWidth < 768 && open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <>
      <div className={`${scrollDirection ? "" : "fixed "}w-full z-50`}>
        <Disclosure as="nav" onChange={() => {}} className="bg-black">
          {() => (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-36">
                <div className="flex h-[51px] md:h-28 items-center justify-between">
                  <div
                    ref={ref}
                    className="flex items-center justify-between w-full"
                  >
                    <Link href={"/"} className="flex-shrink-0">
                      <Image
                        priority={true}
                        src={ninetyLogo}
                        width={142}
                        height={54}
                        alt="banner"
                        className="w-[78px] sm:w-[100px] md:w-[142px]"
                      />
                    </Link>
                    <div>
                      <div className="ml-10 flex items-center space-x-16">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium hidden lg:block"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                        <Menu as="div" className="md:relative">
                          <div>
                            <Menu.Button
                              onClick={handleDisclosureChange}
                              className="flex max-w-xs items-center rounded-full text-sm text-white focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                              <span className="sr-only">Open user menu</span>
                              <Image
                                priority={true}
                                className="h-5 w-5 md:h-8 md:w-8 md:min-h-[32px] md:min-w-[32px]"
                                src={user.imageUrl}
                                alt=""
                                width={20}
                                height={20}
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute flex flex-col h-max md:gap-6 right-1 border-t-[0.5px] md:border-t-0 border-whitePurple md:max-h-auto w-full top-[43px] md:top-60 z-10 mt-2 md:w-48 origin-top-right md:rounded-md md:py-1 bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {dromdown.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-900" : "",
                                        "block px-4 py-2 text-base text-center md:text-left md:text-[26px] text-white"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                              <div className="flex flex-col md:gap-6 lg:hidden">
                                {navigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-base text-center md:text-left md:text-[26px] text-white"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        priority={true}
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
