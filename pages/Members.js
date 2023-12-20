/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Navbar from "@/Components/Navbar";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import PDFs from "@/Components/PDFs";
import Dashboard from "@/Components/Dashboard";
import Newsletters from "@/Components/Newsletters";
import Vintners from "@/Components/Vintners";
import Procedures from "@/Components/Procedures";
import Reference from "@/Components/Reference";
import Presentations from "@/Components/Presentations";
import Clubinfo from "@/Components/Clubinfo";

const navigation = [
  { name: "Newsletters", icon: FolderIcon, view: "newsletters" },
  { name: "PDFs", icon: FolderIcon, view: "PDFs" },
  { name: "Vintners Press", icon: FolderIcon, view: "Vintners" },
  { name: "Protocols and Recipes", icon: FolderIcon, view: "procedures" },
  { name: "Club Information", icon: FolderIcon, view: "clubinfo" },
  { name: "Presentations", icon: FolderIcon, view: "presentations" },
    { name: "Reference Resources", icon: FolderIcon, view: "reference" },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Members() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("");
  const { user, loading } = useUser();
  const namespace = "https://myapp.example.com/";
  // Accessing roles from the user object
  const userRoles = user?.[`${namespace}roles`];
  // Check if the user has the 'uploader' role
  const isUploader = userRoles?.includes("Uploader");

  const router = useRouter();

  const handleSidebarItemClick = (viewName) => {
    setView(viewName);
    console.log(viewName);
    // Close the sidebar if open in mobile view
    setSidebarOpen(false);
  };
  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  // Call signInAnonymouslyIfUploader directly here

  return (
    <div>
      <div className="pl-64">
        <Navbar />
      </div>
      <div className="">
        <div />
        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative xl:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="">
                      <nav className="flex flex-1 flex-col">
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <button
                                onClick={() =>
                                  handleSidebarItemClick(item.view)
                                }
                                className={classNames(
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                  item.current
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className=" xl:fixed xl:inset-y-0 xl xl:flex  xl:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
              <div className="flex shrink-0 items-center"></div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleSidebarItemClick(item.view)}
                        className={classNames(
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="xl:pl-72">
            {/* Sticky search header */}

            <main className="lg:pr-96">
              <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                {/* Sort dropdown */}
              </header>

              {/* Deployment list */}
            </main>

            {/* Activity feed */}
          </div>
        </div>
      </div>
      <div className="ml-48">
        <p className="mt-10 mx-24">Hello, {user.name}!</p>
        <p>Click a tab to look through our resources!</p>

        {view === "PDFs" && <PDFs />}
        {view === "newsletters" && <Newsletters />}
        {view === "Vintners" && <Vintners />}
        {view === "procedures" && <Procedures />}
        {view === "clubinfo" && <Clubinfo />}
        {view === "presentations" && <Presentations />}
        {view === "reference" && <Reference />}
      </div>
    </div>
  );
}
