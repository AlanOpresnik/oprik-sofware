import { Search, Bell, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="border-b border-border">
      <div className="flex h-16 items-center px-4 gap-4">
        {children}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products"
              className="pl-8 bg-muted/50 border-0"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>HK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

