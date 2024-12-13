import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Admin dashboard design",
    description: "Broadcast web app mockup",
    time: "15 minutes ago",
    status: "30 tasks, 5 issues",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Wordpress Development",
    description: "Upload new design",
    time: "1 hour ago",
    status: "23 tasks, 5 issues",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Project meeting",
    description: "New project discussion",
    time: "35 minutes ago",
    status: "15 tasks, 2 issues",
    color: "bg-purple-500"
  }
]

export function ProjectList() {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle className="text-white  font-bold">Previsualizacion de tu web</CardTitle>
        <p className="text-white">Link: <a className="text-primary underline" target="_blank"  href={'https://linuu-prueba.vercel.app/'}>https://linuu-prueba.vercel.app/</a></p>
      </CardHeader>
      <CardContent>
        <iframe className="bg-white w-full h-[550px] rounded-xl" src="https://linuu-prueba.vercel.app/"/>
      </CardContent>
    </Card>
  )
}

