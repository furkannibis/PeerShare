import { Link, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Button
        href="/server"
        as={Link}
        color='primary'
        variant='solid'
      >
        Server
      </Button>
      <Button
        href="/client"
        as={Link}
        color='primary'
        variant='solid'
      >
        Client
      </Button>
    </div>
  );
}
