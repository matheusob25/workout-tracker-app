import { Home, LucideIcon } from "lucide-react";

export const routes: Record<string, string> = {
    home: "/",
    login: "/login",
    register: "/register",
};

export const menuItems: {title: string; url: string; icon: LucideIcon }[] = [
    {
        title: "Home",
        url: routes.home,
        icon: Home,
    },
];

export const searchMenu = [
    {
        heading: "Navigation",
        items: [
            {
                icon: Home,
                label: "Go to Home",
                onClick: () => (window.location.href = routes.home),
            }
        ]
    }
];