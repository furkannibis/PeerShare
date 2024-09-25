import { Link, Button } from "@nextui-org/react";

export default function ServerPage() {
    return (
        <div>
            <Button
                href="/"
                as={Link}
                color='primary'
                variant='solid'
            >
                Main Page
            </Button>
        </div>
    );
}