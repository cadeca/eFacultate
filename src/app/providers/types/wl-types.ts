export interface SidebarEntry {
  code: string;
  route: string;
  icon: string;
  whitelistedRoles: string[];
  children?: SidebarEntry[];
}

// USER INTERFACES
export interface User {
  firstName?: string;
  lastName?: string;
  username?: string;
  email: string;
  type?: string;
  profilePicture?: any;
}
