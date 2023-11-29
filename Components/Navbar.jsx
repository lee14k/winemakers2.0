import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, loading } = useUser();
  const router = useRouter();

  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/About", current: false },
    { name: "Login", href: "/Login", current: false },
    { name: "Gallery", href: "/Gallery", current: false },
    { name: "Events", href: "/Events", current: false },
    { name: "Resources", href: "/Resources", current: false },
    { name: "Dinner Dance", href: "/DinnerDance", current: false },
  ]);

  useEffect(() => {
    // Update the navigation state based on the current route
    setNavigation(prevNavigation => prevNavigation.map(item => ({
      ...item,
      current: router.pathname === item.href
    })));
  }, [router.pathname]);

  useEffect(() => {
    // Update navigation array based on user's state
    if (!loading) {
      setNavigation(prevNavigation => {
        const newNavigation = [...prevNavigation];
        if (user) {
          // If user is logged in, modify navigation accordingly
          newNavigation.splice(2, 1, { name: "Members", href: "/Members", current: router.pathname === "/Members" });
        } else {
          // If user is logged out, modify navigation accordingly
          newNavigation.splice(2, 1, { name: "Login", href: "/api/auth/login", current: router.pathname === "/api/auth/login" });
        }
        return newNavigation;
      });
    }
  }, [user, loading, router.pathname]);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <a
                          className={classNames(
                            item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* ... (additional navbar content if any) ... */}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
  );
}
