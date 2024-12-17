import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  web: string;
}

export function ProjectList({web} : Props) {
  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle className="text-white  font-bold">Previsualizacion de tu web</CardTitle>
        <p className="text-white">Link: <a className="text-primary underline" target="_blank" href={'https://linuu-prueba.vercel.app/'}>{web}/</a></p>
      </CardHeader>
      <CardContent>
        <iframe className="bg-white w-full h-[550px] rounded-xl" src={`${web}`} />
      </CardContent>
    </Card>
  )
}

