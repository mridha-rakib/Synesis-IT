import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 pb-48">
      <div className="text-center">
        <h3 className="text-xl font-bold">Follow the latest trends</h3>
        <p className="text-foreground/70">with our daily newsletter</p>
      </div>
      <div className="flex gap-4">
        <Input placeholder="you@gmail.com" />
        <Button>Submit</Button>
      </div>
    </div>
  )
}
