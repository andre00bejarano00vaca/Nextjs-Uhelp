import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function DocentesCard({docente,index}) {
    console.log(docente)
  return (
    <Card className="max-w-[400px] dark">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={`/buscar/${docente.id}`}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{docente.nombre}</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          href={`/buscar/${docente.id}`}
        >
          Comentarios...
        </Link>
      </CardFooter>
    </Card>
  );
}