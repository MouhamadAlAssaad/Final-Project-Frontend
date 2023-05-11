// Sidebar imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Face3Icon from '@mui/icons-material/Face3';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

// Sidebar Data
export const SidebarData = [
  {
    path: "Dashboard",
    icon: DashboardIcon,
    heading: "Dashboard",
  },
  {
    path: "Admin",
    icon: AdminPanelSettingsIcon,
    heading: "Admin",
  },
  {
    path: "Patient",
    icon: Face3Icon,
    heading: "Patients",
  },
  {
    path: "Treatment",
    icon: VaccinesIcon,
    heading: "Treatments",
  },
  {
    path: "Newborn",
    icon: ChildCareIcon,
    heading: "NewBorns",
  },
  {
    path: "Expenses",
    icon: ShoppingCartCheckoutIcon,
    heading: "Expenses",
  },
  {
    path: "Income",
    icon: AddShoppingCartIcon,
    heading: "Incomes",
  },

  
];