import Link from "next/link"
import { LayoutDashboard, Box, FormInput, Table, BarChart, ImagesIcon as Icons, Users, AlertCircle, FileText } from 'lucide-react'
import { Dashboard } from "./dashboard"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Basic UI Elements", href: "/ui", icon: Box },
  { name: "Form Elements", href: "/forms", icon: FormInput },
  { name: "Tables", href: "/tables", icon: Table },
  { name: "Charts", href: "/charts", icon: BarChart },
  { name: "Icons", href: "/icons", icon: Icons },
  { name: "User Pages", href: "/users", icon: Users },
]

const more = [
  { name: "Error Pages", href: "/error", icon: AlertCircle },
  { name: "Documentation", href: "/docs", icon: FileText },
]

export function Sidebar() {
  return (
    <div className="w-64  border-r border-border h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Oprik software</h1>
      </div>
      
      <div className="px-3">
        <div className="space-y-1">
          <h2 className="text-xs uppercase text-muted-foreground px-3 py-2">
            Navigation
          </h2>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="mt-8 space-y-1">
          <h2 className="text-xs uppercase text-muted-foreground px-3 py-2">
            More
          </h2>
          {more.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
  
    </div>
  )
}

