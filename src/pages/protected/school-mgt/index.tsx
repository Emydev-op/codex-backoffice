import { svgIcons } from "@/assets/svg";
import { CustomInput } from "@/components/custom/custom-input";
import CustomTable from "@/components/custom/custom-table";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { routesPath } from "@/routes/routesPath";
import { Plus } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

const tableHeader = [
  "S/N",
  "School Name",
  "Location",
  "Total Student",
  "Type",
  "Status",
  "Action",
];

export default function SchoolManagement() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter_status = searchParams.get("status");
  const metricCard = [
    {
      title: "All Schools",
      value: "790",
      query: "",
      active: !filter_status,
    },
    {
      title: "Active Schools",
      value: "570",
      query: "active",
      active: filter_status === "active",
    },
    {
      title: "Pending Schools",
      value: "210",
      query: "pending",
      active: filter_status === "pending",
    },
    {
      title: "Inactive Schools",
      value: "10",
      query: "inactive",
      active: filter_status === "inactive",
    },
  ];

  return (
    <DashboardLayout title="School Management">
      <main className="px-4.5 py-6 space-y-5 text-black-01">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-xl">School Onboarding</h4>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="lg">
                <Plus /> Add New School
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border rounded-sm">
              <DropdownMenuItem
                onClick={() => {
                  navigate(routesPath.PROTECTED.SCHOOL_MGT.CREATE);
                }}
                className="text-sm cursor-pointer text-custom-gray-scale-400"
              >
                Add Manual
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm cursor-pointer text-custom-gray-scale-400">
                Bulk Upload
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {metricCard.map((item, idx) => (
            <div
              className={cn(
                "bg-white rounded-md h-26 w-full px-5.5 pt-5 space-y-2.5 cursor-pointer",
                item.active && "bg-pry-01",
              )}
              key={idx}
              onClick={() => {
                setSearchParams({ status: item.query });
              }}
            >
              <h5 className="font-mont text-sm font-medium text-gray-01">
                {item.title}
              </h5>
              <p className="font-semibold text-2xl text-[#221122]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-8 gap-5">
          <CustomInput
            id="search"
            canSearch
            placeholder="Search..."
            className="h-10"
            containerClass="max-w-[280px]"
          />

          <div className="inline-flex items-center gap-3.5">
            <Button
              variant={"white"}
              size="lg"
              className="[&_svg]:size-5 font-medium font-mont"
            >
              {svgIcons.filterIcon} Filter
            </Button>
            <Button
              variant={"white"}
              size="lg"
              className="[&_svg]:size-5 font-medium font-mont"
            >
              {svgIcons.exportIcon} Export
            </Button>
          </div>
        </div>

        <CustomTable
          tableHeaderList={tableHeader}
          tableBodyList={FORMAT_TABLE_DATA(dummyData)}
          dropDown
        />
      </main>
    </DashboardLayout>
  );
}

const FORMAT_TABLE_DATA = (data: any) => {
  return data?.data?.map((item: any, idx: number) => ({
    sn: <p className="capitalize">{idx + 1}</p>,
    name: <p className="capitalize">{item?.schoolName || "---"}</p>,
    location: item?.location || "---",

    totalStudents: item?.totalStudents || "---",
    schoolType: item?.schoolType || "---",
    status: (
      <Badge variant={item.status?.toLowerCase()} className="w-19.25">
        {item?.status || "---"}
      </Badge>
    ),
    _slug: item?.id,
  }));
};

const dummyData = {
  success: true,
  data: [
    {
      id: 1,
      schoolName: "Stars International School",
      location: "Lagos Island",
      totalStudents: 120,
      schoolType: "Primary",
      status: "Active",
    },
    {
      id: 2,
      schoolName: "Stars International School",
      location: "Lagos Island",
      totalStudents: 200,
      schoolType: "Secondary",
      status: "Pending",
    },
    {
      id: 3,
      schoolName: "Stars International School",
      location: "Lagos Island",
      totalStudents: 200,
      schoolType: "Secondary",
      status: "Inactive",
    },
    {
      id: 4,
      schoolName: "Stars International School",
      location: "Lagos Island",
      totalStudents: 120,
      schoolType: "Secondary",
      status: "Active",
    },
    {
      id: 5,
      schoolName: "Stars International School",
      location: "Lagos Island",
      totalStudents: 120,
      schoolType: "Primary",
      status: "Pending",
    },
    {
      id: 6,
      schoolName: "Stars International School",
      location: "Lagos Island",
      totalStudents: 200,
      schoolType: "Primary",
      status: "Pending",
    },
  ],
  meta: {
    total: 6,
    page: 1,
    pageSize: 10,
  },
};
