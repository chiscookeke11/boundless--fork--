"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	BarChart2,
	Bell,
	Briefcase,
	Cpu,
	Crown,
	Home,
	Moon,
	Settings,
	Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

interface NavItem {
	icon: React.ElementType;
	label: string;
	href: string;
	isActive?: boolean;
}

const navItems: NavItem[] = [
	{ icon: Home, label: "Dashboard", href: "/dashboard", isActive: true },
	{ icon: Briefcase, label: "My Projects", href: "projects/my-projects" },
	{ icon: Bell, label: "Explore", href: "/projects" },
	{ icon: BarChart2, label: "Funded Projects", href: "/projects/funded" },
	{ icon: Cpu, label: "Profile", href: "/profile" },
	{ icon: Crown, label: "My Contributions", href: "/my-contributions" },
	{ icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export function Sidebar({ className, ...props }: SidebarProps) {
	const [theme, setTheme] = React.useState<"light" | "dark">("light");
	const router = useRouter();
	const pathname = usePathname();

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark");
	};

	const handleCreate = () => {
		router.push("/projects/new");
	};
	const showCreatorCard = pathname !== "/projects/new";

	return (
		<aside
			className={cn(
				"flex h-full w-full flex-col bg-background p-4 md:h-screen md:w-[280px]",
				className,
			)}
			{...props}
		>
			<div className="flex h-full flex-col">
				<div className="flex h-12 items-center">
					<Link href="/">
						<Image src="/logo.svg" width={200} height={32} alt="" />
					</Link>
				</div>

				<nav className="mt-8 space-y-2">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className={cn(
								"flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
								item.isActive
									? "bg-accent text-accent-foreground"
									: "text-muted-foreground",
							)}
						>
							<item.icon className="h-4 w-4" />
							{item.label}
						</a>
					))}
				</nav>

				{showCreatorCard && (
					<div className="mt-auto">
						<Card className="bg-primary text-white">
							<CardContent className="p-4">
								<Image
									height={128}
									width={128}
									src="/soroban.png"
									alt=""
									className="mb-4 h-32 w-full object-cover"
								/>
								<h3 className="font-semibold">Become a creator</h3>
								<p className="mt-1 text-sm text-white/80">
									Validate your concept and secure initial funding to kickstart
									your project.
								</p>
							</CardContent>
							<CardFooter className="p-4 pt-0">
								<Button
									onClick={handleCreate}
									className="w-full bg-secondary hover:bg-secondary/30"
									variant="secondary"
								>
									Create now
								</Button>
							</CardFooter>
						</Card>

						<div className="mt-4 flex items-center justify-center gap-2">
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									"h-8 w-8",
									theme === "light" ? "text-primary" : "text-muted-foreground",
								)}
								onClick={toggleTheme}
							>
								<Sun className="h-4 w-4" />
								<span className="sr-only">Light mode</span>
							</Button>
							<Button
								variant="ghost"
								size="icon"
								className={cn(
									"h-8 w-8",
									theme === "dark" ? "text-primary" : "text-muted-foreground",
								)}
								onClick={toggleTheme}
							>
								<Moon className="h-4 w-4" />
								<span className="sr-only">Dark mode</span>
							</Button>
						</div>
					</div>
				)}
			</div>
		</aside>
	);
}
