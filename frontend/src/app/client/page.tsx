import { Link, Button } from "@nextui-org/react";

export default function Client() {
    return (
        <Button
            href="/"
            as={Link}
            color="primary"
            variant="solid"
        >
            Main Page
        </Button>
    );
}