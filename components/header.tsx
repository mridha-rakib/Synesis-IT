import { BellIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const BELL_COUNT = 3 as const;

export default function Header() {
  return (
    <div className='flex justify-between items-center pt-12 pb-6 border-b'>
      <Link href="/">
        <Image src={"/synesis-logo.svg"} alt="logo" height={109} width={330} />
      </Link>
      <div className='flex gap-4 items-center'>
        <BellCounterButton />
        <SignInButton />
        <RegisterButton />
      </div>
    </div>
  );
}

export const SignInButton = () => {
  return <Button>Sign in</Button>;
};

export const RegisterButton = () => {
  return <Button>Register</Button>;
};

export const BellCounterButton = () => {
  return (
    <div className="relative">
      <Button variant="secondary" size="lg" className="gap-4 bg-card text-card-foreground">
        <span>Bell Count</span>
        <BellIcon className="!size-6" />
      </Button>
      <Badge className="absolute right-3 rounded-full -top-2">{BELL_COUNT}</Badge>
    </div>
  );
};