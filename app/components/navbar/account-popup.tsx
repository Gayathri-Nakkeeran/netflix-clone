"use client";
import Image from "next/image";
import profile from "../../../public/sloth.jpg";
type propsType = {
  accounts: [];
  setLoggedInAccount: (arg0: null) => {};
  signOut: () => {};
  loggedInAccount: any;
  setPageLoader: (arg0: boolean) => {};
};
export default function AccountPopup({
  accounts,
  setLoggedInAccount,
  signOut,
  loggedInAccount,
  setPageLoader,
}: propsType) {
  return (
    <div className="    lg:px-8 lg:py-8 fixed top-[50px] gap-3 flex flex-col items-start right-[45px] bg-black opacity-[.85] z-[999]">
      <div className="flex flex-col gap-3">
        {accounts && accounts.length
          ? accounts
              .filter((item: any) => item._id !== loggedInAccount?._id)
              .map((account: any) => (
                <div
                  onClick={() => {
                    setLoggedInAccount(null);
                    sessionStorage.removeItem("loggedInAccount");
                  }}
                  className="cursor-pointer flex gap-5"
                  key={account._id}
                >
                  <Image
                    src={profile}
                    width={120}
                    height={120}
                    alt="Current Profile"
                    className="max-w-[30px] rounded min-w-[20px] max-h-[30px] min-h-[20px] object-cover w-[30px] h-[30px]"
                  />
                  <p className="mb-4">{account.name}</p>
                </div>
              ))
          : null}
      </div>
      <div>
        <button
          className="pb-2"
          onClick={() => {
            setPageLoader(true);
            signOut();
            setLoggedInAccount(null);
            sessionStorage.removeItem("loggedInAccount");
          }}
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
}
