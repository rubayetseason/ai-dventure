import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
    return (
       <div>
          <h1 className="pb-9 text-3xl font-semibold">Contact Information</h1>
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Primary Contact</h1>
            <div className="mt-5 grid grid-cols-1 gap-8">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <input
                  type="text"
                  id="fullName"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Full Name"
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
                <Label htmlFor="contact">Contact Number</Label>
                <input
                  type="text"
                  id="contact"
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 outline-none"
                  placeholder="Contact Number"
                />
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <textarea
                  id="notes"
                  rows={4}
                  className="mt-2 p-3 w-full text-sm bg-gray-600/70 resize-none outline-none"
                  placeholder="Enter any additional notes..."
                ></textarea>
              </div>
              <div className="mt-2 p-3 w-full text-sm flex items-start gap-3">
                <Checkbox id="terms-2" />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">Accept terms and conditions</Label>
                  <p className="text-muted-foreground text-sm">
                    By clicking this checkbox, you agree to the terms and
                    conditions.
                  </p>
                </div>
              </div>

              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-lg text-black"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ContactForm;