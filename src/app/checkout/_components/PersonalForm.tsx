import { Label } from "@/components/ui/label";

const PersonalForm = () => {
    return (
        <div>
          <h1 className="pb-9 text-3xl font-semibold">Personal Information</h1>
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Adult 1</h1>
            <div className="mt-5 grid grid-cols-4 gap-3">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Email"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <input
                  type="number"
                  id="age"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Age"
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Adult 2</h1>
            <div className="mt-5 grid grid-cols-4 gap-3">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Email"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <input
                  type="number"
                  id="age"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Age"
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Adult 3</h1>
            <div className="mt-5 grid grid-cols-4 gap-3">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Email"
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <input
                  type="number"
                  id="age"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Age"
                />
              </div>
            </div>
          </div>
        </div>
    );
};

export default PersonalForm;