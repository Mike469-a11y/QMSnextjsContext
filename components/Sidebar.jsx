'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hunting");
  const [adminDropdown, setAdminDropdown] = useState(false);

  useEffect(() => {
    if (pathname === "/" || pathname === "/qms") {
      setActiveSection("hunting");
      setAdminDropdown(false);
    } else if (pathname === "/assignment") {
      setActiveSection("assignment");
      setAdminDropdown(false);
    } else if (pathname === "/admin") {
      setActiveSection("admin");
      setAdminDropdown(true);
    } else if (pathname === "/admin/usermanagement") {
      setActiveSection("usermanagement");
      setAdminDropdown(true);
    } else if (pathname === "/admin/usermanagement/add") {
      setActiveSection("usermanagement");
      setAdminDropdown(true);
    } else if (pathname === "/admin/tracking-performance") {
      setActiveSection("trackingperformance");
      setAdminDropdown(true);
    } else if (pathname === "/approval") {
      setActiveSection("approval");
      setAdminDropdown(false);
    } else if (pathname === "/submitted-data") {
      setActiveSection("submitteddata");
      setAdminDropdown(false);
    } else if (pathname === "/sourcing") {
      setActiveSection("sourcing");
      setAdminDropdown(false);
    } else if (pathname.startsWith("/sourcing/")) {
      setActiveSection("sourcing");
      setAdminDropdown(false);
    } else if (pathname === "/submission") {
      setActiveSection("submission");
      setAdminDropdown(false);
    } else if (pathname === "/execution") {
      setActiveSection("execution");
      setAdminDropdown(false);
    } else if (pathname === "/order-complete") {
      setActiveSection("ordercomplete");
      setAdminDropdown(false);
    }
  }, [pathname]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "assignment") {
      router.push("/assignment");
      setAdminDropdown(false);
    } else if (section === "hunting") {
      router.push("/");
      setAdminDropdown(false);
    } else if (section === "admin") {
      router.push("/admin");
      setAdminDropdown((d) => !d);
    } else if (section === "usermanagement") {
      router.push("/admin/usermanagement");
      setAdminDropdown(true);
    } else if (section === "trackingperformance") {
      router.push("/admin/tracking-performance");
      setAdminDropdown(true);
    } else if (section === "approval") {
      router.push("/approval");
      setAdminDropdown(false);
    } else if (section === "submitteddata") {
      router.push("/submitted-data");
      setAdminDropdown(false);
    } else if (section === "sourcing") {
      router.push("/sourcing");
      setAdminDropdown(false);
    } else if (section === "submission") {
      router.push("/submission");
      setAdminDropdown(false);
    } else if (section === "execution") {
      router.push("/execution");
      setAdminDropdown(false);
    } else if (section === "ordercomplete") {
      router.push("/order-complete");
      setAdminDropdown(false);
    }
  };

  return (
    <nav className="sidebar">
      <h2>QMS App</h2>
      <div>
        <button
          onClick={() => {
            setAdminDropdown(!adminDropdown);
            handleSectionClick("admin");
          }}
          className={activeSection.startsWith("admin") ? "active" : ""}
          aria-current={activeSection.startsWith("admin") ? "page" : undefined}
        >
          Admin Panel
        </button>
        {adminDropdown && (
          <div className="sidebar-submenu">
            <button
              style={{ paddingLeft: 32, fontSize: "1rem" }}
              onClick={() => handleSectionClick("usermanagement")}
              className={activeSection === "usermanagement" ? "active" : ""}
              aria-current={activeSection === "usermanagement" ? "page" : undefined}
            >
              User Management
            </button>
            <button
              style={{ paddingLeft: 32, fontSize: "1rem" }}
              onClick={() => handleSectionClick("trackingperformance")}
              className={activeSection === "trackingperformance" ? "active" : ""}
              aria-current={activeSection === "trackingperformance" ? "page" : undefined}
            >
              Tracking Performance
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => handleSectionClick("assignment")}
        className={activeSection === "assignment" ? "active" : ""}
        aria-current={activeSection === "assignment" ? "page" : undefined}
      >
        Assignment
      </button>
      <button
        onClick={() => handleSectionClick("approval")}
        className={activeSection === "approval" ? "active" : ""}
        aria-current={activeSection === "approval" ? "page" : undefined}
      >
        Approval
      </button>
      <button
        onClick={() => handleSectionClick("submitteddata")}
        className={activeSection === "submitteddata" ? "active" : ""}
        aria-current={activeSection === "submitteddata" ? "page" : undefined}
      >
        Submitted Data
      </button>
      <button
        onClick={() => handleSectionClick("hunting")}
        className={activeSection === "hunting" ? "active" : ""}
        aria-current={activeSection === "hunting" ? "page" : undefined}
      >
        Hunting
      </button>
      <button
        onClick={() => handleSectionClick("sourcing")}
        className={activeSection === "sourcing" ? "active" : ""}
        aria-current={activeSection === "sourcing" ? "page" : undefined}
      >
        Sourcing
      </button>
      <button
        onClick={() => handleSectionClick("submission")}
        className={activeSection === "submission" ? "active" : ""}
        aria-current={activeSection === "submission" ? "page" : undefined}
      >
        Submission
      </button>
      <button
        onClick={() => handleSectionClick("execution")}
        className={activeSection === "execution" ? "active" : ""}
        aria-current={activeSection === "execution" ? "page" : undefined}
      >
        Execution
      </button>
      <button
        onClick={() => handleSectionClick("ordercomplete")}
        className={activeSection === "ordercomplete" ? "active" : ""}
        aria-current={activeSection === "ordercomplete" ? "page" : undefined}
      >
        Order Complete
      </button>
    </nav>
  );
};

export default Sidebar;