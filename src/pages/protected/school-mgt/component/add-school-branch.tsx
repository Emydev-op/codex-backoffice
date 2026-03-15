import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import { CustomNativeSelect } from "@/components/custom/custom-native-select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddSchoolBranch() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="max-w-235">
      <div className="mb-7 space-y-1.5">
        <h4 className="font-medium text-xl text-black-01">Add Branch</h4>
        <p className="text-gray-01 font-mont text-xs">
          To add a branch fill all the compulsory questions below.
        </p>
      </div>

      <p className="inline-flex items-center text-gray-05 text-sm mb-4">
        Branch Information
        <figure className="size-fit ml-2">{svgIcons.infoIcon}</figure>
      </p>

      <div className="space-y-10 mb-4">
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <CustomInput
              id="name"
              label="Branch Name"
              placeholder="Enter branch"
              isRequired
            />
            <CustomInput
              id="address"
              label="Branch Address"
              placeholder="Enter address"
              isRequired
            />
            <CustomInput
              id="email"
              label="Branch Email"
              placeholder="Enter email"
              isRequired
            />
            <CustomInput
              id="code"
              label="Branch Code"
              placeholder="Enter code"
            />
            <CustomNativeSelect
              id="type"
              label="Branch Type"
              placeholder="Select type"
              options={[]}
              isRequired
            />
            <CustomNativeSelect
              id="country"
              label="Branch Country"
              placeholder="Select country"
              options={[]}
              isRequired
            />
            <CustomNativeSelect
              id="state"
              label="Branch State"
              placeholder="Select state"
              options={[]}
              isRequired
            />

            <div className="inline-flex items-center gap-6.25">
              <div className="space-y-1">
                <p className="text-sm font-mont font-medium text-gray-06">
                  Main Branch
                </p>
                <p className="text-xs font-light text-gray-02">
                  Toggle on if this is the main branch
                </p>
              </div>
              <Switch />
            </div>
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
          <Plus /> Add Another Branch
        </Button>
      </div>

      <div className="mt-10 inline-flex items-center gap-4">
        <Button variant={"outline-dest"} className="w-37">
          Cancel
        </Button>
        <Button
          onClick={() => {
            navigate({ search: "?tab=admin" });
          }}
          className="w-37"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
