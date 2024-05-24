"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SocialsToggler() {
    return (
        <>
          <div className="flex items-center space-x-8">
            <div className="flex">
                <Switch id="linkedin-true" />
                <Label className="pl-2 text-center flex items-center">
                    Post on Linkedin
                </Label>
            </div>
            <div className="flex">
                <Switch id="instagram-true" />
                <Label className="pl-2 text-center flex items-center">
                    Post on Instagram
                </Label>
            </div>
            <div className="flex">
                <Switch id="twitter-true" />
                <Label className="pl-2 text-center flex items-center">
                    Post on X
                </Label>
            </div>
          </div>  
        </>
    )
}