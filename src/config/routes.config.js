import React from "react"
import Login from "@routes/Login"
import Dashboard from "@routes/Dashboard"
import Projects from "@routes/Projects"
import Issues from "@routes/Issues"
import Map from "@routes/Map"
import Plaining from "@routes/Planning"
import Chart from "@routes/Planning/Chart"
import Calendar from "@routes/Planning/Calendar"
import CheckLists from "@routes/CheckLists"
import Checklists from "@routes/CheckLists/Checklists"
import CreateLists from "@routes/CheckLists/Create-Lists"
import Recourses from "@routes/Recourses"
import Team from "@routes/Recourses/Team"
import Employees from "@routes/Recourses/Employees"
import Settings from "@routes/Settings"
import Partner from "@routes/Settings/Partner"
import Email from "@routes/Settings/Email"
import Users from "@routes/Settings/Users"
import Products from "@routes/Settings/Products"
import Appearance from "@routes/Appearance"
import Offer from "@routes/Offer"
import {
  AppearanceIcon,
  ChecklistIcon,
  DashboardIcon,
  IssuesIcon,
  MapIcon,
  PlainingIcon,
  ProjectsIcon,
  RecoursesIcon,
  SettingsIcon
} from "@assets/images/icon/AllSvg"

export const ROUTES_PATH = {
  LOGIN: "/login",
  DASHBOARD: "/",
  PROJECTS: "/projects",
  ISSUES: "/issues",
  MAP: "/map",
  PLAINING: { INDEX: "/plaining", CHART: "/plaining/chart", CALENDAR: "/plaining/calendar" },
  CHECKLISTS: {
    INDEX: "/checklists",
    CHECKLISTS: "/checklists/checklists",
    CREATE: "/checklists/create"
  },
  RECOURSES: { INDEX: "/recourses", TEAM: "/recourses/team", EMPLOYEES: "/recourses/employees" },
  SETTINGS: {
    INDEX: "/settings",
    PARTNER: "/settings/partner",
    EMAIL: "/settings/email",
    USER: "/settings/user",
    PRODUCT: "/settings/product"
  },
  APPEARANCE: "/appearance",
  OFFER: "/offer"
}

export const ROUTER_PATH = [
  {
    path: ROUTES_PATH.LOGIN,
    element: <Login />,
    local: true
  },
  {
    path: ROUTES_PATH.DASHBOARD,
    element: <Dashboard />
  },
  {
    path: ROUTES_PATH.PROJECTS,
    element: <Projects />
  },
  {
    path: ROUTES_PATH.ISSUES,
    element: <Issues />
  },
  {
    path: ROUTES_PATH.MAP,
    element: <Map />
  },
  {
    path: ROUTES_PATH.PLAINING.INDEX,
    element: <Plaining />
  },
  {
    path: ROUTES_PATH.PLAINING.CHART,
    element: <Chart />
  },
  {
    path: ROUTES_PATH.PLAINING.CALENDAR,
    element: <Calendar />
  },
  {
    path: ROUTES_PATH.CHECKLISTS.INDEX,
    element: <CheckLists />
  },
  {
    path: ROUTES_PATH.CHECKLISTS.CHECKLISTS,
    element: <Checklists />
  },
  {
    path: ROUTES_PATH.CHECKLISTS.CREATE,
    element: <CreateLists />
  },
  {
    path: ROUTES_PATH.RECOURSES.INDEX,
    element: <Recourses />
  },
  {
    path: ROUTES_PATH.RECOURSES.TEAM,
    element: <Team />
  },
  {
    path: ROUTES_PATH.RECOURSES.EMPLOYEES,
    element: <Employees />
  },
  {
    path: ROUTES_PATH.SETTINGS.INDEX,
    element: <Settings />
  },
  {
    path: ROUTES_PATH.SETTINGS.PARTNER,
    element: <Partner />
  },
  {
    path: ROUTES_PATH.SETTINGS.EMAIL,
    element: <Email />
  },
  {
    path: ROUTES_PATH.SETTINGS.USER,
    element: <Users />
  },
  {
    path: ROUTES_PATH.SETTINGS.PRODUCT,
    element: <Products />
  },
  {
    path: ROUTES_PATH.APPEARANCE,
    element: <Appearance />
  },
  {
    path: ROUTES_PATH.OFFER,
    element: <Offer />
  }
]

export const nav_links = [
  {
    path: ROUTES_PATH.DASHBOARD,
    name: "dashboard",
    icon: <DashboardIcon />
  },
  {
    path: ROUTES_PATH.PROJECTS,
    name: "projects",
    icon: <ProjectsIcon />
  },
  {
    path: ROUTES_PATH.ISSUES,
    name: "issues",
    icon: <IssuesIcon />
  },
  {
    path: ROUTES_PATH.MAP,
    name: "map",
    icon: <MapIcon />
  },
  {
    path: ROUTES_PATH.PLAINING.INDEX,
    name: "plaining",
    icon: <PlainingIcon />,
    child: [
      {
        path: ROUTES_PATH.PLAINING.CHART,
        name: "Gant Chart"
      },
      {
        path: ROUTES_PATH.PLAINING.CALENDAR,
        name: "Calendar"
      }
    ]
  },
  {
    path: ROUTES_PATH.CHECKLISTS.INDEX,
    name: "Checklists",
    icon: <ChecklistIcon />,
    child: [
      {
        path: ROUTES_PATH.CHECKLISTS.CHECKLISTS,
        name: "Checklists"
      },
      {
        path: ROUTES_PATH.CHECKLISTS.CREATE,
        name: "create Checklists"
      }
    ]
  },
  {
    path: ROUTES_PATH.RECOURSES.INDEX,
    name: "Resources",
    icon: <RecoursesIcon />,
    child: [
      {
        path: ROUTES_PATH.RECOURSES.TEAM,
        name: "team"
      },
      {
        path: ROUTES_PATH.RECOURSES.EMPLOYEES,
        name: "Employees"
      }
    ]
  },
  {
    path: ROUTES_PATH.SETTINGS.INDEX,
    name: "Settings",
    icon: <SettingsIcon />,
    child: [
      {
        path: ROUTES_PATH.SETTINGS.PARTNER,
        name: "Partner Settings"
      },
      {
        path: ROUTES_PATH.SETTINGS.EMAIL,
        name: "Email Settings"
      },
      {
        path: ROUTES_PATH.SETTINGS.USER,
        name: "Users"
      },
      {
        path: ROUTES_PATH.SETTINGS.PRODUCT,
        name: "Product Settings"
      }
    ]
  },
  {
    path: ROUTES_PATH.APPEARANCE,
    name: "Appearance",
    icon: <AppearanceIcon />,
    custom: true
  },
  {
    path: ROUTES_PATH.OFFER,
    name: "offer",
    icon: <PlainingIcon />
  }
]
