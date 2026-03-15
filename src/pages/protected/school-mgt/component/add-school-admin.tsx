import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import PromptModal from "@/components/modal/prompt-modal";
import { Button } from "@/components/ui/button";
import useToggleModal from "@/hooks/use-toggle";
import { routesPath } from "@/routes/routesPath";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddSchoolAdmin() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const { isOpen, toggleClick } = useToggleModal(false);
  return (
    <>
      <div className="max-w-235">
        <div className="mb-7 space-y-1.5">
          <h4 className="font-medium text-xl text-black-01">
            Create School Admin
          </h4>
          <p className="text-gray-01 font-mont text-xs">
            Add an admin ensure at least one administrator exists in the
            institution.
          </p>
        </div>

        <p className="inline-flex items-center text-gray-05 text-sm mb-4">
          School Admin
          <figure className="size-fit ml-2">{svgIcons.infoIcon}</figure>
        </p>

        <div className="space-y-10 mb-4">
          {Array.from({ length: count }).map((_, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <CustomInput
                id="fname"
                label="First Name"
                placeholder="Enter first name"
              />
              <CustomInput
                id="lname"
                label="Last Name"
                placeholder="Enter last name"
              />
              <CustomInput
                id="email"
                label="Email Address"
                placeholder="Enter email address"
              />
              <CustomInput
                id="phone"
                label="Phone Number"
                placeholder="Enter branch"
              />
              <CustomInput
                id="role"
                label="Admin Role"
                placeholder="Enter role"
              />
            </div>
          ))}
        </div>

        <div className="">
          <Button
            variant={"ghost"}
            className="px-0 text-primary"
            onClick={() => {
              setCount((prev) => prev + 1);
            }}
          >
            <Plus /> Add Another Admin
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-4">
          <Button variant={"outline-dest"} className="w-37">
            Cancel
          </Button>
          <Button onClick={toggleClick} className="w-37">
            Send Invite
          </Button>
        </div>
      </div>

      <PromptModal
        isOpen={isOpen}
        onConfirm={() => {
          toggleClick();
          navigate(routesPath.PROTECTED.SCHOOL_MGT.INDEX + "?status=pending", {
            replace: true,
          });
        }}
        title="Invite Successfully Sent!"
        description="You have successfully sent an invite to the added admin, click the button below to continue "
      />
    </>
  );
}
