import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import { CustomNativeSelect } from "@/components/custom/custom-native-select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function AddSchool() {
  const navigate = useNavigate();
  return (
    <div className="max-w-235">
      <div className="mb-7 space-y-1.5">
        <h4 className="font-medium text-xl text-black-01">Add a New School</h4>
        <p className="text-gray-01 font-mont text-xs">
          To add a new school fill all the compulsory questions below.
        </p>
      </div>

      <p className="inline-flex items-center text-gray-05 text-sm mb-4">
        School Information
        <figure className="size-fit ml-2">{svgIcons.infoIcon}</figure>
      </p>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <CustomInput
          id="name"
          label="School Name"
          placeholder="Enter school name e.g., St. Mary’s College"
          isRequired
        />
        <CustomInput
          id="address"
          label="School Address"
          placeholder="Enter school address"
          isRequired
        />
        <CustomNativeSelect
          id="name"
          label="School Type"
          placeholder="Select school type"
          options={[]}
          isRequired
        />
        <CustomNativeSelect
          id="name"
          label="School Category"
          placeholder="Select category"
          options={[]}
          isRequired
        />
        <CustomInput
          id="tele"
          label="School Contact Number"
          placeholder="Enter school number"
          isRequired
        />
        <CustomInput
          id="name"
          type="email"
          label="School Email Address"
          placeholder="Enter school email e.g., marycollege@gmail.com"
          isRequired
        />
        <CustomInput
          id="url"
          type="url"
          label="School Website"
          placeholder="Enter website"
          isRequired
        />
        <CustomInput
          id="name"
          type="file"
          label="School Logo"
          placeholder="Select file jpg. jpeg. png. files supported "
          isRequired
        />
      </div>

      <div className="mt-10 inline-flex items-center gap-4">
        <Button variant={"outline-dest"} className="w-37">
          Cancel
        </Button>
        <Button
          onClick={() => {
            navigate({ search: "?tab=branch" });
          }}
          className="w-37"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
