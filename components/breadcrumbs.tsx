"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { MenuItem } from "primereact/menuitem";
  
const CommonBreadcrumbs = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter((item) => item !== "");
  
    const home = { icon: "pi pi-home", url: "/" };
  
    const items: MenuItem[] = segments.map((item, index) => {
      return {
        disabled: index === segments.length - 1,
        template: () => (
          <Link
            key={item}
            className="text-red-700"
            href={`/${segments.slice(0, index + 1).join("/")}`}
            aria-label={`Go to ${item}`}
          >
            {item}
          </Link>
        ),
      };
    });
  
    return <BreadCrumb home={home} model={items} />;
  };
  
  export default CommonBreadcrumbs;
