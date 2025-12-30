'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { usePathname, useRouter, useSearchParams } from "next/dist/client/components/navigation";

const SubjectFilter = () => {

    const pathname = usePathname();
        const router = useRouter();
    
        const searchParams = useSearchParams();
        const query = searchParams.get('topic') || '';
    
        const [first , setFirst] = useState('');
    
        // console.log(formUrlQuery.toString());

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(first) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "subject",
                    value: first
                });

                router.push(newUrl, {scroll: false});
                
            } else {
                if(pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ['subject'],
                    });

                    router.push(newUrl, {scroll: false});
                }
            }
        });

        return () => clearTimeout(delayDebounceFn);
    }, [first, router,  pathname]);

    return (
        <div className="flex">
            <Select onValueChange={(value)=> setFirst(value)} value={first}>
                <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                    {/* <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="colorful">Colorful</SelectItem> */}
                    {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject} className="capitalize">{subject}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {first && <button onClick={() => setFirst('')} className="border border-black rounded">clear</button>}
        </div>
    )
}

export default SubjectFilter